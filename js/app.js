var giphyApp = angular.module('GiphyApp', [])

.run(function() {
  console.log('App has loaded!');
});

giphyApp.controller('GiphyCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.test_string = 'holy shit';
}]);
