let botaoCriarTarefa = document.getElementById('criar-tarefa');
let inputDeTarefa = document.getElementById('texto-tarefa');
let lista = document.getElementById('lista-tarefas');

function adicionarTarefa() {
  botaoCriarTarefa.addEventListener('click', function () {
    let tarefa = document.createElement('li');
    tarefa.innerHTML = inputDeTarefa.value;
    tarefa.classList = 'lista';
    lista.appendChild(tarefa);
    inputDeTarefa.value = '';
  });
}
adicionarTarefa();

let tarefaLista = document.getElementsByClassName('lista');

function mudarCorTarefa() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('lista')) {
      for (let i = 0; i < tarefaLista.length; i += 1) {
        tarefaLista[i].classList.remove('corLista');
        event.target.classList.add('corLista');
      }
    }
  });
}
mudarCorTarefa();

function riscarTarefa() {
  document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('lista')) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  });
}
riscarTarefa();

function apagaTarefas() {
  let botaoApagaTarefa = document.getElementById('apaga-tudo');

  botaoApagaTarefa.addEventListener('click', function () {
    lista.innerHTML = '';
  });
}
apagaTarefas();

function apagaTarefaCompleta() {
  let botaoApagaTarefaCompleta = document.getElementById('remover-finalizados');

  botaoApagaTarefaCompleta.addEventListener('click', function () {
    for (let i = lista.children.length - 1; i >= 0; i -= 1) {
      if (lista.children[i].classList.contains('completed')) {
        lista.children[i].remove();
      }
    }
  });
}
apagaTarefaCompleta();

function salvarTarefas() {
  let botaoSalvarTarefas = document.getElementById('salvar-tarefas');

  botaoSalvarTarefas.addEventListener('click', function () {
    localStorage.setItem('lista', lista.innerHTML);
  });
}
salvarTarefas();

function mudarCima() {
  let botaoMoverCima = document.getElementById('mover-cima');
  botaoMoverCima.addEventListener('click', function () {
    let selecionado = document.querySelector('.corLista');
    if (selecionado && selecionado !== lista.firstChild) {
      lista.insertBefore(selecionado, selecionado.previousSibling);
    }
  });
}
mudarCima();

function mudarBaixo() {
  let botaoMoverBaixo = document.getElementById('mover-baixo');
  botaoMoverBaixo.addEventListener('click', function () {
    let selecionado = document.querySelector('.corLista');
    if (selecionado && selecionado !== lista.lastChild) {
      lista.insertBefore(selecionado, selecionado.nextSibling.nextSibling);
    }
  });
}
mudarBaixo();

function apagaTarefaSelecionada() {
  let botaoApagaTarefaSelecionada = document.getElementById(
    'remover-selecionado'
  );

  botaoApagaTarefaSelecionada.addEventListener('click', function () {
    for (let i = lista.children.length - 1; i >= 0; i -= 1) {
      if (lista.children[i].classList.contains('corLista')) {
        lista.children[i].remove();
      }
    }
  });
}
apagaTarefaSelecionada();

window.onload = function () {
  lista.innerHTML = localStorage.getItem('lista');
};
