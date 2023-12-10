const express = require('express');

const app = express();
const {  mongoConn } = require('./databases/configuration');
mongoConn()

const cors = require('cors');

const tiposProyecto = require('./routes/tipoProyecto');
const clientes = require('./routes/cliente');

const etapas = require('./routes/etapa');
const universidades = require('./routes/universidad');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/api/tiposproyectos', tiposProyecto);

app.use('/api/clientes', clientes);
app.use('/api/etapa',etapas);
app.use('/api.universidad',universidades);

module.exports = app;