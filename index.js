const express = require('express');
const app = express();

const usuarios = require('./routes/usuarios');
const usuario_entrenador = require('./routes/usuario_entrenador');
const usuario_administrador = require('./routes/usuario_administrador');

const registro = require('./routes/registro');
const registro_entrenador = require('./routes/registro_entrenador');
const registro_administrador = require('./routes/registro_administrador');

const cors = require('cors'); 

//Uso de cors
app.use(cors({origin: '*'})); 
// conectar con el link de su frontend app.use(cors({origin: 'https://ppi-app.olympo.app/'}))

app.set('port', process.env.PORT || 4000);

app.use(express.json());

//rutas
app.use('/api/usuarios', usuarios);
app.use('/api/usuario/entrenador', usuario_entrenador);
app.use('/api/usuario/administrador', usuario_administrador);
app.use('/api/registro', registro);
app.use('/api/registro/entrenador', registro_entrenador);
app.use('/api/registro/administrador', registro_administrador);



app.listen(app.get('port'), ()=>{
 console.log(`Server on port ${app.get('port')}`);
})