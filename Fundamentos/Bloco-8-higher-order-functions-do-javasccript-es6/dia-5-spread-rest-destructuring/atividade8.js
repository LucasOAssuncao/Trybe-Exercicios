// escreva greet abaixo

const greet = (nome, msg) => {
    msg = msg || 'Hi';
    return `${msg} ${nome}`;

} 

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'