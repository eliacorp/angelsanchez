'use strict';

angular.module('myApp')

.controller('legalCtrl', ['$scope','$rootScope', function($scope, $rootScope) {


  //setting an animation class for this specific page
  $scope.pageClass = 'page-legal';
  $rootScope.pageLoading = false;

  
}]);
