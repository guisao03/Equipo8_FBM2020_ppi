const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM modulos', (err, rows, field) =>{
        if(!err){
             res.json(rows);
        }else{
          console.log(err)
       }
    });
});


//servicio para la tabla modulos pueda solicitar por id algun registro de la tabla
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM modulos WHERE id = ?', [id], (err, rows, field) =>{
        if(!err){
             res.json(rows[0]);
        }else{
          console.log(err)
       }
    });
});


router.post('/nuevo-modulo', (req, res)=>{
    const { modulo, modPrefi } = req.body;
  
    let campo = [ modulo, modPrefi ];
  
    let otroCampo = `INSERT INTO modulos(modulo, modPrefi) VALUES(?,?)`;
    mysqlConnection.query(otroCampo, campo, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `Se agregó otro modulo`})
        }
    });
  
  });


  router.put('/modulos/:id', (req, res)=>{
    const { modulo, modPrefi}=req.body;
    const { id } = req.params;
    mysqlConnection.query(`UPDATE modulos SET modulo = ?, modPrefi = ? WHERE id = ?`,  
    [modulo, modPrefi, id], (err, rows, fields)=>{
   
        if(!err){
            res.json({status: 'Se actualizo un modulo'})
        } else{
            return console.error(err.message);
        }
      });
    
    });


    router.delete('/modulos/:id',(req,res)=>{
        const { id } = req.params;
        mysqlConnection.query(`DELETE FROM modulos WHERE id = ?`, 
                 [id],(err, rows, fields)=>{
            if(!err) {
                res.json({status: 'Se ha eliminado el modulo'});
            }else {
                console.log(err);
            }
        });
    });

module.exports = router;