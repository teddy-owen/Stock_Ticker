console.log("app.module loaded.");
var module_load_count = 0;
setTimeout(function(){
	var need = 6;
	if(module_load_count == need){
		console.log("All modules successfully loaded.");
	}else{
		console.log(String(need - module_load_count) + " module(s) failed to load!");
	}
},500);

angular.module('stockTicker',[
	'fetchTicker',
	'logoDisplay',
	'priceDisplay',
	'ngRoute'
	]);