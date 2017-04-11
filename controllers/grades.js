var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var Student = require('../models/student');
var Assignment = require('../models/assignment');
var logger = require('morgan');
var User = require('../models/User');



//======================
// SAVE ASSIGNMENT
//======================

router.patch('/:id', function saveAction(request, response) {
  var id = request.params.id;
  var clientUser = request.body.user;

  console.log("I'm in save router 1:" + clientUser + "id:" + id);


  User.findById((id), function(error, user) {
    console.log("findbyiduser user:" + user);
  }).exec(function(error, user) {
    user.students.forEach(function (student, studentIndex) {
      console.log("student name" + studentIndex);
      student.assignments.forEach(function (assignment, assignIndex) {
        console.log("assignment name" + assignIndex);
        assignment.pointsEarned = clientUser.students[studentIndex].assignments[assignIndex].pointsEarned;
        console.log(assignment.pointsEarned);
      })
    });
    user.save();
  });
  response.json({user: user});
});




module.exports = router;
