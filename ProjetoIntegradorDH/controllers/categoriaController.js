var express = require('express');
var {Produtos} = require("../models")

const categoriaController = {

viewAves: async (req, res) => {

    let {categoria} = req.params
    let card = await Produtos.findAll({
        where:{
            categoria:categoria.toString()
        }
    })

    console.log(card)

    return res.render('categoria', {card, categoria});
},
viewBovinos: (req, res) => {

    
    return res.send('bovinos');


},
viewCaprinos: (req, res) => {
    return res.send('Caprinos');


},
viewCereais: (req, res) => {
    return res.send('Cereais');


},
viewCogumelos: (req, res) => {
    return res.send('Cogumelos');


},
viewEpeciarias: (req, res) => {
    return res.send('Epeciarias');


},
viewFrutas: (req, res) => {
    return res.send('Frutas');


},
viewFrutosDoMar: (req, res) => {
    return res.send('FrutosDoMar');


},
viewGraos: (req, res) => {
    return res.send('Graos');


},
viewHortalicias: (req, res) => {
    return res.send('Hortalicias');


},
viewLegumes: (req, res) => {
    return res.send('Legumes');


},
viewLeiteDerivados: (req, res) => {
    return res.send('LeiteDerivados');


},
viewMel: (req, res) => {
    return res.send('Mel');


},
viewOleoAzeite: (req, res) => {
    return res.send('OleoAzeite');


},
viewPeixes: (req, res) => {
    return res.send('Peixes');


},
viewSuinos: (req, res) => {
    return res.send('Suinos');


},
viewRaizes:(req,res)=>{
    return res.send('Raizes');
}

};

module.exports=categoriaController;
