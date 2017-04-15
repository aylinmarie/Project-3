var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var Student = require('../models/student');
var Assignment = require('../models/assignment');
var logger = require('morgan');
var User = require('../models/user');





//======================
// DELETE ASSIGNMENT
//======================

router.put('/:id', function deleteAction(request, response) {
  var id = request.params.id;
  var assignmentName = request.body.assignmentName;

  User
    .findById((id), function(error, user) {
    console.log("findbyuserid user:" + user);
    })
    .exec(function(error, user) {
      user.students.forEach(function (student) {
      var index = student.assignments.map(x => x.name).indexOf(assignmentName);
      student.assignments.splice(index, 1); //might be able to just stick in assignmentName. Also might use assignmentName and then index
    });
  user.save();
  response.json({user:user});
  });
});

module.exports = router;
