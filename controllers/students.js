var express = require('express');
var router = express.Router({ mergeParams: true });
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var Student = require('../models/student');
var Assignment = require('../models/assignment');
var logger = require('morgan');
var User = require('../models/user');
var clone = require('lodash/clone');


//======================
// ADD STUDENT
//======================

// POST /api/users/:userId/students
router.post('/', function createAction(request, response) {
  var userId = request.params.userId;

  var newStudent = new Student({
    firstName   : request.body.firstName,
    lastName    : request.body.lastName,
    assignments : []
  });

  User
    .findById(userId)
    .exec(function whatever(err, user) {
      // If there's at least one student
      if (user.students.length > 0) {
        // Grab the first student
        var firstStudent = user.students[0];

        // Loop over their assignments
        firstStudent.assignments.forEach(function pushAssignment(assignment) {
          // Push each assignment with a score of 0 to newStudent's assignments arr
          var clonedAssignment = clone(assignment);
          clonedAssignment.pointsEarned = 0;
          newStudent.assignments.push(clonedAssignment);
        }) //put in an else for zero students TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }
      // Push this new student into their .students array
      user.students.push(newStudent);
      // save that user
      user.save();
      // return { student: student }
      response.send({ student: newStudent });
    });
  });
 
//======================
// Remove STUDENT 
//======================
// PUT /api/users/:userId/students/:studentId
router.put('/:studentId', function deleteAction(request, response) {
  console.log("made it to the controller" + request.params.studentId);

  var userId = request.params.userId;
  var studentId = request.params.studentId;

  console.log ("student id: " + studentId);

  User
    .findById((userId), function (error, user) {
      console.log("findbyuserid user: " + user);
    })
    .exec(function whatever(error, user) {
      var studentIndex = user.students.map(x => x.id).indexOf(studentId);
      user.students.splice(studentIndex, 1);
      user.save();  // This has to be like this. I have run a lit of errors from this misplaced.
      response.json({user: user});
    })
});

module.exports = router;

