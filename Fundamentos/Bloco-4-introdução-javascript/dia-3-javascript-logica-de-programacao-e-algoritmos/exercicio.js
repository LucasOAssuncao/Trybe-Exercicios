// let numero = 5
// let soma = 0
// for (i = numero; i > 0; i -= 1 ) {
//     soma += numero * (i - 1)
// }
// console.log(soma)

// let numero = 5
// let soma = 0
// for (i = numero; i > 0; i -= 1) {
//   if (numero == i) {
//     soma += numero * (i - 1)
//   } else {
//     i -= 1
//   }
// }
// console.log(soma)

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }

// console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// for (let i = word.length; i > 0; i -= 1){
// }

// let palavra = 'tryber';
// let palavraAoContrario = '';

let palavra = 'tryber'
let novaPalavra = ''
for (i = palavra.length -1; i >= 0 ; i -= 1) {
novaPalavra += palavra[i]
}
console.log(novaPalavra) 