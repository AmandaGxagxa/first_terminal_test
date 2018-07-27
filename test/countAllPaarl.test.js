let assert = require('assert');
let countAllPaarl = require('../countAllPaarl')
describe("Count all paarl function", function() {
  it('should be able to count all registrations numbers that are from paarl', function() {
    assert.equal(2, countAllPaarl('CA 123, CJ 147, CJ456, CY 147'));
  })

    it('should be able to return 0 when there are no registration from paarl.', function() {
      assert.equal(0, countAllPaarl('CA 123, CY 147'));
    })

})
