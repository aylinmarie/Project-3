LoginController.$inject = ['$state', 'AuthService'];

function LoginController($state, AuthService) {
  const vm = this;

  vm.loginUnauth = loginUnauth;
  vm.login = {};

  function loginUnauth() {
    console.log("Hit login button");
    AuthService
    .loginUser(
      vm.login.email,
      vm.login.password
    ).then(function resolve(response) {
      console.log("function working");
      $state.go("show", {userId: response.data})
    })
  }
}

module.exports = LoginController;
