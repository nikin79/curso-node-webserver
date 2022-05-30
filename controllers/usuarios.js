const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { pagina, mostrar} = req.query;

    res.json({
        message: 'get API - controller',
        pagina,
        mostrar
    });
}

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
        message: 'post API - controller',
        body
    });
};

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        message: 'put API - controller',
        id
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        message: 'delete API - controller'
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        message: 'patch API - controller'
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}