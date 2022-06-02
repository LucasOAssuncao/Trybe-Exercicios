const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  
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
    fetchItem,
  };
}
