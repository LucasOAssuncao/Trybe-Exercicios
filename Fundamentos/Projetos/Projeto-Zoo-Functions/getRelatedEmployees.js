const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const gerente = employees.find((funcionario) => funcionario.id === id);
  if (gerente.managers.length <= 1) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees
      .filter((funcionario) => funcionario.managers.includes(managerId))
      .map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
