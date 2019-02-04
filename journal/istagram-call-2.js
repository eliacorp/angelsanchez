'use strict';


var journal= angular.module('myApp.Journal', ['myapp.Service', 'ngRoute', 'ngResource', 'ngAnimate', 'infinite-scroll', 'ngTouch' ]);

//
// journal.run(function($timeout, $rootScope, $routeParams, $http, $window, $q, instagram) {

// 	var maxID_0;
// 	var maxID_1;
// 	var maxID_2;
// 	var maxID_3;
// 	var maxID_4;
// 	var maxID_5;
// $rootScope.instaGlobal = {};
//
// $rootScope.instaTotal ={};
// 	$rootScope.instapics = {};
// 	$rootScope.instapics1= {};
// 	$rootScope.instapics2 = {};
// 	$rootScope.instapics3= {};
// 	$rootScope.instapics4 = {};




		// instagram.fetchInstagram(function(data){
		//
		// 	$rootScope.instaTotal = data.data;
		// 	maxID_0 = data.pagination.next_max_id;
		//
		// })
		//
		//
		// 	instagram.fetchInstagram1(maxID_0, function(data){
		//
		// 		$rootScope.instapics1 = data.data;
		//
		// 		$rootScope.instaTotal = $rootScope.instaTotal.concat($rootScope.instapics1);
		//
		// 		maxID_1 = data.pagination.next_max_id;
		// 		return 	$rootScope.instaTotal;
		// 	})
		//

// 			instagram.fetchInstagram1(maxID_1, function(data){
//
// 				$rootScope.instapics2 = data.data;
//
// 				$rootScope.instaTotal = $rootScope.instaTotal.concat($rootScope.instapics2);
//
// 				maxID_2 = data.pagination.next_max_id;
// 				return 	$rootScope.instaTotal;
// 			})
//
//
// 			instagram.fetchInstagram1(maxID_2, function(data){
//
// 				$rootScope.instapics3 = data.data;
//
// 				$rootScope.instaTotal = $rootScope.instaTotal.concat($rootScope.instapics3);
//
// 				maxID_3 = data.pagination.next_max_id;
// 				return 	$rootScope.instaTotal;
// 			})
//
//
// 			instagram.fetchInstagram1(maxID_3, function(data){
//
// 				$rootScope.instapics4 = data.data;
//
// 				$rootScope.instaTotal = $rootScope.instaTotal.concat($rootScope.instapics4);
//
// 				maxID_4 = data.pagination.next_max_id;
// 				return 	$rootScope.instaTotal;
// 			})
//
//
// 			instagram.fetchInstagram1(maxID_4, function(data){
//
// 				$rootScope.instapics5 = data.data;
//
// 				$rootScope.instaTotal = $rootScope.instaTotal.concat($rootScope.instapics5);
//
// 				maxID_5 = data.pagination.next_max_id;
// 				return 	$rootScope.instaTotal;
// 			})
// 			console.log($rootScope.instaTotal);
//
// 			$rootScope.instaGlobal = $rootScope.instaTotal;
//

// 				console.log('last number is:'+$rootScope.lastNumber);
//
//

// })

// journal.directive('bindOnce', function() {
//     return {
//         scope: true,
//         link: function( $scope, $element ) {
//             setTimeout(function() {
//                 $scope.$destroy();
//                 $element.removeClass('ng-binding ng-scope');
//             }, 0);
//         }
//     }
// });

/*....................................Creating the Instagram factory...............................*/
// journal.factory('instagram', ['$http','$q' , function($http, $q){
//
// 	return {
// 		fetchInstagram: function(callback){
//
// 			var endpoint = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&callback=JSON_CALLBACK";
//             $http({url: endpoint, method: 'JSONP', cache: true}).success(function(response){
//                 callback(response);
//             });
// 		},
// 		fetchInstagram1: function(maxID_0, callback) {
//
// 			var endpoint1 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_0 + "&callback=JSON_CALLBACK";
// 				console.log(endpoint1);
// 	            $http({url: endpoint1, method: 'JSONP', cache: true}).success(function(response){
// 	                callback(response);
// 	            });
// 		}
// 	}
// }]);

// access_token=4636972.6b85101.a253fac58f514227a66941d9411c8ed2


// https://api.instagram.com/v1/users/self/feed?access_token=ACCESS-TOKEN

// 4636972.6b85101.a253fac58f514227a66941d9411c8ed2

// https://api.instagram.com/v1/users/4636972/media/recent/?client_id=776e7356f21a46808ec05bdc3415e1ae&callback=JSON_CALLBACK


journal.controller('journalCtrl', ['$scope','$timeout', '$rootScope', '$routeParams',	'$http', '$window', '$q',  function ($scope, $timeout, $rootScope, $routeParams, $http, $window, $q ){
	//setting an animation class for this specific page
	// $scope.pageClass = 'page-journal';
	//no baility to include routeparams in .config file so doing it here
	   $scope.templateUrl = 'collections/season-'+$routeParams.collection+'.html';

// $rootScope.instaTotal.link.substring(0,3)=

//
// $scope.instaTotal;
//
//
// 	instagram.fetchInstagram(function(data){
//
// 		$scope.instaTotal = data.data;
// 		maxID_0 = data.pagination.next_max_id;
//
// 	})
//
//
//

// function replaceURLWithHTMLLinks(text) {
// 	var re = /(\(.*?)?\b((?:https?|ftp|file):\/\/[-a-z0-9+&@#\/%?=~_()|!:,.;]*[-a-z0-9+&@#\/%=~_()|])/ig;
// 	return text.replace(re, function(match, lParens, url) {
// 			var rParens = '';
// 			lParens = lParens || '';
//
//
// 			var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
// 			// $scope.urlFound[i] = cop.match(re);
//
// 			// Try to strip the same number of right parens from url
// 			// as there are left parens.  Here, lParenCounter must be
// 			// a RegExp object.  You cannot use a literal
// 			//     while (/\(/g.exec(lParens)) { ... }
// 			// because an object is needed to store the lastIndex state.
// 			var lParenCounter = /\(/g;
// 			while (lParenCounter.exec(lParens)) {
// 					var m;
// 					// We want m[1] to be greedy, unless a period precedes the
// 					// right parenthesis.  These tests cannot be simplified as
// 					//     /(.*)(\.?\).*)/.exec(url)
// 					// because if (.*) is greedy then \.? never gets a chance.
// 					if (m = /(.*)(\.\).*)/.exec(url) ||
// 									/(.*)(\).*)/.exec(url)) {
// 							url = m[1];
// 							rParens = m[2] + rParens;
// 					}
// 			}
// 			return lParens + "<a href='" + url + "'>" + "read full story" + "</a>" + rParens;
// 	});
// }
// usSpinnerService.spin('spinner-1');

var maxID_0;
var maxID_1;
var maxID_2;
var maxID_3;
var maxID_4;
var maxID_5;
$rootScope.instaGlobal = [];

$scope.instaTotal =[];
$scope.instapics = [];
$scope.instapics1= [];
$scope.instapics2 = [];
$scope.instapics3= [];
$scope.instapics4 = [];

$scope.urlFound = [];




	var endpoint = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&callback=JSON_CALLBACK";
				$http({url: endpoint, method: 'JSONP', cache: true, isArray: true}).success(function(response){
						// callback(response);

							$scope.instaTotal = response.data;
							maxID_0 = response.pagination.next_max_id;

							// usSpinnerService.stop('spinner-1');


							var endpoint1 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_0 + "&callback=JSON_CALLBACK";

					            $http({url: endpoint1, method: 'JSONP', cache: true, isArray: true}).success(function(response){

														$scope.instapics1 = response.data;

														$scope.instaTotal = $scope.instaTotal.concat($scope.instapics1);

														maxID_1 = response.pagination.next_max_id;


														var endpoint2 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_1 + "&callback=JSON_CALLBACK";

																		$http({url: endpoint2, method: 'JSONP', cache: true, isArray: true}).success(function(response){

																					$scope.instapics2 = response.data;

																					$scope.instaTotal = $scope.instaTotal.concat($scope.instapics2);

																					maxID_2 = response.pagination.next_max_id;


																		var endpoint3 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_2 + "&callback=JSON_CALLBACK";

																						$http({url: endpoint3, method: 'JSONP', cache: true, isArray: true}).success(function(response){

																									$scope.instapics3 = response.data;

																									$scope.instaTotal = $scope.instaTotal.concat($scope.instapics3);

																									maxID_3 = response.pagination.next_max_id;


																									var endpoint4 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_3 + "&callback=JSON_CALLBACK";

																													$http({url: endpoint4, method: 'JSONP', cache: true, isArray: true}).success(function(response){

																																$scope.instapics4 = response.data;

																																$scope.instaTotal = $scope.instaTotal.concat($scope.instapics4);

																																maxID_4 = response.pagination.next_max_id;



																																var endpoint5 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_4 + "&callback=JSON_CALLBACK";

																																				$http({url: endpoint5, method: 'JSONP', cache: true, isArray: true}).success(function(response){

																																							$scope.instapics5 = response.data;



																																							$scope.instaTotal = $scope.instaTotal.concat($scope.instapics5);

																																							maxID_5 = response.pagination.next_max_id;




																																							var endpoint6 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id=" + maxID_5 + "&callback=JSON_CALLBACK";

																																											$http({url: endpoint6, method: 'JSONP', cache: true, isArray: true}).success(function(response){

																																														$scope.instapics6 = response.data;



																																														$scope.instaTotal = $scope.instaTotal.concat($scope.instapics6);

																																														// maxID_6 = response.pagination.next_max_id;





																																															//......getting a link out of the instagram bio

																																																	for ( var i = 0, len = $scope.instaTotal.length; i < len; i++){


																																																		var cop = $scope.instaTotal[i].caption.text;
																																																	//
																																																	//
																																																	// 	var freak = $scope.instaTotal[i].caption.text
																																																	// replaceURLWithHTMLLinks(freak);




																																																		var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
																																																		$scope.urlFound[i] = cop.match(re);



																																																	}

																																																	$scope.lastNumber = $scope.instaTotal.length;
																																																	console.log($scope.instaTotal.length)

																																																	$scope.loadMore = function() {
																																																		var last = $scope.instaTotal[$scope.instaTotal.length];
																																																		for(var i = 1; i < 140; i++) {
																																																			$scope.instaTotal.push(last + i);
																																																		}
																																																	};
																																																	$rootScope.pageLoading = false;



																																																	// $scope.journalLoading= false;
																																																	// console.log('journalLoading: '+ $scope.journalLoading);







																																											}); //6



																																				}); //5

																													}); //4


																						});//3
															}); //2

					            }); //1


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

//
// console.log('number: '+$rootScope.number);
// console.log('next number: '+$scope.nextNumber);
// console.log('real number: '+$scope.realNumber);

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





// $scope.display_limit = 200;

// $scope.id = $scope.instapics.id;
// $scope.last = id.split("_").pop();



//  $scope.instapics.id.substr(id.length - 1);

// $scope.getLast = function(array, obj){
// 	return array[array.obj.length-1]
// };
//
// $scope.getId=function(){
// 	if ($scope.last > 4){
// 		$scope.span = 0;
// 	}
// 	else{
// 		$scope.span = 1;
// 	}
// }
//





// angular.forEach(values, function(value, key) {
//
// 	$scope.last = $scope.getLast($scope.instapics, id);
// 	if ($scope.last > 4){
// 		$scope.span = 0;
// 	}
// 	else{
// 		$scope.span = 1;
// 	}
// 	return $scope
//
//
// }, log);

// $scope.getRandomSpan = function(){
// 	$scope.span= Math.floor((Math.random()*6)+1);
// 	return $scope.span;
// 	return false;
// }

//
// loc_array[loc_array.length-1] == 'index.html'

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




journal.directive('instaHoverDirective', function($location){
  return{
    restrict: "A",
    link: function(scope,element, attrs){




			jQuery(document.documentElement).keyup(function (event) {
				// handle cursor keys
				if ( (event.keyCode == 37) && (scope.prevNumber > 0)) {
					// go left
			return $location.path('journal/'+scope.prevNumber).search();
			// console.log();
					// $location.go("journal/{{prevNumber}}");

				} else if ((event.keyCode == 39) && (scope.prevNumber < (scope.instaTotal.length-1))) {

					// go right
			return $location.path('journal/'+scope.nextNumber).search();
					// $location.go("journal/{{nextNumber}}");

				}
				else if ((event.keyCode == 39) && (scope.prevNumber < (scope.instaTotal.length))){

								return $location.path('journal/1').search();
				}
				else if((event.keyCode == 37) && (scope.prevNumber == 0)){

					return $location.path('journal/'+scope.instaTotal.length).search();

				}


			});



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
	      console.log(scope.instaShareUrl);

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


            // console.log(scope.newHeight+'height of this element');

            if (scope.journalNewHeight==0){

              console.log(scope.journalNewHeight  +'height of this element');
              return scope.journalLoading = true;


            }else if (scope.journalNewHeight > 0){
              console.log(scope.journalNewHeight  + 'height of this element after');
              journalUnbindWatcher();
              console.log('stopped Watcher');
              return scope.journalLoading = false;

            }



            //check width and height and apply styling to parent here.
         });


     }
   };
});
