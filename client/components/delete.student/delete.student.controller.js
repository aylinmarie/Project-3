DeleteStudentController.$inject = ['$stateParams', 'UsersService'];

function DeleteStudentController($stateParams, UsersService) {
  const vm = this;

  vm.deleteStudent     = deleteStudent; // attaching the function to vm
  vm.loadCurrent       = loadCurrent;
  vm.current           = {};
  vm.selectedStudent   = {};
 
  activate();

  function activate() {
    loadCurrent();
  }

  function loadCurrent() {

    UsersService
      .loadCurrent($stateParams.userId)
      .then(function resolve(response) {
        console.log(response.data.user.students[0].firstName)
        vm.current = response.data.user;
      })
      .then(function() {
        // iterate over vm.current.students
        vm.current.students.forEach(function(student) {
            student.fullName = student.firstName + " " + student.lastName;
        })
      })
  }

  function deleteStudent(newStudent) {
    console.log("Delete student selected: " + vm.selectedStudent.firstName);
    console.log("Student object id: " + vm.selectedStudent._id);

    UsersService
      .removeStudent($stateParams.userId, vm.selectedStudent._id)
      .then(function resolve(response) {
        vm.current = response.data.user;
        console.log("back from the server" + vm.current);
        $state.go('show');
        //do I need to splice out 
      })

  }
}
 
module.exports = DeleteStudentController;