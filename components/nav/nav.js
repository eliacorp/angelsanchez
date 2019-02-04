

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

              // jQuery('main').css('display', 'block');

              //adding a timeout to make the reset happen after the sub-nav is closed

              $timeout(
                function(){
                  $scope.subNavShow = false;
                  $scope.aboutActive = false;
              $scope.collectionActive = false;
              }, 600);



            }else{

              // jQuery('main').css('display', 'none');
              // alert('true');
              return false

            }

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

      scope.resetBurgerScroll = function(){
                      angular.element($window).unbind("resize.homeBurger");
                      angular.element($window).unbind("scroll.homeBurger");

                      angular.element($window).unbind("resize.eveningBurger");
                      angular.element($window).unbind("scroll.eveningBurger");

                      angular.element($window).unbind("resize.bridalBurger");
                      angular.element($window).unbind("scroll.bridalBurger");

                }
  // var burgerEveningOne, burgerOne, burgerTwo, burgerBridalOne;
  //
  //  Waypoint.refreshAll();



scope.thisColor="";
scope.thisSeasonColor="";
scope.colorScreenOne = ''; // section one color
scope.colorScreenTwo = ''; // section two color
scope.colorScreenThree = ''; // section three color



$rootScope.$on('$routeChangeSuccess', function() {


      scope.$watch('navActive', function() {


//.....................................................................................................................................................when nav is active
          if (scope.navActive){

                     scope.burgerIconColor = "burger-icon-black";

                    // scope.colorScreenOne = '#FFFFFF'; // section one color
                    // scope.colorScreenTwo = '#FFFFFF'; // section two color
                    // scope.colorScreenThree = '#FFFFFF'; // section three color

                scope.colorScreen = '#000000';

                //     jQuery('.burger-icon').css({backgroundColor:  scope.colorScreen});

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


                                      scope.fromDetail = true;

                                      scope.thisSeasonColor="";
                                      scope.thisColor="";

                                      scope.burgerIconColor = "burger-icon-grey";

                                      scope.colorScreenOne = '#606060'; // section one color
                                      scope.colorScreenTwo = '#606060'; // section two color
                                      scope.colorScreenThree = '#606060'; // section three color


                                      //
                                      // scope.colorScreenOne = '#606060'; // section one color
                                      // scope.colorScreenTwo = '#606060'; // section two color
                                      // scope.colorScreenThree = '#606060'; // section three color

                                    setTimeout(function(){

                                      scope.resetBurgerScroll();



                                      // scope.colorScreen = '#ecc176';


                                        // jQuery('.burger-icon').css({backgroundColor: '#606060'});
                                        // scope.burgerIconColor = "burger-icon-gold";
                                        // scope.colorScreen = scope.colorScreenOne;

                                      // scope.colorScreen = scope.colorScreenOne;
                                    //   scope.colorScreen = '#606060';
                                     //
                                     //
                                    //  jQuery('.burger-icon').css({backgroundColor:  scope.colorScreen});


                                    },600);  // end timeout

          }//end if statement



        //................................................................................................................................ && location = evening

        else  if (($location.path() === '/collections/evening' + '/' + $routeParams.season) && (!scope.navActive)){

              scope.burgerIconColor = "";
              scope.thisColor="";
                // scope.thisColor="";

                scope.colorScreenOne = '#ECC176'; // section one color
                scope.colorScreenTwo = '#606060'; // section two color
                scope.colorScreenThree = '#606060'; // section three color



                // scope.colorScreen =   scope.colorScreenOne;

                // scope.colorScreen = scope.colorScreenOne;
                jQuery('.burger-icon').css({backgroundColor:  scope.colorScreenOne});

          setTimeout(function(){




                    if(scope.thisSeasonColor){

                      scope.colorScreen = scope.thisSeasonColor;


                      jQuery('.burger-icon').css({backgroundColor: scope.colorScreen});

                    }else{
                       scope.colorScreen = scope.colorScreenOne;


                    }









              var videocoverHeight = angular.element('#videocoverHeight').height();
              var burgerDistance = videocoverHeight - 42;

              if (videocoverHeight > 0){

          angular.element($window).bind("scroll.eveningBurger", function (event) {
                  var scroll =  angular.element($window).scrollTop();

                  if (scroll < burgerDistance){

                          // jQuery('.burger-icon').css({backgroundColor: scope.colorScreenOne});
                          scope.colorScreen = scope.colorScreenOne;
                          jQuery('.burger-icon').css({backgroundColor: scope.colorScreen});

                          scope.thisSeasonColor = scope.colorScreenOne;

                  } else if(scroll >= burgerDistance){

                      // jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                      scope.colorScreen = scope.colorScreenTwo;
                      jQuery('.burger-icon').css({backgroundColor: scope.colorScreen});
                      scope.thisSeasonColor = scope.colorScreenTwo;
                  }

              });
}

                angular.element($window).bind("resize.eveningBurger", function(){
                  videocoverHeight = angular.element('#videocoverHeight').height();
                  burgerDistance = videocoverHeight - 42;

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

              scope.colorScreen =   scope.colorScreenOne;

              scope.resetBurgerScroll();

              jQuery('.burger-icon').css({backgroundColor:  scope.colorScreen});


          setTimeout(function(){








            var videocoverHeight = angular.element('#videocoverHeight').height();
            var burgerDistance = videocoverHeight - 42;





        angular.element($window).bind("scroll.bridalBurger", function (event) {
                var scroll =  angular.element($window).scrollTop();

                if (scroll < burgerDistance){

                        jQuery('.burger-icon').css({backgroundColor: scope.colorScreenOne});
                        scope.colorScreen = scope.colorScreenOne;

                } else if(scroll >= burgerDistance){

                    jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                    scope.colorScreen = scope.colorScreenTwo;

                }

            });


              angular.element($window).bind("resize.bridalBurger", function(){
                videocoverHeight = angular.element('#videocoverHeight').height();
                burgerDistance = videocoverHeight - 42;


              });





                },600);  // end timeout

        }//end if statement bridal

        //..................................................................................................................................&& location = home


        else if (($location.path() === '/') && (!scope.navActive)){



                    scope.burgerIconColor = "";
                    scope.resetBurgerScroll();
                    scope.colorScreenOne = 'rgba(218, 218, 218, 1)'; // section one color
                    scope.colorScreenTwo = '#bf8088'; // section two color
                    scope.colorScreenThree = '#FFFFFF'; // section three color


              setTimeout(function(){

                    if(scope.thisColor){

                      scope.colorScreen = scope.thisColor;

                      jQuery('.burger-icon').css({backgroundColor: scope.colorScreen});

                    }else{
                       scope.colorScreen = scope.colorScreenOne;

                    }

                    // scope.colorScreen
                // scope.colorScreen = scope.colorScreenOne;


                // scope.colorScreen = scope.colorScreenOne;




                          var HomeSectionZero = angular.element('#home-sections-0');
                          var burgerHomeZero = HomeSectionZero.height() - 42;

                          var HomeSectionOne = angular.element('#home-sections-1');
                          var burgerHomeOne = (HomeSectionZero.height() *2) - 42;

                        angular.element($window).scroll(function (event) {
                                var scroll =  angular.element($window).scrollTop();

                                if (scroll < burgerHomeZero){


                                    scope.colorScreen = scope.colorScreenOne;
                                    jQuery('.burger-icon').css({backgroundColor: scope.colorScreen});
                                    scope.thisColor = scope.colorScreenOne;

                                } else if((scroll >= burgerHomeZero)&&(scroll< burgerHomeOne)){

                                    // jQuery('.burger-icon').css({backgroundColor: scope.colorScreenTwo});
                                    scope.colorScreen = scope.colorScreenTwo;
                                   jQuery('.burger-icon').css({backgroundColor: scope.colorScreen});

                                   scope.thisColor = scope.colorScreenTwo;

                                }else if (scroll >= burgerHomeOne){

                                  // jQuery('.burger-icon').css({backgroundColor: scope.colorScreenThree});
                                  scope.colorScreen = scope.colorScreenThree;
                                  jQuery('.burger-icon').css({backgroundColor: scope.colorScreen});


                                   scope.thisColor = scope.colorScreenThree;
                                }

                            });


                            angular.element($window).bind("resize.homeBurger", function(){

                              HomeSectionZero = angular.element('#home-sections-0');
                              burgerHomeZero = HomeSectionZero.height() - 42;
                              HomeSectionOne = angular.element('#home-sections-1');
                              burgerHomeOne = (HomeSectionZero.height() *2) - 42;

                            });



                            jQuery('.burger-icon').css({backgroundColor:  scope.colorScreen});





                      },600);  // end timeout



                  if (!scope.fromDetail) {
                    jQuery('.burger-icon').css({backgroundColor:  scope.colorScreen});

                  } else if (scope.fromDetail) {
                    scope.colorScreen = scope.colorScreenOne;
                    jQuery('.burger-icon').css({backgroundColor:  scope.colorScreenOne});
                     scope.fromDetail = false;

                  }

                      // return scope.colorScreen = scope.colorScreenOne;


                    // }, 500)//watch

                } //end else if location === '/'


        //..................................................................................................................................&& location = other



            else if (($location.path() === '/contact' || $location.path() === '/subscribe' || $location.path() === '/about/brand' || $location.path() === '/about/designer' || $location.path() === '/journal' || $location.path() === '/stores' ) && (!scope.navActive)){


                   scope.burgerIconColor = "burger-icon-black";
                   angular.element("burger-icon").removeAttr("style")

                            //  Waypoint.refreshAll()


            }//end else if location === '/other'

                  //  }//end else if navActive === false


                }); //watch












                }); //routechange
            }
          }
        });
