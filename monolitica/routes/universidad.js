const { Router } = require('express');

const { createUniversidad,getUniversidades ,getUniversidadById,updateUniversidadById  } = require('../controllers/universidad');

const router = Router();
//crear
router.post('/', createUniversidad);
//consultar todos
router.get('/', getUniversidades);
//consultar por id
router.get('/:id', getUniversidadById);
// actualizar por id
router.put('/:id', updateUniversidadById);
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