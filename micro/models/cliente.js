const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Debe colocar un nombre'],
    },
    mail: {
        type: String,
        required: [true, 'Debe colocar un Correo'],
        unique:true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }

});

module.exports = model('Cliente', ClienteSchema);