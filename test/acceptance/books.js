'use strict';

var chai = require('chai')
  , chaiHttp = require('chai-http')
  , expect = chai.expect
  , app = require('../../app');

chai.use(chaiHttp);

var Book = require('../../models/book');

describe('/books', function() {
  describe('POST', function() {

    beforeEach(function(done) {
      // clear database
      Book.remove({}, function(err) {
        done();
      })
    });

    it('should add a book to the database', function(done) {
      var title = 'Test Title 1'
        , author = 'Test Author 1';
      chai.request(app)
        .post('/books')
        .send({title: title, author: author})
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          Book.findOne({}, function(err, book) {
            expect(res.body._id).to.be.ok;
            expect(res.body.title).to.equal(title);
            expect(res.body.author).to.equal(author);
            expect(book._id).to.be.ok;
            expect(book.title).to.equal(title);
            expect(book.author).to.equal(author);
            done();
          })
        })

    })
  })
});
