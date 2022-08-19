const readline = require('readline-sync');



const IMC = async (peso, altura) => {
  const result = (peso / (altura / 100) ** 2).toFixed(2);
  if (result < 18.5) console.log('magrelo');

  if (result >= 18.5 && result < 25) console.log('normal');

  if (result >= 25 && result < 30) console.log('gordim');

  if (result >= 30 && result < 35) console.log('obeso');

  if (result >= 35 && result < 40) console.log('obesidiade morbida');

  console.log('c ta morrendo irmao');
};

const main = () => {
  const peso = readline.questionFloat('qual seu peso?');
  const altura = readline.questionInt('qual sua altura?');
  IMC(peso, altura);
};

main();
