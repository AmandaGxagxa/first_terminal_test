let assert = require('assert');
let countAllFromTown = require('../countAllFromTown')
describe("Count all from Cape Town function", function() {
  it('should be able to count all registrations numbers that are from Cape town', function() {
    assert.equal(3, countAllFromTown('CA 789,CA 123,CJ 147,CL 145,CA 852', 'CA'));
  })

    it('should be able to give all registration numbers that are from cape town.', function() {
      assert.equal(1, countAllFromTown('CA 123, CY 147' ,'CA'));
    })

})
