angular
	.module('gradeBook')
	.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
		const self = this;

		self.loadCurrent = loadCurrent;
		self.addAssignment = addAssignment;
		self.addNewUser = addNewUser;
/*		self.deleteUser = deleteUser;
*/		self.deleteAssignment = deleteAssignment;

	function loadCurrent(id) {
		return $http.get('/api/users/' + id);
	}

	function addAssignment(id, name, assignmentType, pointsMax) {
		return $http
			.put('/api/users/' + id, {
				name: name,
				assignmentType: assignmentType,
				pointsMax: pointsMax});
	}

	function addNewUser(id) {
		return $http
			.post('/api/users/', newUser);
	}

	function deleteAssignment(id, assignmentName) {
		console.log("Services 1:" + assignmentName);
		return $http
			.put('/api/delete/' + id, {
				assignmentName: assignmentName});
	}


	/*function deleteUser(user) {
		console.log("My user id is not working");
		return $http.delete('/api/users/' + user._id);

	}*/
}
