const { expect } = require('chai');
const sinon = require('sinon');

const carModel = require('../../../src/models/car.model');
const connection = require('../../../src/connection');

describe('Test car', function () {
  // eslint-disable-next-line mocha/no-hooks-for-single-case
  before(async function () {
    const execute = { id: 1 };
    sinon.stub(connection, 'execute').resolves([execute]);
  });
  
  // eslint-disable-next-line mocha/no-hooks-for-single-case
  after(async function () {
    connection.execute.restore();
  });

  it('post a new car', async function () {
    const expected = 1;

    const payload = {
      model: 'Renault Sandero',
      color: 'Branco',
      licensePlate: 'NCA-0956',
    };

    const response = await carModel.insert(payload);

    expect(response).to.equal(expected);
  });
});