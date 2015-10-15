'use strict';

/* Controllers */

var controllers = angular.module('dabbble.controllers', []);

controllers.controller('AppCtrl', function($scope) {
	$scope.name = "Module";
})

controllers.controller('ShotsListCtrl', function($scope, $http) {
	$scope.list;

	$http.jsonp('http://api.dribbble.com/v1/shots?callback=JSON_CALLBACK&access_token=00154adfb27f56a1c1a8214999fd896cafee5face002083fd48b18c7f675a18f').then(function (data) {
		$scope.list = data.data;
		console.log(data);
	})
})


