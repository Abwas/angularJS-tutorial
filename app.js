
var app = angular.module('myApp', []);

app.controller('bindingExampleCtrl', function($scope){
  $scope.binding = {};
  $scope.binding.name = 'Type here to see my 2-way data binding';
});

app.controller('badExampleParentCtrl', function($scope){
  $scope.name = 'prototypical inheritance at work';
});

app.controller('badExampleChildCtrl', function($scope){

});

app.controller('goodExampleParentCtrl', function($scope){
  $scope.parent = {};
  $scope.parent.name = 'My child controller does not inherit me anymore';
});

app.controller('goodExampleChildCtrl', function($scope){
  $scope.child = {};
  $scope.child.name = 'I am my own scope';
});

// Description
/* ng-model binds the view into the model. ngModel will
try to bind the property given by evaluating the expression
in its current scope.  If the property doesn't already
exist on the scope it will try to create it. */

/* you can find further documentation on it here:
https://docs.angularjs.org/api/ng/directive/ngModel */

/* In AngularJS a child controller scope prototypically
inherits from its parent scope. One exception for this
is when we attach scope: {} to a directive but
we will learn more about that in the create custom
directive section. Sometimes it is difficult to
see this inheritance happening. In the first
div we show a example of how the $scope.name is being
inhertited. The following creates it own new scope and follows
prototypical inheritance: ng-repeat, ng-include, ng-switch
ng-view, ng-controller, directive with scope true.
 So we can see in the mainCtrl and childCtrl example
 if we type in the mainCtrl first the child prototypical
 inherits $scope.name. But if we type in the child Ctrl first the
 child controller creates its new scope and is no longer
 bound to the mainCtrl $scope.name.*/

 /* It is bad practice to next controllers inside of controllers,
 simply using this as a example to show prototypical inheritance.*/

 /* This is why it is good practice to to always have a '.'
 in your models which will ensure your prototypical inheritance
 is in play. Watch these three videos to learn more https://www.youtube.com/watch?v=ZhfUv0spHCY&feature=youtu.be&t=30m
 */

 /* Good angular Practices: Treat scope as read-only in templates
 and write-only in controllers, $scope is supposed to refer to your
 model, not be the model. When doing 2-way data binding, make sure
 you don't bind directly to the scope properties. Weird behavior in
 child scopes.*/
