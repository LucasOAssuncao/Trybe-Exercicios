const fs = require('fs').promises;

const getSimpsonById = async (id) => {
    const result = await fs.readFile('./simpsons.json', 'utf-8');

    const persons = JSON.parse(result);

    const choose = persons.find((e) => parseInt(e.id) === id);

    if (!choose) {
        throw new Error('id não encontrado');
      }
    return choose;
}

const main = async () => {
    const simpson = await getSimpsonById(3);
    console.log(simpson);
  }

main();