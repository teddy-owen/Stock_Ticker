
angular.module("stockTicker").config(['$locationProvider' ,'$routeProvider', 
	function config($locationProvider ,$routeProvider){
		$locationProvider.hashPrefix('!');

		$routeProvider.
			when('/stock-ticker', {
				templateUrl: 'views/home.html'
			}).
			when('/404', {
				template: '<h1>404!</h1>'
			}).
			when('/logo',{
				template:'<logo-display></logo-display>'
			}).
			when('/ticker',{
				template:'<fetch-ticker></fetch-ticker>'
			}).
			when('/price',{
				template:'<price-display></price-display>'
			}).
			otherwise('/stock-ticker');
	}
]);

