var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

<<<<<<< HEAD
router.get('/contato', function(req, res, next) {
  res.render('contato');
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/parceiros', function(req, res, next) {
  res.render('parceiros');
});
router.get('/sobrenos', function(req, res, next) {
  res.render('sobrenos');
=======
router.get('/seguranca', function(req, res, next) {
  res.render('seguranca_privacidade');
>>>>>>> 58f22a40e6838c804a7d4963e0496350a6d81a8f
});

module.exports = router;
