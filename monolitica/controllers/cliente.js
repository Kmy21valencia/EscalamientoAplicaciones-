    const { request, response } = require('express');
    const Cliente= require('../models/cliente');

    const createCliente = async (
        req = request, res = response
        ) => {

    try{
        const {nombre,correo} = req.body
     const clienteBD = await Cliente.findOne({ nombre});
     if(clienteBD){// ya existe el proyecto
         return res.status(400).json({msg: 'Ya existe el cliente'});
     }
  
     const datos = {
         nombre,correo
     };
     const cliente = new Cliente(datos); 
     await cliente.save();
    return res.status(201).json(cliente);
    }catch(e){
       return res.status(500).json({msj: e})
    }
    
 }


const getClientes = async (req, res = response) => {
    try{
        let clienteBD = await Cliente.find()
       return res.json(clienteBD);
    }catch(e){
       return res.status(500).json({msj: e})
    }

}


const getClienteById = async (req = request, res = response) => {
   try{
        const {id}  = req.params;
        console.log(id)
        const query = { _id: id };
        const cliente = await Cliente.findOne(query);
        res.json(cliente);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}


const updateClienteById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data  = req.body;// destructuring, spread (...)
        data.fechaAtualizacion = new Date()
        const cliente = await Cliente.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(cliente);
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


module.exports = {createCliente,getClientes,getClienteById,updateClienteById };