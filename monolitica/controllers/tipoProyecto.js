
const { request, response } = require('express');
const TipoProyecto= require('../models/tipoProyecto');

const createTipoProyecto = async (
    req = request, res = response
    ) => {

    try{
        const {nombre} = req.body
     const tipoProyectoBD = await TipoProyecto.findOne({ nombre });
     if(tipoProyectoBD){// ya existe el proyecto
         return res.status(400).json({msg: 'Ya existe tipo Proyecto'});
     }
  
     const datos = {
         nombre
     };
     const tipoProyecto = new TipoProyecto(datos); 
     await tipoProyecto.save();
    return res.status(201).json(tipoProyecto);
    }catch(e){
       return res.status(500).json({msj: e})
    }
    
 }


const getTiposProyectos = async (req, res = response) => {
    try{
        let tiposProyectosBD = await TipoProyecto.find()
       return res.json(tiposProyectosBD);
    }catch(e){
       return res.status(500).json({msj: e})
    }

}


const getTipoProyectoById = async (req = request, res = response) => {
   try{
        const {id}  = req.params;
        console.log(id)
        const query = { _id: id };
        const tipoProyecto = await TipoProyecto.findOne(query);
        res.json(tipoProyecto);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}


const updateTipoProyectoById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data  = req.body;// destructuring, spread (...)
        data.fechaAtualizacion = new Date()
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(tipoProyecto);
    }catch(e){
        return res.status(500).json({msg: e});
    }
   
}

/**
 * Borrar un tipo de equipo por su ID
 */
const deleteTipoEquipoByID = async (req = request, res = response) => {
    // try- catch
  /*  const id = req.params.id;
    const tipoEquipo = await TipoEquipo.findByIdAndDelete(id);
    res.status(204).json(tipoEquipo);*/
}

/**
 * Consulta todos los tipos de equipo
 */
const getTiposEquipo = async (req, res = response) => {
   /* const query = {};    
    const tiposEquipoBD = await TipoEquipo.find(query);
    res.json(tiposEquipoBD);*/
}

/**
 * crea un tipo de eqipo
 */


module.exports = {createTipoProyecto,getTiposProyectos,getTipoProyectoById,updateTipoProyectoById };