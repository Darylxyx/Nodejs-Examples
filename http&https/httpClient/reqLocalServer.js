//***向本地服务器请求数据(服务器接收)***

var http = require('http');

var server = http.createServer((req, res) => {
	if (req.url != '/favicon.ico') {
		req.on('data', (data) => {
			console.log('接收到来自客户端的请求数据：' + data);
			res.write(data + 'back');
		});

		req.on('end', () => {
			res.addTrailers({'addHeaders':'Hello World'});
			res.end();
		});
	}
}).listen(2000, '127.0.0.1');