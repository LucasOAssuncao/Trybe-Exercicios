const express = require('express');
const { carController } = require('../controllers');

const router = express.Router();

router.post(
  '/',
  carController.createCar,
);

module.exports = router;