var express = require('express');
var router = express.Router();
var Category = require('../models/categoryModel');


router.get('/:id?',function(req,res,next){
    
    if(req.params.id){
        Category.getCategory(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        Category.getAllCategory(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});

router.put('/:id',function(req,res,next){

    Category.updateCategory(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    Category.deleteCategory(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    Category.insertCategory(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports = router;