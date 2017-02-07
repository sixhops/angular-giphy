var giphyApp = angular.module('GiphyApp', [])

.run(function() {
  console.log('App has loaded!');
});

giphyApp.controller('GiphyCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.searchTerm = '';

	$scope.search = function() {
	  var req = {
	    url: 'http://api.giphy.com/v1/gifs/search?',
	    method: 'GET',
	    params: {
	      q: $scope.searchTerm,
	      api_key: 'dc6zaTOxFJmzC',
	      limit: 50
	    }
	  }

	  $http(req).then(function success(res) {
	    //do something with the response if successful
	    console.log(res.data.data);
	    $scope.results = res.data.data;
	  }, function error(res) {
	    //do something if the response has an error
	    console.log(res);
	  });
	};
}]);
