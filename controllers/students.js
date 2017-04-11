var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var Student = require('../models/student');
var Assignment = require('../models/assignment');
var logger = require('morgan');
var User = require('../models/user');




//======================
// ADD STUDENT
//======================

router.put('/:id', function addStudentToUser(request, response) {
  var id = request.params.id;
  const newStudent = new Student ({
    firstName   : request.body.firstName,
    lastName    : request.body.lastName,
    assignments : {}
  })

  console.log('old length: " + user.students.length);

  User.findById((id), function(error, user) {
    console.log("assignment name for (0,0): " + user.students[0].assignments[0].name);
    }).exec(function(error, user) {
      user.students[0].assignments.forEach(function (assignment, index) {
        newStudent.asssignments[index] = assignment;
      })
      user.students.push(newStudent);
    })
      console.log('new length: " + user.students.length);
  


  /*
    user.students.forEach(function (student) {
      console.log("from delete.js indexOf project name:" +
      student.assignments.map(x => x.name).indexOf(assignmentName));
      var index = student.assignments.map(x => x.name).indexOf(assignmentName);
      student.assignments.splice(index, 1); //might be able to just stick in assignmentName. Also might use assignmentName and then index


    });
  user.save();
  response.json({user:user});
  });*/

});

module.exports = router;
