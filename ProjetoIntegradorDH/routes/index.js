var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home')
});

router.get('/contato', function(req, res, next) {
  res.render('contato')
});

router.get('/cadastro_usuario', function(req, res, next) {
  res.render('cadastro_usuario')
});
router.post('/cadastro_usuario', function(req, res, next) {
  res.render('cadastro_usuario')
});

router.get('/cadastro_produto', function(req, res, next) {
  res.render('cadastro_produto')
});
router.post('/cadastro_produto', function(req, res, next) {
  res.render('cadastro_produto')
});

router.get('/login', function(req, res, next) {
  res.render('login')
});


router.get('/parceiros', function(req, res, next) {
  res.render('parceiros')
});

router.get('/sobrenos', function(req, res, next) {
  res.render('sobrenos')
});

router.get('/seguranca', function(req, res, next) {
  res.render('seguranca_privacidade')
});

module.exports = router;
