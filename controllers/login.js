var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var User = require('../models/user');
var Student = require('../models/student');
var Assignment = require('../models/assignment');
var logger = require('morgan');



router.post('/', function(req, res){
	console.log(req);
	console.log("At the router login.");
	User.findOne({'email': req.body.email, 'password': req.body.password}, '_id', function(err, user) {
		if (err) return (err);
		console.log("This is the user id:" + user._id);
		res.send(user._id);
	});
});


module.exports = router;
