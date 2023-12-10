
const { request, response } = require('express');
const Universidad= require('../models/universidad');

const createUniversidad = async (
    req = request, res = response
    ) => {

    try{
        const {nombre,direccion,telefono} = req.body
     const universidadBD = await Universidad.findOne({ nombre });
     if(universidadBD){// ya existe el proyecto
         return res.status(400).json({msg: 'Ya existe Universidad'});
     }
  
     const datos = {
         nombre,direccion,telefono
     };
     const universidad = new Universidad(datos); 
     await universidad.save();
    return res.status(201).json(universidad);
    }catch(e){
       return res.status(500).json({msj: e})
    }
    
 }


const getUniversidades = async (req, res = response) => {
    try{
        let universidadesBD = await Universidad.find()
       return res.json(universidadesBD);
    }catch(e){
       return res.status(500).json({msj: e})
    }

}


const getUniversidadById = async (req = request, res = response) => {
   try{
        const {id}  = req.params;
        console.log(id)
        const query = { _id: id };
        const universidad = await Universidad.findOne(query);
        res.json(universidad);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}


const updateUniversidadById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data  = req.body;// destructuring, spread (...)
        data.fechaAtualizacion = new Date()
        const universidad = await Universidad.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(universidad);
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


module.exports = {createUniversidad,getUniversidades,getUniversidadById,updateUniversidadById };