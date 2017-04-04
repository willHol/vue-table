var express = require('express');
var bodyParser = require('body-parser');

var app = express();

data1 = {
	   data: [
	     {name: "Bernard", age: 50, weight: 200},
	     {name: "Pixie", age: 12, weight: 20},
	     {name: "Lion", age: 200, weight: 1000},
	     {name: "Will", age: 80, weight: 80, cool: 'yes'},
	   ]
};
data2 = {
	   data: [
	     {name: "Anastasia", age: 8, weight: 50, beauty: 10},
	     {name: "Pixie", age: 12, weight: 20, beauty: 5},
	     {name: "Lion", age: 200, weight: 1000, beauty: 8},
	     {name: "Will", age: 80, weight: 80, beauty: 9},
	     {name: "Archie", age: 1000000, weight: 0, beauty: 10},
	     {name: "Bacon", age: 2, weight: 4, beauty: 9},
	     {name: "Anastasia", age: 8, weight: 50, beauty: 10},
	     {name: "Pixie", age: 12, weight: 20, beauty: 5},
	     {name: "Lion", age: 200, weight: 1000, beauty: 8},
	     {name: "Will", age: 80, weight: 80, beauty: 9},
	     {name: "Archie", age: 1000000, weight: 0, beauty: 10},
	     {name: "Bacon", age: 2, weight: 4, beauty: 9}
	   ]
};

app.get('/data1', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.send(JSON.stringify(data1));
	console.log('Response sent');
});
app.get('/data2', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.send(JSON.stringify(data2));
	console.log('Response sent');
});

app.listen(5000);
console.log('Server Started');