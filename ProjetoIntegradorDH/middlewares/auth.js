function auth(req, res, next){

    if(typeof(req.session.usuario)!="undefined"){
        next()
}else{
    return res.send("VOCÊ PRECISA SE LOGAR PARA ACESSAR ESTA PÁGINA")
}
}

module.exports = auth;