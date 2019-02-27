	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the EMS page
			.when('/fire', {
				templateUrl : 'pages/fire.html',
				controller  : 'fireController'
			})


			// route for the EMS page
			.when('/ems', {
				templateUrl : 'pages/ems.html',
				controller  : 'emsController'
			})

			// route for the equipment page
			.when('/equipment', {
				templateUrl : 'pages/equipment.html',
				controller  : 'equipmentController'
			})

			// route for the station1 page
			.when('/station1', {
				templateUrl : 'pages/station1.html',
				controller  : 'station1Controller'
			})

			// route for the station2 page
			.when('/station2', {
				templateUrl : 'pages/station2.html',
				controller  : 'station2Controller'
			})

			// route for the station3 page
			.when('/station3', {
				templateUrl : 'pages/station3.html',
				controller  : 'station3Controller'
			})

			// route for the station4 page
			.when('/station4', {
				templateUrl : 'pages/station4.html',
				controller  : 'station4Controller'
			})

			// route for the station3 page
			.when('/employment', {
				templateUrl : 'pages/employment.html',
				controller  : 'employmentController'
			})

			// route for the staff page
			.when('/staff', {
				templateUrl : 'pages/staff.html',
				controller  : 'staffController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = '';
	});

	scotchApp.controller('emsController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('fireController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('station1Controller', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('station2Controller', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('station3Controller', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('station4Controller', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('employmentController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('staffController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('equipmentController', function($scope) {
		$scope.message = '';
	});
