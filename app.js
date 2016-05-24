
var app = angular.module('myApp', []);

app.controller('customDirectiveCtrl', function($scope){
  $scope.my = {};
  $scope.my.projects = [
    {
      name: 'Color Fish',
      url: 'https://team-malex.2016.angularattack.io/#/color-fish'
    },
    {
      name: 'Relax And Color',
      url: 'https://relax-and-color.herokuapp.com/#/home'
    },
    {
      name: 'Settlers Of Candyland',
      url: ' ttp://max33nau.github.io/settlersOfCandyland/'
    },
    {
      name: 'My Github',
      url: 'https://github.com/max33nau'
    }
  ]
});

app.directive('myCustomDirective', function(){
  return {
    restrict: 'E',
    template: '<a href="{{myUrl}}" target="_blank"> {{myLinkName}} </a>',
    scope: {
      myLinkName:'@',
      myUrl: '@'
    }
  }
})

// Description
/* Remember when we name our directive in camelCase,
angularJS will convert it to snake-case. So when we
use the directive in our HTML it will be
<my-custom-directive> </my-custom-directive>. */

/* When we create a directive we are returning
a directive description object. This description
object will be the heart of our custom directive. */

/* What is restrict?
restrict: specifies what type of directive it has to
be when we try to activate it later. In this case
we only want it to be used as a element so we say
restrict: 'E'. Other restrict options are
'A' (attribute), 'C' (class), 'M' (comment)

/* Template will be the content of our directive,
here we can use HTML and {{}} notation just like
in normal AngularJS, here we are creating a
<a> tags that will take a link and a url from the
parent scope.*/

/* scope: check out this newsletter to get a better
understanding on using scope with these directives.
http://www.ng-newsletter.com/posts/directives.html,
for now just know using '@' will read into our directive
what we set in the element. */

/* We could add a controller to our directive but it is
not necessary for right now. */
