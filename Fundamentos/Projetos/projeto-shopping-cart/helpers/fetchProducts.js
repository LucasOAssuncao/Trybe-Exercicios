const fetchProducts = async (item) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

  try {
    const resultado = await fetch(url);
    const data = await resultado.json();
    return data;
  } catch (error) {
    console.log('You must provide an url', error);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
