ShowController.$inject = ['$stateParams', '$scope', 'UsersService'];

function ShowController($stateParams, $scope, UsersService) {
  const vm = this;
  vm.current = {};
  vm.deleteAssign = deleteAssign;

  activate();

  function activate() {
  	loadCurrent();
  }

  function loadCurrent(userId) {

  	UsersService
  		.loadCurrent($stateParams.userId)
  		.then(function resolve(response) {
  			vm.current = response.data.user;
  		})
  }

  function deleteAssign() {
    console.log("an assignmentName: " + vm.current._id);
    console.log("delete: " + vm.current.students[0].assignments[1].name);
    
    vm.current.students[0].assignments[1].name
    UsersService
      .deleteAssignment(
        vm.current._id,
        vm.current.students[0].assignments[1].name
      ).then(function resolve(response) {
        console.log("back from the server!")
        vm.current = response.data.user //not sure this is necessary
        console.log("new user: " + vm.current);
      });
  }

  $scope.getSumPointsEarned = function(student){
      var total = Number(0);
      for(var i = 0; i < student.assignments.length; i++){
          var points = Number(student.assignments[i].pointsEarned);
          total += points;
      }
      return total;
  }

  $scope.getSumPointsMax = function(student){
      var total = Number(0);
      for(var i = 0; i < student.assignments.length; i++){
          var points = Number(student.assignments[i].pointsMax);
          total += points;
      }
      return total;
  }
}

module.exports = ShowController;

