const { Router } = require('express');
const { createProyecto,getProyectos,getProyectoByID,updateIProyecto} = require('../controllers/proyecto');

const router = Router();

/**
 * Obtiene todos los inventarios
 */
router.get('/', getProyectos);

/**
 * Obtiene un inventario por id
 */
// router.get('/:id', getInventarioByID);

/**
 * Crear un inventario
 */
router.post('/', createProyecto);

/**
 * Actualiza un inventario por id
 */
//router.put('/:id', updateInventario);


module.exports = router;