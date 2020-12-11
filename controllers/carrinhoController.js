
const carrinhoController = {

  viewCarrinho: (req, res) => {
    console.log(req.session.carrinho)
    return res.render('carrinho', {
      carrinho: req.session.carrinho,
      usuario: req.session.usuario
    });
  }
}

module.exports=carrinhoController;