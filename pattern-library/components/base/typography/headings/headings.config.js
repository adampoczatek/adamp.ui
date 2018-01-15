const faker = require('faker');

module.exports = {
  label: 'Headings',
  name: 'headings',
  order: 1,
  default: 'heading-1',
  context: {
    tag: 'h1'
  },
  variants: [
    {
      label: 'Heading 1',
      name: 'heading-1',
      order: 1,
      context: {
        text: faker.lorem.sentence(),
        type: 'h1',
      }
    },
    {
      label: 'Heading 2',
      name: 'heading-2',
      order: 2,
      context: {
        text: faker.lorem.sentence(),
        tag: 'h2',
      }
    },
    {
      label: 'Heading 3',
      name: 'heading-3',
      order: 3,
      context: {
        text: faker.lorem.sentence(),
        tag: 'h3',
      }
    },
    {
      label: 'Heading 4',
      name: 'heading-4',
      order: 4,
      context: {
        text: faker.lorem.sentence(),
        tag: 'h4',
      }
    },
    {
      label: 'Heading 5',
      name: 'heading-5',
      order: 5,
      context: {
        text: faker.lorem.sentence(),
        tag: 'h5',
      }
    },
    {
      label: 'Heading 6',
      name: 'heading-6',
      order: 6,
      context: {
        text: faker.lorem.sentence(),
        tag: 'h6',
      }
    },
  ]
};
