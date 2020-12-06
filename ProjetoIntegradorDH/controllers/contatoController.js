var express = require('express');
const nodemailer = require("nodemailer");

const contatoController = {
        viewFaq: (req, res) => {
            return res.render('faq');
        },

        sendFaq: (req, res, next) => {
            let form = req.body
            console.log(form)

            var transporter = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "9dd443e707576e",
                    pass: "9d1e66afc64ae6"
                }
            });


            let mailBody = {
                from: "FAQ <faq@prodmarket.com.br>",
                to: "faq@prodmarket.com.br",
                replyTo: form.email,
                subject: "Faq",
                text: form.comentario,

            }

            transporter.sendMail(mailBody, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email enviado:');
                    //res.send(mailOption);
                    alert('msg');
                    res.redirect('/faq');
                }
            })
        },

        viewContato: (req,res) => {
            return res.render('contato');
        },
        sendContato: (req,res) => {
            let form = req.body
            console.log(form)

            var transporter = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "9dd443e707576e",
                    pass: "9d1e66afc64ae6"
                }
            });


            let mailBody = {
                from: "CONTATO <contato@prodmarket.com.br>",
                to: "contato@prodmarket.com.br",
                replyTo: form.email,
                subject: "Contato",
                text: form.comentario,

            }

            transporter.sendMail(mailBody, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email enviado:');
                   
                   
                    res.redirect('/contato');
                    alert('menssagem enviada com sucesso!');
                }
            })
        }

    };
        module.exports=contatoController;

