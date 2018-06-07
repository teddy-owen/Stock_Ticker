module_load_count ++;

angular.module('logoDisplay').component('logoDisplay',{
	templateUrl:'logo-display/logo-display.template.html',
	controller:function logoDisplayController(){
		var self = this;

		self.name = "Logo Display"
		return; 
	}
});