const express = require('express');
const router = express.Router();
const Timber  = require('../models/user');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/database');
const passport = require('passport');


router.post("/saveuser",function(req,res ){           //Create temp Recipe obj
    //console.log('save timber call received \n');

    const newUser = new User({
        bundleNumber:req.body.bundleNumber,
        size: req.body.size,
        pieces:req.body.pieces,
        unitPrice: req.body.unitPrice
    });
    Timber.saveTimber(newTimber, function(err,timber){          //Save Temp Recipe
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(timber){
            res.json({state:true,msg:"data inserted",timber:timber});
        }
    });

});

module.exports  = router;