/* eslint-env browser */
import ComponentEventHandler from './ComponentEventHandler';

export default class Toggler extends ComponentEventHandler {
  /**
   * Toggler allows you to toggle between 2 states.
   * @param {String|HTMLElement} selector Element(s) that trigger open/close events. 
   * @param {Function} open Event handler for open event.
   * @param {Function} close Event handler for close event.
   */
  constructor(selector, onOpen, onClose) {
    const handler = (e) => {
      this.handler(e);
    };

    super(selector, 'click', handler);
    this.onOpen = onOpen;
    this.onClose = onClose;
    this.isOpen = false;
  }

  handler(e, open = !this.isOpen) {
    if (open && !this.isOpen) {
      this.isOpen = true;
      this.onOpen.call(this, e);
    } else if (!open && this.isOpen) {
      this.isOpen = false;
      this.onClose.call(this, e);
    }
  }

  open() {
    const event = new window.Event('TogglerOpen');
    this.handler(event, true);
  }

  close() {
    const event = new window.Event('TogglerClose');
    this.handler(event, false);
  }
}
