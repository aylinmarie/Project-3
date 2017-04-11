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
// USER REGISTRATION
//======================
// router.post('/', function createUser(req, res){
// 	console.log('body:',request.body);
//
//   var user = new User(request.body);
//
//   user.save(function(error) {
//     if(error) response.json({messsage: 'Could not ceate user b/c:' + error});
//
//     response.json({user: user});
//   });
// });

//======================
// CREATE ASSIGNMENT
//======================
router.put('/:id', function updateAction(request, response) {

  console.log ('I made it to the put');

  var newAssignment = new Assignment({
    name: request.body.name,
    assignmentType: request.body.assignmentType,
		dateCreated: {},
    pointsEarned: 0,
    pointsMax: request.body.pointsMax,
  });
  console.log(newAssignment);


  var id = request.params.id

  User.findById((id), function(error, user) {
    console.log("findbyid user" + user);
  }).exec(function(error, user) {
    user.students.forEach(function(student) {
      student.assignments.push(newAssignment);

    });
  user.save();
  })
});



//=============================
// Delete User
//=============================
router.delete('/:id', function destroyAction(request, response) {
  var id = request.params.id;

  User.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete criminal b/c:' + error});

    response.json({message: 'Criminal successfully deleted'});
  });
});

module.exports = router;
