let assert = require('assert');
let findItemsOver20 = require('../findItemsOver20');
describe('the findItemsOver20 function', function() {
  it('should be able to return the number of the items that are over20', function() {
    assert.deepEqual(2, findItemsOver20([{name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},]))
  })
})
