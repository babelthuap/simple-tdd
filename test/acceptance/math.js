'use strict';

// var mocha = require('mocha');
var chai = require('chai')
  , chaiHttp = require('chai-http')
  , expect = chai.expect
  , app = require('../../app');

chai.use(chaiHttp);

// dummy test
// describe('5', function() {
//   it('should be 5.', function() {
//     expect(5).to.equal(5);
//   });
// });

describe('/math', function() {
  describe('/square/:x', function() {
    var num = 47;
    it(`should square ${num}`, function(done) {
      chai.request(app)
        .get(`/math/square/${num}`)
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(Math.pow(num, 2));
          done();
        });
    });
  });
  describe('/multiply/:anyX/:anyY', function() {
    it(`should multiply two numbers`, function(done) {
      let anyX = Math.round(100 * Math.random()) - 50
        , anyY = Math.round(100 * Math.random()) - 50;
      chai.request(app)
        .get(`/math/multiply/${anyX}/${anyY}`)
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(anyX * anyY);
          done();
        });
    });
  });
});
