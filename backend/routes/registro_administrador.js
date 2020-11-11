const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


//necesito consultar todos las filas de la tabla registro
router.get('/', (req, res)=>{
     mysqlConnection.query('SELECT * FROM registro_administrador', (err, rows, fields)=>{
         if(!err) {
             res.json(rows);
         }else {
             console.log(err);
         }
     });
});

//Servicio para registrar un nuevo usuario
router.post('/administrador/nuevo', (req, res)=>{
  const { nombre, apellido, correo, contraseña, años_de_experiencia, especializacion, instituciones} = req.body;

  let administrador = [ nombre, apellido, correo, contraseña, años_de_experiencia, especializacion, instituciones];

  let nuevoAdministrador = `INSERT INTO registro_administrador(nombre, apellido, correo, contraseña, años_de_experiencia, especializacion, instituciones) VALUES(?,?,?,?,?,?,?)`;
  mysqlConnection.query(registro_administrador, administrador, (err, results, fields)=>{
      if(err){
          return console.error(err.message);
      } else{
          res.json({message: `Administrador registrado`})
      }
  });

});


//Actualización de un usuario
router.put('/administrador/actualizar', (req, res)=>{
    const {nombre, apellido, correo, contraseña, años_de_experiencia, especializacion, instituciones} = req.body;
    const { actualizar } = req.params;
    mysqlConnection.query(`UPDATE registro_administrador SET nombre = ?, apellido = ?, correo =?,
      contraseña = ?, años_de_experiencia = ?, especializacion = ?, instituciones = ? WHERE actualizar = ?`, [nombre, apellido, correo, contraseña, años_de_experiencia, especializacion, instituciones], (err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se han actualizado los datos del administrador'});
        }else {
            console.log(err);
        }
    });
})

//Borrar un registro de una tabla
router.delete('/administrador/borrar',(req,res)=>{
    const { borrar } = req.params;
    mysqlConnection.query(`DELETE FROM registro_administrador WHERE borrar = ?`, 
             [borrar],(err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se ha eliminado el administrador'});
        }else {
            console.log(err);
        }
    });
});

module.exports = router;




