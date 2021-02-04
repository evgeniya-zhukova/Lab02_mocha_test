// test/server.js

var expect  = require("chai").expect;
var request = require("request");

describe("Calculator", () => {
  describe("Addition", () => {
    var url = "http://localhost:3000/add?i=5&j=2";

    it("returns status 200", (done) => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns sum", (done) => {
      request(url, (error, response, body) => {
        expect(body).to.equal(7);
        done();
      });
    });
  });
});

describe("Calculator", () => {
  describe("Substraction", () => {
    var url = "http://localhost:3000/sub?i=5&j=2";

    it("returns status 200", (done) => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns sub", (done) => {
      request(url, (error, response, body) => {
        expect(body).to.equal(3);
        done();
      });
    });
  });
});

describe("Calculator", () => {
  describe("Multiplication", () => {
    var url = "http://localhost:3000/mul?i=5&j=2";

    it("returns status 200", (done) => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns mul", (done) => {
      request(url, (error, response, body) => {
        expect(body).to.equal(10);
        done();
      });
    });
  });
});

describe("Calculator", () => {
  describe("Addition", () => {
    var url = "http://localhost:3000/div?i=10&j=2";

    it("returns status 200", (done) => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns div", (done) => {
      request(url, (error, response, body) => {
        expect(body).to.equal(5);
        done();
      });
    });
  });
});