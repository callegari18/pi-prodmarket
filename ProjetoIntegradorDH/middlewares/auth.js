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
    };

    req.session.carrinho = [
        {
          id: 1,
          categoria: 'Aves',
          nome: 'Ave',
          tipo: 'Chester',
          quantidade: '200',
          valor: '20.90',
          imagem: 'bba46afabdee282b-chester.jpg',
          Usuarios_id: 1,
          createdAt: '2020-12-09T20:54:58.000Z',
          updatedAt: '2020-12-09T20:54:58.000Z',
          usuarios_id: 1,
          usuarios: {
            id: 1,
            tipo: 'Comprar,Vender',
            nome: 'VINICIUS CALLEGARI',
            cnpj: '00000000000100',
            ie: 'isento',
            nome_fantasia: 'FAZENDA CALLEGARI',
            ramo: 'Carnes',
            codigo_ap: '',
            codigo_as: '',
            codigo_natureza: '',
            telefone: '99999999',
            email: 'callegari@callegari.com.br',
            password: '$2b$10$oR8/fPYFIKe9rExZhLET..N1MLzp/b2kTeJuseiMkKoLpv0Qb1Fo2',
            imagem: '386551d7dda0a043-profile.jpg',
            responsavel: 'VINICIUS',
            createdAt: '2020-12-09T20:49:30.000Z',
            updatedAt: '2020-12-09T20:49:30.000Z'
          }
        },
        {
          id: 2,
          categoria: 'Aves',
          nome: 'Galinha ',
          tipo: 'Brahma',
          quantidade: '400',
          valor: '20.90',
          imagem: 'dca799885c6ab99b-brahma.jpg',
          Usuarios_id: 1,
          createdAt: '2020-12-09T21:03:31.000Z',
          updatedAt: '2020-12-09T21:03:31.000Z',
          usuarios_id: 1,
          usuarios: {
            id: 1,
            tipo: 'Comprar,Vender',
            nome: 'VINICIUS CALLEGARI',
            cnpj: '00000000000100',
            ie: 'isento',
            nome_fantasia: 'FAZENDA CALLEGARI',
            ramo: 'Carnes',
            codigo_ap: '',
            codigo_as: '',
            codigo_natureza: '',
            telefone: '99999999',
            email: 'callegari@callegari.com.br',
            password: '$2b$10$oR8/fPYFIKe9rExZhLET..N1MLzp/b2kTeJuseiMkKoLpv0Qb1Fo2',
            imagem: '386551d7dda0a043-profile.jpg',
            responsavel: 'VINICIUS',
            createdAt: '2020-12-09T20:49:30.000Z',
            updatedAt: '2020-12-09T20:49:30.000Z'
          }
        }
      ]

    if(typeof(req.session.usuario)!="undefined"){
        next()
}else{
    return res.send("VOCÊ PRECISA SE LOGAR PARA ACESSAR ESTA PÁGINA")
}
}

module.exports = auth;