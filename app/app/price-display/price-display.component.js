module_load_count ++;

angular.module('priceDisplay').component('priceDisplay',{
	templateUrl:'price-display/price-display.template.html',
	controller:function priceDisplayController($interval){
		var self = this;

		self.name = "Price Display";
		self.price = 157.24;
		self.last_price = 0.00;
		self.up = false;
		
		self.tick = function tick(){
			//update! 
			// alert("ticked");
			var next = getRandomInt(200);
			next = next + Math.random();
			self.price = next //new price
			if (self.price >= self.last_price) {
				self.up = true;
			}else{
				self.up = false;
			}
			self.last_price = self.price;
			return;
		};
		$interval(self.tick,1000);
		return; 
	}
});


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
