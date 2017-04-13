DeleteStudentController.$inject = ['$stateParams', 'UsersService'];

function DeleteStudentController($stateParams, UsersService) {
  const vm = this;

  vm.deleteStudent     = deleteStudent; // attaching the function to vm
  vm.loadCurrent       = loadCurrent;
  //vm.selected.student = {};               // initializing newStudent
  vm.current           = {};
 
  activate();

  function activate() {
    loadCurrent();
  }

  function loadCurrent() {

    UsersService
      .loadCurrent($stateParams.userId)
      .then(function resolve(response) {
        vm.current = response.data.user;
      })
  }

  function deleteStudent(newStudent) {
    console.log("Made to deleteStudent " + document.getElementById('newStudent').selectedIndex);
    console.log("Delete student selected" + vm.selected.student);
    console.log("XXX" + vm.selected.student.lastName);

    studentSelectedIndex = document.getElementById('newStudent').selectedIndex
    
    UsersService
      .removeStudent($stateParams.userId, studentSelectedIndex)
      .then(function resolve(response) {
        vm.current = response.data.user;
        //do I need to splice out 
      })

  }
}
 
module.exports = DeleteStudentController;