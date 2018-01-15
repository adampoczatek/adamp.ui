const navigation = require('../../navigation')();

navigation[3].isActive = true;

module.exports = {
  name: 'work',
  label: 'Work',
  context: {
    header: {
      menuLabel: 'Menu',
      navigation: navigation,
    }
  }
};