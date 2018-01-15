const navigation = require('../../../navigation')();

navigation[3].isActive = true;

module.exports = {
  name: 'majestic-wine-case-study',
  label: 'Majestic Wine',
  context: {
    header: {
      menuLabel: 'Menu',
      navigation: navigation,
    }
  }
};