const express = require('express');
const app = express();
const actores = require('./routes/actores');
const modulos = require('./routes/modulos');
const colegios = require('./routes/colegios');


app.set('port', 4001);

app.use(express.json());

//rutas
app.use('/api', actores);
app.use('/api/modulos', modulos);
app.use('/api/colegios', colegios);


app.listen(app.get('port'), ()=>{
 console.log(`Server on port ${app.get('port')}`);
})