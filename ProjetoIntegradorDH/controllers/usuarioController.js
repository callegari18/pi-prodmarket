var express = require('express');
const {Usuarios, Enderecos}=require('../models');
const usuarios = require('../models/usuarios');
const bcrypt = require('bcrypt');
const {check, validationResult, body } = require('express-validator');

const usuarioController={
create:(req,res) => {
    return res.render('cadastro_usuario')
},

index: async (req,res) => {
    const usuario = await Usuario.findAll({
        include: "endereco"
    })
},

store: async (req, res)=>{
    const listaDeErrors = validationResult(req);
            
    if(listaDeErrors.isEmpty()){

        const{ tipo,
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
                password,
                imagem,
                responsavel,
                endereco,
                cep,
                estado,
                cidade,
                bairro,
                complemento
            } = req.body; 

        const tipoConvertido = tipo.toString();
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password,salt)

        const result = await Usuarios.create({
            tipo:tipoConvertido,
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
            password:hash,
            imagem,
            responsavel

        }); 

        const usuario = result.toJSON();
        const meuendereco = await Enderecos.create({
            usuarios_id:usuario.id,
            logradouro:endereco,
            complemento,
            bairro,
            cidade,
            estado,
            cep 
        });

            console.log(result.toJSON())

            return res.redirect('/');

    } else{

        return res.render('cadastro_usuario', {errors:listaDeErrors.errors})

    }

},




}

module.exports=usuarioController;