let assert = require('assert');
let findItemsOver = require('../findItemsOver');
describe('the findItemsOver function ',function() {
  it('should be able to re return all the iterm that are over than the treshold',function() {
    assert.deepEqual(2, findItemsOver([ {name : 'apples', qty : 10},
         {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},]
    , 20))
  })
})
