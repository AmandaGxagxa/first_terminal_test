let assert = require('assert')
let isWeekday = require('../isWeekday');
describe('The isWeekday function', function(){

    it('should be to return false if the day is not the Weekday', function(){
        assert.equal(false, isWeekday('Saterday'));
    });
    it('should be to return true if the day is a Weekday', function(){
        assert.equal(true, isWeekday('Monday'));
    });
});
