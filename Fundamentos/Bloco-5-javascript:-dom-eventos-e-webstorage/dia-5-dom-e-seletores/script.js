document.querySelector("#header-container").style.backgroundColor = "green";

let a = document.querySelectorAll(".emergency-tasks div");
for (let i = 0; i < a.length; i++){
a[i].style.backgroundColor = 'green';
}

let c = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < a.length; i++){
c[i].style.backgroundColor = 'blue';
}

let b = document.querySelectorAll(".no-emergency-tasks div");
for (let i = 0; i < a.length; i++){
b[i].style.backgroundColor = 'yellow';
}

let d = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < a.length; i++){
d[i].style.backgroundColor = 'black';
}

document.querySelector('#footer-container').style.backgroundColor = "black"

