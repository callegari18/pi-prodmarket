var express = require('express');
const {Usuarios}=require('../models');


const usuarioController={
create:(req,res) => {
    return res.render('cadastro_usuario')
},

// salvar:async(req, res, next) => {
//     let form=(req.body)
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
    const { tipo,
            nome,
            titulo,
            cnpj,
            ie,
            nome_fantasia,
            ramo,
            codigo_ap,
            codigo_as,
            codigo_natureza,
            telefone,
            email,
            responsavel
        } = req.body;

           const result = await Usuarios.create({
                tipo,
                nome,
                titulo,
                cnpj,
                ie,
                nome_fantasia,
                ramo,
                codigo_ap,
                codigo_as,
                codigo_natureza,
                telefone,
                email,
                responsavel

            });

            // store: async (req, res) => {
            //     // Pegar os dados da requisição
            //     // Jogar os dados no banco
            //     // Redirecionar
            //     const dados = req.body;
            //     console.log("DADOS", dados);
            //     const result = await Filme.create(dados);
        
            console.log(result)

   return res.redirect('/');
}
}

module.exports=usuarioController;