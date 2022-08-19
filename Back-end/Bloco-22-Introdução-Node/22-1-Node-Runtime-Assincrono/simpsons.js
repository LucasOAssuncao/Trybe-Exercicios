const fs = require('fs').promises;

const func = async () => {
  const fetch = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(fetch);
  const result = data.map(({id, name}) => `${id} - ${name}`);
  result.forEach((e) => console.log(e));
}

const main = async () => {
  await func();
}

main();