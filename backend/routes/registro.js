const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


//necesito consultar todos las filas de la tabla registro
router.get('/', (req, res)=>{
     mysqlConnection.query('SELECT * FROM registro', (err, rows, fields)=>{
         if(!err) {
             res.json(rows);
         }else {
             console.log(err);
         }
     });
});

//Servicio para registrar un nuevo usuario
router.post('/usuario/nuevo', (req, res)=>{
  const { nombre, apellido, correo, contraseña } = req.body;

  let usuario = [ nombre, apellido, correo, contraseña];

  let nuevoUsuario = `INSERT INTO registro(nombre, apellido, correo, contraseña) VALUES(?,?,?,?)`;
  mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields)=>{
      if(err){
          return console.error(err.message);
      } else{
          res.json({message: `Usuario registrado`})
      }
  });
});

//Actualización de un usuario
router.put('/registro/actualizar', (req, res)=>{
    const { nombre, apellido, correo, contraseña } = req.body;
    const { actualizar } = req.params;
    mysqlConnection.query(`UPDATE registro SET nombre = ?, apellido = ?, correo =?,
      contraseña = ? WHERE actualizar = ?`, [nombre, apellido, correo, contraseña, actualizar], (err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se han actualizado los datos del usuario'});
        }else {
            console.log(err);
        }
    });
})

//Borrar un registro de una tabla
router.delete('/registro/borrar',(req,res)=>{
    const { borrar } = req.params;
    mysqlConnection.query(`DELETE FROM registro WHERE borrar = ?`, 
             [borrar],(err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se ha eliminado el usuario'});
        }else {
            console.log(err);
        }
    });
});

module.exports = router;




