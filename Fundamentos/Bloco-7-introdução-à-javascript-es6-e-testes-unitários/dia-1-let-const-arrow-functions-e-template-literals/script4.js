const palavra = texto => {
    let frase = texto.split(' ');
    let comprimento = 0;
    let palavraMaior = '';

    for (let palavra of frase) {
        if (palavra.length > comprimento) {
            comprimento = palavra.length;
            palavraMaior = palavra;
        }
    }

    return palavraMaior;
}

console.log(palavra("um dois três quatro cinco seis sete oito nove dez"));