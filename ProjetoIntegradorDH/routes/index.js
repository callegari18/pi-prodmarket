var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/seguranca', function(req, res, next) {
  res.render('seguranca_privacidade');
});

module.exports = router;
