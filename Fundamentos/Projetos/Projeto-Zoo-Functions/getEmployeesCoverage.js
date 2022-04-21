const data = require('../data/zoo_data');

const acharPessoa = (id) => {
  const personId = data.employees.find(
    (nome) =>
      nome.id === id.id
      || nome.firstName === id.name
      || nome.lastName === id.name,
  );
  const fullId = `${personId.id}`;
  return fullId;
};

const acharPessoaNome = (id) => {
  const name = data.employees.find(
    (nomes) =>
      nomes.id === id.id
      || nomes.firstName === id.name
      || nomes.lastName === id.name,
  );
  const fullName = `${name.firstName} ${name.lastName}`;
  return fullName;
};

const acharPessoaEspecie = (id) => {
  const funcionario = data.employees.find(
    (names) =>
      names.id === id.id
      || names.firstName === id.name
      || names.lastName === id.name,
  );
  const animal = data.species.filter((bixo) =>
    funcionario.responsibleFor.some((ids) => bixo.id === ids));
  const arrayAnimal = animal.map((animalArray) => animalArray.name);
  return arrayAnimal;
};
const acharPessoaEspecieLocal = (id) => {
  const funcionario = data.employees.find(
    (names2) =>
      names2.id === id.id
      || names2.firstName === id.name
      || names2.lastName === id.name,
  );
  const animal = data.species.filter((bixo) =>
    funcionario.responsibleFor.some((id2) => bixo.id === id2));
  const arrayLocal = animal.map((animalArray) => animalArray.location);
  return arrayLocal;
};
const objeto = (id) => {
  const objetoCriado = {
    id: acharPessoa(id),
    fullName: acharPessoaNome(id),
    species: acharPessoaEspecie(id),
    locations: acharPessoaEspecieLocal(id),
  };
  return objetoCriado;
};
const allObjeto = () => {
  const objt = data.employees.map((objetos) => objeto(objetos));
  return objt;
};

const verificaId = (objto) => data.employees.some(
  (pessoa) =>
    pessoa.id === objto.id
      || pessoa.firstName === objto.name
      || pessoa.lastName === objto.name,
);

function getEmployeesCoverage(objto) {
  if (!objto) return allObjeto();
  if (verificaId(objto) === false) {
    throw new Error('Informações inválidas');
  }
  return objeto(objto);
}

module.exports = getEmployeesCoverage;
