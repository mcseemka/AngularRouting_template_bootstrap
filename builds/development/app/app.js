"use strict";
angular.module('app',['ngRoute'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/menu1', {
        templateUrl: 'views/menu1.html',

    }).
      when('/menu2', {
        templateUrl: 'views/menu2.html',

      }).
            when('/menu3', {
        templateUrl: 'views/menu3.html',

      }).
      otherwise({
        redirectTo: '/menu1'
      })
}])

.controller('MainCtrl', ['$scope', function($scope){
$scope.hello="Hello from Controller";


}]);

