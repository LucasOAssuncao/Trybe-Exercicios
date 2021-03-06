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

const ex2 = () =>
  books.reduce((acc, book, i, array) => {
    if(i === array.length - 1){
      acc += book.author.name;
      return `${acc}. `;
    }
    acc += book.author.name;
    return `${acc}, `;
  }, '');

  console.log(ex2());

const ex3 = () => {
  const soma = books.reduce((acc, book) => {
   return acc + (book.releaseYear - book.author.birthYear);
  }, 0);
  return soma / books.length;
};
// console.log(ex3());

const ex4 = () => books.reduce((acc, book) => {
if(acc.name.length < book.name.length){
    return book.name.length
}
    return acc
})
console.log(ex4());