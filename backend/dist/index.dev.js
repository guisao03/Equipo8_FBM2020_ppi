"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

var usuarios = require('./routes/usuarios');

var usuario_entrenador = require('./routes/usuario_entrenador');

var usuario_administrador = require('./routes/usuario_administrador');

var registro = require('./routes/registro');

var registro_entrenador = require('./routes/registro_entrenador');

var registro_administrador = require('./routes/registro_administrador'); //importante para conexion del front con el back
//Uso de cors


app.use(cors({
  origin: '*'
})); // conectar con el link de su frontend app.use(cors({origin: 'https://ppi-app.vercel.app/'}))

app.set('port', process.env.PORT || 3000);
app.use(express.json()); //rutas
// app.use('/api/usuarios', usuarios);
// app.use('/api/usuario/entrenador', usuario_entrenador);
// app.use('/api/usuario/administrador', usuario_administrador);

app.use('/api/registro', registro);
app.use('/api/registro/entrenador', registro_entrenador);
app.use('/api/registro/administrador', registro_administrador);
app.listen(app.get('port'), function () {
  console.log("Server on port ".concat(app.get('port')));
});