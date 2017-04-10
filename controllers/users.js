var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
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

router.put('/:id', function (req, res){

	var updatedStudents = req.body.students //must be an arrays of students with
													//the new assignemnts

	User.findByIdAndUpdate(req.params.id, {
		students: updatedStudents //or just req.body.students
	})
  /*var writers = [req.body.favorite1, req.body.favorite2, req.body.favorite3];
  var books = [req.body.book1, req.body.book2, req.body.book3];

  User.findByIdAndUpdate(req.params.id, {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    favoriteWriters: writers,
    favoriteBooks: books
  }, {new: true})
  .exec(function(err, user) {
    if (err) { console.log(err); }

    console.log(user);
    res.redirect('/users');
  });*/
});

module.exports = router;