const faker = require('faker');

module.exports = {
  label: 'Table',
  name: 'table',
  order: 2,
  context: {
    data: {
      headings: [
        {
          text: '#',
        },
        {
          text: 'First Name',
        },
        {
          text: 'Last Name',
        },
        {
          text: 'Email',
        },
        {
          text: 'Contact Number'
        }
      ],
      rows: [...Array(10)].map((el, index) => (
        {
          columns: [
            {
              text: index + 1,
            },
            {
              text: faker.name.firstName(),
            },
            {
              text: faker.name.lastName(),
            },
            {
              text: faker.internet.email(),
            },
            {
              text: faker.phone.phoneNumber(),
            }
          ]
        }
      )),
    }
  }
};