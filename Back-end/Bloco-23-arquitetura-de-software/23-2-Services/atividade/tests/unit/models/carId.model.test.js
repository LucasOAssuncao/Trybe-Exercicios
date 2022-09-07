const sinon = require('sinon');
const { expect } = require('chai');

const carModel = require('../../../src/models/car.model');
const connection = require('../../../src/connection');

  describe('car id tests', function () {
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    before(async function () {
      const execute = [
        {
          id: 2,
          model: 'Volkswagen Gol',
          color: 'Vermelho',
          // eslint-disable-next-line camelcase
          license_plate: 'DZG-4376',
        },
      ];
  
      sinon.stub(connection, 'execute').resolves([execute]);
    });
  
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    after(async function () {
      connection.execute.restore();
    });

    const expected = {
      id: 2,
      model: 'Volkswagen Gol',
      color: 'Vermelho',
      licensePlate: 'DZG-4376',
    };

    const id = 2;

    it('Find a car by id', async function () {
      const response = await carModel.findById(id);

      expect(response).to.deep.equal(expected);
    });
  });