const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'app')))

app.get('/', function(req, res){
	var options = {
    	root: __dirname + '/app'
  	};
	res.sendFile('index.html',options);
});

var host = process.argv[2] ? process.argv[2]:"127.0.0.1";
var port = 8000;
app.listen(port, host, () => console.log('Stock Ticker app ready at http://'+host+':'+port))