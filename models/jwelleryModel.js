var db = require('../dbconnection');

var Jwellery = {

    getAllJwellery:function(callback){
        return db.query("select * from jwellery_tbl",callback);
    },
    getJwellery:function(id,callback){
        return db.query("select * from jwellery_tbl where pk_jwellery_id=?",[id],callback);
    },
    insertJwellery:function(item,callback){
        return db.query("INSERT INTO jwellery_tbl VALUES(?,?,?,?,?)",[item.pk_jwellery_id,item.jwellery_name,item.jwellery_price,item.jwellery_image,item.fk_category_id],callback);
    },
    deleteJwellery:function(id,callback){
        return db.query("delete from jwellery_tbl where pk_jwellery_id=?",[id],callback);
    },
    updateJwellery:function(id,item,callback){
        return db.query("update jwellery_tbl set jwellery_name=? , jwellery_price=? , jwellery_image=? , fk_category_id=? where pk_jwellery_id=?",[item.jwellery_name,item.jwellery_price,item.jwellery_image,item.fk_category_id,id],callback);
    }
    
};

module.exports = Jwellery;