const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const adicionaTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
};
adicionaTurno(lesson2, "turno", "Noite");
console.log(lesson2);

const keys = (objeto) => Object.keys(objeto);
console.log(keys(lesson2));

const tamanho = (objeto) => Object.keys(objeto).length;
console.log(tamanho(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const numeroDeEstudantes = (objeto) => {
    let total = 0;
    const chaves = Object.keys(objeto);
    for (index in chaves) {
        total += objeto[chaves[index]].numeroEstudantes;
    }
    return total;
};
console.log(numeroDeEstudantes(allLessons));

const mostraValor = (objeto, indice) => Object.values(objeto)[indice];
console.log(mostraValor(lesson1, 1));

const verifica = (objeto, chave, valor) => {
    const pares = Object.entries(objeto);
    let igual = false;
    for (let index in pares) {
        if (pares[index][0] === chave && pares[index][1] === valor){
            igual = true;
        }
    }
    return igual;
}
console.log(verifica(lesson1, 'materia', 'Matemática'));
