const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


//necesito consultar todos las filas de la tabla registro de entrenador
router.get('/', (req, res)=>{
     mysqlConnection.query('SELECT * FROM registro_entrenador', (err, rows, fields)=>{
         if(!err) {
             res.json(rows);
         }else {
             console.log(err);
         }
     });
});

//Servicio para registrar un nuevo usuario entrenador
router.post('/entrenador/nuevo', (req, res)=>{
  const { nombre, apellido, correo, contraseña, años_de_experiencia, especializacion, instituciones} = req.body;

  let entrenador = [ nombre, apellido, correo, contraseña, años_de_experiencia, especializacion, instituciones];

  let nuevoEntrenador = `INSERT INTO registro_entrenador(nombre, apellido, correo, contraseña, años_de_experiencia, especializacion, instituciones) VALUES(?,?,?,?,?,?,?)`;
  mysqlConnection.query(registro_entrenador, entrenador, (err, results, fields)=>{
      if(err){
          return console.error(err.message);
      } else{
          res.json({message: `Entrenador registrado`})
      }
  });

});


//Actualización de un usuario
router.put('/entrenador/actualizar', (req, res)=>{
    const {nombre, apellido, correo, contraseña, años_de_experiencia, especializacion, instituciones} = req.body;
    const { actualizar } = req.params;
    mysqlConnection.query(`UPDATE registro_entrenador SET nombre = ?, apellido = ?, correo =?,
      contraseña = ?, años_de_experiencia = ?, especializacion = ?, instituciones = ? WHERE actualizar = ?`, [nombre, apellido, correo, contraseña, años_de_experiencia, especializacion, instituciones], (err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se han actualizado los datos del entrenador'});
        }else {
            console.log(err);
        }
    });
})

//Borrar un registro de una tabla
router.delete('/entrenador/borrar',(req,res)=>{
    const { borrar } = req.params;
    mysqlConnection.query(`DELETE FROM registro_entrenador WHERE borrar = ?`, 
             [borrar],(err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se ha eliminado el entrenador'});
        }else {
            console.log(err);
        }
    });
});

module.exports = router;




