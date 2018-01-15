const faker = require('faker');

module.exports = {
  label: 'Description List',
  name: 'dl',
  order: 3,
  context: {
    data: [...Array(5)].map(i => ({
      term: faker.name.findName(),
      description: faker.name.jobDescriptor(),
    })),
  }
};
