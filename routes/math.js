'use strict';

var express = require('express');
var router = express.Router();

router.get('/square/:x', function(req, res) {
  var x = Number(req.params.x);
  res.send({result: x * x});
});

router.get('/multiply/:x/:y', function(req, res) {
  var x = Number(req.params.x);
  var y = Number(req.params.y);
  res.send({result: x * y});
});

module.exports = router;
