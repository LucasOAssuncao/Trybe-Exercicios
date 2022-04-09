const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const achar1947 = () =>
  books.find((book) => book.author.birthYear === 1947).author.name;

const acharMenorNome = () => {
  let nomeMenor = books[0].name;
  books.forEach((book) => {
    if (book.name.length < nomeMenor.length) {
      nomeMenor = book.name;
    }
  });
  return nomeMenor;
};

const acharNome26 = books.find((books) =>
  books.name.length === 26);


const livroEmOrdem = () => {
    return books.sort((a, b) => b.releaseYear - a.releaseYear);
  }

  const nascimento = () => books.every((Element) => Element.author.birthYear >= 1901 || Element.author.birthYear <= 2000);
 
  const anos80 = () => books.some((Element) => Element.releaseYear >= 1980 || Element.author.birthYear < 1990);
