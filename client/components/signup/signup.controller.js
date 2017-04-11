SignupController.$inject = ['$state', 'UsersService'];

function SignupController($state, UsersService) {
  const vm = this;
  vm.current = {};
  vm.addNewUser = addNewUser;

  activate();

  function activate(){
  }

  function addNewUser(){
    
    console.log('Signup Controller' + vm.newUser.username);
    UsersService
       .signupUser(vm.newUser.email, vm.newUser.username, vm.newUser.password)
       .then(function resolve(response){
          console.log('Back from server');
          vm.newUser={};
          $state.go('login');
       });
  }
};


module.exports = SignupController;
