const bcrypt = require('bcrypt') 
const usuario = require("../models/usuarios")

const loginController = {
    loginview: (req, res) => {
        return res.render('login')
    },

    login: async (req,res) => {
        const login = {
            email,
            password
        } = req.body

        const user = await usuario.findOne ({
            where: {
                email
            }
    
        }) 
        if (!user) {
           return res.render('login')
        }
        const senhaValida = bcrypt.compareSync (password,user.password)
        if (!senhaValida) {
            return res.render('login')
        }
        return res.render('carrinho')
    } 
}

module.exports = loginController;
