const { Router } = require('express');

const { createTipoProyecto,getTiposProyectos,getTipoProyectoById,updateTipoProyectoById  } = require('../controllers/tipoProyecto');

const router = Router();
//crear
router.post('/', createTipoProyecto);
//consultar todos
router.get('/', getTiposProyectos);
//consultar por id
router.get('/:id', getTipoProyectoById);
// actualizar por id
router.put('/:id', updateTipoProyectoById);
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