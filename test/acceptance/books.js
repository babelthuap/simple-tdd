'use strict';

var chai = require('chai')
  , chaiHttp = require('chai-http')
  , expect = chai.expect
  , app = require('../../app');

chai.use(chaiHttp);


describe('/books', function() {
  describe('POST', function() {
    it('should add a book to the database', function(done) {
      chai.request(app)
        .post('/books')
        .send({title: 'Test Title', author: 'Test Author'})
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.ok;
          expect(res.body.title).to.equal('Test Title');
          expect(res.body.author).to.equal('Test Author');
          done();
        })
    })
  })
});
