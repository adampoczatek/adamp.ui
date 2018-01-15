const navigation = require('../../../navigation')();

navigation[0].isActive = true;

module.exports = {
  name: 'header',
  label: 'Header',
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: {
        navigation: navigation,
      }
    },
    {
      name: 'condensed',
      label: 'Condensed',
      context: {
        classes: 'header--condensed',
        menuLabel: 'Menu',
        navigation: navigation,
      }
    },
    {
      name: 'condensed-opened',
      label: 'Condensed Opened',
      context: {
        classes: 'header--condensed',
        menuLabel: 'Close',
        menuOpened: true,
        navigation: navigation,
      }
    }
  ]
};