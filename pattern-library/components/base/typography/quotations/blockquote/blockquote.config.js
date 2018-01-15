const faker = require('faker');

module.exports = {
  label: 'Blockquote',
  name: 'blockquote',
  order: 1,
  context: {
    quote: faker.lorem.paragraph(),
    author: faker.name.findName(),
    cite: faker.company.companyName(),
  }
};