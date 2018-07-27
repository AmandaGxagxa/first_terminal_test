let assert =require('assert');
let fromWhere = require('../fromWhere');
describe('The From where function', function() {
  it('should be able to return Bellville if the registration number startsWith CY',function() {
    assert.equal('Bellville',fromWhere('CY'))
  })
  it('should be able to return Paarl if the registration number startsWith CJ',function() {
    assert.equal('Paarl',fromWhere('CJ'))
  })
  it('should be able to return Cape Town if the registration number startsWith CA',function() {
    assert.equal('Cape Town',fromWhere('CA'))
  })
  it('should be able to return Some other place! if its not from one of the above places ',function() {
    assert.equal('Some other place!',fromWhere('CK'))
  })
})
