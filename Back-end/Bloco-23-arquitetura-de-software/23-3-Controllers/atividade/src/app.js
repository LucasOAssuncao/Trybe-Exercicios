const express = require('express');
const { passengerRoutes, driverRoutes, carRoutes } = require('./routers');

const app = express();

app.use(express.json());
app.use('/passengers', passengerRoutes);
app.use('/drivers', driverRoutes);
app.use('/cars', carRoutes);

module.exports = app;