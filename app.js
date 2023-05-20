var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
	
	$scope.countries = [
		{ name: 'Україна', selected: true },
		{ name: 'США', selected: false },
		{ name: 'Франція', selected: true },
		{ name: 'Іспанія', selected: false },
		{ name: 'Китай', selected: true },
		{ name: 'Японія', selected: false },
	];

	
	$scope.addCountry = function () {
		if ($scope.newCountry) {
			$scope.countries.push({ name: $scope.newCountry, selected: false });
			$scope.newCountry = '';
			$scope.countries = $scope.countries.sort(function (a, b) {
				return a.name.localeCompare(b.name);
			});
		}
	};

	$scope.removeCountry = function () {
		if ($scope.removeIndex) {
			var index = parseInt($scope.removeIndex);
			if (index >= 0 && index < $scope.countries.length) {
				$scope.countries.splice(index, 1);
				$scope.removeIndex = '';
			}
		}
	};
});