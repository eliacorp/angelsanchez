//...........................................................................................................................................waypoint scroll
// $scope.pulled_1 = false;
// 								                                      setTimeout(function(){
//
// 								                                                    $scope.win = angular.element($window);
// 								                                                    $scope.windowHeight = angular.element($window).height(); // Window Height
// 								                                                    $scope.windowFifty = $scope.windowHeight/2; // Calc for Logo
// //...........first round
//
// 								                                                     $scope.instaFirst = new Waypoint({
// 								                                                       element: document.getElementById('insta-10'),
// 								                                                       handler: function() {
//
// 																																				if ($scope.pulled_1==false){
// 																																						console.log('one');
//
// 																																							var endPoint1 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id="+maxID_0+"&callback=JSON_CALLBACK";
//
// 																																							$http.jsonp(endPoint1).
// 																																								success(function(data, status, headers, config) {
// 																																									$scope.instapics1=data.data;
// 																																									// this callback will be called asynchronously
// 																																									// when the response is available
// 																																									 maxID_1 = data.pagination.next_max_id;
// 																																										$scope.instaTotal = $scope.instaTotal.concat($scope.instapics1);
// 																																										// $scope.$apply();
//
// 																																								}).error(function(data, status, headers, config) {
// 																																									// called asynchronously if an error occurs
// 																																									// or server returns response with an error status.
// 																																								});
//
//
// 																																								$scope.pulled_1 = true;
// 																																								$scope.pulled_2 = false;
//
//
// 																																							} //if statement
//
//
// 																																				},
// 																																			offset: - $scope.windowHeight
// 																																			});
//
// //...........second round
//
//
// 																																			$scope.instaSecond = new Waypoint({
// 																																				element: document.getElementById('insta-1'),
// 																																				handler: function() {
//
//  																																			if (($scope.pulled_2==false)&&($scope.pulled_1==true)){
//
// 																																					console.log('two');
//
//
// 																																					var endPoint2 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id="+maxID_1+"&callback=JSON_CALLBACK";
//
// 																																					$http.jsonp(endPoint2).
// 																																						success(function(data, status, headers, config) {
// 																																							$scope.instapics2 = data.data;
// 																																							// this callback will be called asynchronously
// 																																							// when the response is available
// 																																								$scope.maxID_2 = data.pagination.next_max_id;
// 																																								$scope.instaTotal = $scope.instaTotal.concat($scope.instapics2);
// 																																								// $scope.$apply();
//
// 																																						}).error(function(data, status, headers, config) {
// 																																							// called asynchronously if an error occurs
// 																																							// or server returns response with an error status.
// 																																						});
//
//
// 																																						$scope.pulled_2 = true;
// 																																						$scope.pulled_3 = false;
//
// 																																					}//if statement
//
// 																																				},
// 																																			offset: -$scope.windowHeight
// 																																			});
//
// 								                                                  }, 2000);


//...........................................................................................................................................custom scroll

// $scope.instaScroll = $(window).scrollTop();
//
//
//
// 			      $scope.getWindowDimensions = function () {
// 			          return {
// 			              'windowHeight': jQuery(window).height()
// 			          };
// 			      };
//
//
// 			      $scope.$watch($scope.getWindowDimensions, function (newValue, oldValue) {
//
// 			           $scope.windowHeight = newValue.windowHeight;
//
//
// 			      setTimeout(function(){
//
// 							if (($scope.instaScroll > ($scope.windowHeight*3)) && ($scope.pulled_3==false)&&($scope.pulled_2==true)){
// 							console.log('three');
//
// 							var endPoint3 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id="+$scope.maxID_2+"&callback=JSON_CALLBACK";
//
// 							$http.jsonp(endPoint3).
// 								success(function(data, status, headers, config) {
// 									$scope.instapics3 = data.data;
// 									// this callback will be called asynchronously
// 									// when the response is available
// 										$scope.maxID_3 = data.pagination.next_max_id;
// 										$scope.instaTotal = $scope.instaTotal.concat($scope.instapics3);
// 										// $scope.$apply();
// 										console.log($scope.instapics3);
// 										console.log($scope.maxID_2);
//
// 								}).error(function(data, status, headers, config) {
// 									// called asynchronously if an error occurs
// 									// or server returns response with an error status.
// 								});
//
//
// 								$scope.pulled_3 = true;
// 								$scope.pulled_4 = false;
//
//
// 					}//if statement
//
// 					// },
// 					// offset: -($scope.windowHeight*6)
// 					// });
//
//
//
// 			      },600);
//
//
//
// 			      }, true);
//
// 			      jQuery(window).bind('resize', function () {
// 			          $scope.$apply();
// 			      });
//
//
