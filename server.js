require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', function (err) {
  console.log(err);
  process.exit(-1);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

var usersController = require('./controllers/users.js');
app.use('/api/users', usersController);

var deleteController = require('./controllers/delete.js');
app.use('/api/delete', deleteController);

var sessionsController = require('./controllers/sessions.js');
app.use('/api/sessions', sessionsController);

var loginController = require('./controllers/login.js');
app.use('/api/login', loginController);

var gradesController = require('./controllers/grades.js');
app.use('/api/grades', gradesController);

var studentsController = require('./controllers/students.js');
// app.use('/api/students', studentsController); // old
app.use('/api/users/:userId/students', studentsController);

app.listen(process.env.PORT || 3000, function() {
  console.log("We are up and running...");
});
