CreateAssignmentController.$inject = ['$stateParams', 'UsersService'];

function CreateAssignmentController($stateParams, UsersService) {
  const vm = this;

  //vm.loadCurrent = loadCurrent;
  vm.addNewAssignment = addNewAssignment; //attaching the function to vm
  vm.newAssignment = {};                  //initializing newAssignment
  vm.current = {};
  vm.updatedStudents = {};
  
  activate();

  function activate() {
  	
  }

  function addNewAssignment() {
  	console.log('this is from addNewAssignment' + vm.newAssignment.name);

    //how the form data make it to the controller server-side???
    console.log("userID" + $stateParams.userId);
    UsersService
      .addAssignment(
        $stateParams.userId, 
        vm.newAssignment.name, 
        vm.newAssignment.assignmentType, 
        vm.newAssignment.pointsMax
      ).then(function resolve(response) {
        console.log("function working!")
        vm.current = response.data.user;
        console.log("Back from the server!" + vm.current);
      });
  }
}
 
module.exports = CreateAssignmentController;

      