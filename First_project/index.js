var express = require('express'),
	app = express();

app.get('/', (req, res) => {
	res.send('Hello Express');
});

app.get('/user/:name', (req, res) => {
	res.send('params: ' + JSON.stringify(req.params) + ', query: ' + JSON.stringify(req.query));
});

app.listen(3000);