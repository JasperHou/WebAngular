angular.module("fifaApp")
   .factory("FifaService", [function(){
	 return {
		getTeams: function(){
			return  new Array("AC Milan", "Man Unites", "Real Madri", "Livepool");
			//$http.get('/api/team');
		},

		getTeamDetails: function(code){
			//return $http.get('/api/team/' + code)
		}
	 }

}])
.factory('UserService', [function(){
	var service = {
		isLoggedIn: false,
		session: function(){
			// return $http.get('/api/session').then(function(response){
			// 	service.isLoggedIn = true;
			// 	return response;
			// });
		},
		login: function(user){
			// return $http.post('/api/login', user).then(function(response){
			// 	service.isLoggedIn = true;
			// 	return response;
			// });
		}
	};

	return service;
}]);