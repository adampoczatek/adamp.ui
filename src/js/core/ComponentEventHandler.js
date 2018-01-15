/* eslint-env browser */

const noop = () => {};

/**
 * Class ComponentEventHandler
 * Inspired by jQuery event handlers, this class
 * allows you to attach even handler to multiple
 * events.
 */
export default class ComponentEventHandler {
  /**
   * Create new component event handler.
   *
   * @param {String|HTMLElement} selector CSS selector.
   * @param {String} events List of events separated by space e.g. `click keyup`.
   * @param {Function} handler Function called when one of the event is triggered.
   * @param {Object=} config Additional configuration options.
   * @param {Function=} config.beforeEventHandled Function executed before the main handler.
   * @param {Function=} config.afterEventHandled Function executed after the main handler.
   */
  constructor(selector, events, handler, beforeEventHandled = noop, afterEventHandled = noop) {
    if (typeof selector !== 'string' && !(selector instanceof window.HTMLElement)) {
      throw TypeError(`Invalid Selector (${selector})`);
    }

    if (typeof events !== 'string') {
      throw TypeError(`Invalid Events (${events})`);
    }

    if (typeof handler !== 'function') {
      throw TypeError(`Invalid Handler (${handler})`);
    }

    this.beforeEventHandled = beforeEventHandled;
    this.afterEventHandled = afterEventHandled;
    this.events = events.split(' ');
    this.target = selector instanceof window.HTMLElement ?
      [selector] :
      window.document.querySelectorAll(selector);

    this.initialiseEvents(handler);
  }

  initialiseEvents(handler) {
    this.target.forEach((element) => {
      this.events.forEach((event) => {
        element.addEventListener(event, (e) => {
          this.beforeEventHandled();
          handler.call(element, e);
          this.afterEventHandled();
        });
      });
    });
  }
}
