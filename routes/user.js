var express = require('express');
var router = express.Router();
var user = require('../models/userModel');

router.get('/:id?',function(req,res,next) {

    if(req.params.id) {
        user.getUser(req.params.id,function(rows,err) {
            if(rows){
                res.json(rows);
            }
            else{
                res.json(err);
            }
        });
    }
    else{
        user.getAllUser(function(rows,err) {
            if(rows) {
                res.json(rows);
            }
            else {
                res.json(err);
            }
        });
    }
});

router.post('/',function(req,res,next) {
    user.insertUser(req.body,function(rows,err) {
        if(rows) {
            res.json(rows);
        }
        else{
            res.json(err);
        }
    });
});

router.put('/:id',function(req,res,next) {
    user.updateUser(req.params.id, req.body , function(rows,err){
        if(rows){
            res.json(rows);
        }
        else{
            res.json(err);
        }
    });
});

router.delete('/:id',function(req,res,next) {
    user.deleteUser(req.params.id, function(rows,err) {
        if(rows) {
            res.json(rows);
        }
        else{
            res.json(err);
        }
    });
});

module.exports = router;