const faker = require('faker');

module.exports = {
  label: 'Unordered List',
  name: 'ul',
  order: 2,
  context: {
    data: [...Array(5)].map((item, index) => {
      if (index === 3) {
        return {
          name: faker.name.findName(),
          list: { 
            data: [...Array(5)].map((item, index) => {
              if (index === 3) {
                return {
                  name: faker.name.findName(),
                  list: {
                    data: [...Array(5)].map((item, index) => ({
                      name: faker.name.findName(),
                    })),
                  }
                }
              }

              return {
                name: faker.name.findName(),
              }
            }
          ),
        }}
      }
  
      return {
        name: faker.name.findName(),
      };
    }),
  }
};