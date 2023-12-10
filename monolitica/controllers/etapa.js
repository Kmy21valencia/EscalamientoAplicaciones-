const { request, response } = require('express');
const Etapa= require('../models/etapa');

const createEtapa = async (
    req = request, res = response
    ) => {

    try{
        const {nombre} = req.body
     const etapaBD = await Etapa.findOne({ nombre });
     if(etapaBD){// ya existe el proyecto
         return res.status(400).json({msg: 'Ya existe etapa'});
     }
  
     const datos = {
         nombre
     };
     const etapa = new Etapa(datos); 
     await etapa.save();
    return res.status(201).json(etapa);
    }catch(e){
       return res.status(500).json({msj: e})
    }
    
 }


const getEtapas = async (req, res = response) => {
    try{
        let etapasBD = await Etapa.find()
       return res.json(etapasBD);
    }catch(e){
       return res.status(500).json({msj: e})
    }

}


const getEtapaById = async (req = request, res = response) => {
   try{
        const {id}  = req.params;
        console.log(id)
        const query = { _id: id };
        const etapa = await Etapa.findOne(query);
        res.json(etapa);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}


const updateEtapaById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data  = req.body;// destructuring, spread (...)
        data.fechaAtualizacion = new Date()
        const etapa = await Etapa.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(etapa);
    }catch(e){
        return res.status(500).json({msg: e});
    }
   
}

/**
 * Borrar un tipo de equipo por su ID
 */
const deleteEtapaByID = async (req = request, res = response) => {
    // try- catch
  /*  const id = req.params.id;
    const tipoEquipo = await TipoEquipo.findByIdAndDelete(id);
    res.status(204).json(tipoEquipo);*/
}

/**
 * Consulta todos los tipos de equipo
 */
const getEtapa= async (req, res = response) => {
   /* const query = {};    
    const tiposEquipoBD = await TipoEquipo.find(query);
    res.json(tiposEquipoBD);*/
}

/**
 * crea un tipo de eqipo
 */


module.exports = {createEtapa,getEtapas,getEtapaById,updateEtapaById };