var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var User = require('../models/user');
var Student = require('../models/student');
var Assignment = require('../models/assignment');
var logger = require('morgan');
var User = require('../models/User');



//=============================
// LOGIN INDEX
//=============================

router.post('/login', function(req, res){
	debugger;
  res.redirect(`/users/${req.session.currentUser._id}`);
});


// router.post('/login', function loginAction(request, response) {
// 	console.log("we made it!!!!!!!!");
// 	var email = request.body.email;
// 	console.log(email);
//
// 	User.findOne({email: email}, function(error, user) {
// 		if(error) response.json({message: 'Could not find the user b/c:' + error});
// 		console.log(email);
// 		response.json({user: user});
// 		console.log("This is the user id:" + user._id);
// 	});
// });


//=============================
// LOGIN POST
//=============================



module.exports = router;
