const { expect } = require('chai');
const sinon = require('sinon');

const driverModel = require('../../../src/models/driver.model');
const connection = require('../../../src/connection');

  describe('Cadastra uma pessoa motorista', function () {
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    before(async function () {
      const execute = { id: 1 };

      sinon.stub(connection, 'execute').resolves([execute]);
    });
  
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    after(async function () {
      connection.execute.restore();
    });

    it('post new driver', async function () {
        const expected = 1;
    
        const payload = {
          name: 'Liana Cisneiros',
        };
    
        const response = await driverModel.insert(payload);
    
        expect(response).to.equal(expected);
      });
  });