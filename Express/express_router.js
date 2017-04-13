var express = require('express'),
	app = express();

app.get('/', (req, res) => {
	console.log('主页 GET 请求');
	res.send('Hello GET');
});

app.post('/', (req, res) => {
	console.log('主页 POST 请求');
	res.send('Hello POST');
});

app.get('/user', (req, res) => {
	console.log('用户 GET 请求');
	res.send('User GET');
});

var server = app.listen('8081', () => {
	console.log('server...');
});