var express = require('express');
var multer = require ('multer');
var upload = multer({ dest:'images/avatar'})


const testeController={

    form:(req,res) => {
       res.render('teste')
    },
    formSend: upload.single('img'), function (req, res, next){
            console.log(req.file)
            
        return res.render('teste')
    }
    
}
module.exports= testeController;