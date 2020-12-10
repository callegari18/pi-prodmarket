const {Usuarios, Enderecos}=require('../models');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

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
                responsavel,
                endereco,
                cep,
                estado,
                cidade,
                bairro,
                complemento
            } = req.body;
        const {filename} = req.file;

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
            imagem: filename,
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

        return res.redirect('/');

    } else{

        return res.render('cadastro_usuario', {errors: listaDeErrors.errors})

    }

    

},

headerLogado: async (req,res)=>{
    const perfil = await Usuarios.findAll();
    return res.render('header-logado', {perfil})
}


}

module.exports=usuarioController;