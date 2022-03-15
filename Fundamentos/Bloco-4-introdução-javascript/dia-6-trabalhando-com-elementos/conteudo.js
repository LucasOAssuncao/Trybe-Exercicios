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


// Crie um filho para primeiroFilhoDoFilho .

let filhoDois = document.createElement('section');
filhoDois.innerText = 'lol';
document.querySelector("#primeiroFilhoDoFilho").appendChild(filhoDois);

// A partir desse filho criado, acesse terceiroFilho .

let terceiroFilho = filhoDois.parentElement.parentElement.nextElementSibling



let paiDoPai = document.querySelector("#pai");

for (let i = 0; i < paiDoPai.childNodes.length -1; i += 1){
  let filhos = paiDoPai.childNodes[i];

  if(filhos.id !== 'elementoOndeVoceEsta') {
    filhos.remove();
  }
}

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();

console.log(paiDoPai.childNodes)