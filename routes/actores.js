const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


//primer servicio, necesito consultar todos las filas de la tabla actores
router.get('/estudiantes', (req, res)=>{
     mysqlConnection.query('SELECT * FROM actores', (err, rows, fields)=>{
         if(!err) {
             res.json(rows);
         }else {
             console.log(err);
         }
     });
});


//Servicio de consulta por id
router.get('/estudiantes/:id', (req, res)=>{
    const { id } = req.params
    mysqlConnection.query('SELECT * FROM actores WHERE id = ?', [id],
         (err, rows, fields)=>{
        if(!err) {
            res.json(rows[0]);
        }else {
            console.log(err);
        }
    });
});

//Servicio para registrar un nuevo estudiante
router.post('/nuevo-estudiante', (req, res)=>{
  const { nombres, apellidos, correo, documento, telefono_celular, fecha_nacimiento,
  institucion_id} = req.body;

  let alumno = [ nombres, apellidos, correo, documento, telefono_celular, fecha_nacimiento,
    institucion_id];

  let nuevoAlumno = `INSERT INTO actores(nombres, apellidos, correo, documento, telefono_celular, fecha_nacimiento,
    institucion_id) VALUES(?,?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoAlumno, alumno, (err, results, fields)=>{
      if(err){
          return console.error(err.message);
      } else{
          res.json({message: `Alumno fue matriculado`})
      }
  });

});


//Tercer servicio, Actualización de un alumno
router.put('/estudiante/:id', (req, res)=>{
    const { nombres, apellidos, correo, documento, telefono_celular, fecha_nacimiento,
        institucion_id} = req.body;
    const { id } = req.params;
    mysqlConnection.query(`UPDATE actores SET nombres = ?, apellidos = ?, correo =?,
     documento = ?, telefono_celular = ?, fecha_nacimiento = ?, institucion_id = ? WHERE id = ?`, [nombres, apellidos, correo, documento, telefono_celular, fecha_nacimiento,
        institucion_id, id], (err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se han actualizado datos del estudiante'});
        }else {
            console.log(err);
        }
    });
})

//Cuarto servicio, borrar un registro de un tabla

router.delete('/estudiante/:id',(req,res)=>{
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM actores WHERE id = ?`, 
             [id],(err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se ha eliminado el estudiante'});
        }else {
            console.log(err);
        }
    });
});





module.exports = router;




