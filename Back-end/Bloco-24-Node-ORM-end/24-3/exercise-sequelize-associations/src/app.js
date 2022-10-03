const express = require('express');

const {
    getAllPatientsPlans,
    getAllPatientsSurgeries,
  } = require('./controllers/patientsController');
  const { getAllPlans } = require('./controllers/plansController');

const app = express();
app.use(express.json());

app.get('/all', getAllPatientsPlans);

app.get('/surgeries', getAllPatientsSurgeries);

app.get('/:id', getAllPlans);
module.exports = app;