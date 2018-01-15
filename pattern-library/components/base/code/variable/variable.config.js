const faker = require('faker');

module.exports = {
  label: 'Variables',
  name: 'variable',
  order: 3,
  context: {
    text: faker.lorem.word(),
  },
};