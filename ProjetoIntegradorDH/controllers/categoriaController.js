var express = require('express');
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

return res.render('categoria', {card, categoria});

}
}

module.exports=categoriaController;
