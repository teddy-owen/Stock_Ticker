module_load_count ++;

angular.module('fetchTicker').component('fetchTicker',{
	templateUrl:'fetch-ticker/fetch-ticker.template.html',
	bindings:{
		ticker:'='
	},
	controller:['$scope',function fetchTickerController($scope){
			var self = this;
	
			self.name = "Fetch Ticker"
			self.ticker_input = "";
			self.companyName = ""; 
	
			self.updateTicker = function updateTicker(){
				self.ticker = self.ticker_input.toLowerCase();
				self.ticker_input = "";
				return;
			};

			return; 
		}]
});