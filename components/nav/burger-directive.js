


.directive('burgerColorDirective', function($location, $rootScope, $routeParams, $window){
  return {
    restrict: 'A',
    link: function(scope, attrs, element){

      scope.burger = angular.element(".burger-icon");
      // scope.burgerIconColor = "burger-icon-color";

$rootScope.$on('$routeChangeSuccess', function() {

      scope.$watch('navActive', function() {


//.....................................................................................................................................................when nav is active
            if (scope.navActive){
             scope.burgerIconColor = "burger-icon-black";
             scope.win = angular.element($window);
             scope.windowHeight = angular.element($window).height(); // Window Height
             scope.windowFifty = scope.windowHeight/2; // Calc for Logo
             scope.windowBurger = scope.windowHeight - 42; // Calc for Burger Icon
             scope.windowSeason = 42; // Calc for Burger Icon

            scope.colorScreenOne = ''; // section one color
            scope.colorScreenTwo = ''; // section two color
            scope.colorScreenThree = ''; // section three color
            scope.burgerOne = {};
            scope.burgerTwo ={};
          }

//.................................................................................................................................................when nav is NOT active
          //
          // else if(!scope.navActive){
          //
          //   scope.burgerIconColor = "";
            //
            // jQuery('.burger-icon').css({backgroundColor: scope.colorScreen});


//................................................................................................................................ && location = season-detail

                          else  if (($location.path() === ('/collections' + '/' +$routeParams.collection + '/' + $routeParams.season+ '/' + $routeParams.id)) && (!scope.navActive)){


                            setTimeout(function(){

                              scope.win = angular.element($window);
                              scope.windowHeight = angular.element($window).height(); // Window Height
                              scope.windowFifty = scope.windowHeight/2; // Calc for Logo
                              scope.windowBurger = scope.windowHeight - 42; // Calc for Burger Icon
                              scope.windowSeason = 42; // Calc for Burger Icon

                                scope.burgerOne = {};
                                scope.burgerTwo = {};

                                scope.burgerIconColor = "";


                              // scope.colorScreen = scope.colorScreenOne;
                              jQuery('.burger-icon').css({backgroundColor: '#606060'});


                            },600);  // end timeout

                          }




//................................................................................................................................ && location = evening

              else  if (($location.path() === '/collections/evening' + '/' + $routeParams.season) && (!scope.navActive)){


                setTimeout(function(){
                  // jQuery('.burger-icon').css({backgroundColor: '#ecc176'});
                  scope.colorScreenOne = '#ecc176'; // section one color
                  scope.colorScreenTwo = '#606060'; // section two color
                  scope.colorScreenThree = '#606060'; // section three color
                  scope.win = angular.element($window);
                  scope.windowHeight = angular.element($window).height(); // Window Height
                  scope.windowFifty = scope.windowHeight/2; // Calc for Logo
                  scope.windowBurger = scope.windowHeight - 42; // Calc for Burger Icon
                  scope.windowSeason = 42; // Calc for Burger Icon

                  // scope.colorScreen = '#ecc176';

                    scope.burgerIconColor = "";
                    // scope.burgerIconColor = "burger-icon-gold";
                    // scope.colorScreen = scope.colorScreenOne;

                  // scope.colorScreen = scope.colorScreenOne;
                  // jQuery('.burger-icon').css({backgroundColor:  scope.colorScreenOne});
                  jQuery('.burger-icon').css({backgroundColor: scope.colorScreen});
                  console.log("colorScreen:");
                  console.log(scope.colorScreen);


                   scope.burgerOne = new Waypoint({
                     element: document.getElementById('burger-wrapper'),
                     handler: function(direction) {
                       if (direction === 'up') {
                         jQuery('.burger-icon').css({backgroundColor: scope.colorScreenOne});
                         scope.colorScreen = scope.colorScreenOne;
                       }
                       else if (direction === 'down') {
                         console.log('burger change')
                         jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                         scope.colorScreen = scope.colorScreenTwo;
                       }
                     },
                     offset: - scope.windowBurger
                   });




                   scope.burgerTwo = new Waypoint({
                     element: document.getElementById('burger-wrapper'),
                     handler: function(direction) {
                       if (direction === 'up'){
                         jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                         scope.colorScreen = scope.colorScreenTwo;
                       }
                       else if (direction === 'down') {
                         jQuery('.burger-icon').css({backgroundColor: scope.colorScreenThree});
                         scope.colorScreen = scope.colorScreenThree;
                       }
                     }
                   });

                },600);  // end timeout

              }

//................................................................................................................................ && location = bridal

              else if (($location.path() === '/collections/bridal' + '/' + $routeParams.season) && (!scope.navActive)){


            setTimeout(function(){


              scope.colorScreenOne = '#bf8088'; // section one color
              scope.colorScreenTwo = '#606060'; // section two color
              scope.colorScreenThree = '#606060'; // section three color
              scope.win = angular.element($window);
              scope.windowHeight = angular.element($window).height(); // Window Height
              scope.windowFifty = scope.windowHeight/2; // Calc for Logo
              scope.windowBurger = scope.windowHeight - 42; // Calc for Burger Icon
              scope.windowSeason = 42; // Calc for Burger Icon

              scope.burgerIconColor = "";


            // scope.colorScreen = scope.colorScreenOne;
            // jQuery('.burger-icon').css({backgroundColor:  scope.colorScreenOne});
            jQuery('.burger-icon').css({backgroundColor: scope.colorScreen});
            console.log("colorScreen:");
            console.log(scope.colorScreen);


                   scope.burgerOne = new Waypoint({
                     element: document.getElementById('burger-wrapper'),
                     handler: function(direction) {
                       if (direction === 'up') {
                        //  jQuery('.burger-icon').css({backgroundColor: scope.colorScreenOne});
                        jQuery('.burger-icon').css({backgroundColor: scope.colorScreenOne});
                        scope.colorScreen = scope.colorScreenOne;
                       }
                       else if (direction === 'down') {
                         console.log('burger change')
                        //  jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                        jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                        scope.colorScreen = scope.colorScreenTwo;
                       }
                     },
                     offset: - scope.windowBurger
                   });


                   scope.burgerTwo = new Waypoint({
                     element: document.getElementById('burger-wrapper'),
                     handler: function(direction) {
                       if (direction === 'up'){
                        //  jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                        jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                        scope.colorScreen = scope.colorScreenTwo;
                       }
                       else if (direction === 'down') {
                        //  jQuery('.burger-icon').css({backgroundColor: scope.colorScreenThree});
                        jQuery('.burger-icon').css({backgroundColor: scope.colorScreenThree});
                        scope.colorScreen = scope.colorScreenThree;
                       }
                     },
                     offset: - scope.windowBurger
                   });


              },600);  // end timeout
              }

//..................................................................................................................................&& location = home


              else if (($location.path() === '/') && (!scope.navActive)){
              scope.burgerIconColor = "";
                //
                // jQuery('.burger-icon').css({backgroundColor: scope.colorScreen});

            setTimeout(function(){

                  scope.colorScreenOne = '#ecc176'; // section one color
                  scope.colorScreenTwo = '#bf8088'; // section two color
                  scope.colorScreenThree = '#FFFFFF'; // section three color
                  scope.win = angular.element($window);
                  scope.windowHeight = angular.element($window).height(); // Window Height
                  scope.windowFifty = scope.windowHeight/2; // Calc for Logo
                  scope.windowBurger = scope.windowHeight - 42; // Calc for Burger Icon
                  scope.windowSeason = 42; // Calc for Burger Icon



                  scope.burgerOne = new Waypoint({
                    element: document.getElementById('home-sections-0'),
                    handler: function(direction) {
                      if (direction === 'up') {
                        jQuery('.burger-icon').css({backgroundColor: scope.colorScreenOne});
                        scope.colorScreen = scope.colorScreenOne;
                      }
                      else if (direction === 'down') {
                        console.log('burger change')
                        jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                        scope.colorScreen = scope.colorScreenTwo;
                      }
                    },
                    offset: - scope.windowBurger
                  });




                  scope.burgerTwo = new Waypoint({
                    element: document.getElementById('home-sections-1'),
                    handler: function(direction) {
                      if (direction === 'up'){
                        jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                        scope.colorScreen = scope.colorScreenTwo;
                      }
                      else if (direction === 'down') {
                        jQuery('.burger-icon').css({backgroundColor: scope.colorScreenThree});
                        scope.colorScreen = scope.colorScreenThree;
                      }
                    },
                    offset: - scope.windowBurger
                  });


              },600);  // end timeout


            } //end else if location === '/'


//..................................................................................................................................&& location = other



              else if (($location.path() === '/contact' || $location.path() === '/subscribe' || $location.path() === '/about/brand' || $location.path() === '/about/designer' || $location.path() === '/journal' || $location.path() === '/stores' ) && (!scope.navActive)){
                   scope.burgerIconColor = "burger-icon-black";
                    console.log("you are in other");
                    angular.element("burger-icon").removeAttr("style")

                    //  Waypoint.refreshAll()


                }//end else if location === '/other'

          //  }//end else if navActive === false


}); //watch


        }); //routechange
    }
  }
});
