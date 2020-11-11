const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


//necesito consultar todos las filas de la tabla de usuarios
router.get('/', (req, res)=>{
     mysqlConnection.query('SELECT * FROM usuario_administrador', (err, rows, fields)=>{
         if(!err) {
             res.json(rows);
         }else {
             console.log(err);
         }
     });
});

module.exports = router;