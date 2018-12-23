var db = require('../dbconnection')

var Category = {

    getAllCategory:function(callback){
        return db.query("select * from category_tbl",callback);
    },
    getJwelleryByCategory:function(id,callback){
        return db.query("select * from jwellery_tbl where fk_category_id=?",[id],callback);
    },
    insertCategory:function(item,callback){
        return db.query("INSERT INTO category_tbl VALUES(?,?)",[item.pk_category_id,item.category_name],callback);
    },
    deleteCategory:function(id,callback){
        return db.query("delete from category_tbl where pk_category_id=?",[id],callback);
    },
    updateCategory:function(id,item,callback){
        return db.query("update category_tbl set category_name=? where pk_category_id=?",[item.category_name,id],callback);
    }
};

module.exports = Category;