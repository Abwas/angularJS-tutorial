
var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope){
  $scope.view = {};
  $scope.view.showMe = true;
  $scope.view.name = 'max';
});
