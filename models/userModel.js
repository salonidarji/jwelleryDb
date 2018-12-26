var db = require('../dbconnection');

var User = {

    getAllUser:function(callback) {
        return db.query('select * from user_tbl',callback);
    },
    getUser:function(id,callback) {
        return db.query('select * from user_tbl where pk_user_id=?',[id],callback);
    },
    insertUser:function(item,callback) {
        return db.query('insert into user_tbl values (?,?,?,?)',[item.pk_user_id,item.user_name,item.user_password,item.user_mobile],callback);
    },
    updateUser:function(id,item,callback) {
        return db.query('update user_tbl set user_name=?, user_password=?, user_mobile=? where pk_user_id=?'
        ,[item.user_name, item.user_password , item.user_mobile , id]
        , callback);
    },
    deleteUser:function(id,callback) {
        return db.query('delete from user_tbl where pk_user_id=?', [id] , callback);
    }
};

module.exports = User;