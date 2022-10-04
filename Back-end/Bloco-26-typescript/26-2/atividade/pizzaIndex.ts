import PizzaVegetarian from './PizzaVegetarian';
import PizzaCommon from './PizzaCommon';
import PizzaSugar from './PizzaSugar';

const frango: PizzaCommon = {
  flavor: 'frango',
  slices: 8,
};

console.log(frango);

const calabresa: PizzaCommon = {
  flavor: 'calabresa',
  slices: 8,
};

console.log(calabresa);

const portuguesa: PizzaCommon = {
  flavor: 'portuguesa',
  slices: 8,
};

console.log(portuguesa);

const queijo: PizzaVegetarian = {
  flavor: 'queijo',
  slices: 6,
};

console.log(queijo);

const palmito: PizzaVegetarian = {
  flavor: 'palmito',
  slices: 6,
};

console.log(palmito);

const cogumelo: PizzaVegetarian = {
  flavor: 'cogumelo',
  slices: 6,
};

console.log(cogumelo);

const Nutela: PizzaSugar = {
  flavor: 'Nutela',
  slices: 4,
};

console.log(Nutela);

const GoiabadaComQueijo: PizzaSugar = {
  flavor: 'Goiabada com Queijo',
  slices: 4,
};

console.log(GoiabadaComQueijo);

const Marshmallow: PizzaSugar = {
  flavor: 'Marshmallow',
  slices: 4,
};

console.log(Marshmallow);
