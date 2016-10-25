//***代理服务器(不成功)***

var http = require('http'),
	url = require('url');

var server = http.createServer((sreq, sres) => {
	if (sreq.url != '/favicon.ico') {
		var url_pars = url.parse(sreq.url),
			opts = {
			host: 'music.163.com',
			port: 80,
			path: url_pars.pathname,
			headers: sreq.headers
		};
		var preq = http.get(opts, (pres) => {
			sres.writeHead(pres.statusCode, pres.headers);
			pres.pipe(sres);
		});

		preq.on('error', (err) => {
			console.log('error: ' + err.code);
		});

		sreq.pipe(preq);
	}

}).listen(1337, 'localhost');

server.on('connection', (socket) => {
	console.log('客户端已建立');
});

server.on('error', (err) => {
	console.log('error: ' + err.code);
});