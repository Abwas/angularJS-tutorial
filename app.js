
var app = angular.module('myApp', []);

app.controller('ngClassCtrl', function($scope){
  $scope.questions = {};
});

// Description
/* ng-class directive allows you to set CSS
classes to specific HTML elements by data binding
an expression which will represent all the
classes to be added. */ 
