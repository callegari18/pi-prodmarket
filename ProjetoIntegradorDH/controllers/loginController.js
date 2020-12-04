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
