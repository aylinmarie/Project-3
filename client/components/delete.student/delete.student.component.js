const controller = require('./delete.student.controller.js');
const template = require('./delete.student.html');

const component = {
  controller: controller,
  template: template
}

angular
  .module('gradeBook')
  .component('deleteStudent', component);