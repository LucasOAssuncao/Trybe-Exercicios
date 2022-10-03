const express = require('express');
const BooksController = require('../src/controllers/BooksController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/books', BooksController.getAll);

app.post('/books', BooksController.create);

app.get('/books/:id', BooksController.getById);

app.put('/books/:id', BooksController.update);

app.delete('/books/:id', BooksController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));