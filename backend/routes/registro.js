//const { response } = require('express');
const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');
router.get('/',(req,res)=>{
mysqlConnection.query('SELECT * FROM registro',(err,rows,fiels)=>{
//si no hay error
    if(!err){
//haga esto
res.json(rows);
}else{
    //si no (si hay un error)
    console.log(err);
}//fin si
});//fin query
});//fin retorno de todos los estudiantes

//al final de todas las declaraciones
module.exports = router;