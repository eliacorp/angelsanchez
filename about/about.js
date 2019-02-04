'use strict';

angular.module('myApp')

.controller('aboutCtrl', ['$scope','$http','$routeParams','$rootScope', '$templateCache','$sce','$location','MetaInformation', function($scope, $http, $routeParams, $rootScope,  $templateCache, $sce, $location, MetaInformation) {







  //setting an animation class for this specific page
    $scope.pageClass = 'page-about';

    $scope.method = 'GET';
    $scope.url = '/data/about.json';
    $scope.code = null;
    $scope.response = null;
    $scope.handle ={};
    $scope.base={};
    $scope.aboutVideo={};
    $scope.playButtonColor = "#606060"

    $http({method: $scope.method, url: $scope.url, cache: true})
    .success(function(data, status) {

        if ($rootScope.isMobile){
                // angular.element('.videocoverHeight').removeAttr('poster');
                // $scope.aboutThumbnailBase= 'https://i.vimeocdn.com/video/'+data[1].thumbnail+'_1280.jpg';
                // $scope.aboutThumbnail = $sce.trustAsResourceUrl($scope.aboutThumbnailBase);

                $scope.aboutThumbnail = data[1].thumbnail;
        }

        $scope.status = status;
        $scope.data = data;
        $scope.handle = data[1].videoHandle;
        $scope.videoId = data[1].videoId;

        $scope.base = 'https://player.vimeo.com/external/' + $scope.handle + '.hd.mp4?s=' + $scope.videoId + '&profile_id=113';
        $scope.aboutVideo = $sce.trustAsResourceUrl($scope.base);


        $rootScope.pageLoading = false;


// 130770759.hd.mp4?s=6b730ba4e67098b1877043700eed4e12&profile_id=113


      })

      .error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
      });

    $scope.updateModel = function(method, url) {
      $scope.method = method;
      $scope.url = url;
    };


    $scope.$on('$routeChangeSuccess', function() {

        if ($location.path()==='/about/brand'){
        return $scope.aboutVideoPresent = true;

      }else if ($location.path()==='/about/designer'){


          return $scope.aboutVideoPresent = false;

        }

    });




}])


.directive('scrollbottomDirective', function($window, $document, $rootScope){
  return{
    restrict: "A",
    link: function(scope, element, attrs) {

      setTimeout(function(){

        // check on page open
        var windowHeight = angular.element($window).height(); // Window Height
        var documentHeight = jQuery('.page-about').height(); // Page Height

        if  (documentHeight > windowHeight){
          jQuery('.about-designer-link, .about-brand-link').removeClass('about-link-active');
          jQuery('.about-designer-link, .about-brand-link').removeClass('about-link-active-static');

        }
        else if (documentHeight <= windowHeight){
          jQuery('.about-designer-link, .about-brand-link').addClass('about-link-active');

        }

        // check on resize window
        jQuery(window).resize(function(){

          var windowHeight = angular.element($window).height(); // Window Height
          var documentHeight = jQuery('.page-about').height(); // Page Height


          if  (documentHeight > windowHeight){
              jQuery('.about-designer-link, .about-brand-link').removeClass('about-link-active');
              jQuery('.about-designer-link, .about-brand-link').removeClass('about-link-active-static');
          }
          else if (documentHeight <= windowHeight){
              jQuery('.about-designer-link, .about-brand-link').addClass('about-link-active');
          }
        });


        // check on scroll
        // window.onscroll = function() {
        //   var windowHeight = angular.element($window).height(); // Window Height
        //   var documentHeight = jQuery('.page-about').height(); // Page Height
        //   var windowOffset = documentHeight - windowHeight;
        //   var scroll = $(window).scrollTop() + 10;
        //     if  (scroll >= windowOffset){
        //         jQuery('.about-designer-link, .about-brand-link').addClass('about-link-active');
        //     }
        //     else {
        //         jQuery('.about-designer-link, .about-brand-link').removeClass('about-link-active');
        //     }
        // };



      if (scope.aboutVideoPresent == true){
      if (!$rootScope.isMobile){
              scope.aboutPlayer =  videojs(jQuery('.video-js')[0]).ready(function() {
                // this.play();

                this.play();
                this.tech.removeControlsListeners();
                // videoActive = false;
                this.off('click');

                this.on("click", function(event){
                  event.preventDefault();
              });

            });


            //MOBILE: playing the video on click
          }else if ($rootScope.isMobile){
            scope.aboutPlayer =  videojs(jQuery('.video-js')[0]).ready(function() {
              this.pause();
              this.tech.removeControlsListeners();
            });
              scope.aboutOpenVideo=function(){
                scope.aboutPlayer.play();
              }

          }



      }







      },600);
      }
    }
});
