const {Produtos, Enderecos }=require('../models');
const {validationResult } = require('express-validator');



const produtoController={
create:(req,res) => {
    return res.render('cadastro_produto',{usuario: req.session.usuario})
},

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
                Usuarios_id: req.session.usuario.id
            });

            return res.redirect('/');
        }else{

            return res.render('cadastro_usuario', { errors: listaDeErrors.errors })

        }
},

homeCard: async (req,res)=>{
    const card = await Produtos.findAll();
    return res.render('home', {card, usuario: req.session.usuario})
},

comprarProduto: async (req, res) => {
    const {id} = req.params;
    const produto = await Produtos.findOne({ where: {id}, include: "usuarios"});
    const produtoJson = await produto.toJSON();

    if(!produto) {
        return res.redirect('/home')
    }

    if (!req.session.carrinho) {
        req.session.carrinho = [];
        req.session.carrinho.push(produtoJson)
    } else {
        req.session.carrinho.push(produtoJson)
    }

    return res.redirect('/carrinho');
},

listaProduto: async (req,res)=>{
    const {id} = req.session.usuario;
    const listaProduto = await Produtos.findAll({ 
        where: { Usuarios_id: id }
    });
    return res.render('editar_produto', {listaProduto, usuario: req.session.usuario})
},
editarProduto: async (req, res) => {
    // const {id} = req.params;
    // const card = await Produtos.findByPk(id);
    // return res.render('editar', {card, usuario: req.session.usuario})

     const {id} = req.params;
    console.log("esse e o id =", id)
    const editproduto = await Produtos.findOne({WHERE: {id:id}});
    return res.render('/editar', {editproduto})
},
atualizaProduto: async (req, res) => {
    const {id} = req.params;
    const dados = req.body;
    const produto = await Produtos.update(dados, {where: {id}});
    return res.redirect('/editar')
},
destroy: async (req, res) =>{
    const {id} = req.params
    console.log({id})
    const resultado = await Produtos.destroy({
    where: {id:id}
})

res.redirect('/editar_produto');
},


minhaLoja: async (req,res)=>{
    const {id} = req.session.usuario;
    console.log("o id do usuario e :", id);
    const endereco = await Enderecos.findOne({
        where: { Usuarios_id: id }
    });
    const listaProduto = await Produtos.findAll({ 
        where: { Usuarios_id: id }
    });
    return res.render('produtor', {listaProduto, endereco, usuario: req.session.usuario})
}

}

module.exports= produtoController;