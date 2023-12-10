
const { request, response } = require('express');
const Proyecto = require('../models/proyecto');
const Cliente =  require('../models/cliente');
const TipoProyecto = require('../models/tipoProyecto');
const Universidad = require('../models/universidad');
const Etapa = require('../models/etapa');
const createProyecto = async (req = request, res = response) => {
    try{
         const { cliente, tipoProyecto, universidad, etapa} = req.body;
 
         const clienteBD = await Cliente.findOne({
          _id: cliente._id
         });
         if(!clienteBD){
             return res.status(400).json({
                 msj: 'Ya existe cliente'
             })
         }

         
         const tipoProyectoBD = await TipoProyecto.findOne({
            _id: tipoProyecto._id
           });
           if(!tipoProyectoBD){
               return res.status(400).json({
                   msj: 'Ya existe el tipo proyecto'
               })
           }

           const universidadBD = await Universidad.findOne({
            _id: universidad._id
           });
           if(!universidadBD){
               return res.status(400).json({
                   msj: 'Ya existe el tipo proyecto'
               })
           }

           const etapaBD = await Etapa.findOne({
            _id: etapa._id
           });
           if(!etapaBD){
               return res.status(400).json({
                   msj: 'Ya existe el tipo proyecto'
               })
           }
       
       

 
         const proyecto = new Proyecto(req.body);
         await proyecto.save();
         return res.status(201).json(proyecto);
     }catch(e){
         return res.status(500).json({
             msj: e
         });
     }
 }
 

/**
 * Consultar todos inventarios
 */
const getProyectos = async (req, res = response) => {
    console.log('calling getProyectos!')
   try{
        const query = {};
        const proyectosBD = await Proyecto.find()
        .populate({
            path: 'cliente',
            
        })
        .populate({
            path: 'tipoProyecto',
            
        })

        .populate({
            path: 'universidades',
            
        })
        .populate({
            path: 'etapa',
            
        })
        return res.json(proyectosBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

/**
 * Consultar todos inventarios
 */
 const getProyectoByID = async (req = request, res = response) => {
   try{
        const { id } = req.params;
        const query = { _id: id};
        const inventarioBD = await Proyecto.findOne(query).populate({
            path: 'cliente',
            
        });
        // TODO: personalizar error de no encontrado
        res.json(proyectoBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

/**
 * crea un inventario
 */
 
const updateIProyecto = async (req = request, res = response) => {
   try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
    
        const proyectoBD = await Proyecto.findOne({ _id: id});
       // TODO: VALIDAR QUE EXISTEN Y ESTAN ACTIVOS: ESTADO, USUARIO, MARCA, ...
       if(!proyectoBD){
        return res.status(400).json({
            msj: 'No existe este proyecto'
        });
       } 
        const proycto = await Proyecto.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(proyecto);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }

    
}


module.exports = { createProyecto,getProyectos,getProyectoByID,updateIProyecto };

/*De esta manera se debe poner en el body en el posman
    {
        "numero":"",
        "cliente":{
            _id:""
        },
        "tipoProyecto":{
            _id: ""
        }
    }*/