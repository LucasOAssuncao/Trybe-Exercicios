// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   };
//   return employees;
// };

// const nomeEmail = (nome) => {
//   return {
//     nomeCompleto: nome,
//     email: `${nome.replace(' ', '_').toLowerCase()}trybe.com `,
//   };
// };

// console.log(newEmployees(nomeEmail));

// const aposta = (number) => number;

// const checkNumber = (aposta) => {
//   const sorteio = Math.floor(Math.random() * 5 + 1);

//   if (aposta === sorteio) {
//     return 'Parabéns você ganhou';
//   } else {
//     return 'Tente novamente';
//   }
// };

// console.log(checkNumber(aposta(4)));

// const arrayRc = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const arrayRe = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const compara = (arrayRc, arrayRe) => {
//   if (arrayRc === arrayRe) {
//     return 1;
//   }
//   if (arrayRe === 'N.A') {
//     return 0;
//   } else {
//     return -0.5;
//   }
// };

// const contador = (arrayRc, arrayRe, callback) => {
//   let total = 0;
//   for (let i = 0; i < arrayRc.length; i += 1) {
//     const call = callback(arrayRc[i], arrayRe[i]);
//     total += call;
//   }
//   return `total de pontos ${total}`;
// }

// console.log(contador(arrayRc, arrayRe, compara));

