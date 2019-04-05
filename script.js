	var bootacular = angular.module('bootacular', ['ngRoute']);

	bootacular.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/example', {
				templateUrl : 'pages/example.html',
				controller  : 'contactController'
			});
	});

	bootacular.controller('mainController', function($scope) {

	});

	bootacular.controller('aboutController', function($scope) {
	});

	bootacular.controller('contactController', function($scope) {
	});