// test/calculator.js
var expect    = require("chai").expect;
var calculator = require("../app/calculator");


describe("Calculator", () => {
	describe("Addition", () => {
	  it("addition of two numbers", () => {
		var sum1 = calculator.add(5, 2);
		var sum2 = calculator.add(5, 2);
  
		expect(sum1).to.equal(7);
		expect(sum2).to.equal(8);
	  });
	});

	
  });