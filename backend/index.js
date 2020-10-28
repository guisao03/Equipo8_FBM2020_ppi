const express= require('express');
const app = express();
const routes= require('./routes/routes');
//ajustes
app.set('port',4001)


// Middleware
app.use(express.json());


// rutas
app.use('/api',routes);


//ajustes
app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
}) 