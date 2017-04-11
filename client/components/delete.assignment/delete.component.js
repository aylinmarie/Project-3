const controller = require('./delete.controller.js');
const template = require('./delete.html');

const component = {
  controller: controller,
  template: template
}

angular
  .module('gradeBook')
  .component('deleteAssignment', component);