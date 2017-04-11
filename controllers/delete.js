var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var Student = require('../models/student');
var Assignment = require('../models/assignment');
var logger = require('morgan');
var User = require('../models/User');




//======================
// DELETE ASSIGNMENT
//======================

router.put('/:id', function deleteAction(request, response) {
  var id = request.params.id;
  var assignmentName = request.body.assignmentName;
  console.log("I'm in delete router 1:" + assignmentName + "id:" + id);


  User.findById((id), function(error, user) {
    console.log("findbyiduser user:" + user);
  }).exec(function(error, user) {
    
    

    user.students.forEach(function (student) {
      console.log("from delete.js indexOf project name:" + 
        student.assignments.map(x => x.name).indexOf(assignmentName)); 
      var index = student.assignments.map(x => x.name).indexOf(assignmentName);
      student.assignments.splice(index, 1); //might be able to just stick in assignmentName. Also might use assignmentName and then index
      
   
    });
  user.save();
  });
});

module.exports = router;