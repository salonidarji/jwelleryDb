var mysql= require('mysql');
var connection= mysql.createPool({
 
        host:'localhost',
        user:'root',
        password:'',
        database:'jwellerydb'
 
});
 module.exports=connection;