module_load_count ++;

angular.module('priceDisplay').component('priceDisplay',{
	templateUrl:'price-display/price-display.template.html',
	bindings:{
		ticker:'<'
	},
	controller:["$interval","$timeout",function priceDisplayController($interval,$timeout){
		var self = this;

		self.name = "Price Display";
		self.ticker = "fb";
		self.price = 0.00;
		self.last_price = 0.00;
		self.up = true;
		self.pulse = false;
		
		self.pulseNow = async function pulseNow(callback=function(){}){
			self.pulse = true;
			$timeout(function(){
				self.pulse = false;
				callback();
			},1000);
			return;
		};

		self.fetchPrice = async function fetchPrice(callback=function(){}){
			var url = 'https://api.iextrading.com/1.0/stock/'+ self.ticker +'/price';
			fetch(url).then(function(response){
				return response.json();
			}).then(function(json){
				self.price = Number(json);
			}).catch(function(error) {
    			// If there is any error you will catch them here
    			console.log(error);
  			}).then(callback);
		};


		self.tick = function tick(){
			self.fetchPrice();
			self.pulseNow();
			if (self.price >= self.last_price) {
				self.up = true;
			}else{
				self.up = false;
			}
			self.last_price = self.price;
			return;
		};

		$interval(self.tick,2000);
		return; 
	}]
});


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
