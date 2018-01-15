/* eslint-env node, mocha */
/* eslint no-new: 0 */
/* eslint no-unused-vars: 0 */
import { assert, should } from 'chai';
import jsdom from 'jsdom';
import Toggler from './Toggler';

const { JSDOM } = jsdom;

should();

describe('UI Core - Component Event Handler', () => {
  let click;
  let trigger;
  let menu;
  let toggler;
  let counter;

  beforeEach(() => {
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <body>
          <a class="js-toggler" href="#">Open</a>
          <div class="js-menu">Menu</div>
        </body>
      </html>`);
    const { window } = dom;
    const { document } = window;

    global.window = window;
    global.document = document;

    counter = 0;
    click = new global.window.Event('click');
    trigger = global.document.querySelector('.js-toggler');
    menu = global.document.querySelector('.js-menu');
    toggler = new Toggler('.js-toggler', () => {
      trigger.innerHTML = 'Close';
      menu.classList.add('open');
      counter += 1;
    }, () => {
      trigger.innerHTML = 'Open';
      menu.classList.remove('open');
      counter -= 1;
    });
  });

  it('should toggle between different states on click', () => {
    assert.equal(trigger.innerHTML === 'Open', true);
    assert.equal(menu.classList.contains('open'), false);
    trigger.dispatchEvent(click);
    assert.equal(trigger.innerHTML === 'Close', true);
    assert.equal(menu.classList.contains('open'), true);
    trigger.dispatchEvent(click);
    assert.equal(trigger.innerHTML === 'Open', true);
    assert.equal(menu.classList.contains('open'), false);
  });

  it('should force open state', () => {
    assert.equal(trigger.innerHTML === 'Open', true);
    assert.equal(menu.classList.contains('open'), false);
    toggler.open();
    assert.equal(trigger.innerHTML === 'Close', true);
    assert.equal(menu.classList.contains('open'), true);
  });

  it('should only force open state once', () => {
    assert.equal(counter === 0, true);
    toggler.open();
    assert.equal(counter === 1, true);
    toggler.open();
    assert.equal(counter === 1, true);
  });

  it('should force close state', () => {
    toggler.open();
    toggler.close();
    assert.equal(trigger.innerHTML === 'Open', true);
    assert.equal(menu.classList.contains('open'), false);
  });

  it('should only force close state once', () => {
    toggler.open();
    assert.equal(counter === 1, true);
    toggler.close();
    assert.equal(counter === 0, true);
    toggler.close();
    assert.equal(counter === 0, true);
  });
});
