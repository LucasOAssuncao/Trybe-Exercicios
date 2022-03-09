// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.
// let soma = 0;
// for (let index = 50; index <= 100; index += 1) {
//   // console.log(index);
//   soma += index;
// }
// console.log("A soma de 50 a 100 é:" + soma);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.
// let contador = 0;
// for (let index1 = 1; index1 <= 125; index1 += 1) {
//   if (index1 % 3 === 0) {
//     console.log(index1);
//     contador += 1;
//   }
// }
// if (contador === 50) {
//   console.log("Quantidade = 50");
// }

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
// let jogador1 = "papel";
// let jogador2 = "pedra";
// let resultado;
// if (jogador1 === "pedra" && jogador2 === "tesoura") {
//   resultado = "Jogador 1 vence";
// } else if (jogador1 === "papel" && jogador2 === "pedra") {
//   resultado = "Jogador 1 vence";
// } else if (jogador1 === "tesoura" && jogador2 === "papel") {
//   resultado = "Jogador 1 vence";
// } else if (jogador1 === jogador2) {
//   resultado = "Empate";
// } else {
//   resultado = "Jogador 2 vence";
// }
// console.log(resultado);

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
// let idade = 13;
// if (idade >= 18) {
//   console.log("A Pessoa é maior de idade");
// } else {
//   console.log("A pessoa é menor de idade");
// }

// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.
let Marcella = 22
let Carlos = 54
let Camila = 32
if (Marcella < Carlos && Marcella < Camila) {
  console.log("Marcella é a mais nova")
}
else if (Carlos < Camila && Carlos < Marcella) {
  console.log("Carlos é o mais novo")
}
else {console.log("Camila é a mais nova")}

