var express = require('express');
const usuarioController = require('../controllers/usuarioController');
const produtoController = require('../controllers/produtoController');
const loginController = require('../controllers/loginController');
var router = express.Router();
const {check, validationResult, body } = require('express-validator');
const contatoController = require('../controllers/contatoController');
const categoriaController = require('../controllers/categoriaController');


/* GET home page. */
router.get('/', produtoController.homeCard);

router.get('/contato', contatoController.viewContato);
router.post('/contato', contatoController.sendContato);

router.get('/cadastro_usuario', usuarioController.create);
router.post('/cadastro_usuario', [
            check('tipo').isIn(['Comprar', 'Vender']),
            check('nome').isLength({min:1}).withMessage('Campo "Nome Empresarial" Obrigatório'),
            check('cnpj').isLength({min:1}).withMessage('Campo "CNPJ" Obrigatório'),
            check('ramo').isLength({min:1}).withMessage('Campo "Ramo de Atividade" Obrigatório'),
            check('telefone').isLength({min:1}).withMessage('Campo "Telefone" Obrigatório'),
            check('email').isEmail().withMessage('Campo "e-mail" Obrigatório'),
            check('password').isLength({min:1}).withMessage('Campo "Senha" Obrigatório'),
            check('responsavel').isLength({min:1}).withMessage('Campo "Nome do Responsável" Obrigatório'),
            check('endereco').isLength({min:1}).withMessage('Campo "Endereço" Obrigatório'),
            check('cep').isLength({min:1}).withMessage('Campo "CEP" Obrigatório'),
            check('estado').isLength({min:1}).withMessage('Campo "Estado" Obrigatório'),
            check('cidade').isLength({min:1}).withMessage('Campo "Cidade" Obrigatório'),
], usuarioController.store);

router.get('/cadastro_produto', produtoController.create);
router.post('/cadastro_produto', [
            check('categoria').isLength({min:1}).withMessage('Campo "Categoria" Obrigatório'),
            check('nome').isLength({min:1}).withMessage('Campo "Nome" Obrigatório'),
            check('tipo').isLength({min:1}).withMessage('Campo "Tipo" Obrigatório'),
            check('quantidade').isLength({min:1}).withMessage('Campo "Quantidade" Obrigatório'),
            check('valor').isLength({min:1}).withMessage('Campo "Valor" Obrigatório'),
] ,produtoController.store);

router.get('/login',loginController.loginview);
router.post('/login',loginController.login);

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

router.get('/faq', contatoController.viewFaq);
router.post('/faq', contatoController.sendFaq);

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

router.get('/aves', categoriaController.viewAves);
router.get('/bovinos', categoriaController.viewBovinos);
router.get('/caprinos', categoriaController.viewCaprinos);
router.get('/cereais', categoriaController.viewCereais);
router.get('/cogumelos', categoriaController.viewCogumelos);
router.get('/especiarias', categoriaController.viewEpeciarias);
router.get('/frutas', categoriaController.viewFrutas);
router.get('/frutosDoMar', categoriaController.viewFrutosDoMar);
router.get('/graos', categoriaController.viewGraos);
router.get('/hortalicias', categoriaController.viewHortalicias);
router.get('/legumes', categoriaController.viewLegumes);
router.get('/leiteDerivados', categoriaController.viewLeiteDerivados);
router.get('/mel', categoriaController.viewMel);
router.get('/oleosAzeites', categoriaController.viewOleoAzeite);
router.get('/peixes', categoriaController.viewPeixes);
router.get('/suinos', categoriaController.viewSuinos);
router.get('/raizes', categoriaController.viewRaizes);


module.exports = router;
