let assert = require('assert');
let yearsAgo = require('../yearsAgo');
describe('yearsAgo functio', function() {
it('should be able to give 3 for the if we subtract 2015 to this year', function() {
  assert.equal(3, yearsAgo(2015));
})
it('should be able to give 3 for the if we subtract 2015 to this year', function() {
  assert.equal(26, yearsAgo(1992));
})
})
