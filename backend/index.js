const express = require('express');// declaración
const app = express();//constructor de la clase Express

const routes = require('./routes/routes');//crud
const registro = require('./routes/registro');//crud
const inicio = require('./routes/inicio');//crud

app.set('port',3000)


//middleware
app.use(express.json());

//ajustes
app.use('/api',routes);// peticiones directas, acciones, callback
app.use('/api/registro',registro)
app.use('/api/inicio',inicio)

app.listen(app.get('port'),()=>{
console.log('Servidor corriendo en puerto '+app.get('port'));

})

