var mysql= require('mysql');
var connection= mysql.createPool({
 
        host:'localhost',
        user:'root',
        password:'',
        database:'jwellary'
 
});
 module.exports=connection;