/* eslint-env browser */
import Toggler from '../core/Toggler';

export default () => {
  const header = document.querySelector('.js-header');
  const trigger = document.querySelector('.js-header-toggler');
  const triggerLabel = document.querySelector('.js-header-toggler-label');
  const triggerIcon = document.querySelector('.js-header-toggler-icon');
  const menu = document.querySelector('.js-header-menu');
  const toggler = new Toggler(trigger, (e) => {
    e.preventDefault();

    triggerLabel.innerHTML = 'Close';
    triggerIcon.classList.add('header__toggler-icon--active');
    menu.classList.add('header__nav--active');
  }, (e) => {
    e.preventDefault();

    triggerLabel.innerHTML = 'Menu';
    triggerIcon.classList.remove('header__toggler-icon--active');
    menu.classList.remove('header__nav--active');
  });

  header.classList.add('header--condensed');
  toggler.close();
};
