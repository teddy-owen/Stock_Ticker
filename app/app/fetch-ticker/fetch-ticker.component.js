module_load_count ++;

angular.module('fetchTicker').component('fetchTicker',{
	templateUrl:'fetch-ticker/fetch-ticker.template.html',
	controller:function fetchTickerController(){
		var self = this;

		self.name = "Fetch Ticker"
		self.ticker = "";

		self.updateTicker = function updateTicker(){
			self.ticker = self.ticker.toLowerCase();
			return;
		};
		return; 
	}
});