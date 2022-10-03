import readline from "readline-sync";
const unidades = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

export function convert(valor: number, unidade: string, conversao: string): number {
    const fromIndex = unidades.indexOf(conversao);
    const toIndex = unidades.indexOf(conversao);
    const exponent = (toIndex - fromIndex);

    return valor * Math.pow(10, exponent);
}

function exec() {
    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  
    const fromUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a unidade base:");
  
    const toUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a conversão:");
  
  
    const fromUnitChoice = units[fromUnitChoiceIndex];
    const toUnitChoice = units[toUnitChoiceIndex];
  
    const result = convert(value, fromUnitChoice, toUnitChoice)
  
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
  
    console.log(message);
  }
  
  exec();