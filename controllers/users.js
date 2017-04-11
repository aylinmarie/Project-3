var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var Student = require('../models/student');
var Assignment = require('../models/assignment');
var logger = require('morgan');
var User = require('../models/user');


//=============================
// Show Page (User Logged In)
//=============================

router.get('/:id', function showAction(request, response) {
	var id = request.params.id;

	User.findById({_id: id}, function(error, user) {
		if(error) response.json({message: 'Could not find the user b/c:' + error});

		response.json({user: user});
	});
});


//======================
// CREATE ASSIGNMENT
//======================
router.put('/:id', function updateAction(request, response) {

  var newAssignment = new Assignment({
    name: request.body.name,
    assignmentType: request.body.assignmentType,
		dateCreated: {},
    pointsEarned: 0,
    pointsMax: request.body.pointsMax,
  });

  var id = request.params.id;

  User.findById((id), function(error, user) {
    console.log("findbyid user " + user);
  }).exec(function(error, user) {
    console.log("from users.js user:" + user);
    user.students.forEach(function(student) {
      student.assignments.push(newAssignment);

    });
  user.save();
  response.json({user:user})
  })
});


module.exports = router;
