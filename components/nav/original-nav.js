

'use strict';

angular.module('myApp')
.controller('navCtrl', ['$scope', '$http', '$routeParams','$route', '$location', '$rootScope','$animate','$timeout', function($scope, $http, $routeParams, $route, $location, $rootScope, $animate, $timeout) {
  // to get the parameter f the url to show it in the collection-page
  $scope.filterseason = $routeParams.season;


// $animateProvider.classNameFilter(/animate/);

  $scope.navcolor =  "color: grey";
  /*...................................isActive...................................*/



  //activating a nav entry based on the location you are in
  $scope.isActive = function (viewLocation) {
    $scope.navcolor =  "color: red";
    return viewLocation === $location.path();
  };


//showing home only after the nav is disappeared(that's why the timeout is there)
  $scope.isHome = function () {
      if($location.path() == '/'){
        $timeout(function() {
            $scope.homeVisibility= false;
        }, 500);
      } else{
        $timeout(function() {
            $scope.homeVisibility= true;
        }, 500);
      }
      return $scope.homeVisibility;
  }



//closes the nav if you click anywhere in main
  $rootScope.closeNav = function(){
    $scope.navActive = false;

    if ($rootScope.location === '/contact' || $rootScope.location === '/' || $rootScope.location === '/subscribe' || $rootScope.location === '/journal' || $rootScope.location === '/stores' ){

          $timeout(
            function(){
              $scope.subNavShow = false;
              $scope.aboutActive = false;
          $scope.collectionActive = false; }, 600);

    }
  };

  //closes the nav if you change location
  $scope.$on('$routeChangeStart', function(next, current) {
    $scope.navActive = false;
   });



    //burger closing both nav and sub-nav
      $rootScope.beNavActive = function(){
            $scope.navActive = !$scope.navActive;
            if (!$scope.navActive) {


              //adding a timeout to make the reset happen after the sub-nav is closed

              $timeout(
                function(){
                  $scope.subNavShow = false;
                  $scope.aboutActive = false;
              $scope.collectionActive = false;
              }, 600);



            }else{
              return false}
        };

        // back button that closes the sub menu
        $rootScope.backToMenu = function(){

          $scope.subNavShow = false;

          //adding a timeout to make the reset happer after the sub-nav is closed
          $timeout( function(){ $scope.aboutActive = false;
          $scope.collectionActive = false; }, 600);

          };



          $rootScope.collectionMenuCollapse = function(){

            $scope.subNavShow = true;
                // $scope.collectionActive = !$scope.collectionActive
                $scope.collectionActive = true;

            };

            $rootScope.aboutMenuCollapse = function(){
              $scope.subNavShow = true;
                //  $scope.aboutActive = !$scope.aboutActive
                $scope.aboutActive = true;

              };




  /*...................................Fade...................................*/




$scope.navSeason={};
/*...................................get collections list........................*/

    $http({url: 'data/collections.json', method: 'GET', isArray: true}).success(function(data) {

      $scope.collections = data;
    });

    $scope.orderProp = 'season';



}])

/*...................................nav-directive...................................*/
.directive('navDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'components/nav/nav.html',
    link: function(scope, element, attrs) {

    scope.collectionsMenuCollapse = function(){

      if ((scope.collectionsActive == false) && (scope.aboutActive == false)){

                return scope.subNavShow = true;
                 return scope.collectionsActive = true;

      } else if ((scope.collectionsActive == true) && (scope.aboutActive == false)){

                return scope.collectionsActive = false;
                return scope.subNavShow = false;

      } else if ((scope.collectionsActive == false) && (scope.aboutActive == true)){

                return scope.collectionsActive = true;
                return  scope.aboutActive = false;
      }

    };



    }
  }
})


/*...................................collections-directive...................................*/
.directive('collectionsDirective', function(){
  return {
    restrict: 'E',
    replace: 'true',
    controller: 'navCtrl',
    templateUrl: 'components/nav/collection-entry.html',
    link: function(scope, attrs, element){

  }
}
})
//
// .directive('collectionActive', function(){
//   return {
//     restrict: 'A',
//     link: function(scope, $attr, element){
//
//       scope.$watch(attrs.collectionActive, function(newVal) {
//           if (newVal) {
//               $animate.addClass(element, "active")
//           } else {
//               $animate.removeClass(element, "active")
//           }
//       })
//
//
//   }
// }
// })


.directive('aboutDirective', function(){
  return {
    restrict: 'E',
    replace: 'true',
    controller: 'navCtrl',
    templateUrl: 'components/nav/about-entry.html',
    link: function(scope, attrs, element){
          //   scope.toggle = function() {
          //   scope.navActive = !scope.navActive;
          // };


    }
  }
})



.directive('burgerColorDirective', function($location, $rootScope, $routeParams, $window){
  return {
    restrict: 'A',
    link: function(scope, attrs, element){

  // var burgerEveningOne, burgerOne, burgerTwo, burgerBridalOne;
  //
  //  Waypoint.refreshAll();


$rootScope.$on('$routeChangeSuccess', function() {

                Waypoint.Context.refreshAll();



        // scope.win = angular.element($window);
        // scope.eveningWrapper = angular.element(document.querySelector('#videocoverHeight'));
        // scope.bridalWrapper = angular.element(document.querySelector('#videocoverHeight'));
        //
        // scope.windowSeason = 42; // Calc for Burger Icon


        // scope.getEveningWindowDimensions = function () {
        //     return {
        //         // 'windowHeight': scope.eveningWrapper.height(),
        //         // 'windowFifty': (scope.eveningWrapper.height()/2), // Calc for Logo
        //         'windowEveningBurger': (scope.eveningWrapper.height() - 42) // Calc for Burger Icon
        //
        //     };
        // };
        //
        // scope.getBridalWindowDimensions = function () {
        //     return {
        //         // 'windowHeight': scope.bridalWrapper.height(),
        //         // 'windowFifty': (scope.bridalWrapper.height()/2), // Calc for Logo
        //         'windowBridalBurger': (scope.bridalWrapper.height() - 42) // Calc for Burger Icon
        //
        //     };
        // };
        //
        // scope.getHomeWindowDimensions = function () {
        //     return {
        //         // 'windowHeight': scope.win.height(),
        //         // 'windowFifty': (scope.win.height()/2), // Calc for Logo
        //         'windowHomeBurger': (scope.win.height() - 42) // Calc for Burger Icon
        //
        //     };
        // };


      scope.$watch('navActive', function() {


//.....................................................................................................................................................when nav is active
          if (scope.navActive){

                     scope.burgerIconColor = "burger-icon-black";

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


          //  waypoint.refreshAll();


                                    setTimeout(function(){
                                        Waypoint.refreshAll();


                                      // scope.colorScreen = '#ecc176';

                                        scope.burgerIconColor = "";

                                        jQuery('.burger-icon').css({backgroundColor: '#606060'});
                                        // scope.burgerIconColor = "burger-icon-gold";
                                        // scope.colorScreen = scope.colorScreenOne;

                                      // scope.colorScreen = scope.colorScreenOne;



                                    },600);  // end timeout

          }//end if statement

                                  // scope.colorScreenOne = '#ECC176'; // section one color
                                  // scope.colorScreenTwo = '#606060'; // section two color
                                  // scope.colorScreenThree = '#606060'; // section three color
                                  // scope.win = angular.element($window);
                                  // scope.windowHeight = angular.element($window).height(); // Window Height
                                  // scope.windowFifty = scope.windowHeight/2; // Calc for Logo
                                  // scope.windowBurger = scope.windowHeight - 42; // Calc for Burger Icon
                                  // scope.windowSeason = 42; // Calc for Burger Icon


        //................................................................................................................................ && location = evening

        else  if (($location.path() === '/collections/evening' + '/' + $routeParams.season) && (!scope.navActive)){

              scope.burgerIconColor = "";

              $rootScope.burgerHomeOne.disable();
              $rootScope.burgerHomeTwo.disable();

                scope.colorScreenOne = '#ECC176'; // section one color
                scope.colorScreenTwo = '#606060'; // section two color
                scope.colorScreenThree = '#606060'; // section three color


          setTimeout(function(){

            scope.colorScreen = scope.colorScreenOne;
            jQuery('.burger-icon').css({backgroundColor:  scope.colorScreenOne});

            var EveningImages = document.getElementById('evening-images');



                            // var burgerEveingOne = new Waypoint({
                            //    element: EveningImages,
                            //    handler: function(direction) {
                            //      if (direction === 'up') {
                            //       console.log('section-0');
                            //       //  jQuery('.burger-icon').css({backgroundColor: scope.colorScreenOne});
                            //       jQuery('.burger-icon').css({backgroundColor: scope.colorScreenOne});
                            //       scope.colorScreen = scope.colorScreenOne;
                            //
                            //      }
                            //      else if (direction === 'down') {
                            //       console.log('section-1');
                            //       //  jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                            //       jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                            //       scope.colorScreen = scope.colorScreenTwo;
                            //
                            //      }
                            //    },
                            //    offset: 42
                            //  });
              scope.burgerOne ={};
              scope.burgerTwo ={};


              var videocoverHeight = angular.element('#videocoverHeight').height();
              var burgerDistance = videocoverHeight - 42;

            angular.element($window).scroll(function (event) {
                  var scroll =  angular.element($window).scrollTop();

                  if (scroll < burgerDistance){

                          jQuery('.burger-icon').css({backgroundColor: scope.colorScreenOne});
                          scope.colorScreen = scope.colorScreenOne;

                  } else if(scroll >= burgerDistance){

                      jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                      scope.colorScreen = scope.colorScreenTwo;

                  }

              });

              jQuery(window).resize(function(){

                var videocoverHeight = angular.element('#videocoverHeight').height();
                var burgerDistance = videocoverHeight - 42;
                $rootScope.burgerHomeOne.disable();
                $rootScope.burgerHomeTwo.disable();

                // scope.win = angular.element($window);
                // scope.bridalWrapper = angular.element(document.querySelector('#videocoverHeight'));
                // scope.windowBridalBurger = (scope.bridalWrapper.height() - 42) // Calc for Burger Icon
                // console.log('scope.windowEveningBurger');
              });



                            // burgerEveingOne.enable();


                    },600);  // end timeout
              // }, 500)//end watch
        }//end if statement (evening)

        //................................................................................................................................ && location = bridal

        else if (($location.path() === '/collections/bridal' + '/' + $routeParams.season) && (!scope.navActive)){

              scope.burgerIconColor = "";

              scope.colorScreenOne = '#bf8088'; // section one color
              scope.colorScreenTwo = '#606060'; // section two color
              scope.colorScreenThree = '#606060'; // section three color

          setTimeout(function(){


                    scope.colorScreen = scope.colorScreenOne;
                    jQuery('.burger-icon').css({backgroundColor:  scope.colorScreenOne});

                    var bridalElement = document.getElementById('bridal-images');



                          scope.burgerBridalOne = new Waypoint({
                             element: document.getElementById('bridal-images'),
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
                             offset: 42
                           });

                          //  burgerBridalOne.enable();

                          jQuery(window).resize(function(){
                            Waypoint.refreshAll();
                            $rootScope.burgerHomeOne.disable();
                            $rootScope.burgerHomeTwo.disable();
                            // scope.win = angular.element($window);
                            // scope.bridalWrapper = angular.element(document.querySelector('#videocoverHeight'));
                            // scope.windowBridalBurger = (scope.bridalWrapper.height() - 42) // Calc for Burger Icon
                            // console.log('scope.windowEveningBurger');
                          });


                },600);  // end timeout

        }//end if statement bridal

        //..................................................................................................................................&& location = home


        else if (($location.path() === '/') && (!scope.navActive)){

                      scope.burgerIconColor = "";


              setTimeout(function(){
                  Waypoint.refreshAll();


                      scope.win = angular.element($window);


                          scope.colorScreenOne = '#ecc176'; // section one color
                          scope.colorScreenTwo = '#bf8088'; // section two color
                          scope.colorScreenThree = '#FFFFFF'; // section three color


                          scope.colorScreen = scope.colorScreenOne;
                          jQuery('.burger-icon').css({backgroundColor:  scope.colorScreenOne});


                          $rootScope.burgerHomeOne = new Waypoint({
                            element: document.getElementById('home-sections-1'),
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
                            offset: 42
                          });




                           $rootScope.burgerHomeTwo = new Waypoint({
                            element: document.getElementById('home-sections-2'),
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
                            offset: 42
                          });

                          // jQuery(window).resize(function(){
                          //   Waypoint.refreshAll();
                          //   scope.win = angular.element($window);
                          //   scope.windowHomeBurger = (scope.win.height() - 42) // Calc for Burger Icon
                          //   console.log(scope.windowHomeBurger);
                          // });



                          // $rootScope.burgerHomeOne.enable();
                          // $rootScope.burgerHomeTwo.enable();
                          //
                          scope.$on('$locationChangeStart', function( event ) {
                            // Waypoint.refreshAll();
                            // // burgerOne.waypoints('refresh');
                            // // burgerTwo.waypoints('refresh');
                            //
                            // Waypoint.Context.refreshAll();
                          //
                          // Waypoint.refreshAll();
                          // burgerOne.disable();
                          // burgerTwo.disable();

                                // if (burgerEveningOne) {
                                //   console.log('destroyEvening');
                                //   burgerEveningOne.disable();
                                // }
                                // else if(burgerBridalOne){
                                //   console.log('destroyBridal');
                                //  burgerBridalOne.disable();
                                // }
                                // else if(burgerHomeOne){
                                  console.log('destroyHome');
                                  $rootScope.burgerHomeOne.disable();
                                  $rootScope.burgerHomeTwo.disable();
                              // }
                            });

                      },600);  // end timeout




                    // }, 500)//watch

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
