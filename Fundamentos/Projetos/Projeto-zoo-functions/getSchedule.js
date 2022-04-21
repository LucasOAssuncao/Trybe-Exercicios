const data = require('../data/zoo_data');

const diasSemana = Object.keys(data.hours);
const animais = data.species.map((animal) => animal.name);

const diasNosAnimais = (dia) =>
  data.species
    .filter((animal) => animal.availability.includes(dia))
    .map((objetoAnimal) => objetoAnimal.name);

const semParametro = () => {
  const objetoCriado = {};
  diasSemana.forEach((dia) => {
    if (dia !== 'Monday') {
      objetoCriado[dia] = {
        officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
        exhibition: diasNosAnimais(dia),
      };
    } else {
      objetoCriado[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return objetoCriado;
};

const comParametro = (dia) => {
  const objetoCriado = {};
  if (dia !== 'Monday') {
    objetoCriado[dia] = {
      officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: diasNosAnimais(dia),
    };
  } else {
    objetoCriado[dia] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return objetoCriado;
};

const animalAvailability = (animal) =>
  data.species.find((objetoAnimal) => objetoAnimal.name === animal)
    .availability;

function getSchedule(scheduleTarget) {
  if (animais.includes(scheduleTarget)) return animalAvailability(scheduleTarget);
  if (diasSemana.includes(scheduleTarget)) return comParametro(scheduleTarget);

  return semParametro();
}

module.exports = getSchedule;
