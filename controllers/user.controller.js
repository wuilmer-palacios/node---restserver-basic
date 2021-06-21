const { response, request } = require('express');

const usuariosGet = (req = request, res = response ) => {

    const query = req.query;

    res.json({
        msg: 'get API - controller',
        query
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

    const { id } = req.params;

    res.json({
        msg: 'Put API - controller',
        id
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