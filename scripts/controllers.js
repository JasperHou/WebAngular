angular.module('fifaApp')
	.controller('MainController', ['UserService', function(UserService){//controller
		var self = this;
		//self.userService = UserService;

		//UserService.session();
	}])

	.controller('TeamListCtrl',[function(){ //controller
		
		this.teams = new Array("AC Milan", "Unites Man");

		//FifaService.getTeams().then(function(response){
		//	this.teams = response;
		//});
	}])

	.controller('LoginCtrl', ['UserService', '$location', function(UserService, $location){ //controller
		var self = this;
		self.user = {userName: '', password: ''};

		self.login = function(){
			UserService.login(self.user).then(function(success){
				$location.path('/team');
			}, function(error) {
				self.errorMessage = error.data.msg;
			});
		};
	}])

	.controller('TeamDetailsCtrl', ['location', 'routeParams', 'FifaService', function(location, routeParams, FifaService){ //controller
		var self = this;
		self.team = {};
		FifaService.getTeamDetails($routeParams.code).then(function(response){
			self.team = response.data;
		}, function(error){
			$location.path('/login');
		});
	}]);