/* eslint-env node, mocha */
import assert from 'assert';
import main from './main';

describe('Test Example', () => {
  describe('#add()', () => {
    it('should work with ES6 modules and `async/await`', async () => {
      assert.equal(5, await main.add(1));
    });
  });
});
