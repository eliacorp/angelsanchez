var app = angular.module('myApp.Season', ['myapp.Service', 'ngRoute', 'ngResource', 'ngAnimate',  'ngTouch']);

// // EFFECTS FOR EVENING
app.run(function($timeout, $rootScope, $routeParams, $window, $q, $templateCache ) {

    $templateCache.get('season-detail.html');
    $templateCache.get('season-bridal.html');
    $templateCache.get('season-evening.html');
    $templateCache.get('video.html');

    $templateCache.get('fall-15-cover');
    $templateCache.get('spring-15-cover');
    $templateCache.get('spring-16-cover');

});


app.directive('eveningDirective', function(){
  return{
    restrict: "A",
    link: function() {
                  setTimeout(function(){
                      jQuery(function(){

                           var i = 0;
                           var imageNumber = jQuery('.box-wrapper-evening').length;

                          jQuery('.box-wrapper-evening').each(function(i){
                            i++;
                            var img = $(this);

                            // jQuery(this).find().after().html('<div class="image-filler"></div>');

                            if (i > imageNumber) {
                               return false;
                             }
                              setTimeout(function() {

                                  img.ready(function(){
                                    img.addClass('collection-visible');
                                  });

                              }, 70*i);
                           });
                     });
                   },300);
        }
  }
});


// EFFECTS FOR BRIDAL

app.directive('bridalDirective', function($routeParams){
  return{
    restrict: "A",
    link: function(scope,element, attrs) {

    scope.thisBridal= $routeParams.season;

        setTimeout(function(){
            jQuery(function(){

                 var i = 0;
                 var imageNumber = jQuery('.box-wrapper-bridal').length;
            //
                jQuery('.box-wrapper-bridal').each(function(i){
                  i++;
                  var img = $(this);

                  if (i == 1) {
                    img.addClass(scope.thisBridal + '-image-layout-one')
                  }
                  else if (i == 2) {
                    img.addClass(scope.thisBridal + '-image-layout-two');
                  }
                  else if (i == 3) {
                    img.addClass(scope.thisBridal + '-image-layout-three')
                  }
                  else if (i == 4) {
                    img.addClass(scope.thisBridal + '-image-layout-four')
                  }
                  else if (i == 5) {
                    img.addClass(scope.thisBridal + '-image-layout-five')
                  }
                  else if (i == 6) {
                    img.addClass(scope.thisBridal + '-image-layout-six')
                  }
                  else if (i == 7) {
                    img.addClass(scope.thisBridal + '-image-layout-seven')
                  }
                  else if (i == 8) {
                    img.addClass(scope.thisBridal + '-image-layout-eight')
                  }
                  else if (i == 9) {
                    img.addClass(scope.thisBridal + '-image-layout-nine')
                  }
                  else if (i == 10) {
                    img.addClass(scope.thisBridal + '-image-layout-ten')
                  }
                  else if (i == 11) {
                    img.addClass(scope.thisBridal + '-image-layout-eleven')
                  }
                  else if (i == 12) {
                    img.addClass(scope.thisBridal + '-image-layout-twelve')
                  }
                  else if (i == 13) {
                    img.addClass(scope.thisBridal + '-image-layout-thirteen')
                  }
                  else if (i == 14) {
                    img.addClass(scope.thisBridal + '-image-layout-fourteen')
                  }
                  else if (i == 15) {
                    img.addClass(scope.thisBridal + '-image-layout-fifteen')
                  }
                  else if (i == 16) {
                    img.addClass(scope.thisBridal + '-image-layout-sixteen')
                  }
                  else if (i == 17) {
                    img.addClass(scope.thisBridal + '-image-layout-seventeen')
                  }
                  else if (i == 18) {
                    img.addClass(scope.thisBridal + '-image-layout-eighteen')
                  }

                  else if (i > imageNumber) {
                     return false;
                   }




                    setTimeout(function() {

                        img.ready(function(){
                          img.addClass('collection-visible');
                        });

                    }, 70*i);


                    });

               });


             }, 300);

        }
  }


});


//..................................................................................season controller.........................................................................................


 app.controller('seasonController', function(CacheService, $scope, $routeParams, $route, $templateCache, $scope, collectionService, $sce, $rootScope, $window, $document, $location, $timeout, MetaInformation){

// $routeParams.collection+$routeParams.season




//............................................................if Browser

    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((is_chrome)&&(is_safari)) {is_safari=false;}
    if ((is_chrome)&&(is_opera)) {is_chrome=false;}





//no baility to include routeparams in .config file so doing it here
   $scope.templateUrl = 'collections/season-'+$routeParams.collection+'.html';

   $scope.pageClass = "page-season";

   $scope.logoFadeAway = false;

   $scope.collectionName = $routeParams.collection;
   $scope.seasonName = $routeParams.season;

   $scope.service = CacheService.data

//initiating variables
  $scope.collectionName ={};
  $scope.seasonName={};
  $rootScope.id = $routeParams.id;
  $scope.realid = parseInt($routeParams.id) -1;
  $scope.video = {};
  $scope.handle={};
  $scope.last;
  $scope.first = 1;
  $scope.next=false;
  $scope.cover = {};
  $scope.player={};
  $scope.videoElement = {};

  $scope.eveningBox = angular.element('#evening-image-10');
  $scope.eveningBoxHeight = $scope.eveningBox.height();


  $scope.isSeasonDevice = {
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
            return ($scope.isSeasonDevice.Android() || $scope.isSeasonDevice.BlackBerry() || $scope.isSeasonDevice.iOS() || $scope.isSeasonDevice.Opera() || $scope.isSeasonDevice.Windows());
        }
    };






// $scope.mobileQuery=window.matchMedia( "(max-width: 767px)");
if ($scope.isSeasonDevice.any()){

  $scope.isSeasonDevice= true;
}else{

  $scope.isSeasonDevice=false;
}





//.....defining javascript media queries
$scope.mobileQuery=window.matchMedia( "(max-width: 767px)" );
$scope.tabletMinQuery=window.matchMedia( "(min-width: 768px)" );
// $scope.tabletMaxQuery=window.matchMedia( "(max-width: 1024px)" );

//....if it is mobile
$scope.isSeasonMobile = $scope.mobileQuery.matches;

//.....if it is tablet
$scope.isSeasonTabletMin=$scope.tabletMinQuery.matches;
// $scope.isSeasonTabletMax=$scope.tabletMaxQuery.matches;

if ($scope.isSeasonTabletMin){
  $scope.isSeasonTablet = true;
} else {
  $scope.isSeasonTablet = false;

}

if(($scope.isSeasonMobile) && ($scope.isSeasonDevice)){
  $scope.isMobileDevice = true;
}else{
    $scope.isMobileDevice = false;
}


//.....get request
collectionService.get({collection: $routeParams.collection, season: $routeParams.season}, function(data){

  $scope.thumbnail = data.mobileThumbnail;

      // usSpinnerService.spin('spinner-1');

        $scope.collection = data;
        $scope.collectionName = data.collection;
        $scope.seasonName = data.season;

        $scope.base = {};
        $scope.video = {};
        $scope.handle ={};
        $scope.videoId = {};

        $scope.handle = data.videoHandle;
        $scope.videoId = data.videoId;

        $scope.cover = data.cover;
        $scope.coverLength = data.cover.length;

        //product detail
        $scope.last = data.images.length;
        $scope.nextId = parseInt($scope.id)+1;
        $scope.prevId = parseInt($scope.id)-1;

        // replacing - with spaces and fixing flicker in img detail page when switching content
        $rootScope.seasonSpaced = $scope.seasonName.replace(/-/g, ' ');








        if (data.videoId){

          //.....if  desktop
        if (!$scope.isSeasonDevice){
          $scope.base = 'https://player.vimeo.com/external/' + $scope.handle + '.hd.mp4?s=' + $scope.videoId + '&profile_id=113';
          $scope.video = $sce.trustAsResourceUrl($scope.base);

        }else if (($scope.isSeasonTablet)&&($scope.isSeasonDevice)){

          $scope.mobilevideoHandle = data.mobilevideoHandle;
          $scope.mobileVideoId = data.mobileVideoId;

          $scope.base = 'https://player.vimeo.com/external/' + $scope.mobilevideoHandle + '.hd.mp4?s=' + $scope.mobileVideoId + '&profile_id=113';
          $scope.video = $sce.trustAsResourceUrl($scope.base);


        }else if (($scope.isSeasonMobile) && ($scope.isSeasonDevice)){

          angular.element('.videocoverHeight').removeAttr('poster');

          $scope.mobilevideoHandle = data.mobilevideoHandle;
          $scope.mobileVideoId = data.mobileVideoId;

          $scope.base = 'https://player.vimeo.com/external/' + $scope.mobilevideoHandle + '.hd.mp4?s=' + $scope.mobileVideoId + '&profile_id=113';
          $scope.video = $sce.trustAsResourceUrl($scope.base);

          if ($location.path()===('/collections/bridal/'+$routeParams.season)) {
            $scope.playButtonColor= "#606060";

          }else if($location.path()===('/collections/evening/'+$routeParams.season)){
            $scope.playButtonColor= "#ecc176";
          }
        }

        } else {

          return false;
        }





}); //end of the get request

//
//
// for (var i in $scope.collection.images, i < $scope.collection.images.length, i++){
//
//   if ($scope.eveningBoxHeight = 0){
//   //
//   // $timeout(function () {
//   $scope.seasonLoading-i= false;
//   console.log('seasonLoading: '+ $scope.seasonLoading);
//   // }, 2000);
//   //
//   } else if($scope.eveningBoxHeight > 0){
//
//             $scope.seasonLoading-i = true;
//             console.log('seasonLoading: '+ $scope.seasonLoading);
//   }
//
// }



// $scope.imageHeight = function(i){
//   $scope.collection.images[i]
// }






    $scope.requestsExisting = function(value){
     if(value >= 1)
         return true;
     else
         return false;
     };



   $scope.$root = {
       initializing: {
           status: 'Complete!'
       }
   }



//Share Slider function
   $rootScope.shareSlide = function(){
         $scope.shareHide = !$scope.shareHide;
        event.preventDefault();
   }





//...............................................................................mobile gestures
if ($scope.isSeasonDevice){


    $scope.swipeRight = function(){

      if($scope.prevId > $scope.first){
        $location.path('/collections'+'/'+$routeParams.collection+'/'+$routeParams.season+'/'+$scope.prevId).search();
      }else if($scope.prevId <= $scope.first){
          $location.path('/collections'+'/'+$routeParams.collection+'/'+$routeParams.season+'/'+$scope.last).search();
        }
    }

    $scope.swipeLeft = function(){
      if($scope.nextId < $scope.last){
        $location.path('/collections'+'/'+$routeParams.collection+'/'+$routeParams.season+'/'+$scope.nextId).search();
      }else if($scope.nextId >= $scope.last){
          $location.path('/collections'+'/'+$routeParams.collection+'/'+$routeParams.season+'/'+$scope.first).search();
        }
    }



    $scope.mobileViewAll=function(){
      $location.path('/collections'+'/'+$routeParams.collection+'/'+$routeParams.season).search();
    }



}//end if mobile



});

app.directive('videoDirective', function($window, $document, $rootScope, $location, $routeParams, $document, $route){
  return{
    restrict: "E",
    replace: 'true',
    templateUrl: 'collections/video.html',
    link: function(scope,element, attrs){

      scope.detailHappened = false;


      // $rootScope.$on('$routeChangeStart', function() {
      //
      //         player.dispose();
      //
      // });



      $rootScope.$on('$routeChangeSuccess', function() {

         if ($location.path() == '/collections/' + $routeParams.collection + '/' + $routeParams.season + '/' + $routeParams.id)   {
          //  event.preventDefault();
           scope.player = {};
           angular.element($window).unbind(".videoEvening");
           angular.element($window).unbind(".videoBridal");
           //  scope.player.pause();

         }
          else if ($location.path() == '/collections/evening' + $routeParams.season) {
            scope.player.play();


          }
          else {
            scope.player = {};
            angular.element($window).unbind(".videoEvening");
            angular.element($window).unbind(".videoBridal");
          }

       });


// $rootScope.$on('$routeUpdate', function(next, current) {
  scope.$watch($location, function() {

          setTimeout(function(){





//.................evening
            if (($location.path() === '/collections/evening/'+$routeParams.season)  && (scope.videoId)){
              // var scollHistory = $(window).scrollTop();


                            angular.element($window).unbind(".videoBridal");
                            angular.element($window).unbind(".videoEvening");

                            scope.VideoPlayerId = 'vid_id_' +  scope.videoId;

                          //  jQuery(document.getElementById(scope.VideoPlayerId))[0].player.play();

                              if ((!scope.isSeasonDevice)||(scope.isSeasonTablet)){

                                  scope.player =  videojs(jQuery('.video-wrapper').find('.video-js')[0]).ready(function() {
                                    this.play();
                                    // if (scollHistory == 0){
                                    //   this.play();
                                    // }

                                    this.tech.removeControlsListeners();
                                    // videoActive = false;
                                    this.off('click');

                                    this.on("click", function(event){
                                      event.preventDefault();
                                  });


                                  });



                                    var $win = angular.element($window);
                                    var windowHeight = angular.element($window).height(); // Window Height
                                    var documentHeight = angular.element($document).height(); // Window Height
                                    var videoHeight = jQuery('.video-wrapper').height(); // Video Height

                                    var startPlayHeight = documentHeight - windowHeight*2;

                                    jQuery(window).resize(function(){
                                      $win = angular.element($window);
                                      windowHeight = angular.element($window).height(); // Window Height
                                      documentHeight = angular.element($document).height(); // Window Height
                                      videoHeight = jQuery('.video-wrapper').height(); // Video Height

                                      startPlayHeight = documentHeight - windowHeight*2;
                                    });



                                    var videoActive = false;


                                   angular.element($window).bind("scroll.videoEvening", function(){
                                      var scroll = $(window).scrollTop();
 // && (!videoActive))
                                      if ((scroll < videoHeight)  && (!videoActive)){
                                          // jQuery(document.getElementById(scope.VideoPlayerId))[0].player.play();
                                          // videojs(jQuery('.video-wrapper').find('.video-js')[0]).ready().play()
                                          scope.player.play();
                                          videoActive = true;


                                      }
                                      else if ((scroll >= videoHeight)  && (videoActive)){
                                          // jQuery(document.getElementById(scope.VideoPlayerId))[0].player.pause();
                                          // videojs(jQuery('.video-wrapper').find('.video-js')[0]).ready().pause()
                                          scope.player.pause();
                                          videoActive = false;
                                      }
                                    })

                                  }else if ((scope.isSeasonDevice)&&(scope.isSeasonMobile)){

                                    scope.player =  videojs(jQuery('.video-wrapper').find('.video-js')[0]).ready(function() {});

                                    scope.openVideo=function(){
                                      scope.player.play();
                                    }

                                  }



//.................bridal......................................................................................................................................
                              } else if (($location.path() === '/collections/bridal/'+$routeParams.season) && (scope.videoId)){

                                angular.element($window).unbind(".videoBridal");
                                angular.element($window).unbind(".videoEvening");


                                // scope.$watch(function() {
                                //

                                //              setTimeout(function(){

                              if ((!scope.isSeasonDevice)||(scope.isSeasonTablet)){

                                var player =  videojs(jQuery('.video-wrapper').find('.video-js')[0]).ready(function() {

                                      this.tech.removeControlsListeners();

                                });

                                scope.VideoPlayerId = 'vid_id_' +  scope.videoId;

                                  var $win = angular.element($window);
                                  var windowHeight = angular.element($window).height(); // Window Height
                                  var documentHeight = angular.element($document).height(); // Window Height
                                  var videoHeight = jQuery('.video-wrapper').height(); // Video Height

                                  var startPlayHeight = documentHeight - windowHeight*2;

                                  jQuery(window).resize(function(){
                                    $win = angular.element($window);
                                    windowHeight = angular.element($window).height(); // Window Height
                                    documentHeight = angular.element($document).height(); // Window Height
                                    videoHeight = jQuery('.video-wrapper').height(); // Video Height

                                    startPlayHeight = documentHeight - videoHeight*2;
                                  });


                                  var videoActive = false;

                                 angular.element($window).bind("scroll.videoBridal", function(){
                                    var scroll = $(window).scrollTop();
                                 //
                                    if ((scroll > startPlayHeight)  && (!videoActive)){
                                        // jQuery(document.getElementById(scope.VideoPlayerId))[0].player.play();
                                        player.play();
                                        videoActive = true;

                                    }
                                    else if ((scroll <= startPlayHeight)  && (videoActive)){
                                        // jQuery(document.getElementById(scope.VideoPlayerId))[0].player.pause();
                                        player.pause();
                                        videoActive = false;

                                    }
                                  })


                          }else if ((scope.isSeasonDevice)&&(scope.isSeasonMobile)){

                            scope.player =  videojs(jQuery('.video-wrapper').find('.video-js')[0]).ready(function() { });

                            scope.openVideo=function(){

                              scope.player.play();
                            }

                          }






                        }
//.........if other.....................................................................................................................................
                        else {

                            angular.element($window).unbind(".videoEvening");
                            angular.element($window).unbind(".videoBridal");

                        }


// Replace source
$('img').error(function(){
        $(this).attr('src', 'missing.png');
});

// Or, hide them
$("img").error(function(){
        $(this).hide();
});


                        }, 600); //timeout

                    }, 1000); //watcher every second

 // }); // routeupdate

    }
  }

});



app.directive('hideviewcollectionDirective', function($window, $rootScope, $document, $location){
  return {
    restrict: "A",
    link: function(scope, element, attrs){

           setTimeout(function(){
                         scope.windowHeight = angular.element($window).height(); // Window Height
                        scope.videoHeight = jQuery('.video-wrapper').height(); // Video Height

                      jQuery(window).on('scroll', function(){
                         scope.scroll = jQuery(window).scrollTop();

                           if ( scope.scroll > 30 ){

                             jQuery(document.getElementById('view-collection-fade')).fadeOut(600);


                           }
                           else if ( scope.scroll <= 30){
                             jQuery(document.getElementById('view-collection-fade')).fadeIn(600);
                           }

                         });
                     }, 600);

      scope.windowSize = angular.element($window); // Window Height





      scope.getWindowDimensions = function () {
          return {
              'windowHeight': scope.windowSize.height(),
              'videoHeight': jQuery('.video-wrapper').height(),
              'coverSize': jQuery('.season-cover-image').height()
          };
      };


      scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {

           scope.windowHeight = newValue.windowHeight;
           scope.videoHeight = newValue.videoHeight;
           scope.coverHeight = newValue.coverSize;

      setTimeout(function(){


          // resizeService.video();





//removing view collection if collection already visible
scope.hideViewCollection= function(){
          if ((scope.videoHeight < scope.windowHeight) && (scope.videoHeight)){
             return true;
          // scope.viewCollection = true;
          }
          else if ((scope.coverHeight < scope.windowHeight) && (scope.coverHeight)){
              return true;
          }
          else if ((scope.videoHeight >= scope.windowHeight) && (scope.videoHeight)){
            return false;
          }
          else if ((scope.coverHeight >= scope.windowHeight) && (scope.coverHeight)){
            return false;
          }
      }


      // var collectionImageEvening = jQuery('.box-wrapper-evening');
      // var collectionImageBridal = jQuery('.box-wrapper-bridal');



        // var windowHeight = angular.element($window).height(); // Window Height
        // var videoHeight = jQuery('.video-wrapper').height(); // Video Height

        var collectionImageEvening = angular.element('#evening-images');
        var collectionImageBridal = angular.element('#bridal-images');



      },600);

  }, true);


    }
  }
});




//close button | product detail
app.directive('logoDirective', function($window){
  return{
    restrict: "A",
    // require: "^seasonController",
    link: function(scope, element, attrs) {




     }
    }
  });




//close button | product detail
app.directive('closeDirective', function($window){
  return{
    restrict: "E",
    replace: 'true',
    templateUrl: 'collections/close-season-detail.html'
    // link: function(scope, element, attrs) {
    //      element.on('click', function() {
    //          $window.history.back();
    //      });
    //  }


    }
  });


  // .directive('arrowsDirective', function($window){
  //   return{
  //     restrict: "A",
  //
  //     link: function(scope, element, attrs) {
  //          element.on('click', function() {
  //              $window.history.back();
  //          });
  //      }
  //
  //
  //     }
  //   });
  //





// keyboard click for next and prev

// app.directive('prevnextDirective', function(){
//   return {
//     restrict:"A",
//     link: function(scope, element, attrs){
//
//       // $(document.documentElement).keyup(function (event) {
//         // handle cursor keys
//         // if (event.keyCode == 37) {
//         //   // go left
//         //     $('.season-detail-next a').prev().click();
//         // } else if (event.keyCode == 39) {
//         //   // go right
//         //     $('.season-detail-next a').next().click();
//         // }
//       // });
//
//
//     }
//   }
// });



// hover for next and prev

app.directive('seasonshoverDirective', function($location, $routeParams, $rootScope){
  return{
    restrict: "A",
    link: function(scope,element, attrs){



//navigating with keys
             jQuery(document.documentElement).keyup(function (event) {
               // handle cursor keys
               if ( (event.keyCode == 37) && (scope.prevId > 0)) {
                 // go left
             return $location.path('collections/' + $routeParams.collection + '/' + $routeParams.season + '/' + scope.prevId).search();


           } else if ((event.keyCode == 39) && (scope.nextId <= (scope.collection.images.length))) {

                 // go right
                 return $location.path('collections/' + $routeParams.collection + '/' + $routeParams.season + '/' + scope.nextId).search();


               }
               else if ((event.keyCode == 39) && (scope.nextId > (scope.collection.images.length))){

                  return $location.path('collections/' + $routeParams.collection + '/' + $routeParams.season + '/1').search();

               }
               else if((event.keyCode == 37) && (scope.prevId == 0)){

                 return $location.path('collections/' + $routeParams.collection + '/' + $routeParams.season + '/' + scope.collection.images.length ).search();


               }


             });



// if (!scope.isSeasonDevice){


      jQuery('.hover-right').mouseenter(function(){
        jQuery('.season-detail-next').css('opacity','1');
      });
      jQuery('.hover-right').mouseleave(function(){
        jQuery('.season-detail-next').css('opacity','0');
      });

      jQuery('.season-detail-next').mouseenter(function(){
        jQuery('.season-detail-next').css('opacity','1');
      });
      jQuery('.season-detail-next').mouseleave(function(){
        jQuery('.season-detail-next').css('opacity','0');
      });



      jQuery('.hover-left').mouseenter(function(){
        jQuery('.season-detail-prev').css('opacity','1');
      });
      jQuery('.hover-left').mouseleave(function(){
        jQuery('.season-detail-prev').css('opacity','0');
      });

      jQuery('.season-detail-prev').mouseenter(function(){
        jQuery('.season-detail-prev').css('opacity','1');
      });
      jQuery('.season-detail-prev').mouseleave(function(){
        jQuery('.season-detail-prev').css('opacity','0');
      });



//...............................................................................if it is a device
// }else if(scope.isSeasonDevice){

      scope.goPrevious = function(){

          if (scope.prevId > 0) {
            // go left
             return $location.path('collections/' + $routeParams.collection + '/' + $routeParams.season + '/' + scope.prevId).search();

          }else if(scope.prevId == 0){

             return $location.path('collections/' + $routeParams.collection + '/' + $routeParams.season + '/' + scope.collection.images.length).search();

          }
      }

      scope.goNext=function(){
         if (scope.nextId > scope.collection.images.length){
            return $location.path('collections/' + $routeParams.collection + '/' + $routeParams.season + '/1').search();

        } else if (scope.nextId <= (scope.collection.images.length)) {
          return $location.path('collections/' + $routeParams.collection + '/' + $routeParams.season + '/' + scope.nextId).search();

        }

      }

    // }//end if season mobile
  }
}
});


app.directive('shareDirective', function($routeParams){
  return{
    restrict: "E",
    // replace: true
    templateUrl: 'collections/share.html',
    link: function(scope, element, attrs){

      scope.closeShare = function(){
        scope.shareHide = false;
      };


//creting a dynamic link to share
      scope.shareUrl = 'collections/' + $routeParams.collection + '/' + $routeParams.season + '/' + $routeParams.id;

    }
  }

});

app.directive('onFinishRender', function ($timeout) {
return {
    restrict: 'A',
    link: function (scope, element, attr) {
        if (scope.$last === true) {
            $timeout(function () {
                scope.$emit('ngRepeatFinished');
            });
        }
    }
}
});


// app.directive('ngKeepScroll', function ($timeout) {
//     return{
//      link: function (scope, element, attrs) {
//
//       // scope.$on("$routeChangeSuccess", function () {
//
//         //load scroll position after everything has rendered
//
//     }
//   }
// });

//
// app.directive('mySlideController', ['$swipe',
//   function($swipe) {
//
//     return {
//       restrict: 'EA',
//       link: function(scope, ele, attrs, ctrl) {
//         var startX, pointX;
//
//         $swipe.bind(ele, {
//           'start': function(coords) {
//             startX = coords.x;
//             pointX = coords.y;
//           },
//           'move': function(coords) {
//             var delta = coords.x - pointX;
//             // ...
//           },
//           'end': function(coords) {
//             // ...
//           },
//           'cancel': function(coords) {
//             // ...
//           }
//         });
//       }
//     }
// }]);


//
app.directive('seasonStyleParent', function(){
   return {
     restrict: 'A',
     link: function(scope, elem, attr) {

      var unbindWatcher = scope.$watch( function() {
          // scope.seasonNewHeight = elem.attr('src');


         scope.imageWidth = elem.width();
          // scope.seasonLoading = true;





// scope.seasonNewHeight = elem.width();
//           console.log('the width is: '+scope.seasonNewHeight);


          // $('img:not([data-loaded]')

          if (scope.imageWidth <= 5){
          //   console.log(scope.seasonNewHeight  + ' height of this element after');

          //   console.log('stopped Watcher');
          jQuery(".season-loader").fadeIn('10', function(){

          });
            return scope.seasonLoading = true;

          }else{
          unbindWatcher();
            // console.log(scope.seasonNewHeight  +' height of this element');
            // return scope.imageWidth =0;
             return scope.seasonLoading = false;
          }

      });
     }
   };
});


app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
});
