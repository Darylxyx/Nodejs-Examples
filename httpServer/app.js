var http = require('http'),
	fs = require('fs');

var server = http.createServer((req, res) => {
	if (req.url != '/favicon.ico') {

		req.on('data', (data) => {
			console.log('Response_data: ' + JSON.stringify(data));
		});

		req.on('end', (data) => {
			console.log('Response data is all received.');
		});

		var out = fs.createWriteStream('./request.log');
		out.write('Server_method: ' + req.method + '\r\n');
		out.write('Server_url: ' + req.url + '\r\n');
		out.write('Server_headers: ' + JSON.stringify(req.headers) + '\r\n');
		out.end('Server_httpVersion: ' + req.httpVersion);
	}
	res.end();
}).listen(2000, '127.0.0.1');

server.on('linstening', () => {
	console.log('Server is linstening...');
});

server.on('connection', (socket) => {
	console.log('Server connection has been created.');
});

server.on('close', () => {
	console.log('Server has been closed.')
});

server.on('error', (e) => {
	if (e.code == 'EADDRINUSE') {
		console.log('Server port has been established.');
	}
});

server.on('timeout', () => {

});