const express = require('express');
const nameValidation = require('./middlewares/nameValidation');
const auth = require('./middlewares/auth');
const priceValidation = require('./middlewares/priceValidation');
const descriptionValidation = require('./middlewares/descriptionValidation');
const dateValidation = require('./middlewares/dateValidation');
const ratingValidation = require('./middlewares/ratingValidation');
const difficultyValidation = require('./middlewares/difficultyValidation');
const generateToken = require('./utils/generateToken');

const app = express();

app.use(express.json());

app.post(
  '/activities',
  auth,
  nameValidation,
  priceValidation,
  descriptionValidation,
  dateValidation,
  ratingValidation,
  difficultyValidation,
  (_req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  }
);

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;
