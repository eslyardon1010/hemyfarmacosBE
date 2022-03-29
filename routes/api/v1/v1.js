const express = require('express');
const router = express.Router();
const { verifyApiHeaderToken } = require('./headerVerifyMiddleware');

const { passport, jwtMiddleware } = require('./seguridad/jwtHelper');

const medicamentosRoutes = require('./medicamentos/medicamentos');
const clientesRoutes = require('./clientes/clientes');
const proveedoresRoutes = require('./proveedores/proveedores');
const ventasRoutes = require('./ventas/ventas');

const seguridadRoutes = require('./seguridad/seguridad');

router.use(passport.initialize());
//public
router.use('/seguridad', verifyApiHeaderToken, seguridadRoutes);
//middlewares

//RUTA PARA MEDICAMENTOS
router.use('/medicamentos',
    verifyApiHeaderToken,
    jwtMiddleware,
    medicamentosRoutes);

    //RUTA PARA CLIENTES
router.use('/clientes',
    verifyApiHeaderToken,
    jwtMiddleware,
    clientesRoutes);

    //RUTA PARA PROVEEDORES
 router.use('/proveedores',
    verifyApiHeaderToken,
    jwtMiddleware,
    proveedoresRoutes);
      
    //RUTA PARA VENTAS
 router.use('/ventas',
    verifyApiHeaderToken,
    jwtMiddleware,
    ventasRoutes);   

module.exports = router;