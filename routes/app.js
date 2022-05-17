const e = require('express');
var express = require('express'); 
var mongoose = require('mongoose'); 
var router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/node-angular"); 

module.exports = router;