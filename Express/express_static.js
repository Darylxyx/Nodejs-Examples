var express = require('express'),
	app = express();

app.use(express.static('src'));

app.get('/', (req, res) => {
	res.send('Hello World');
});

var server = app.listen(8081, () => {
	console.log('server...');
});