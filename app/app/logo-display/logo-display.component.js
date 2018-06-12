module_load_count ++;

angular.module('logoDisplay').component('logoDisplay',{
	templateUrl:'logo-display/logo-display.template.html',
	bindings:{
		ticker:'<'
	},
	controller:['$scope','$interval',function logoDisplayController($scope,$interval){
				var self = this;
		
				self.name = "Logo Display"
				self.url = "https://www.w3schools.com/angular/pic_angular.jpg";
				self.ticker_old = "";
				self.companyName = "AngularJS";
		
				   
				self.fetchUrl = async function fetchUrl(callback=function(){}){
					if (!self.ticker) {
						return;
					}
					console.log("FetchURL");
					var url = 'https://api.iextrading.com/1.0/stock/'+ self.ticker +'/logo';
					fetch(url).then(function(response){
						return response.json();
					}).then(function(json){
						self.url = String(json.url);
						// console.log(json.url);
					}).catch(function(error) {
		    			// If there is any error you will catch them here
		    			console.log(error);
		  			}).then(callback);

				};
	
				self.fetchName = function fetchName(){
					if (!self.ticker) {
						return;
					}
					var url = 'https://api.iextrading.com/1.0/stock/'+ self.ticker +'/company';
					fetch(url).then(function(response){
						return response.json();
					}).then(function(json){
						self.companyName = json.companyName; 
						console.log(json.companyName);
					}).catch(function(error) {
		    			// If there is any error you will catch them here
		    			console.log(error);
		  			});
				};
	
				

				$interval(function(){
					if (self.ticker_old	!= self.ticker) {
						self.fetchUrl();
						self.fetchName();
						self.ticker_old	= self.ticker;
					}
				},10);
		
				return; 
			}]
});