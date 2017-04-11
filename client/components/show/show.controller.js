ShowController.$inject = ['$stateParams', '$scope', 'UsersService'];

function ShowController($stateParams, $scope, UsersService) {
  const vm = this;
  vm.current = {};
  vm.deleteAssign = deleteAssign;
  vm.saveGrades = saveGrades;

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

  function deleteAssign(assignmentColumn) {
    console.log("an assignmentName: " + vm.current._id);
    console.log("delete: " + 
      vm.current.students[0].assignments[assignmentColumn].name);

    UsersService
      .deleteAssignment(
        vm.current._id,
        vm.current.students[0].assignments[assignmentColumn].name
      ).then(function resolve(response) {
        console.log("back from the server!")
        vm.current = response.data.user
        console.log("new user: " + vm.current);
      });
  }

  function saveGrades() {
    console.log("Save grade function called" + vm.current._id);

    UsersService
      .saveNewGrade(
        vm.current._id,
        vm.current
      ).then(function resolve(response) {
        console.log("back from the server");
        vm.current = response.data.user;
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
