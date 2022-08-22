const express = require('express');

const app = express();

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
  ];

  // app.get('/myActivities/:id', (req, res) => {
  //   const teste = activities.find(({ id }) => id === Number(req.params.id));
  //   res.status(200).json(teste);
  // });

  // app.get('/myActivities', (req, res) => res.status(200).json({ activities }));
  
  // app.get('/myActivities/:id', (req, res) => {
  //   const { status } = req.query;
  //   let filteredArray = activities;
    
  //   if (status) {
  //     filteredArray = activities.filter((e) => e.status === status);
  //   }
  //   res.status(200).json({ activities: filteredArray });
  // });
  
  app.get('/activities', (req, res) => res.status(200).json({ activities }));

module.exports = app;