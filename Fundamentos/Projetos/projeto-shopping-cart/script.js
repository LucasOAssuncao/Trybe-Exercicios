const cartItemList = document.querySelector('.cart__items');
const stringTotal = document.querySelector('.total-price');
const buttonCleanALL = document.querySelector('.empty-cart');
const sectionOfItem = document.querySelector('.items');
stringTotal.innerText = 0;

const sum = () => {
  let total = 0;
  const allProducts = document.querySelectorAll('.cart__item');
  allProducts.forEach((produto) => {
    total += parseFloat(produto.innerHTML.split('$')[1]);
    stringTotal.innerHTML = total;
  });
};

const sub = (event) => {
  let number = Number(stringTotal.innerText);
  number -= parseFloat(event.path[0].innerHTML.split('$')[1]);
  stringTotal.innerHTML = number;
  sum();
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function cartItemClickListener(event) {
  event.target.remove();
  sub(event);
  saveCartItems(cartItemList.innerHTML);
}

cartItemList.addEventListener('click', cartItemClickListener);

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const pushToCart = async (id) => {
  const callback = await fetchItem(id);
  const { id: sku, title: name, price: salePrice } = callback;
  const entireList = createCartItemElement({ sku, name, salePrice });
  cartItemList.appendChild(entireList);
  saveCartItems(cartItemList.innerHTML);
};

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const sectionItem = document.querySelector('.items');
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement(
    'button',
    'item__add',
    'Adicionar ao carrinho!',
  );
  button.addEventListener('click', async () => {
    await pushToCart(sku);
    sum();
  });
  section.appendChild(button);
  sectionItem.appendChild(section);
  return section;
}

const loadScreen = () => {
  const string = document.createElement('p');
  string.className = 'loading';
  string.innerText = 'carregando...';
  sectionOfItem.appendChild(string);
};

const unDoLoad = () => {
  const stringLoad = document.querySelector('.loading');
  sectionOfItem.removeChild(stringLoad);
};

const createList = async (products) => {
  loadScreen();
  await fetchProducts(products).then((valor) =>
    valor.results.forEach((item) => createProductItemElement(item)));
  unDoLoad();
};

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

const getItens = () => {
  cartItemList.innerHTML = getSavedCartItems();
};

const clearAll = () => {
  cartItemList.innerHTML = '';
};

buttonCleanALL.addEventListener('click', clearAll);

window.onload = () => {
  createList('computador');
  getItens();
  sum();
};
