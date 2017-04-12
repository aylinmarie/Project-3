var mongoose = require('mongoose');
var User = require('./models/user.js');
var Student = require('./models/student.js');

mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost/project-three');

mongoose.connection.on('error', function (err) {
  console.log(err);
  process.exit(-1);
});

var seededAssignments = [ {
	name: 'Test on Plants',
	assignmentType: 'Test',
	dateCreated: '',
	pointsEarned: 20,
	pointsMax: 20},

	{
	name: 'Deciduous Project',
	assignmentType: 'Project',
	dateCreated: '',
	pointsEarned: 50,
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
  	username: 'Ms. Peddington',
  	email: 'abc@abc.com',
  	password: 'abc',
  	students: testStudents
	},
	{
  	username: 'Mr. Hernquist',
  	email: '123@123.com',
  	password: '123',
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
