'use strict';


var journal= angular.module('myApp.Journal', ['myapp.Service', 'ngRoute', 'ngResource', 'ngAnimate', 'infinite-scroll', 'ngTouch']);



journal.controller('journalCtrl', ['$scope','$timeout', '$rootScope', '$routeParams', '$http', '$window', '$q','$location','MetaInformation',  function ($scope, $timeout, $rootScope, $routeParams, $http, $window, $q, $location, MetaInformation){


//no baility to include routeparams in .config file so doing it here
  $scope.templateUrl = 'collections/season-'+$routeParams.collection+'.html';
    jQuery('.mobile-filter-select').bind('focusin focus', function(e){
		  e.preventDefault();
	})
    //     jQuery('.mobile-filter-select').on('focus', 'select', function() {
    //     jQuery('.mobile-filter-select').addClass('fixfixed');
    // })
    // .on('blur', 'select', function() {
    //     jQuery('.mobile-filter-select').removeClass('fixfixed');
    // });


//..............................................................................initializing some variables

var maxID_0;
var maxID_1;
var maxID_2;
var maxID_3;
var maxID_4;
var maxID_5;
var maxID_6;
var maxID_7;
var maxID_8;
var maxID_9;
var maxID_10;
var maxID_11;
var maxID_12;
var maxID_13;
var maxID_14;
$rootScope.instaGlobal = [];

$scope.instaTotal =[];
$scope.instapics = [];
$scope.instapics1= [];
$scope.instapics2 = [];
$scope.instapics3= [];
$scope.instapics4 = [];

$scope.urlFound = [];












//..............................................................................check for a device


$scope.isjournalDevice = {
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
          return ($scope.isjournalDevice.Android() || $scope.isjournalDevice.BlackBerry() || $scope.isjournalDevice.iOS() || $scope.isjournalDevice.Opera() || $scope.isjournalDevice.Windows());
      }
  };



// $scope.mobileQuery=window.matchMedia( "(max-width: 767px)");
if ($scope.isjournalDevice.any()){

$scope.isjournalDevice= true;
}else{

$scope.isjournalDevice=false;
}


//.....defining javascript media queries
$scope.mobileQuery=window.matchMedia( "(max-width: 767px)" );
$scope.tabletMinQuery=window.matchMedia( "(min-width: 768px)" );
// $scope.tabletMaxQuery=window.matchMedia( "(max-width: 1024px)" );

//....if it is mobile
$scope.isJournalMobile = $scope.mobileQuery.matches;

//.....if it is tablet
$scope.isJournalTabletMin=$scope.tabletMinQuery.matches;
// $scope.isSeasonTabletMax=$scope.tabletMaxQuery.matches;

if ($scope.isJournalTabletMin){
  $scope.isJournalTablet = true;
} else {
  $scope.isJournalTablet = false;
}



//......is this a mobile size and a device?
if(($scope.isJournalMobile) && ($scope.isjournalDevice)){
  $scope.isjournalMobileDevice = true;
}else{
  $scope.isjournalMobileDevice = false;
}

//......is this a tablet size and a device?
if(($scope.isJournalTablet) && ($scope.isjournalDevice)){
  $scope.isjournalTabletDevice = true;
}else{
  $scope.isjournalTabletDevice = false;
}




























//..............................................................................loading new pictures
$scope.noMore = false;

$scope.globalLoadMore = function(i){

    if ($rootScope.totalDisplayed > 0){

    }else {
      //the controller
      $rootScope.totalDisplayed = i;
    }

    $scope.loadMore = function () {
    	$rootScope.totalDisplayed += i;
    };

}

//.......different loaded pictures for every device
  if ($scope.isjournalMobileDevice){

    $scope.globalLoadMore(11);

  }else if($scope.isjournalTabletDevice){

    $scope.globalLoadMore(14);

  }else{

    $scope.globalLoadMore(23);

  }











$scope.hideLoadMore = true;


$scope.filterRemovesLoadMore = function(){
  $scope.hideLoadMore = true;
}

$scope.filterAllLoadMore = function(){
  $scope.hideLoadMore = false;
}








//..............................................................................the GET request


	var endpoint = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.6b85101.a253fac58f514227a66941d9411c8ed2&callback=JSON_CALLBACK";
				$http({url: endpoint, method: 'JSONP', cache: true, isArray: true}).success(function(response){
						// callback(response);

							$scope.instaTotal = response.data;
							// maxID_0 = response.pagination.next_max_id;



							// var endpoint1 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_0 + "&callback=JSON_CALLBACK";
              //
					    //         $http({url: endpoint1, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 							$scope.instapics1 = response.data;
              //
							// 							$scope.instaTotal = $scope.instaTotal.concat($scope.instapics1);
              //
							// 							maxID_1 = response.pagination.next_max_id;
              //
              //
              //               //secondm is loaded so the load more can now be shown
              //               $scope.hideLoadMore = false;
              //
              //
							// 							var endpoint2 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_1 + "&callback=JSON_CALLBACK";
              //
							// 											$http({url: endpoint2, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 														$scope.instapics2 = response.data;
              //
							// 														$scope.instaTotal = $scope.instaTotal.concat($scope.instapics2);
              //
							// 														maxID_2 = response.pagination.next_max_id;
              //
              //
							// 											var endpoint3 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_2 + "&callback=JSON_CALLBACK";
              //
							// 															$http({url: endpoint3, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 																		$scope.instapics3 = response.data;
              //
							// 																		$scope.instaTotal = $scope.instaTotal.concat($scope.instapics3);
              //
							// 																		maxID_3 = response.pagination.next_max_id;
              //
              //
							// 																		var endpoint4 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_3 + "&callback=JSON_CALLBACK";
              //
							// 																						$http({url: endpoint4, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 																									$scope.instapics4 = response.data;
              //
							// 																									$scope.instaTotal = $scope.instaTotal.concat($scope.instapics4);
              //
							// 																									maxID_4 = response.pagination.next_max_id;
              //
              //
              //
							// 																									var endpoint5 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_4 + "&callback=JSON_CALLBACK";
              //
							// 																													$http({url: endpoint5, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 																																$scope.instapics5 = response.data;
              //
              //
              //
							// 																																$scope.instaTotal = $scope.instaTotal.concat($scope.instapics5);
              //
							// 																																maxID_5 = response.pagination.next_max_id;
              //
              //
              //
              //
							// 																																var endpoint6 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_5 + "&callback=JSON_CALLBACK";
              //
							// 																																				$http({url: endpoint6, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 																																							$scope.instapics6 = response.data;
              //
              //
							// 																																							$scope.instaTotal = $scope.instaTotal.concat($scope.instapics6);
              //
							// 																																							maxID_6 = response.pagination.next_max_id;
              //
              //
              //
							// 																																							var endpoint7 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_6 + "&callback=JSON_CALLBACK";
              //
							// 																																											$http({url: endpoint7, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 																																														$scope.instapics7 = response.data;
              //
              //
              //
							// 																																														$scope.instaTotal = $scope.instaTotal.concat($scope.instapics7);
              //
							// 																																														maxID_7 = response.pagination.next_max_id;
              //
              //
              //
							// 																																														var endpoint8 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_7 + "&callback=JSON_CALLBACK";
              //
							// 																																																		$http({url: endpoint8, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 																																																					$scope.instapics8 = response.data;
              //
              //
              //
							// 																																																					$scope.instaTotal = $scope.instaTotal.concat($scope.instapics8);
              //
							// 																																																					maxID_8 = response.pagination.next_max_id;
              //
              //
							// 																																																					var endpoint9 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_8 + "&callback=JSON_CALLBACK";
              //
							// 																																																									$http({url: endpoint9, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 																																																												$scope.instapics9 = response.data;
              //
              //
							// 																																																												$scope.instaTotal = $scope.instaTotal.concat($scope.instapics9);
              //
							// 																																																												maxID_9 = response.pagination.next_max_id;
              //
              //
              //
							// 																																																												var endpoint10 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_9 + "&callback=JSON_CALLBACK";
              //
							// 																																																																$http({url: endpoint10, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 																																																																			$scope.instapics10 = response.data;
              //
              //
							// 																																																																			$scope.instaTotal = $scope.instaTotal.concat($scope.instapics10);
              //
							// 																																																																			maxID_10 = response.pagination.next_max_id;
              //
              //
							// 																																																																			var endpoint11 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_10 + "&callback=JSON_CALLBACK";
              //
							// 																																																																							$http({url: endpoint11, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 																																																																										$scope.instapics11 = response.data;
              //
              //
							// 																																																																										$scope.instaTotal = $scope.instaTotal.concat($scope.instapics11);
              //
							// 																																																																										maxID_11 = response.pagination.next_max_id;
              //
							// 																																																																										var endpoint12 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_11 + "&callback=JSON_CALLBACK";
              //
							// 																																																																														$http({url: endpoint12, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 																																																																																	$scope.instapics12 = response.data;
              //
              //
							// 																																																																																	$scope.instaTotal = $scope.instaTotal.concat($scope.instapics12);
              //
							// 																																																																																	maxID_12 = response.pagination.next_max_id;
              //
							// 																																																																																	var endpoint13 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_12 + "&callback=JSON_CALLBACK";
              //
							// 																																																																																					$http({url: endpoint13, method: 'JSONP', cache: true, isArray: true}).success(function(response){
              //
							// 																																																																																								$scope.instapics13 = response.data;
              //
              //
							// 																																																																																								$scope.instaTotal = $scope.instaTotal.concat($scope.instapics13);
              //
							// 																																																																																								maxID_13 = response.pagination.next_max_id;
              //
              //
              //
              //
							// 																																																																																								$scope.instaTotalLength= $scope.instaTotal.length;
              //
              //                                                                                                                                                                                 	$scope.lastNumber = $scope.instaTotalLength;
              //
              //
              //
							// 																																																																																								 $scope.$watch('[totalDisplayed, instaTotalLength]', function(newValues, oldValues) {
              //
              //
              //
              //
							// 																																																																																											if ($rootScope.totalDisplayed > $scope.instaTotalLength){
							// 																																																																																												 $scope.noMore = true;
              //
              //
							// 																																																																																											}
							// 																																																																																								 });
              //
              //
              //
              //                                                                                                                                                                                  //......getting a link out of the instagram bio
              //
              //                                                                                                                                                                                  		for ( var i = 0, len = $scope.instaTotal.length; i < len; i++){
              //
              //
              //                                                                                                                                                                                  			var cop = $scope.instaTotal[i].caption.text;
              //                                                                                                                                                                                  		//
              //                                                                                                                                                                                  		//
              //                                                                                                                                                                                  		// 	var freak = $scope.instaTotal[i].caption.text
              //                                                                                                                                                                                  		// replaceURLWithHTMLLinks(freak);
              //
              //                                                                                                                                                                                  			var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
              //                                                                                                                                                                                  			$scope.urlFound[i] = cop.match(re);
              //
              //                                                                                                                                                                                  		}
              //
              //
              //
              //
              //
              //
              //
              //
              //
              //
              //
              //
              //
							// 																																																																																					}); //13
              //
              //
							// 																																																																														}); //12
              //
              //
							// 																																																																							}); //11
              //
              //
							// 																																																																}); //10
              //
              //
							// 																																																									}); //9
              //
              //
              //
							// 																																																		}); //8
              //
              //
							// 																																											}); //7
              //
              //
							// 																																				}); //6
              //
							// 																													}); //5
              //
							// 																						}); //4
              //
							// 															});//3
							// 								}); //2
              //
					    //         }); //1


				}); //0

				// 	$rootScope.instaTotal = data.data;
				// 	maxID_0 = data.pagination.next_max_id;

//
// 	instagram.fetchInstagram(function(data){
// 		//
// 		// for ( var i = 0, len = data.length; i < len; i++){
// 		// 	data[i].created_time = data[i].created_time.charAt(9);
// 		// 	// var c = $scope.data.length + 1;
// 		// 	// $scope.instapics.push({
// 		// 	// 	num: $scope.num
// 		// 	// });
// 		// 	// data[i].created_time =	$scope.num;
// 		// 	// $scope.cdnLink = data[i].images.standard_resolution.url;
// 		// }
//



	$rootScope.pageLoading = false;



	$scope.journalMobileLocation = function(url){
		$location.path(url).search();
	}

	$scope.journalMobileOutsideViewOnInstagram = function(){
		$window.open($scope.instaTotal[$scope.realNumber].link, '_blank');
	}

	$scope.journalMobileOutsideReadFullStory = function(){
		$window.open($scope.urlFound[$scope.realNumber][0], '_blank');


	}




//............................................................. filters ..........................................................................................
$scope.query ={};
$scope.tags = [
		{hash: 'angelsanchezpress', category: 'Press'},
		{hash: 'angelsanchezinspiration', category: 'Inspiration'},
		{hash: 'angelsanchezarchives', category: 'Archives'},
		{hash: 'angelsanchezcollections', category: 'Collections'}
];



$scope.clearFilter = function() {
		$scope.query = {};
};

$scope.span=0;

$scope.mobileFilterChange= function(){

     if ($scope.query.tags === "All"){
      //  alert('clear');
      $scope.hideLoadMore = false;
        $scope.query={};

     }else{
      $scope.hideLoadMore = true;

     }

}



//.............................................................instgram detail


$scope.isItem = function(item){
	$scope.instaIndex = $scope.instaTotal.indexOf((item),0);
	$scope.instaIndex = $scope.instaIndex + 1;
	return $scope.instaIndex;
}


$scope.firstNumber = 1;
$rootScope.number = $routeParams.number;
$scope.nextNumber = parseInt($routeParams.number)+1;
$scope.prevNumber = parseInt($routeParams.number)-1;
$scope.realNumber = parseInt($routeParams.number) -1;

$scope.$root = {
		initializing: {
				status: 'Complete!'
		}
}

//Share Slider function
 $rootScope.instaShareSlide = function(){
       $scope.instaShareHide = !$scope.instaShareHide;
      event.preventDefault();
 }



 //...............................................................................mobile gestures
 if ($scope.isjournalDevice){

  //preventing scroll down if select box open
  // $scope.preventScroll = function(event){
        // alert('prevented');
    // event.preventDefault();

    //       alert('preventeddddd');
    // jQuery('.mobile-filter-select').on('touchmove', function (event) {
    //   event.preventDefault();
    //   alert('preventeddddd');
    // }, false);
  // }


 $scope.journalSwipeRight = function(){

	 if ($scope.prevNumber > 0) {
		 // go left
			return $location.path('journal/'+$scope.prevNumber).search();

	 } else if ($scope.prevNumber < 1) {
		 // go right
			 return $location.path('journal/'+$scope.instaTotal.length).search();
	 }

 }

 $scope.journalSwipeLeft = function(){
	if($scope.nextNumber < ($scope.instaTotal.length)){

			return $location.path('journal/'+$scope.nextNumber).search();


	}else if($scope.nextNumber >= ($scope.instaTotal.length)){

			return $location.path('journal/1').search();

		}
 }

 $scope.journalMobileViewAll=function(){
	$location.path('/collections'+'/'+$routeParams.collection+'/'+$routeParams.season).search();

 }





 }//end if mobile






 $scope.viewOnInstagram=function(url){

   $location.absUrl($scope.instaTotal[$scope.realNumber].link).search();


 }



}]);




//
// journal.directive('instagramDirective', function() {
// 	return {
// 		restrict: 'E',
// 		templateUrl: 'journal/instagram.html'
// 	}
// });

journal.directive('instaimageclickDirective', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			setTimeout(function(){
			jQuery('.instagram-image').click(function(){
				jQuery('.insta-li').removeClass('no-hover-transition');
				jQuery('.instagram-image').css('opacity','1');
				jQuery('.instagram-click-overlay').removeClass('instagram-overlay-active');
				jQuery(this).siblings('.instagram-click-overlay').addClass('instagram-overlay-active');
				jQuery(this).css('opacity','.08');
				jQuery(this).parent('.insta-li').addClass('no-hover-transition');
			});
		},800);
		}
	}
});




journal.directive('instaHoverDirective', function($location, $routeParams){
  return{
    restrict: "A",
    link: function(scope, element, attrs){

if ($location.path()== '/journal/'+$routeParams.number){

			jQuery(document.documentElement).keyup(function (event) {
				// handle cursor keys
				if ( (event.keyCode == 37) && (scope.prevNumber > 0)) {
					// go left
			return $location.path('journal/'+scope.prevNumber).search();

					// $location.go("journal/{{prevNumber}}");

				} else if ((event.keyCode == 39) && (scope.nextNumber < (scope.instaTotal.length-1))) {

					// go right
			return $location.path('journal/'+scope.nextNumber).search();
					// $location.go("journal/{{nextNumber}}");

				}
				else if ((event.keyCode == 39) && (scope.nextNumber >= (scope.instaTotal.length))){

					return $location.path('journal/1').search();
				}
				else if((event.keyCode == 37) && (scope.prevNumber == 0)){

					return $location.path('journal/'+scope.instaTotal.length).search();

				}
			});
	}



      jQuery('.insta-hover-right').mouseenter(function(){
        jQuery('.insta-detail-next').css('opacity','1');
      });
      jQuery('.insta-hover-right').mouseleave(function(){
        jQuery('.insta-detail-next').css('opacity','0');
      });

      jQuery('.insta-detail-next').mouseenter(function(){
        jQuery('.insta-detail-next').css('opacity','1');
      });
      jQuery('.insta-detail-next').mouseleave(function(){
        jQuery('.insta-detail-next').css('opacity','0');
      });



      jQuery('.insta-hover-left').mouseenter(function(){
        jQuery('.insta-detail-prev').css('opacity','1');
      });
      jQuery('.insta-hover-left').mouseleave(function(){
        jQuery('.insta-detail-prev').css('opacity','0');
      });

      jQuery('.insta-detail-prev').mouseenter(function(){
        jQuery('.insta-detail-prev').css('opacity','1');
      });
      jQuery('.insta-detail-prev').mouseleave(function(){
        jQuery('.insta-detail-prev').css('opacity','0');
      });




      scope.goJournalPrevious = function(){

          if (scope.prevNumber > 0) {
            // go left
			         return $location.path('journal/'+scope.prevNumber).search();

          }else if(scope.prevNumber == 0){

					return $location.path('journal/'+scope.instaTotal.length).search();

          }
      }

      scope.goJournalNext=function(){
         if (scope.nextNumber >= (scope.instaTotal.length-1)){
								return $location.path('journal/1').search();

        } else if (scope.nextNumber < (scope.instaTotal.length-1)) {
			       return $location.path('journal/'+scope.nextNumber).search();

        }

      }



    }
  }

});



//close button | product detail
journal.directive('instaCloseDirective', function($window){
  return{
    restrict: "E",
    replace: 'true',
    templateUrl: 'journal/close-instagram-detail.html'
    // link: function(scope, element, attrs) {
    //      element.on('click', function() {
    //          $window.history.back();
    //      });
    //  }


    }
  });


journal.directive('instaShareDirective', function($routeParams){
	  return{
	    restrict: "E",
	    replace: true,
	    templateUrl: 'journal/insta-share.html',
	    link: function(scope, element, attrs){

	      scope.instaCloseShare = function(){
	        scope.instaShareHide = false;
	      };


	//creting a dynamic link to share
	      scope.instaShareUrl = 'journal/' + $routeParams.number;

	    }
	  }

	});

journal.directive('onFinishRender', function ($timeout) {
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


journal.directive('filterActiveDirective', function ($timeout) {
			return {
			    restrict: 'A',
			    link: function (scope, element, attr) {


							// scope.filterActive = function(n){
							// 	scope.filterNumber = n;
							// 	return scope.filterNumber;
							// }

							scope.filterActive = function(i){
								scope.filterState = i;
							}
				// 	scope.filterState = function(i){
					// 		scope.
					//
			    // }
			}
			}
});

journal.directive('journalStyleParent', function(){
   return {
     restrict: 'A',
     link: function(scope, elem, attr) {

	    var journalUnbindWatcher = scope.$watch( function() {

	        scope.journalNewHeight = elem.height();


	        if (scope.journalNewHeight==0){

	          return scope.journalLoading = true;


	        }else if (scope.journalNewHeight > 0){
	          journalUnbindWatcher();
	          return scope.journalLoading = false;

	        }



            //check width and height and apply styling to parent here.
         });


     }
   };
});


app.directive('journalDetailStyleParent', function(){
   return {
     restrict: 'A',
     link: function(scope, elem, attr) {

      var unbindWatcher = scope.$watch( function() {

         scope.imageWidth = elem.width();


          if (scope.imageWidth <= 5){

          jQuery(".journal-loader").fadeIn('10', function(){

          });
            return scope.journalDetailLoading = true;

          }else{
          	 unbindWatcher();

             return scope.journalDetailLoading = false;
          }

      });
     }
   };
});
