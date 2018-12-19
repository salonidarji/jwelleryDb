var express = require('express');
var router = express.Router();
var Jwellery = require('../models/jwelleryModel');

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        Jwellery.getJwellery(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        Jwellery.getAllJwellery(function(err,rows){
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

    Jwellery.updateJwellery(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    Jwellery.deleteJwellery(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    Jwellery.insertJwellery(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});



module.exports = router;