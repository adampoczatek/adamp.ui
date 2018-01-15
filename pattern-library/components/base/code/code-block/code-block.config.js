const faker = require('faker');

module.exports = {
  label: 'Code Block',
  name: 'code-block',
  order: 1,
  context: {
    text: `<h1>${faker.lorem.sentence()}</h1>
<a href="#">${faker.lorem.word()}</a>`,
  },
};