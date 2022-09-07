const sinon = require('sinon');
const { expect } = require('chai');

const driverCarModel = require('../../../src/models/driver_car.model');
const connection = require('../../../src/connection');

describe('test drive_car', function () {
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    before(async function () {
        const execute = { id: 1 };

        sinon.stub(connection, 'execute').resolves([execute]);
      });
    
      // eslint-disable-next-line mocha/no-hooks-for-single-case
      after(async function () {
        connection.execute.restore();
      });
    it('post person and car', async function () {
        const expected = 1;

      const payload = {
        driverId: 3,
        carId: 1,
      };

      const response = await driverCarModel.insert(payload);

      expect(response).to.equal(expected);
    });
  });