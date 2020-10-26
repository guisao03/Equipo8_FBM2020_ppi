const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'base_datos_semana_8',
    multipleStatements: true
});

mysqlConnection.connect( (error) =>{
    if(error){
        console.error(error);
        return;
    } else {
        console.log('Base de datos está conectada!');
    }
})

module.exports = mysqlConnection;