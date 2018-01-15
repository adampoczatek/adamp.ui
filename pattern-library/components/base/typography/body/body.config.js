const faker = require('faker');

module.exports = {
  label: 'Body Text',
  name: 'body',
  order: 2,
  context: {
    bodyText: faker.lorem.paragraphs(),
  }
};