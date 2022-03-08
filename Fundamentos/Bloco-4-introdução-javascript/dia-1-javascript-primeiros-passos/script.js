// PROGRAMA 1

// const a = 10;
// const b = 3;

// const soma = (a + b);
// console.log(soma);

// const subtracao = (a - b);
// console.log(subtracao);

// const multiplicacao = (a * b);
// console.log(multiplicacao);

// const divisao = (a / b);
// console.log(divisao);

// const modulo = (a % b);
// console.log(modulo);

//PROGRAMA 2

// const a = 20;
// const b = 10;

// if (a > b){
//     console.log(a)
// } else{
//     console.log(b)
// }

//PROGRAMA 3

// const a = 70;
// const b = 50;
// const c = 40;

// if (a > b && a > c){
//     console.log(a)
// } else if (b > a && b > c){
//     console.log(b)
// } else{
//     console.log(c)
// }

//PROGRAMA 4

// const a = 0;

// if (a > 0){
//     console.log("positive")
// } else if (a < 0){
//     console.log("negative")
// } else{
//     console.log("Zero")
// }

//PROGRAMA 5

// const a = 60;
// const b = 60;
// const c = 60;
// const somaDosAngulos = a + b + c;
// switch(somaDosAngulos){
//     case 180:
//         console.log(true);
//         break;
    
//     default:
//         console.log(false);
//         break;
// }

//PROGRAMA 6

// let peca = "bispo";

// switch (peca.toLowerCase()) {
//     case 'bispo': console.log('diagonal');
//     break;

// default:
//     console.log('Erro');
//     break;
// } 

//PROGRAMA 7

// let nota = 100;

// if (nota >= 90 && nota <= 100){
//     console.log("A");
// } else if (nota >= 80 && nota <= 90){
//     console.log('B');
// } else if (nota >= 70 && nota <=80){
//     console.log('C');
// } else if (nota >= 60 && nota <=70){
//     console.log('D');
// } else if (nota >= 50 && nota <=60){
//     console.log('E');
// } else if (nota < 50 && nota >= 0){
//     console.log('F');
// } else if (nota < 0 || nota > 100){
//     console.log('Erro');
// }

//PROGRAMA 8

// const a = 7;
// const b = 4;
// const c = 1;

// let d = false;

// if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//     d = true;
//     console.log(d)
// } else{
//     console.log(d);
// }

//PROGRAMA 9

// const a = 1;
// const b = 3;
// const c = 5;

// let d = false;

// if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
//     d = true;
//     console.log(d)
// } else{
//     console.log(d);
// }

//PROGRAMA 10

// const custo = 10;
// const valorVenda = 20;

// if (custo >= 0 && valorVenda >= 0){
//     const custoTotal = custo * 1.2;
//     const lucro = (valorVenda - custoTotal) * 1000;
//     console.log(lucro);
// } else {
//     console.log("os valores nao podem ser menor que 0")
// }

//PROGRAMA 11

let aliquotaINSS;
let aliquotaIR;

let salario = 3000.00;

if(salario <= 1556.94) {
    aliquotaINSS = salario * 0.08;
} else if( salario <= 2594.92) {
    aliquotaINSS = salario * 0.09;
} else if(salario <= 5189.82) {
    aliquotaINSS = salario * 0.11;
} else {
    aliquotaINSS = 570.88;
}

let salarioBase = salario - aliquotaINSS;

if(salarioBase <= 1903.98){
    aliquotaIR = 0;
} else if(salarioBase <= 2825.65){
    aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if(salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if(salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
};

console.log(salarioBase - aliquotaIR);