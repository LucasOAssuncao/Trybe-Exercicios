const random = () => parseInt(Math.random() * 100) + 1;

const functionOne = (string) => string.toUpperCase();
const functionTwo = (string) =>  string.charAt(0);
const functionThree = (string1, string2) => string1.concat(string2);

function fetch() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = {
  random,
  functionOne,
  functionTwo,
  functionThree,
  fetch,
};
