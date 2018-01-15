const navigation = require('../../navigation')();

navigation[1].isActive = true;

module.exports = {
  name: 'about',
  label: 'About',
  context: {
    header: {
      menuLabel: 'Menu',
      navigation: navigation,
    }
  }
};