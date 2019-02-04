'use strict';

/*
  Configure routes used with ngRoute. We chose not to use $locationProvider.html5Mode(true);
  because using HTML5 pushstate requires that server routes are setup to mirror the routes
  in this file. Since this isn't a node course we're going to skip it. For all intensive
  purposes, html5 mode and url hash mode perform the same when within an angular app.
*/
angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngResource',
  'ngTouch',
  'myApp.Season',
  'myApp.Journal',
  'myapp.Service',
  'mailchimp',
  'ui.select',
  'infinite-scroll'
])

.run(function ($templateCache, $http, $rootScope, $route){
    $templateCache.put('journal.html', '/journal/journal.html');
    $templateCache.put('season-detail.html', '/collections/season-detail.html');
    $templateCache.put('season-bridal.html', '/collections/season-bridal.html');
    $templateCache.put('season-evening.html', '/collections/season-evening.html');
    $templateCache.put('video.html', '/collections/video.html');

        //  $http.get('images/bridal/fall-15/bfw15.jpg', {cache: $templateCache});
         //
        //  $http.get('images/bridal/spring-15/bss15.jpg', {cache: $templateCache});
         //
         //
        //  $http.get('images/bridal/spring-16/bss16-2.jpg', {cache: $templateCache});
         //
         //
         //

$rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
    //Change page title, based on Route information
    $rootScope.title = $route.current.title;
  });


         $templateCache.put('fall-15-cover', '/images/bridal/fall-15/bfw15.jpg');
         $templateCache.put('spring-15-cover', '/images/bridal/spring-15/bss15.jpg');
         $templateCache.put('spring-16-cover', '/images/bridal/spring-16/bss16-2.jpg');



  })
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {



//
  // use the HTML5 History API
  $locationProvider.html5Mode(true);

  $routeProvider


  // $locationChangeStart

  .when('/journal/:number', {
    templateUrl: 'journal/instagram-detail.html',
    title:"Angel Sanchez | Journal"
    // resolve: {
    //        function($q, $timeout) {
    //           var deferred = $q.defer();
    //
    //           deferred.resolve();
    //
    //           return deferred.promise;
    //       }
    //   }
  })

    .when('/journal', {
      templateUrl: 'journal/journal.html',
      controller: 'journalCtrl',
      title:"Angel Sanchez | Journal"
      // resolve: {
      //        function($q, $timeout) {
      //           var deferred = $q.defer();
      //
      //           deferred.resolve();
      //
      //           return deferred.promise;
      //       }
      //   }
    })





    .when('/stores', {
      templateUrl: 'stores/stores.html',
      controller: 'storesCtrl',
      title:"Angel Sanchez | Stores"
    })

    .when('/contact', {
      templateUrl: 'contact/contact.html',
      controller: 'contactCtrl',
      title:"Angel Sanchez | Contact"
      })
      .when('/subscribe', {
        templateUrl: 'subscribe/subscribe.html',
        controller: 'MailchimpSubscriptionCtrl',
        title:"Angel Sanchez | Subscribe"

        })

        .when('/legal', {
          templateUrl: 'legal/legal.html',
          controller: 'legalCtrl',
          title:"Angel Sanchez | Legal"
          })



    /*............................. About routing ........................*/
          .when('/about/designer', {
            templateUrl: 'about/about-designer.html',
            controller: 'aboutCtrl',
            title:"Angel Sanchez | About The Designer"
          })
          .when('/about/brand', {
            templateUrl: 'about/about-brand.html',
            controller: 'aboutCtrl',
            title:"Angel Sanchez | About The Brand"
          })



    /*............................. Collection routing ........................*/

    .when('/collections/:collection/:season/:id', {
    templateUrl: 'collections/season-detail.html',
    title:"Angel Sanchez | Collections"
    //  controller: 'seasonController'
     })




    .when('/collections/:collection/:season', {
    templateUrl: 'collections/collection.html',
    controller: 'seasonController',
    title:"Angel Sanchez | Collections"
    //  resolve: {
    //    data: function(collectionService) { // Inject a resource named 'Gists'
     //
    //      return collectionService.get();
    //    }
    //  }
     })





    /*............................. Take-all routing ........................*/


    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'homeCtrl',
      title:"Angel Sanchez",
      resolve: {
        app: function ($q, $timeout) {
          var deferred = $q.defer();
          $timeout(function () {
            deferred.resolve();

          },200);

          return deferred.promise;
        }
      }
    })


    // put your least specific route at the bottom
    .otherwise({redirectTo: '/'})


}])

.controller('routeController', function($scope, $location, $rootScope, $routeParams, $timeout, $window, $document){

$rootScope.thismetaDescription = "home"


         $document.title = "home";


    $rootScope.$on('$routeChangeStart', function() {
     // $scope.burgerHide = true;

    });



  $scope.isRouteLoading = false;
  $rootScope.$on('$routeChangeSuccess', function() {

      $rootScope.location = $location.path();
      $rootScope.hash = $location.hash();

      $rootScope.rootCollection = $routeParams.collection;
      $rootScope.rootSeason = $routeParams.season;
      $rootScope.rootNumber = $routeParams.number;
      $rootScope.id = $routeParams.id;


      $scope.beLogo = function(){



        if ($rootScope.location === '/collections/'+$routeParams.collection+'/'+$routeParams.season) {
          // return $rootScope.logoFade();
          // $scope.logoFadeAway = false;
          return false;




        }
        else if ($rootScope.location === '/contact' || $rootScope.location === '/legal' || $rootScope.location === '/subscribe' || $rootScope.location === '/about/brand' || $rootScope.location === '/about/designer' || $rootScope.location === '/journal' || $rootScope.location === '/journal/' + $rootScope.rootNumber || $rootScope.location === '/stores' ||
        $rootScope.location === '/collections/'+ $rootScope.rootCollection + '/' + $rootScope.rootSeason + '/' + $rootScope.id ) {

          return true;

        }
        else if ($rootScope.location === '/' ){

          return false;


        }


      };






//removing header from functional pages
      $rootScope.beHeader = function(){
        if ($rootScope.location === '/contact' || $rootScope.location === '/subscribe' || $rootScope.location === '/about/brand' || $rootScope.location === '/about/designer' || $rootScope.location === '/journal' || $rootScope.location === '/stores' || $rootScope.location === '/legal' ){
          return true;
        }
        else{
          return false;
        }
      };


      $rootScope.beSeason = function(){
          $scope.detailImageClass = "detail-image-animation";
          $scope.pageClass = "season-detail-page";
      };


      $rootScope.beJournal = function(){
          $scope.detailImageClass = "detail-image-animation";
          $scope.pageClass = "journal-detail-page";
      };



    $rootScope.mobileLocation = function(url){
      $location.path(url).search();
    }

  });





  //..............................................................................mobile


//....this is the function that checks the header of the browser and sees what device it is

$rootScope.checkDevice = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return ($rootScope.checkDevice.Android() || $rootScope.checkDevice.BlackBerry() || $rootScope.checkDevice.iOS() || $rootScope.checkDevice.Opera() || $rootScope.checkDevice.Windows());
      }
  };

//........checks the width

  $scope.mobileQuery=window.matchMedia( "(max-width: 767px)" );
  $rootScope.isMobile=$scope.mobileQuery.matches;


//.........returning true if device

  if ($scope.checkDevice.any()){
    $rootScope.isDevice= true;
  }else{
      $rootScope.isDevice=false;
  }



  if (($rootScope.isMobile)&&($rootScope.isDevice)){
    jQuery('.vjs-control-bar').hide();
    $rootScope.isRootMobileDevice =true;
  }

})


.directive('pageLoadingSpinner', function($rootScope, $location, $window, $routeParams) {
  return {
    restrict: 'A',
    // templateUrl: 'components/loader.html',
    replace: true,
    link: function(scope, elem, attrs) {


      $rootScope.$on('$routeChangeStart', function() {

          $rootScope.pageLoading = true;
          scope.logoHide = true;

      });


      $rootScope.$on('$routeChangeSuccess', function() {

        scope.logoHide = false;
        $rootScope.pageLoading = false;



      });
    }
  };
});




// .directive('metaDirective', function($rootScope, $location, $window, $routeParams, $document) {
//   return {
//     restrict: 'A',
//     // templateUrl: 'components/loader.html',
//     replace: true,
//     link: function(scope, elem, attrs) {


//   $rootScope.$on('$routeChangeSuccess', function() {



//       $rootScope.location = $location.path();

//       $rootScope.rootCollection = $routeParams.collection;
//       $rootScope.rootSeason = $routeParams.season;
//       $rootScope.rootNumber = $routeParams.number;
//       $rootScope.id = $routeParams.id;



//         if (
//         $rootScope.location === '/collections/'+ $rootScope.rootCollection + '/' + $rootScope.rootSeason + '/' + $rootScope.id ) {

//           elem.removeAttr("content");
//           elem.attr("content", "season detail");

//         }
//         if ($rootScope.location === '/collections/'+$routeParams.collection+'/'+$routeParams.season) {

//         elem.removeAttr("content");
//         elem.attr("content", "collection season" );
//           // $document.title= " season";
//         }
//         else if ($rootScope.location === '/' ){
//           elem.removeAttr("content");
//           elem.attr("content", "home" );

//         }
//         else if ($rootScope.location === '/contact'){
//           elem.removeAttr("content");
//           elem.attr("content", "contact" );

//         }

//        else if ($rootScope.location === '/legal'){

//           elem.removeAttr("content");
//           elem.attr("content", "legal" );

//         }
//         else if ($rootScope.location === '/subscribe' ){

//           elem.removeAttr("content");
//           elem.attr("content", "subscribe" );

//         }
//         else if ($rootScope.location === '/about/brand' ){

//           elem.removeAttr("content");
//           elem.attr("content", "about the brand" );

//         }
//         else if ($rootScope.location === '/about/designer'){

//           elem.removeAttr("content");
//           elem.attr("content", "about the designer" );

//         }
//        else if ($rootScope.location === '/journal' ){

//           elem.removeAttr("content");
//           elem.attr("content", "journal" );

//         }
//         else if ($rootScope.location === '/journal/' + $rootScope.rootNumber ){

//           elem.removeAttr("content");
//           elem.attr("content", "journal detail" );

//         }

//         else if ($rootScope.location === '/stores' ){

//           elem.removeAttr("content");
//           elem.attr("content", "stores" );

//         }


//       });


//     }
//   };
// });
