var {Produtos} = require("../models")

const categoriaController = {

viewCategoria: async (req, res) => {

    let {categoria} = req.params
    let card = await Produtos.findAll({
        where:{
            categoria:categoria.toString()
        }
    })

    console.log(card)

return res.render('categoria', {card, categoria,usuario: req.session.usuario});

}
}

module.exports=categoriaController;
