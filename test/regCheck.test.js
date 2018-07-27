let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function(){

    it('should be to return true if the registration number ends with GP', function(){
        assert.equal(true, regCheck('CA 147 77 GP', 'GP'));
    });
    it('should be to return true if the registration number ends with EC', function(){
        assert.equal(true, regCheck('CY 147 77 EC', 'EC'));
    });
});
