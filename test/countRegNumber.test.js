let assert = require('assert')
let countRegNumber = require('../countRegNumber')
describe('The Count Reg Number function', function(){

    it('should be to count the register numbers that are inserted', function(){
        assert.equal(3, countRegNumber('CA 147 77, CJ 789, CL 789 '));
    });
    it('should be to count the register numbers that are inserted', function(){
        assert.equal(1, countRegNumber('CY 147 77 EC', 'EC'));
    });
});
