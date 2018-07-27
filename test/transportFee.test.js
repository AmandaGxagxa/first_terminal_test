let assert = require('assert');
let transportFee = require('../transportFee');
describe('the function transportFee', function () {
  it('should be able to return R20 if its a morning shift',function () {
    assert.equal('R20',transportFee('morning'))
  })
  it('should be able to return R10 if its a afternoon shift',function () {
    assert.equal('R10',transportFee('afternoon'))
  })
  it('should be able to return free if its some thing else.',function () {
    assert.equal('free',transportFee('night'))
  })
})
