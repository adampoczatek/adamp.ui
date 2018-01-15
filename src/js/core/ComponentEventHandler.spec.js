/* eslint-env node, mocha */
/* eslint no-new: 0 */
import { assert, should } from 'chai';
import jsdom from 'jsdom';
import ComponentEventHandler from './ComponentEventHandler';

const { JSDOM } = jsdom;

should();

describe('UI Core - Component Event Handler', () => {
  let element;
  let collection;

  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    const { window } = dom;
    const { document } = window;

    element = document.createElement('div');
    element.id = 'target-id';
    element.className = 'target-class';
    collection = [
      document.createElement('div'),
      document.createElement('div'),
      document.createElement('div'),
    ];
    collection[0].className = 'target-classes';
    collection[1].className = 'target-classes';
    collection[2].className = 'target-classes';

    global.window = window;
    global.document = document;

    document.querySelector('body').appendChild(element);
    document.querySelector('body').appendChild(collection[0]);
    document.querySelector('body').appendChild(collection[1]);
    document.querySelector('body').appendChild(collection[2]);
  });

  describe('Initialisation', () => {
    it('should create new instance with HTML element', () => {
      const elem = document.createElement('div');
      const inst = new ComponentEventHandler(elem, 'click', () => {});

      assert.equal(inst instanceof ComponentEventHandler, true);
      assert.equal(inst.target[0] === elem, true);
    });

    it('should create new instance using id selector', () => {
      const inst = new ComponentEventHandler('#target-id', 'click', () => {});

      assert.equal(inst instanceof ComponentEventHandler, true);
      assert.equal(inst.target[0] === element, true);
    });

    it('should create new instance using class selector', () => {
      const inst = new ComponentEventHandler('.target-class', 'click', () => {});

      assert.equal(inst instanceof ComponentEventHandler, true);
      assert.equal(inst.target[0] === element, true);
    });

    it('should create new instance using class selector with multiple matches', () => {
      const inst = new ComponentEventHandler('.target-classes', 'click', () => {});

      assert.equal(inst instanceof ComponentEventHandler, true);
      assert.equal(inst.target[0] === collection[0], true);
      assert.equal(inst.target[1] === collection[1], true);
      assert.equal(inst.target[2] === collection[2], true);
    });

    it('should throw TypeError when initialised with invalid `target`', () => {
      (() => {
        new ComponentEventHandler(null, 'click', () => {});
      }).should.throw('Invalid Selector (null)');
    });

    it('should throw TypeError when initialised with invalid `events`', () => {
      (() => {
        new ComponentEventHandler('.test', null, () => {});
      }).should.throw('Invalid Events (null)');
    });

    it('should throw TypeError when initialised with invalid `handler`', () => {
      (() => {
        new ComponentEventHandler('.test', 'click', null);
      }).should.throw('Invalid Handler (null)');
    });
  });

  describe('Attaching Events', () => {
    it('should attach one event to a single element', (done) => {
      const clickHandler = () => { done(); };
      const inst = new ComponentEventHandler('#target-id', 'click', clickHandler);
      const event = new global.window.Event('click');

      inst.target[0].dispatchEvent(event);
    });

    it('should attach multiple events to a single element', () => {
      let counter = 0;
      const clickHandler = () => { counter += 1; };
      const inst = new ComponentEventHandler('#target-id', 'mouseup mousedown', clickHandler);
      const mouseUpEvent = new global.window.Event('mouseup');
      const mouseDownEvent = new global.window.Event('mousedown');

      inst.target[0].dispatchEvent(mouseDownEvent);
      assert.equal(counter === 1, true);
      inst.target[0].dispatchEvent(mouseUpEvent);
      assert.equal(counter === 2, true);
    });

    it('should attach one event to multiple elements', () => {
      let counter = 0;
      const clickHandler = () => { counter += 1; };
      const inst = new ComponentEventHandler('.target-classes', 'click', clickHandler);
      const event = new global.window.Event('click');

      inst.target[0].dispatchEvent(event);
      assert.equal(counter === 1, true);
      inst.target[1].dispatchEvent(event);
      assert.equal(counter === 2, true);
      inst.target[2].dispatchEvent(event);
      assert.equal(counter === 3, true);
    });

    it('should attach multiple events to multiple elements', () => {
      let counter = 0;
      const clickHandler = () => { counter += 1; };
      const inst = new ComponentEventHandler('.target-classes', 'mouseup mousedown', clickHandler);
      const mouseUpEvent = new global.window.Event('mouseup');
      const mouseDownEvent = new global.window.Event('mousedown');

      inst.target[0].dispatchEvent(mouseUpEvent);
      assert.equal(counter === 1, true);
      inst.target[0].dispatchEvent(mouseDownEvent);
      assert.equal(counter === 2, true);
      inst.target[1].dispatchEvent(mouseUpEvent);
      assert.equal(counter === 3, true);
      inst.target[1].dispatchEvent(mouseDownEvent);
      assert.equal(counter === 4, true);
      inst.target[2].dispatchEvent(mouseUpEvent);
      assert.equal(counter === 5, true);
      inst.target[2].dispatchEvent(mouseDownEvent);
      assert.equal(counter === 6, true);
    });
  });

  describe('Custom Hooks', () => {
    it('should execute `beforeEventHandled` and `afterEventHandled` in the correct order', () => {
      let result = '';
      const beforeEventHandled = () => { result += 'a'; };
      const eventHandler = () => { result += 'b'; };
      const afterEventHandled = () => { result += 'c'; };
      const inst = new ComponentEventHandler('#target-id', 'click', eventHandler, beforeEventHandled, afterEventHandled);
      const event = new global.window.Event('click');

      inst.target[0].dispatchEvent(event);
      assert.equal(result, 'abc');
    });
  });
});

