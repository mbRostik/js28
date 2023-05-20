var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    
    $scope.checkboxes = [
        { label: 'Варіант 1', selected: false },
        { label: 'Варіант 2', selected: false },
        { label: 'Варіант 3', selected: false },
        { label: 'Варіант 4', selected: false },
        { label: 'Варіант 5', selected: false },
    ];

    
    $scope.updateCheckboxes = function () {
        var numbers = $scope.checkboxNumbers.split(',');
        for (var i = 0; i < $scope.checkboxes.length; i++) {
            if (numbers.indexOf((i + 1).toString()) > -1) {
                $scope.checkboxes[i].selected = true;
            } else {
                $scope.checkboxes[i].selected = false;
            }
        }
    };
});
