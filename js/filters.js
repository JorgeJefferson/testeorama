
var fundosApp = angular.module('fundosApp', []);
fundosApp.controller('FundosCtrl', function ($scope, $http){
    $http.get('fundos.php').success(function(data) {
    $scope.fundos = data;
    });
});
