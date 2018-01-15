const faker = require('faker');

module.exports = {
  label: 'Cite',
  name: 'cite',
  order: 2,
  context: {
    cite: faker.lorem.words(),
  }
};