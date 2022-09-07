// const { expect } = require('chai');
// const sinon = require('sinon');

// const driverModel = require('../../../src/models/driver.model');

// describe('Test drivers', function () {
//   it('check the type of the return', async function () {
//     const list = await driverModel.findDrivers();
//     expect(list).to.be.an('array');
//   });

//   it('list all the drivers', async function () {
//     const expected = [
//       {
//         id: 1,
//         name: 'Liana Cisneiros',
//       },
//       {
//         id: 2,
//         name: 'Fábio Frazão',
//       },
//       {
//         id: 3,
//         name: 'Anastacia Bicalho',
//       },
//       {
//         id: 4,
//         name: 'Samara Granjeiro',
//       },
//       {
//         id: 5,
//         name: 'Levi Teixeira',
//       },
//     ];

//     const response = await driverModel.findDrivers();
//     expect(response).to.deep.equal(expected);
//   });
//   afterEach(sinon.restore);
// });
