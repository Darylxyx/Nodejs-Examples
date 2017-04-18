var express = require('express'),
	app = express();

console.log(process.env.NODE_EE);

app.get('/', (req, res) => {
	res.send('Hello World');
});

var server = app.listen(8081, () => {
	var host = server.address().address,
		port = server.address().port;

	console.log('应用实例，访问地址为 http://%s:%s', host, port);
});