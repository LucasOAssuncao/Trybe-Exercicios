// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const mensagem = document.getElementById('jokeContainer');
    mensagem.innerText = data.joke
    });
};

window.onload = () => fetchJoke();