'use strict';
//
angular.module('myApp')

.controller('homeCtrl',['$http','$scope','$templateCache','homeService','$rootScope','$location','$anchorScroll','MetaInformation' , function($http, $scope, $templateCache, homeService, $rootScope, $location, $anchorScroll, MetaInformation) {





  //setting an animation class for this specific page
  $scope.pageClass = 'page-home';

  $scope.method = 'GET';
  $scope.url = '/data/home.json';

  $scope.code = null;
  $scope.response = null;
  $scope.color={};
  $scope.collectionName={};

  $scope.seasonName = {};
  $scope.seasonYear = {};
  // $scope.link ={};
  $scope.data = [];


  // This service's function returns a promise, but we'll deal with that shortly
  homeService.get()
  // then() called when son gets back
  .then(function(data) {

      $scope.data = data;
      $scope.color = data.color;
      $scope.collectionName = data.collectionName;
      $scope.seasonName = data.seasonName;
      $scope.seasonYear = data.seasonYear;

      $rootScope.pageLoading = false;
  }, function(error) {
      // promise rejected, could log the error with: console.log('error', error);

  });





}])



.directive("hometitleDirective", function($location){
  return{
    restrict: 'E',
    templateUrl: 'home/home-collection-name.html',
    link: function(scope){


      scope.mobileHomeClick=function(url){
        $location.path(url).search();
      }

    }
  }
})



.directive("scroll", function ($window, $rootScope, $location, $anchorScroll) {
return{
  restrict: 'A',
  link: function(scope, element, attrs) {

  element.attr('$index');

  setTimeout(function(){


// ............................................. measure Variables ............................................... //

    var $win = angular.element($window);
    var windowHeight = angular.element($window).height(); // Window Height
    var windowFifty = windowHeight/2; // Calc for Logo
    var windowBurger = windowHeight - 42; // Calc for Burger Icon
    var windowSeason = 42; // Calc for Burger Icon

    // var burgerHome = jQuery('.page').hasClass('.page-home');

// .............................................. Color Variables ............................................... //

     var colorScreenOne = 'rgba(218, 218, 218, 1)'; // section one color
     var colorScreenTwo = '#bf8088'; // section two color
     var colorScreenThree = '#FFFFFF'; // section three color


// ............................................. section one changes ............................................. //



               var seasonOne = new Waypoint({
                 element: document.getElementById('home-sections-0'),
                 handler: function(direction) {
                   if (direction === 'up'){
                     jQuery('#home-collection-name-1').stop();

                     jQuery('#home-collection-name-0, #home-collection-name-1, #home-collection-name-2, #home-collection-name-3').css('display','none');
                     jQuery('#home-collection-name-0').css('display','block');
                     jQuery('#home-collection-name-1').css('color', colorScreenOne);
                     jQuery('#home-collection-name-0').animate({
                       color: colorScreenOne
                     },600);


                   }
                   else {
                     jQuery('#home-collection-name-0').stop();
                     jQuery('#home-collection-name-0, #home-collection-name-1, #home-collection-name-2, #home-collection-name-3').css('display','none');
                     jQuery('#home-collection-name-1').css('display','block');
                     jQuery('#home-collection-name-1').animate({
                       color: colorScreenTwo
                     },600);
                     jQuery('#home-collection-name-0').css('color', colorScreenTwo);


                   }

                 },
                 offset: - windowSeason
               });



// ............................................. section two changes ............................................. //

               var seasonTwo = new Waypoint({
                 element: document.getElementById('home-sections-1'),
                 handler: function(direction) {

                   if (direction === 'up'){
                     jQuery('#home-collection-name-2').stop();

                     jQuery('#home-collection-name-0, #home-collection-name-1, #home-collection-name-2, #home-collection-name-3').css('display','none');
                     jQuery('#home-collection-name-1').css('display','block');
                     jQuery('#home-collection-name-1').animate({
                       color: colorScreenTwo
                     },600);
                     jQuery('#home-collection-name-2').css('color', colorScreenTwo);


                   }
                   else {
                     jQuery('#home-collection-name-1').stop();

                     jQuery('#home-collection-name-0, #home-collection-name-1, #home-collection-name-2, #home-collection-name-3').css('display','none');
                     jQuery('#home-collection-name-2').css('display','block');
                     jQuery('#home-collection-name-2').animate({
                       color: colorScreenThree
                     },600);
                     jQuery('#home-collection-name-1').css('color', colorScreenThree);
                   }
                 },
                 offset: - windowSeason
               });



               jQuery(window).resize(function(){
                 $win = angular.element($window);
                 windowHeight = angular.element($window).height(); // Window Height
               });



// ............................................................................................................... //

    },600);

  }
}
})

.directive("anchorDirective", function($location, $rootScope, $window){
  return {
     restrict: 'A',
     link: function(scope, elem, attr) {

 //      var unbindanchorWatcher = scope.$watch( function() {

 //        scope.anchorFilled = elem.attr('fill');
 //        console.log(scope.anchorFilled);

 //        if (scope.anchorFilled == 'rgba(96, 96, 96, 1)'){

 //          elem.mouseenter(function() {
 //              elem.css({
 //                fill: 'rgba(96, 96, 96, 0.4)'
 //              });

 //              // return colorAnchorInactive = 'rgba(96, 96, 96, 0.4)';

 //          });
 //            elem.mouseleave(function() {
 //              elem.css({
 //                fill: 'rgba(96, 96, 96, 1)'
 //              });

 //              // return colorAnchorInactive = 'rgba(96, 96, 96, 1)';

 //         });

 //        }else if (scope.anchorFilled == 'rgba(233, 233, 233, 1)'){
 //            elem.unbind("mouseenter");
 //            elem.unbind("mouseleave");
 //          // return false;

 //          return colorAnchorActive = 'rgba(233, 233, 233, 1)';

 //        }
 // unbindanchorWatcher();


 //      });


      var colorAnchorActive = 'rgba(233, 233, 233, 1)';
      var colorAnchorInactive = 'rgba(96, 96, 96, 1)';




          scope.changeLogo = function(link1, link2, link3, colorOne, colorTwo, colorThree){


                setTimeout(function(){


                              scope.windowHeight = angular.element($window).height(); // Window Height
                              scope.windowFifty = scope.windowHeight/2; // Calc for Logo
                              scope.windowFiftyTwo = (scope.windowHeight)+(scope.windowHeight/2); // Calc for Logo

                                                              scope.hover1 = true;
                                                              scope.hover2 = true;
                                                              scope.hover0 = false;


          angular.element($window).bind("scroll.anchorColor", function (event) {


                                                        var scrollAnchor =  angular.element($window).scrollTop();


                                                        if ((scrollAnchor < scope.windowFifty)&&(scrollAnchor > 0)){

                                                              jQuery('#anchor-1').attr('fill', colorAnchorInactive);
                                                              jQuery('#anchor-2').attr('fill', colorAnchorInactive);
                                                              jQuery('#anchor-0').attr('fill', colorAnchorActive);//change anchor color 0

                                                              // jQuery('#anchor-1').addClass("anchor-hover");
                                                              // jQuery('#anchor-2').addClass("anchor-hover");
                                                              // jQuery('#anchor-0').removeClass("anchor-hover");
                                                              scope.hover1 = true;
                                                              scope.hover2 = true;
                                                              scope.hover0 = false;



                                                         }
                                                         else if ((scrollAnchor >= scope.windowFifty) && (scrollAnchor < scope.windowFiftyTwo)){


                                                          jQuery('#anchor-0').attr('fill', colorAnchorInactive);
                                                          jQuery('#anchor-2').attr('fill', colorAnchorInactive);
                                                          jQuery('#anchor-1').attr('fill', colorAnchorActive); //change anchor color 1

                                                              scope.hover0 = true;
                                                              scope.hover2 = true;
                                                              scope.hover1 = false;


                                                         }

                                                         else if (scrollAnchor >= scope.windowFiftyTwo){

                                                           jQuery('#anchor-0').attr('fill', colorAnchorInactive);
                                                           jQuery('#anchor-1').attr('fill', colorAnchorInactive);
                                                           jQuery('#anchor-2').attr('fill', colorAnchorActive); //change anchor color 2

                                                              scope.hover0 = true;
                                                              scope.hover1 = true;
                                                              scope.hover2 = false;




                                                         }
                                                         // else{


                                                         // }



                                                     });

                                                     angular.element($window).bind("resize.anchorColor", function(){
                                                       scope.windowHeight = angular.element($window).height(); // Window Height
                                                       scope.windowFifty = scope.windowHeight/2; // Calc for Logo
                                                       scope.windowFiftyTwo = (scope.windowHeight)+(scope.windowHeight/2); // Calc for Logo

                                                     });



                                                  }, 600); //timeout


                            } //scope.changeLogo function



scope.changeLogo();



     }
   };
});
