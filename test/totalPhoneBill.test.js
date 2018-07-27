let assert = require('assert');
let totalPhoneBill = require('../totalPhoneBill');
describe('the totalPhoneBill function',function () {
  it('should be able to return the total amount of a call bill', function () {
    assert.equal('R5.50', totalPhoneBill('call, call'));
  })
  it('should be able to return the total amount of a sms bill', function () {
    assert.equal('R1.30', totalPhoneBill('sms, sms'));
  })
  it('should be able to return the total amount of a sms and call bill', function () {
    assert.equal('R6.80', totalPhoneBill('sms, sms, call, call'));
  })
})
