const navigation = require('../../navigation')();

navigation[4].isActive = true;

module.exports = {
  name: 'contact',
  label: 'Contact',
  context: {
    header: {
      menuLabel: 'Menu',
      navigation: navigation,
    }
  }
};