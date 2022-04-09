/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  let soma = 0;
  let arraylength = array.length;

  if (!arraylength) {
    return undefined;
  }

  for (let i = 0; i < arraylength; i += 1) {
    if (typeof array[i] === 'string') {
      return undefined;
    }
    soma += array[i];
  }
  return Math.round(soma / arraylength);
};
console.log(average([]));

module.exports = average;