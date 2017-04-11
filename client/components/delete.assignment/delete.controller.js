DeleteAssignmentController.$inject = ['$stateParams', 'UsersService'];

function DeleteAssignmentController($stateParams, UsersService) {
  const vm = this;

  vm.deleteAssign = deleteAssign; //attaching the function to vm
                                     //initializing newAssignment
  console.log("Made to deleteAssignment 1:" + $stateParams.assignmentNumber);
  
  activate();

  function activate() {
    deleteAssign();
  }

  function deleteAssign() {
    console.log("an 1:" + $stateParams.assignmentName);
    console.log("delete " + $stateParams.userId);
    UsersService
      .deleteAssignment(
        $stateParams.userId,
        $stateParams.assignmentName
      ).then(function resolve(response) {
        console.log("back from the server!")
        vm.current = response.data.user //not sure this is necessary
        console.log("new user: " + vm.current);
      });
  }

}
 
module.exports = DeleteAssignmentController;

      