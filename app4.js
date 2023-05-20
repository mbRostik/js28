var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
	$scope.users = ['Микола', 'Василь', 'Петро'];
	$scope.newUsers = ['Іван', 'Дмитро', 'Андрій'];

	$scope.addUser = function () {
		if ($scope.newUsers.length > 0) {
			var user = $scope.newUsers.shift();
			$scope.users.push(user);
		}
	};
});
