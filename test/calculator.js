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

  describe("Calculator", () => {
	describe("Substraction", () => {
	  it("substraction of two numbers", () => {
		var sub1 = calculator.sub(5, 2);
		var sub2 = calculator.sub(5, 2);
  
		expect(sub1).to.equal(3);
		expect(sub2).to.equal(5);
	  });
	});	
  });

  describe("Calculator", () => {
	describe("Multiplication", () => {
	  it("multiolication of two numbers", () => {
		var mul1 = calculator.mul(5, 2);
		var mul2 = calculator.mul(5, 2);
  
		expect(mul1).to.equal(10);
		expect(mul2).to.equal(12);
	  });
	});	
  });

  describe("Calculator", () => {
	describe("Division", () => {
	  it("division of two numbers", () => {
		var div1 = calculator.div(10, 2);
		var div2 = calculator.div(10, 2);
  
		expect(div1).to.equal(5);
		expect(div2).to.equal(2);
	  });
	});	
  });