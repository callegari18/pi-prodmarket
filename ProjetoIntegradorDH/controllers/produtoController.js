var express = require('express');
const {Produtos}=require('../models');
const {check, validationResult, body } = require('express-validator');


const produtoController={
create:(req,res) => {
    return res.render('cadastro_produto')
},

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
},

homeCard:async (req,res)=>{
    const card = await Produtos.findAll();
    console.log(card);
    return res.render('home', {card})

}

}

module.exports= produtoController;