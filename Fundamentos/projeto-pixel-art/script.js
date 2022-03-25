let quadroDePixels = document.getElementById('pixel-board');


let preto = document.getElementsByClassName('black')[0];
let azul = document.getElementsByClassName('blue')[0];
let amarelo = document.getElementsByClassName('yellow')[0];
let verde = document.getElementsByClassName('green')[0];
let paleta = document.getElementsByClassName('color');

function selecionaCor() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      preto.classList.remove('selected');
      azul.classList.remove('selected');
      verde.classList.remove('selected');
      amarelo.classList.remove('selected');

      event.target.classList.add('selected');
    }
  });
}
selecionaCor();

function pintarPixel() {
  document.addEventListener('click', function (event) {
    if (
      event.target.classList.contains('pixel') &&
      preto.classList.contains('selected')
    ) {
      event.target.style.backgroundColor = 'black';
    } else if (
      event.target.classList.contains('pixel') &&
      azul.classList.contains('selected')
    ) {
      event.target.style.backgroundColor = azul.style.backgroundColor;
    } else if (
      event.target.classList.contains('pixel') &&
      verde.classList.contains('selected')
    ) {
      event.target.style.backgroundColor = verde.style.backgroundColor;
    } else if (
      event.target.classList.contains('pixel') &&
      amarelo.classList.contains('selected')
    ) {
      event.target.style.backgroundColor = amarelo.style.backgroundColor;
    }
  });
}
pintarPixel();

let btn = document.getElementById('clear-board');

function limpar() {
  let pixeis = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixeis.length; i += 1) {
    pixeis[i].style.backgroundColor = 'white';
  }
}

btn.addEventListener('click', limpar);


function pegaInput() {
  let valorInput = document.getElementById('board-size').value;

  if (!valorInput) {
    alert('Board inválido!');
  } else if(valorInput < 5){
    valorInput = 5;
  } else if(valorInput > 50){
    valorInput = 50;
  }

  criarQuadro(valorInput);
}

let btn2 = document.getElementById('generate-board');

function criarQuadro(number) {
  quadroDePixels.innerHTML = '';

  for (let index1 = 0; index1 < number; index1 += 1) {
    let pixelsLinha = document.createElement('div');
    pixelsLinha.classList = 'lista';
    quadroDePixels.appendChild(pixelsLinha);
  }

  let linhas = document.getElementsByClassName('lista');

  for (let index2 = 0; index2 < linhas.length; index2 += 1) {
    for (let index3 = 0; index3 < number; index3 += 1) {
      if (number > 0) {
        let pixel = document.createElement('div');
        pixel.classList = 'pixel';
        linhas[index2].appendChild(pixel);
      }
    }
  }
}

function gerarCores(a) {
const r = Math.floor(Math.random()* 256);
const g = Math.floor(Math.random()* 256);
const b = Math.floor(Math.random()* 256);

corAleatoria = `rgb(${r}, ${g}, ${b}`;

paleta[a].style.backgroundColor = corAleatoria;

}

btn2.addEventListener('click', pegaInput);

window.onload = function () {
  let corInicial = document.getElementsByClassName('black')[0];
  gerarCores(1);gerarCores(2);gerarCores(3);
  corInicial.classList = 'color black selected';
  criarQuadro(5);
};
