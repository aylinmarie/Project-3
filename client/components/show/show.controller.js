ShowController.$inject = ['$stateParams', '$scope', 'UsersService'];

function ShowController($stateParams, $scope, UsersService) {
  const vm = this;
  vm.current = {};
  vm.user = [];
  vm.studentsGrades = [];
  vm.deleteUser = deleteUser;


  activate();

  function activate() {
  	loadCurrent();
  }

  function loadCurrent(userId) {
  	console.log($stateParams);

  	UsersService
  		.loadCurrent($stateParams.userId)
  		.then(function resolve(response) {
  			vm.current = response.data.user;
  		})
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
      for(var i = 0; i < 2; i++){
          var points = Number(student.assignments[i].pointsMax);
          total += points;
      }
      return total;
  }

  function deleteUser(user){
  UsersService
    .deleteUser(user)
    .then(function(response){
      console.log("Deleted");
      // var index = vm.user.indexOf(user);
      // vm.user.splice(index, 1);
   });
}

}

module.exports = ShowController;
