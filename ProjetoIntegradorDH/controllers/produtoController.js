const {Produtos}=require('../models');
const {validationResult } = require('express-validator');


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

    console.log(req.body)
    console.log(listaDeErrors.array());

        if(listaDeErrors.isEmpty()){

            const {
                categoria,
                nome,
                tipo,
                quantidade,
                valor,
                Usuarios_id
            } = req.body;

            const {filename} = req.file;

            await Produtos.create({
                categoria,
                nome,
                tipo,
                quantidade,
                valor,
                imagem: filename,
                Usuarios_id
            });

            return res.redirect('/');
        }else{

            return res.render('cadastro_usuario', { errors: listaDeErrors.errors })

        }
},

homeCard: async (req,res)=>{
    const card = await Produtos.findAll();
    return res.render('home', {card})
}

}

module.exports= produtoController;