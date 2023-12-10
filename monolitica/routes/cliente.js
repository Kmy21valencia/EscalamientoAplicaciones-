const { Router } = require('express');

const { createCliente,getClientes,getClienteById,updateClienteById  } = require('../controllers/cliente');

const router = Router();
//crear
router.post('/', createCliente);
//consultar todos
router.get('/', getClientes);
//consultar por id
router.get('/:id', getClienteById);
// actualizar por id
router.put('/:id', updateClienteById);
//router.get('/user-activo', getTiposEquipoUserActivo);

/**
 * Obtiene todos los tipos de equipos
 */
//router.get('/', getTiposEquipo);

/**
 * Obtiene un tipos de equipos por id
 */
 //router.get('/:id', getTiposEquipoById);

/**
 * Crear un tipos de equipos
 */
//router.post('/', createTipoEquipo);

/**
 * Actualiza un tipos de equipos por id
 */
//router.put('/:id', updateTipoEquipoById);

/**
 * Actualiza una parte del tipos de equipos
 */
/*router.patch('/:id', (req, res) => {
    res.json({});
});*/

/**
 * Borra un tipos de equipos por id
 */
 //router.delete('/:id', deleteTipoEquipoByID);

module.exports = router;