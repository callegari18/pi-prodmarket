var express = require('express');
const {Produtos}=require('../models');


const produtoController={
create:(req,res) => {
    return res.render('cadastro_produto')
},

// salvar:async(req, res, next) => {
//     //let form=(req.body)
//     console.log("dados:",req.body)
// }

/*salvar: async (req, res) => {
    // Pegar os dados da requisição
    // Jogar os dados no banco
    // Redirecionar
    const dados = req.body;
    console.log("DADOS", dados);
   const result = await usuarios.create(dados);*/

store: async (req, res)=>{
    const { categoria,
            qualificação,
            quantidade,
            valor,
            descricao,
            imagem,
            codigo_produto,
            Usuarios_id
            
        } = req.body;

           const result = await Produtos.create({   
            categoria,
            qualificação,
            quantidade,
            valor,
            descricao,
            imagem,
            codigo_produto,
            Usuarios_id
            });

            console.log(result)

   return res.redirect('/');
}
}

module.exports= produtoController;