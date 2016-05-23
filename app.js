// In angular.js.min there is global angular object and inside that object is a module.
// That module takes the name of your app and takes a array of dependencies.
var app = angular.module('myApp', []);

/* What is dependency injection? https://www.youtube.com/watch?v=ejBkOjEG6F0 time: 33:31 */
// Giving a function a object, rather than creating a object inside a function we pass it
// into the function

// $scope is big complex object that comes from dependency injection.
// All angularJS services start with a $ sign.
// We can now add on to the $scope object

//.controllers take a name and a function
app.controller('mainCtrl', function($scope){
  // Variables stored on the $scope object are known as the model
  $scope.name = 'Max';
});
