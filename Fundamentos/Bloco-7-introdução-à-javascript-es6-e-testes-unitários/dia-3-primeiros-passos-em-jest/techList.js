const lista = (tecnologia, name) => {
  if (tecnologia.length === 0) return "Vazio!";

  const arrayOrdenado = tecnologia.sort();
  const listaTecnologia = [];

  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    listaTecnologia.push({
      tech: arrayOrdenado[index],
      name,
    });
  }

  return listaTecnologia;
};

module.exports = lista;
