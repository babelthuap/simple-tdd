'use strict';

var express = require('express');
var router = express.Router();

var Book = require('../models/book');

router.get('', function(req, res) {
  Book.find({}, function(err, data) {
    res.status(err ? 400 : 200).send(err || data);
  });
})

router.post('', function(req, res) {
  var newBook = new Book({
    title: req.body.title,
    author: req.body.author
  });
  newBook.save(function(err, savedBook) {
    res.status(err ? 400 : 200).send(err || savedBook);
  });
});

module.exports = router;
