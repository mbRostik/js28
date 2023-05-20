var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.countries = [
        { name: 'Україна' },
        { name: 'США' },
        { name: 'Франція' },
        { name: 'Іспанія' },
        { name: 'Китай' },
        { name: 'Японія' },
        { name: 'Італія' },
        { name: 'Німеччина' },
        { name: 'Канада' },
    ];
});
