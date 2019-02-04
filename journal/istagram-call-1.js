var promises = [];
var _first, _second, _third;

var maxID_0;
var maxID_1;
var maxID_2;
var maxID_3 = {};
var maxID_4 = {};
var maxID_5 = {};

	_first = function(callback) {
		var deferred = $q.defer();
				var endpoint = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&callback=JSON_CALLBACK";
							$http.jsonp(endpoint).success(function(response){
									callback(response);
							});
				return deferred.promise;
		}

	_second = function(maxID, callback) {
		var deferred = $q.defer();
			var endPoint1 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id="+maxID+"&callback=JSON_CALLBACK";
			$http.jsonp(endPoint1).success(function(response){
					callback(response);
			})
		return deferred.promise;
	}

	_third = function(maxID_2, callback) {
				var deferred = $q.defer();
					var endPoint2 = "https://api.instagram.com/v1/users/4636972/media/recent?access_token=4636972.1fb234f.07335256b8e045b18c700897f3384dcb&max_id="+maxID_2+"&callback=JSON_CALLBACK";
					$http.jsonp(endPoint2).success(function(response){
							callback(response);
					});
				return deferred.promise;
	}

// return {
// 	fetchInstagram1: function() {
// 			return
			 _first(
				function(data){
					$scope.instapics = data.data;
					console.log(maxID_1);
					 return maxID_1 = data.pagination.next_max_id;
					}
			)
			.then(_second(maxID_1,
				function(data1){
					$scope.instapics1 =data1.data;
					console.log($scope.instapics1);
					return maxID_2 = data1.pagination.next_max_id;
				}
			))
