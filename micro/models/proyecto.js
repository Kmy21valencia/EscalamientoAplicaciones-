const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Debe colocar un número'],
        unique: [true, 'El numero debe ser unico '],
    },
    titulo: {
        type: String,
        required: [true, 'Debe colocar un número'],
    },
    fechaInicio: {
        type: Date,

    },
    fechaEntrega: {
        type: Date,
  
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
  
    },
    valor: {
        type: String,
        required: [true, 'Debe colocar un valor'],
    },
    
    // resto de atributos
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    universidades: {
        type: Schema.Types.ObjectId,
        ref: 'Universidades',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    }
});

module.exports = model('Proyecto', ProyectoSchema);
/*
{
    "numero": "",
    "cliente":{_id:""},
    "descripcion": "",
    "foto": "",
    "color": "",
    "fechaCompra": "",
    "precio", 0,
    "usuario": "",
    "marca": "",
    "estado": "",
    "tipoEquipo": ""
}*/