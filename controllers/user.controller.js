const { response } = require('express');

const usuariosGet = (req, res = response ) => {
    res.json({
        msg: 'get API - controller'
    });
}
const usuariosPost = (req, res = response ) => {

    const body = req.body;
    res.json({
        msg: 'Post API - controller',
        body
    });
}
const usuariosPut = (req, res = response ) => {
    res.json({
        msg: 'Put API - controller'
    });
}
const usuariosPatch = (req, res = response ) => {
    res.json({
        msg: 'Patch API - controller'
    });
}
const usuariosDelete = (req, res = response ) => {
    res.json({
        msg: 'Delete API - controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}