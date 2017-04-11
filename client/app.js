const angular = require('angular');
require('angular-ui-router');

angular
  .module('gradeBook', ['ui.router'])
  .config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
    .state('signup', {
      url: '/signup',
      template: '<signup></signup>'
    })
    .state('show', {
      url: '/show/:userId',
      template: '<show></show>'
    })
    .state('createAssignment', {
      url: '/create/:userId',
      template: '<create-assignment></create-assignment>'
    })
    .state('createStudent', {
      url: '/newStudent/:userId',
      template: '<create-student></create-student>'
    });

    $urlRouterProvider.otherwise('/');
}
