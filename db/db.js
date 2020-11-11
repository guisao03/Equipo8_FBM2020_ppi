const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'bvue38uo5zskfop92p87-mysql.services.clever-cloud.com',
    user: 'u2v26xmqjatowj1y',
    password: 'GDC6AmIdwOzCMOHJ3Urs',
    database: 'bvue38uo5zskfop92p87',
    multipleStatements: true
});

mysqlConnection.connect( (error) =>{
    if(error){
        console.error(error);
        return;
    } else {
        console.log('Base de datos conectada');
    }
})

module.exports = mysqlConnection;