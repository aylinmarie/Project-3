const controller = require('./create.student.controller.js');
const template = require('./create.student.html');

const component = {
  controller: controller,
  template: template
}

angular
  .module('gradeBook')
  .component('createStudent', component);