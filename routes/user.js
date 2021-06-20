const { Router } = require('express');
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
} = require('../controllers/user.controller');
const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

module.exports = router;