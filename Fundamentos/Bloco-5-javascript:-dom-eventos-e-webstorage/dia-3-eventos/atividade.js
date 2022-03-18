function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function criarDiaCalendario() {
  let getDaysList = document.querySelector("#days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement("li");

    if ((day === 24) | (day === 31)) {
      dayItem.className = "day holiday";
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if ((day === 4) | (day === 11) | (day === 18)) {
      dayItem.className = "day friday";
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = "day holiday friday";
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = "day";
      getDaysList.appendChild(dayItem);
    }
  };
};
criarDiaCalendario();

  function criarBotao (nome){
    let container = document.querySelector('.buttons-container')
    let botao = document.createElement('button');
    botao.innerHTML = nome;
    botao.id = "btn-holiday";
    container.appendChild(botao);
  }
criarBotao('Feriados');

function mudarCorFeriado() {
  let botao = document.querySelector('#btn-holiday');
  let feriado = document.querySelectorAll('.holiday');
  let cor = 'rgb(238,238,238)';
  let novaCor = 'white';
  
  botao.addEventListener('click', function(){
    for (let index = 0; index < feriado.length; index += 1) {
      if(feriado[index].style.backgroundColor === novaCor) {
        feriado[index].style.backgroundColor = cor;
      } else {
        feriado[index].style.backgroundColor = novaCor;
      }
    }
  })
};
mudarCorFeriado();

function criarSexta(sextou) {
  let btn = document.createElement('button');
  let btnContainer = document.querySelector('.buttons-container');
  btn.innerText = sextou;

  btn.id = 'btn-friday';
  btnContainer.appendChild(btn);
}
criarSexta("sexta-feira");

function clickSexta() {
  let getBtnSexta = document.getElementById('btn-friday');
  getBtnSexta.addEventListener('click', mudarTextoSexta);
}

clickSexta();

function mudarTextoSexta(){
  let getFriday = document.querySelectorAll('.friday');
  let sextas = ['4', '11', '18', '25'];

  for (let index = 0; index < getFriday.length; index += 1){
    if(getFriday[index].innerText === 'juninho'){
      getFriday[index].innerText = sextas[index];
    } else {
      getFriday[index].innerText = 'juninho'; 
    }
  }
}

function zoomDia(){
  let dia = document.getElementById('days');

  dia.addEventListener('mouseover', function(event){  
    event.target.style.fontSize = '30px';
  });
}
zoomDia();

function zoomOutDia(){
  let dia = document.getElementById('days');

  dia.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '';
  })
}
zoomOutDia();

function addTarefa(string) {
  let addSpan = document.createElement('span');
  let getDiv = document.querySelector('.my-tasks');
  addSpan.innerText = string + '\n';
  getDiv.appendChild(addSpan);
  }
  
  addTarefa('Cozinhar'); 

  function addLegenda(string) {
    let newDiv = document.createElement('div');
    newDiv.className = 'task';
    newDiv.style.backgroundColor = string;

    document.querySelector('.my-tasks').appendChild(newDiv);
  }
  addLegenda('red');

  function selectTask() {
    let taskSelected = document.getElementsByClassName('task selected');
    let task = document.querySelector('.task');
    
    task.addEventListener('click', function (event) {
    if (taskSelected.length === 0) {
    event.target.classList = 'task selected';
    } else {
    event.target.classList = 'task';
    }
    })
    }
    
    selectTask(); 

    function corDaLegendaNoDia() {
      let days = document.getElementById("days");
      let taskSelected = document.getElementsByClassName('task selected');
      let taskColor = document.querySelector('.task').style.backgroundColor;
      let initialColor = "rgb(119,119,119)";
      
      days.addEventListener("click", function (event) {
      if (taskSelected.length > 0 && event.target.style.color !== taskColor) {
      event.target.style.color = taskColor;
      } else {
      event.target.style.color = initialColor;
      }
      });
      }
      
      corDaLegendaNoDia(); 