const {Usuario} = require('../models/usuarios');
const Sequelize = require('sequelize');

const UsuarioController = {
    create:(req, res) =>{
        return res.render ('cadastro_usuario');
    },
    store: async (rec, res)=>{
        const{  tipo,
                nome,
                nome_fantasia,
                titulo,
                cnpj,
                ie,
                ramo,
                codigo_ap,
                codigo_as,
                codigo_natureza,
                responsavel,
                telefone,
                senha
        } = req.body;

        const resultado = await Usuario.create({
            tipo,
            nome,
            nome_fantasia,
            titulo,
            cnpj,
            ie,
            ramo,
            codigo_ap,
            codigo_as,
            codigo_natureza,
            responsavel,
            telefone,
            senha
        });

        console.log(resultado);

        return res.redirect('/')
    }
}

module.exports = UsuarioController;
