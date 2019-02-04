angular.module('myApp')

.directive("logoDirective", function($location, $rootScope, $routeParams, $window){
  return{
    restrict: "E",
    templateUrl: 'components/logo/logo.html',
    link: function(scope, element, attrs){
// colorAnchorInactive
      var colorAnchorActive = 'rgba(218, 218, 218, 1)';
      var colorAnchorInactive = 'rgba(96, 96, 96, 1)';



      scope.mobileLogoClick = function(){
        if ($location.path()=='/'){
        $location.path(scope.logoUrl).search();
      }
      }

      scope.resetLogo = function(){

        // angular.element($window).unbind("resize.logoFade");
        angular.element($window).unbind("scroll.logoColor");
        angular.element($window).unbind("resize.logoColor");


      }

      scope.changeLogo = function(link1, link2, link3, colorOne, colorTwo, colorThree){

                          scope.resetLogo();

                                      setTimeout(function(){


                                                    scope.windowHeight = angular.element($window).height(); // Window Height
                                                    scope.windowFifty = scope.windowHeight/2; // Calc for Logo
                                                    scope.windowFiftyTwo = (scope.windowHeight)+(scope.windowHeight/2); // Calc for Logo

                                                    scope.logoUrl = link1;

                                                    // scope.colorLogoScreenOne = ""; // section one color
                                                    // scope.colorLogoScreenTwo = ""; // section two color
                                                    // scope.colorLogoScreenThree = ""; // section three color



                                                    // colorOne; // section one color
                                                    // colorTwo; // section two color
                                                    // colorThree; // section three color

                                                    scope.colorLogoScreen = "";

                                                    scope.colorLogoScreen = colorOne;
                                                    jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreen);
                                                    jQuery('.logo-svg').attr('fill', scope.colorLogoScreen);
                                                    jQuery('.logo-svg').attr('fill', scope.colorLogoScreen);


                                                    // var homeSectionZero = angular.element('#home-sections-0');
                                                    // var homeSectionOne = angular.element('#home-sections-1');
                                                    // var logoFifty = (homeSectionZero.height() / 2);
                                                    // var logoFiftyTwo = (logoFifty)+(homeSectionZero.height() / 2);




          angular.element($window).bind("scroll.logoColor", function (event) {

                                        // jQuery('.svg-logo-path').removeAttr('fill');

                                                        var scrollLogo =  angular.element($window).scrollTop();
                                                   // scope.colorLogoScreen = colorOne;
                                                    // jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreen);
                                                    // jQuery('.logo-svg').attr('fill', scope.colorLogoScreen);


                                                        if ((scrollLogo < scope.windowFifty)&&(scrollLogo > 0)){

                                                              scope.colorLogoScreen = colorOne;
                                                              jQuery('.svg-logo-path').attr('fill', colorOne);

                                                          // jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreenOne);
                                                              jQuery('.sanchez-logo').removeAttr('href');
                                                              jQuery('.sanchez-logo').attr('href', link1);

                                                              // jQuery('.sanchez-logo').removeAttr('ng-click');
                                                              // jQuery('.sanchez-logo').attr("ng-click", "navReset(); " + "mobileLogoClick('/"+link1+"')");

                                                              scope.logoUrl = link1;


                                                            if (link1 === ""){
                                                          jQuery('.sanchez-logo').removeAttr('href');
                                                            }


                                                         }
                                                         else if ((scrollLogo >= scope.windowFifty) && (scrollLogo < scope.windowFiftyTwo)){


                                                           jQuery('.sanchez-logo').removeAttr('href');
                                                           jQuery('.sanchez-logo').attr('href', link2);

                                                          // jQuery('.sanchez-logo').removeAttr('ng-click');
                                                          // jQuery('.sanchez-logo').attr("ng-click", "navReset(); " + "mobileLogoClick('/"+link2+"')");
                                                          scope.logoUrl = link2;


                                                           scope.colorLogoScreen = colorTwo;
                                                          jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreen);

                                                         }

                                                         else if (scrollLogo >= scope.windowFiftyTwo){

                                                           // jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreenThree);
                                                           jQuery('.sanchez-logo').removeAttr('href');
                                                           jQuery('.sanchez-logo').attr('href', link3);

                                                          //  jQuery('.sanchez-logo').removeAttr('ng-click');
                                                          //  jQuery('.sanchez-logo').attr("ng-click", "navReset(); " + "mobileLogoClick('/"+link3+"')");
                                                          scope.logoUrl = link3;

                                                            scope.colorLogoScreen = colorThree;
                                                           jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreen);


                                                         }
                                                         else{

                                                              scope.colorLogoScreen = colorOne;
                                                              jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreen);

                                                         }



                                                     });

                                                     angular.element($window).bind("resize.logoColor", function(){
                                                       scope.windowHeight = angular.element($window).height(); // Window Height
                                                       scope.windowFifty = scope.windowHeight/2; // Calc for Logo
                                                       scope.windowFiftyTwo = (scope.windowHeight)+(scope.windowHeight/2); // Calc for Logo

                                                     });



                                                  }, 800);


                            }






            setTimeout(function(){
              jQuery('.home-angel-logo').addClass('home-angel-logo-active');
            }, 600);



        $rootScope.$on('$routeChangeSuccess', function() {


scope.colorLogoScreen = {};
//..................................................................................................................................................  location = evening

          if  ($location.path() === '/collections/evening' + '/' + $routeParams.season){



              angular.element('.sanchez-logo').removeAttr('href');
              angular.element('.sanchez-logo').removeAttr('ng-click');


              scope.logoFadeValue = true;//to make sure it can fade


                            //
                            // var eveningLogoScreenOne = '#ecc176'; // section one color
                            // var eveningLogoScreenTwo = '#ecc176'; // section two color
                            // var eveningLogoScreenThree = '#ecc176'; // section three color
                            // //
                            scope.colorLogoScreen = '#ecc176';
                            jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreen);
                            // scope.link1 = "";
                            // scope.link2= "";
                            // scope.link3= "";

                            angular.element($window).unbind("scroll.logoColor");
                            // scope.changeLogo(scope.link1, scope.link2, scope.link3, eveningLogoScreenOne, eveningLogoScreenTwo, eveningLogoScreenThree, false);

          }



//..................................................................................................................................................  location = bridal

          else if  ($location.path() === '/collections/bridal' + '/' + $routeParams.season){

            scope.colorLogoScreen = '';

              angular.element('.sanchez-logo').removeAttr('href');
              angular.element('.sanchez-logo').removeAttr('ng-click');
              scope.logoFadeValue = true;//to make sure it can fade
              // var bridalLogoScreenOne = '#bf8088'; // section one color
              // var bridalLogoScreenTwo = '#bf8088'; // section two color
              // var bridalLogoScreenThree = '#bf8088'; // section three color
              //
              scope.colorLogoScreen = '#bf8088';
              jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreen);
              //
              // scope.link1 = "";
              // scope.link2= "";
              // scope.link3= "";

              angular.element($window).unbind("scroll.logoColor");

              // scope.changeLogo(scope.link1, scope.link2, scope.link3, bridalLogoScreenOne, bridalLogoScreenTwo, bridalLogoScreenThree, false);


          }




          else if ($location.path() === '/'){


            scope.colorLogoScreen = 'rgba(218,218,218, 1)';
            jQuery('.svg-logo-path').attr('rgba(218,218,218, 1)');
            angular.element($window).unbind("scroll.logoColor");
            //......putting back the home gold
            // jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreen);
            // angular.element('.sanchez-logo').attr('href', '/collections/evening/resort-2016');
            // angular.element('.sanchez-logo').attr('mobileLogoClick', '/collections/evening/resort-2016');
            jQuery('logo-svg').attr('href', '/collections/evening/fall-winter-2016'); //putting back the first link

            jQuery('.sanchez-logo').attr("ng-click", "navReset(); " + "mobileLogoClick('/collections/evening/fall-winter-2016')");

            var colorLogoScreenOne = 'rgba(218, 218, 218, 1)'; // section one color
            var colorLogoScreenTwo = '#bf8088'; // section two color
            var colorLogoScreenThree = '#FFFFFF'; // section three color


            scope.link1 = 'collections/evening/fall-winter-2016';
            scope.link2= 'collections/bridal/spring-summer-2017';
            scope.link3= 'about/designer';


            scope.changeLogo(scope.link1, scope.link2, scope.link3, colorLogoScreenOne, colorLogoScreenTwo, colorLogoScreenThree);

            // setTimeout(function(){
            //
            //               scope.colorLogoScreenOne = '#ecc176'; // section one color
            //               scope.colorLogoScreenTwo = '#bf8088'; // section two color
            //               scope.colorLogoScreenThree = '#FFFFFF'; // section three color
            //
            //               scope.win = angular.element($window);
            //               scope.windowHeight = angular.element($window).height(); // Window Height
            //               scope.windowFifty = windowHeight/2; // Calc for Logo
            //               scope.windowBurger = windowHeight - 42; // Calc for Burger Icon
            //               scope.windowSeason = 42; // Calc for Burger Icon
            //
            //
            //
            //                scope.logoOne = new Waypoint({
            //                  element: document.getElementById('home-sections-0'),
            //                  handler: function(direction) {
            //                    if (direction === 'up'){
            //                     jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreenOne);
            //                     jQuery('.sanchez-logo').removeAttr('href');
            //                     jQuery('.sanchez-logo').attr('href', 'collections/evening/resort-2016');
            //
            //                    }
            //                    else if (direction === 'down'){
            //                      jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreenTwo);
            //                      jQuery('.sanchez-logo').attr('href', 'collections/bridal/spring-summer-2016');
            //                    }
            //
            //                  },
            //                  offset: - scope.windowFifty
            //                });
            //
            //
            //               scope.logoTwo = new Waypoint({
            //                 element: document.getElementById('home-sections-1'),
            //                 handler: function(direction) {
            //                   if (direction === 'up') {
            //                     jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreenTwo);
            //                     jQuery('.sanchez-logo').removeAttr('href');
            //                     jQuery('.sanchez-logo').attr('href', 'collections/bridal/spring-summer-2016');
            //                   }
            //                   else if (direction === 'down'){
            //                     jQuery('.svg-logo-path').attr('fill', scope.colorLogoScreenThree);
            //                     jQuery('.sanchez-logo').attr('href', 'about/designer');
            //                   }
            //
            //                 },
            //                 offset: - scope.windowFifty
            //               });
            //
            //               },600);

                          scope.logoFadeValue = false;
            }

            else {
              angular.element('.sanchez-logo').removeAttr('href');
              scope.logoFadeValue = false;


            }

      });


    }
  }

})



.directive("logoFadeDirective", function($rootScope, $window, $routeParams, $location){
  return{
    restrict: "A",
    scope: true,
    link: function(scope, element, attrs){


     setTimeout(function(){

       scope.win = angular.element($window);
       scope.windowHeight = angular.element($window).height(); // Window Height
       scope.windowFifty = scope.windowHeight/2; // Calc for Logo
       scope.windowBurger = scope.windowHeight - 42; // Calc for Burger Icon
       scope.windowSeason = 42; // Calc for Burger Icon



                angular.element($window).bind("scroll.logoFade", function(){

                   scope.scroll = angular.element($window).scrollTop();

                     if (( scope.scroll > (scope.windowHeight /2.5)) && (scope.logoFadeValue) ){
                       // scope.logoFade = true;
                       jQuery('.home-angel-logo').fadeOut(300);

                      //  return false;
                     }
                     else if (( scope.scroll <= (scope.windowHeight /2.5)) && (scope.logoFadeValue)){
                       // scope.logoFade = false;
                       jQuery('.home-angel-logo').fadeIn(400);
                      //  return false;
                     }
                     else if (!scope.logoFadeValue){
                       jQuery('.home-angel-logo').fadeIn(400);
                     }
                   });
// ($(window).scrollTop()

                  angular.element($window).bind("resize.logoFade", function(){
                    scope.win = angular.element($window);
                    scope.windowHeight = angular.element($window).height(); // Window Height
                    scope.windowFifty = scope.windowHeight/2; // Calc for Logo
                    scope.windowBurger = scope.windowHeight - 42; // Calc for Burger Icon
                    scope.windowSeason = 42; // Calc for Burger Icon
                  });



                 }, 600);
    }
  }

});

//


// .directive("logoMobile",function($rootScope, $window, $routeParams, $location){
//   return{
//     restrict: "A",
//     link: function(scope, element, attrs){
//
//       element.css({
//         '-o-transform':'translateY(-30%)',
//         '-ms-transform': 'translateY(-30%)', /* IE 9 */
//        	'-webkit-transform': 'translateY(-30%)', /* Safari */
//         'transform': 'translateY(-30%) '
//       });
//
//
//     }
//   }
//
// });
