
var app = angular.module('myApp', []);

app.controller('hideAndShowCtrl', function($scope){
  $scope.view = {};
  $scope.view.showMe = true;
  $scope.view.name = 'max';
  $scope.view.category = 'sports';
});

// Description
/* ng-show directive show or hides the given HTML element it is attached too and
all of its children based on the expression it is given. The element is shown
or hidden by adding or removing .ng-hide class which is predefined in CSS. When
the ng-show expression evaluates to falsy the the .ng-hide class is applied and
when the expression evaluates to truthy the .ng-hide class is removed */

/* the ng-hide Class is:
  .ng-hide {
  display: none !important;
  //important is used so the .ng-hide class is not overwritten
} */

/* ng-hide directive acts the same as ng-show only with opposite evaluation
for appllying the ng-hide class. If the expression evaluates to truthy,
then the class is applied and if it evaluates to falsy the class is
removed */
