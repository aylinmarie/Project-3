CreateStudentController.$inject = ['$stateParams', 'UsersService'];

function CreateStudentController($stateParams, UsersService) {
  const vm = this;

  //vm.loadCurrent = loadCurrent;
  vm.addNewStudent = addNewStudent; //attaching the function to vm
  vm.newStudent = {};                  //initializing newStudent
  vm.current = {};
 
  activate();

  function activate() {	
  }

  function addNewStudent() {
  	console.log('this is from addNewAssignment' + vm.newStudent.firstname);

    //how the form data make it to the controller server-side???
    console.log("userID" + $stateParams.userId);
    UsersService
      .addStudent(
        $stateParams.userId, 
        vm.newStudent.firstNname, 
        vm.newStudent.lastName, 
      ).then(function resolve(response) {
        console.log("function working!")
        vm.current = response.data.user;
        console.log("Back from the server!" + vm.current);
      });
  }
}
 
module.exports = CreateStudentController;

      