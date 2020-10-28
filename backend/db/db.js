const mysql =require('mysql');
const mysqlConnection= mysql.createConnection({
host:'b1ktqxmnioxqrfgsszfd-mysql.services.clever-cloud.com',
user:'uai4ijj5atwzvz2u',
password:'uai4ijj5atwzvz2u',
database:'b1ktqxmnioxqrfgsszfd',
multipleStatements:true
});

mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{

    console.log('base de datos conectada');
}

})
module.exports = mysqlConnection;