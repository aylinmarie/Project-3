DeleteAssignmentController.$inject = ['$stateParams', 'UsersService'];

function DeleteAssignmentController($stateParams, UsersService) {
  const vm = this;
  
  console.log(vm.routingId);
  vm.deleteAssign = deleteAssign; //attaching the function to vm
                                     //initializing newAssignment
  console.log("Made to deleteAssignment 1:" + $stateParams.assignmentNumber);
  
  activate();

  function activate() {
    deleteAssign();
  }

  function deleteAssign(userId, assignmentName) {
    console.log("an assignmentName:" + assignmentName);
    console.log("delete " + userId);
    UsersService
      .deleteAssignment(
        userId,
        assignmentName
      ).then(function resolve(response) {
        console.log("back from the server!")
        vm.current = response.data.user //not sure this is necessary
        console.log("new user: " + vm.current);
      });
  }

}
 
module.exports = DeleteAssignmentController;

      