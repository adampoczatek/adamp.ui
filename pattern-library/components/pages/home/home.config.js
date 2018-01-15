const navigation = require('../../navigation')();

navigation[0].isActive = true;

module.exports = {
  name: 'home',
  label: 'Home',
  context: {
    header: {
      menuLabel: 'Menu',
      navigation: navigation,
    }
  }
};