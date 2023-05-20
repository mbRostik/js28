var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.numbers = [1, 2, 3, 4, 5];
    $scope.sum = calculateSum($scope.numbers);

    $scope.addNumber = function () {
        if ($scope.newNum) {
            $scope.numbers.push($scope.newNum);
            $scope.sum = calculateSum($scope.numbers);
            $scope.newNum = '';
        }
    };

    function calculateSum(arr) {
        return arr.reduce(function (sum, num) {
            return sum + num;
        }, 0);
    }
});
