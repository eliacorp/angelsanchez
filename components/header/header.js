angular.module('myApp')
.controller('headerCtrl', function($rootScope, $location, $scope){

  $scope.headerMobileClick = function ( path ) {
    $location.path( path ).search();
  };

})

/*...................................logo-fade-out...................................*/

.directive('logoheaderDirective', function(){
  return {
    restrict: 'E',
    scope: {

    },
    // transclude: true,
    templateUrl: 'components/header/header.html',
    link: function(scope, element, attr){


      var headerHidden = false;
      $(document).bind("scroll", function(){
        if ($(document).scrollTop() >= 60) {
          jQuery('.title').addClass('title-inactive');
          headerHidden = true;
        }
        else if (($(document).scrollTop() < 60) && (headerHidden)){
          jQuery('.title').removeClass('title-inactive');
        }
      });




      scope.headerFade = function(){
        jQuery('.navigation').css('display','none');
        setTimeout(function(){
          jQuery('.navigation').fadeIn(600);
        },1000);
      };



    }
  }
});
