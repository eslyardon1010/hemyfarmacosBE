const express = require('express');
const router = express.Router();
const { verifyApiHeaderToken } = require('./headerVerifyMiddleware');

const { passport, jwtMiddleware } = require('./seguridad/jwtHelper');

const medicamentosRoutes = require('./medicamentos/medicamentos');
const clientesRoutes = require('./clientes/clientes');
const proveedoresRoutes = require('./proveedores/proveedores');


const seguridadRoutes = require('./seguridad/seguridad');

router.use(passport.initialize());
//public
router.use('/seguridad', verifyApiHeaderToken, seguridadRoutes);
//middlewares

router.use('/medicamentos',
    verifyApiHeaderToken,
    jwtMiddleware,
    medicamentosRoutes);

router.use('/clientes',
    verifyApiHeaderToken,
    jwtMiddleware,
    clientesRoutes);

 router.use('/proveedores',
    verifyApiHeaderToken,
    jwtMiddleware,
    proveedoresRoutes);
       
module.exports = router;