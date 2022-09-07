const { expect } = require('chai');
const sinon = require('sinon');

const mockedCar = require('./mocks/car-exercises.service.mock');
const carService = require('../../../src/services/car.service');
const carModel = require('../../../src/models/car.model');

const validModel = 'Chevrolet Monza';
const validColor = 'Branco';
const validPlate = 'ABC1A2B';
const invalidValue = '9';

describe('Test Cars', function () {
    beforeEach(function () {
        sinon.stub(carModel, 'insert').resolves(mockedCar);
      });
    
      afterEach(function () {
        sinon.restore();
      });
    it('return an error with an invalid model', async function () {
        const res = await carService.postCar(invalidValue, validColor, validPlate);

        expect(res.type).to.equal('INVALID_VALUE');
        expect(res.message).to.equal('"model" length must be at least 3 characters long');
    });
    it('return an error with an invalid color', async function () {
        const res = await carService.postCar(validModel, invalidValue, validPlate);

        expect(res.type).to.equal('INVALID_VALUE');
        expect(res.message).to.equal('"color" length must be at least 2 characters long');
    });
    it('return an error with an invalid plate', async function () {
        const res = await carService.postCar(validModel, validColor, invalidValue);

        expect(res.type).to.equal('INVALID_VALUE');
        expect(res.message).to.equal('"licensePlate" length must be 7 characters long');
    });
    it('dont return an error', async function () {
        const res = await carService.postCar(validModel, validColor, validPlate);

        expect(res.type).to.equal(null);
    });
    it('return the posted car', async function () {
        const res = await carService.postCar(validModel, validColor, validPlate);

        expect(res.message).to.equal(mockedCar);
    });
  });