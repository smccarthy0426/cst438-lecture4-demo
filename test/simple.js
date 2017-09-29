var expect = require("chai").expect; 


var add = require("../simple-function");

describe("Add function", function() {
    it("should return the sum of 2 numbers", function(done) {
        expect(add.add(2,4)).to.equal(6); 
        done();
    }); 

}); 


