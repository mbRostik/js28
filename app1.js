var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    // Масив країн
    $scope.countries = [
        { name: 'Україна', selected: true },
        { name: 'США', selected: false },
        { name: 'Франція', selected: true },
        { name: 'Іспанія', selected: false },
        { name: 'Китай', selected: true },
        { name: 'Японія', selected: false },
    ];

    // Додавання нової країни
    $scope.addCountry = function () {
        if ($scope.newCountryName) {
            $scope.countries.push({ name: $scope.newCountryName, selected: false });
            $scope.newCountryName = '';
            $scope.countries = $scope.countries.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
        }
    };

    // Видалення країни за іменем
    $scope.deleteCountry = function () {
        if ($scope.deleteCountryName) {
            var index = $scope.countries.findIndex(function (country) {
                return country.name.toLowerCase() === $scope.deleteCountryName.toLowerCase();
            });
            if (index !== -1) {
                $scope.countries.splice(index, 1);
            }
            $scope.deleteCountryName = '';
        }
    };
});
