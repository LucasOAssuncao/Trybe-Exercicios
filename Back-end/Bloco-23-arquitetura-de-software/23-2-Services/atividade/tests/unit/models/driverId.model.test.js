const sinon = require('sinon');
const { expect } = require('chai');

const driverModel = require('../../../src/models/driver.model');
const connection = require('../../../src/connection');

  describe('Find driver by id', function () {
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    before(async function () {
      const execute = [
        {
          id: 2,
          name: 'Fábio Frazão',
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
      name: 'Fábio Frazão',
    };

    const payload = 1;

    it('com sucesso', async function () {
      const response = await driverModel.findById(payload);

      expect(response).to.deep.equal(expected);
    });
  });