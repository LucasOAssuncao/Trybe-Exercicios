document.querySelector("#elementoOndeVoceEsta").parentNode.style.color = 'blue';

document.querySelector("#primeiroFilhoDoFilho").textContent = 'um dois tres';

document.querySelector("#pai").firstChild;

document.querySelector("#elementoOndeVoceEsta").previousElementSiblinge;

document.querySelector("#elementoOndeVoceEsta").nextSibling

document.querySelector("#elementoOndeVoceEsta").nextElementSibling

document.querySelector("#pai").firstElementChild.nextElementSibling.nextElementSibling

//Crie um irmão para elementoOndeVoceEsta .
let irmao = document.createElement('section');
irmao.innerText = 'abcd';
document.querySelector("#pai").appendChild(irmao)


// Crie um filho para elementoOndeVoceEsta .

let filho = document.createElement('section');
filho.innerText = 'lul';
document.querySelector("#elementoOndeVoceEsta").appendChild(filho);
console.log(document.querySelector("#elementoOndeVoceEsta").children)

// Crie um filho para primeiroFilhoDoFilho .

let filhoDois = document.createElement('section');
filhoDois.innerText = 'lol';
document.querySelector("#primeiroFilhoDoFilho").appendChild(filhoDois);
console.log(document.querySelector("#primeiroFilhoDoFilho").children)

// A partir desse filho criado, acesse terceiroFilho .

let terceiroFilho = filhoDois.parentElement.parentElement.nextElementSibling

console.log(terceiroFilho);