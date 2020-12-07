function auth(req, res, next){
    console.log("NÃO ESQUEÇA DE LIMPAR O SESSION!!!!!!!")
    req.session.usuario = {
        id: 1,
        tipo: 'Comprar,Vender',
        nome: 'Pedro Victor',
        cnpj: '2134321421234234',
        ie: '2342342342',
        nome_fantasia: 'Pedro',
        ramo: '23421342134',
        codigo_ap: '123456789',
        codigo_as: '123456789',
        codigo_natureza: '123456789',
        telefone: '123456789',
        email: 'pedrov-queiroz@hotmail.com',
        password: undefined,
        imagem: null,
        responsavel: 'Pedro',
        createdAt: '2020-12-07T17:14:30.000Z',
        updatedAt: '2020-12-07T17:14:30.000Z'
    }

    if(typeof(req.session.usuario)!="undefined"){
        next()
}else{
    return res.send("VOCÊ PRECISA SE LOGAR PARA ACESSAR ESTA PÁGINA")
}
}

module.exports = auth;