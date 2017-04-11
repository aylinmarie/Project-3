var mongoose = require('mongoose');
var User = require('./models/user.js');
var Student = require('./models/student.js');

mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost/project-three');
//var db = mongoose.connect('mongodb://localhost:27017/criminals-app');


var seededAssignments = [ {
	name: 'Test on Plants',
	assignmentType: 'Test',
	dateCreated: '',
	pointsEarned: 0,
	pointsMax: 20},

	{
	name: 'Deciduous Project',
	assignmentType: 'Project',
	dateCreated: '',
	pointsEarned: 0,
	pointsMax: 50}
];

var testStudents = [
	{ firstName: 'David', lastName: 'Davis', assignments: seededAssignments},
	{ firstName: 'Aylin', lastName: 'Jobs', assignments: seededAssignments},
	{ firstName: 'Gibby', lastName: 'Smith', assignments: seededAssignments},
	{ firstName: 'Jenny', lastName: 'Davis', assignments: seededAssignments},
	{ firstName: 'Jill', lastName: 'Davis', assignments: seededAssignments},
	];


var users = [ {
  	username: 'TestWoman',
  	email: 'abc@abc.com',
  	password: 'abc',
  	students: testStudents
	},
	{
	  	username: 'TestMan',
	  	email: 'abc@abc.com',
	  	password: 'abc',
	  	students: testStudents
	  	}  ];

User.remove({})
  .then(function(){
  	return User.create(users);
  })
  .then(function(users){
  	console.log(users);
  })
  .then(function(){
  	mongoose.connection.close(function () {
  	  console.log('Mongoose connection disconnected');
  	});
  });
