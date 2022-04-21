const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);
    
console.log(result);
    //Outro metodo de fazer o mesmo de cima.
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data.value);
//       } catch(error) {
//         console.log(`Algo deu errado :( \n${error}`);
//       }
//     }

}

fetchJoke();