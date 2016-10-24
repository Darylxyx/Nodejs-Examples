var http = require('http');

var server = http.createServer((req, res) => {
	if (req.url != '/favicon.ico') {
		//res.writeHead(statusCode, [reasonPhrase], [headers]); statusCode:状态码 reasonPhrase:描述信息 headers:响应头信息obj类型
		res.writeHead(200, 'success', {
			'Content-Type': 'text/plain',
			'Access-Control-Allow-Origin': '*'
		});
		res.write('Hello World');
	}
	res.end();

}).listen(2000, 'localhost');