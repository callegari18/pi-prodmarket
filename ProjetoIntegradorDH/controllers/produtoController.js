var express = require('express');
const {Produtos}=require('../models');
const {check, validationResult, body } = require('express-validator');


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
    const listaDeErrors = validationResult(req);

        if(listaDeErrors.isEmpty()){

            const { categoria,
                    nome,
                    tipo,
                    quantidade,
                    valor,
                    imagem,
                    Usuarios_id
            
                } = req.body;

           const result = await Produtos.create({   
            categoria,
            nome,
            tipo,
            quantidade,
            valor,
            imagem,
            Usuarios_id
            });

            console.log(result)

            return res.redirect('/');
        }else{

            return res.render('cadastro_usuario', {errors:listaDeErrors.errors})

        }
}

}

module.exports= produtoController;