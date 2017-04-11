angular
	.module('gradeBook')
	.service('AuthService', AuthService);

AuthService.$inject = ['$http'];
function AuthService($http) {
    const self = this;

    self.loginUser = loginUser;

    function loginUser(email, password) {
  		return $http.post('api/login/', {
  			email: email,
  			password: password
  		});
  	}
}
