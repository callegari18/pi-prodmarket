var express = require('express');
const usuarioController = require('../controllers/usuarioController');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home')
});

router.get('/contato', function(req, res, next) {
  res.render('contato')
});

router.get('/cadastro_usuario', usuarioController.create);

router.post('/cadastro_usuario', usuarioController.store);

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

router.get('/termos', function(req, res, next) {
  res.render('termos_garantias')
});

router.get('/faq', function(req, res, next) {
  res.render('faq')
});

router.get('/produto', function(req, res, next) {
  res.render('produto')
});

router.get('/produtores', function(req, res, next) {
  res.render('produtores')
});
router.get('/produtor', function(req, res, next) {
  res.render('produtor')
});
router.get('/carrinho', function(req, res, next) {
  res.render('carrinho')
});

module.exports = router;
