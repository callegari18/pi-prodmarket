
const {usuarios,enderecos} = require('../models');


let usuarioController = {
    criar: async (req, res) => {
        return res.render('cadastro_usuario')
    },

    // salvar:async(req, res, next) => {
    //     //let form=(req.body)
    //     console.log("dados:",req.body)
    // }

    salvar: async (req, res) => {
        // Pegar os dados da requisição
        // Jogar os dados no banco
        // Redirecionar
        const dados = req.body;
        console.log("DADOS", dados);
        const result = await usuarios.create(dados);

        return res.redirect('/');
    }
}

module.exports = usuarioController;