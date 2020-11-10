const mysql = require('mysql');
const mysqlConnection=mysql.createConnection({
host:'bo2aeq5eigqfskpl7o1l-mysql.services.clever-cloud.com',
user:'ucuxylf3ti3uses3',
password:'xiBdsQU3jaZ40t3KGedl',
database:'bo2aeq5eigqfskpl7o1l',
multipleStatements:true
});//fin conexión

mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{
    console.log('Base de datos conectada')
}

});

module.exports = mysqlConnection;