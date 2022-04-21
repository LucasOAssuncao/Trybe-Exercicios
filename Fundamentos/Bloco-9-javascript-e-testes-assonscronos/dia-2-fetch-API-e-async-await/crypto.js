const coins = async () => {
  const API_URL = `https://api.coincap.io/v2/assets`;

  const juninho = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data);

  return juninho;
};

const mostraMoeda = async () => {
  const moedas = await coins();

  const lista = document.getElementById('moedas');

  moedas
    .filter((trocado) => Number(trocado.rank) <= 10)
    .forEach((moeda) => {
      const novaLi = document.createElement('li');
      const usd = Number(moeda.priceUsd);

      novaLi.innerText = `${moeda.name} (${moeda.symbol}): ${usd.toFixed(2)}`;

      lista.appendChild(novaLi);
    });
};

mostraMoeda();
