let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should be able to return false when registration number does not start with CY', function(){
        assert.equal(false, isFromBellville('CA 147 77'));
    });
    it('should RETURN true if registration number starts with CY', function(){
        assert.equal(true, isFromBellville('CY 147 77'));
    });
});
