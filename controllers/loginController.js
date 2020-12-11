const bcrypt = require('bcrypt')
const {Usuarios} = require("../models")

const loginController = {
    loginview: (req, res) => {
        return res.render('login',{usuario: req.session.usuario})
    },

    login: async (req,res) => {
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
        const usuario = user.toJSON();
        usuario.password = undefined;

        req.session.usuario = usuario;

        return res.redirect('/')
        }

    },

    logout:(req,res)=>{
        req.session.destroy() 
        return res.redirect("/") 
    }, 
}

module.exports = loginController;
