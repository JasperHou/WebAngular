angular.module("fifaApp", ['ngRoute']).config(function($routeProvider){
	$routeProvider.when('/', {
		//template: '<h1>This is the root view screen.</h1>'
		templateUrl: 'views/teams_list.html',
		controller: 'TeamListCtrl as teamListCtrl'
	})
	.when('/login', {
		template: '<h1>This is the login view screen.</h1>'
	})
	.when('/team/:code', {
		templateUrl: 'views/team_details.html',
		controller: 'TeamDetailsCtrl as teamDetailsCtrl'
	});

	//$routeProvider.otherwise({
	//	redirectTo: '/'
	//});

});