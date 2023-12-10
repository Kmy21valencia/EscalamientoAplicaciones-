const { Router } = require('express');

const { createEtapa,getEtapas,getEtapaById,updateEtapaById  } = require('../controllers/etapa');

const router = Router();
//crear
router.post('/', createEtapa);
//consultar todos
router.get('/', getEtapas);
//consultar por id
router.get('/:id', getEtapaById);
// actualizar por id
router.put('/:id', updateEtapaById);
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