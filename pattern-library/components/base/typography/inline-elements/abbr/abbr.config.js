const faker = require('faker');

module.exports = {
  label: 'Abbr',
  name: 'abbr',
  order: 9,
  context: {
    text: faker.lorem.word(),
    definition: faker.lorem.words(),
  }
};