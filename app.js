
var app = angular.module('myApp', []);

app.controller('ngClickCtrl', function($scope){
  $scope.contact = {};
  $scope.data = {};
  $scope.data.contacts = [
    {
      firstName: 'Max',
      lastName: 'Jacobsen',
      phoneNumber: '(503) 555-5555'
    },
    {
      firstName: 'Al',
      lastName: 'She',
      phoneNumber: '(503) 444-4444'
    },
    {
      firstName: 'Alex',
      lastName: 'Anderson',
      phoneNumber: '(503) 222-3333'
    },
    {
      firstName: 'Who Ya',
      lastName: 'Gonna Call',
      phoneNumber: 'Ghost Busters!!'
    }];
  $scope.data.addContact = function(newContact){
    $scope.data.contacts.push(newContact);
    $scope.contact = {};
  };
});

// description

/* add the ng-click directive to any HTML element to call
a function within your scope or you can actually change
variables within the ng-click='contact.name = "default"'
when the element is clicked */
