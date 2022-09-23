const {request, response} = require('express')
const Usuario = require("../models/usuario")


const userGet= (req, res) => {
    const query = req.query
    res.json({
        "msj": "Get!",
        query
    });
} 
const userPost = async(req, res) => {
    const body = req.body
    const usuario = new Usuario(body)
    await usuario.save()
    res.json({
        "msj": "Post!",
        usario
    });
} 
const userPut= (req, res) => {
    const id = req.params
    res.json({
        "msj": "Put!",
        id
    });
} 
const userDelete= (req, res) => {
    res.json({
        "msj": "Delete"
    });
} 
module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete    
}

    