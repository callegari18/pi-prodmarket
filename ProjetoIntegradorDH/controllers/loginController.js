const bcrypt = require('bcrypt') 
const {Usuarios} = require("../models")

const loginController = {
    loginview: (req, res) => {
        return res.render('login')
    },

    login: async (req,res) => {
        console.log(req.body)
        const login = {
    
            email,
            password
        } = req.body

        const user = await Usuarios.findOne ({
            where: {
                email
            }
    
        }) 
        if (!user) {
           return res.send("Usuário Inválido")
        }
        const senhaValida = bcrypt.compareSync (password,user.password)
        if (!senhaValida) {
            return res.send("Senha Inválida")
        }else{

        req.session.usuario = user;

        console.log(senhaValida)

        return res.redirect('/')
        } 

    }
}

module.exports = loginController;
