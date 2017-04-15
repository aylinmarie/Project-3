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
    console.log("Made to deleteStudent " + document.getElementById('newStudent').selectedIndex);
    console.log("Delete student selected" + vm.selectedStudent);

    studentSelectedIndex = document.getElementById('newStudent').selectedIndex
    
    UsersService
      .removeStudent($stateParams.userId, studentSelectedIndex)
      .then(function resolve(response) {
        vm.current = response.data.user;
        console.log("back from the server" + vm.current);
        //do I need to splice out 
      })

  }
}
 
module.exports = DeleteStudentController;