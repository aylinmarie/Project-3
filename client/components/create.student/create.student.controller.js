CreateStudentController.$inject = ['$stateParams', 'UsersService'];

function CreateStudentController($stateParams, UsersService) {
  const vm = this;

  vm.addNewStudent = addNewStudent; // attaching the function to vm
  vm.newStudent = {};               // initializing newStudent
  vm.current = {};
 
  activate();

  function activate() {}

  function addNewStudent() {
    UsersService
      .addStudent($stateParams.userId, vm.newStudent)
      .then(function resolve(response) {
        vm.current = response.data.user;
      });
  }
}
 
module.exports = CreateStudentController;

      