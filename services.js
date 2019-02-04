'use strict';

/* Services */
var Service = angular.module('myapp.Service', ['ngResource']);

Service.factory('collectionService', function($resource, $routeParams, $q, $cacheFactory){

// var canceler = $q.defer();

return $resource('/data/:collection/:season.json',{},{get:{method:'GET'}})
  // canceler.resolve();  // Aborts the $http request if it isn't finished.

});
// , params:{collection:$routeParams.collection , season:$routeParams.season}

Service.factory("CacheService", function($cacheFactory) {

   return { data:{ scrollY: 0 } };

});


Service.factory('detailService', function($resource, $routeParams, $q){


return $resource('/data/:collection/:season.json',{},{get:{method:'GET'}})

});

Service.factory('storesService', function($resource, $routeParams){

return $resource('/data/stores.json',{}, {get:{method:'GET', isArray:true}})

});



Service.factory('homeService', function($http, $q){

    return {
              get: function() {
                  // the $http API is based on the deferred/promise APIs exposed by the $q service
                  // so it returns a promise for us by default
                  return $http.get('/data/home.json')
                      .then(function(response) {



                          if (typeof response.data === 'object') {
                              return response.data;
                          } else {
                              // invalid response
                              console.log('rejected');
                              return $q.reject(response.data);
                          }

                      }, function(response) {
                          // something went wrong
                          return $q.reject(response.data);
                      });
              }
          };


});







//.................................................google SEO


Service.service('PageTitle', function() {
      var title = 'Angel Sanchez';
      return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
      };
    });



Service.service('MetaInformation', function() {
      var metaDescription = '';
      var metaKeywords = '';
      return {
        metaDescription: function() { return metaDescription; },
        metaKeywords: function() { return metaKeywords; },
        reset: function() {
          metaDescription = '';
          metaKeywords = '';
        },
        setMetaDescription: function(newMetaDescription) {
          metaDescription = newMetaDescription;
        },
        appendMetaKeywords: function(newKeywords) {
          for (var key in newKeywords) {
            if (metaKeywords === '') {
              metaKeywords += newKeywords[key].name;
            } else {
              metaKeywords += ', ' + newKeywords[key].name;
            }
          }
        }
      };
    });














// 
// Service.factory('resizeService', function($document, $window) {
//     return {
//         // video: function() {
//         //
//         //   jQuery(window).resize(function(){
//         //     scope.win = angular.element($window);
//         //     scope.windowHeight = angular.element($window).height(); // Window Height
//         //     scope.documentHeight = angular.element($document).height(); // Window Height
//         //     scope.videoHeight = jQuery('.video-wrapper').height(); // Video Height
//         //     scope.coverHeight = jQuery('.season-cover-image').height();
//         //     scope.startPlayHeight = scope.documentHeight - scope.windowHeight*2;
//         //   });
//         // },
//         burger: function() {
//           jQuery(window).resize(function(){
//             scope.win = angular.element($window);
//             scope.windowHeight = angular.element($window).height(); // Window Height
//             scope.windowFifty = scope.windowHeight/2; // Calc for Logo
//             scope.windowBurger = scope.windowHeight - 42; // Calc for Burger Icon
//             scope.windowSeason = 42; // Calc for Burger Icon
//             scope.videoHeight = jQuery('.video-wrapper').height(); // Video Height
//             scope.coverHeight = jQuery('.season-cover-image').height();
//         });
//       }
//
//     }
// });


//
// collectionService.factory('seasondetailService', function($resource, $routeParams){
//
//
// return $resource('/data/:collection/:season/:id.json',{},{get:{method:'GET' , params:{collection:$routeParams.collection , season:$routeParams.season, id:$routeParams.id}}})
//
// });








// , params:{collection:$routeParams.collection , season:$routeParams.season}


  // return $resource('/data/:collection/:season.json',{},{get:{method:'GET', params:{collection:$routeParams.collection , season:$routeParams.season}}})







  // {}, {get: {method:'GET', params:{collection:$routeParams.collection , season:$routeParams.season}}

  // params:{collection:$routeParams.collection , season:$routeParams.season}



  // {}, {query: {method:'GET', isArray:true}
  // params:{phoneId:'phones'}


          //  var serviceModule = angular.module('myApp')
          //
          //  serviceModule.factory('twitter', function ($resource, $http) {
          //     var consumerKey = encodeURIComponent('R8sSVQGZH0odXBKUVwMDkmbPE')
          //     var consumerSecret = encodeURIComponent('fX4HBXlBSJxx53nCKyubJeqtesGUkySS6GZPwcAYisKm38crKQ')
          //     var credentials = (consumerKey + ':' + consumerSecret)
          //     // Twitters OAuth service endpoint
          //     var twitterOauthEndpoint = $http.post(
          //         'https://api.twitter.com/oauth2/token'
          //         , "grant_type=client_credentials"
          //         , {headers: {'Authorization': 'Basic ' + credentials, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}
          //     )
          //     twitterOauthEndpoint.success(function (response) {
          //         // a successful response will return
          //         // the "bearer" token which is registered
          //         // to the $httpProvider
          //         serviceModule.$httpProvider.defaults.headers.common['Authorization'] = "Bearer " + response.access_token
          //     }).error(function (response) {
          //           // error handling to some meaningful extent
          //         })
          //
          //
          //
          //         return {
          //       		fetchTwitter: function(){
          //             return $resource('https://api.twitter.com/1.1/search/:action',  {action: 'tweets.json', count: 10, },{ paginate: {method: 'GET'}})
          //       		}
          //       	}
          //
          //
          //
          // })
          //
          // .config(function ($httpProvider) {
          //    serviceModule.$httpProvider = $httpProvider
          // });
