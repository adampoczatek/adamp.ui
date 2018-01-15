const faker = require('faker');

module.exports = {
  label: 'Q',
  name: 'q',
  order: 3,
  context: {
    q: faker.lorem.words(),
    cite: faker.lorem.words(),
  }
};