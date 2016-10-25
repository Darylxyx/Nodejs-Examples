var http = require('http');

var server = http.createServer((req, res) => {
	if (req.url != '/favicon.ico') {
		//res.writeHead(statusCode, [reasonPhrase], [headers]); statusCode:状态码 reasonPhrase:描述信息 headers:响应头信息obj类型
		// res.writeHead(200, 'success', {
		// 	'Content-Type': 'text/plain',
		// 	'Access-Control-Allow-Origin': '*'
		// });

		res.statusCode = 213;
		res.sendDate = false; //删除header中代表当前时间的Date字段，默认true
		// res.setHeader(name, value); 不与writeHead一起用。
		res.setHeader('Content-Type', 'text/plain');
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
		console.log(res.getHeader('Content-Type'));
		res.removeHeader('Set-Cookie');

		//res.write(chunk, [encoding]); chunk: 响应内容，可以为buffer或字符串 encoding: 字符编码，默认utf-8
		res.write('Hello World');
		res.write('!!!');

		//***flag = res.write();
		//网络快，数据量少时，Nodejs会将数据直接发送到操作系统内存缓存区中，flag为true
		//网络慢，数据量大时，将数据缓存在内存中，flag为false
	}
	res.end();

}).listen(2000, 'localhost');


// ***请求头发送时机

// console.log(res.headerSent); //false 请求头未发送
// res.writeHead(200, {
// 	'Content-Type': 'text/plain'
// })
// console.log(res.headerSent); //true 请求头已发送

// res.setHeader('Content-Type': 'text/plain');
// console.log(res.headerSent); //false 请求头未发送
// res.write('<html><head><meta charset="utf-8" /></head></html>');
// console.log(res.headerSent); //true 请求头已发送
// res.write('你好');

var server2 = http.createServer((req, res) => {
	if (req.url != '/favicon.ico') {


		res.writeHead(200, 'successful', {
			'Content-Type': 'text/plain',
			'Access-Control-Allow-Origin': '*',
			'Trailer': 'addHeader'
		});
		res.write('Some data...');
		res.addTrailers({'addHeader': 'addValue'}); //该方法用于在响应数据尾部追加一个头信息，HTTP1.1版本以上支持。使用时要在header中设置Trailer。
	}
	res.end();
}).listen(3000, 'localhost');

var server3 = http.createServer((req, res) => {
	if (req.url != '/favicon.ico') {
		res.setTimeout(1000);
		res.on('timeout', () => {
			console.log('响应超时。');
		});
		setTimeout(() => {
			res.setHeader('Content-Type', 'text/html');
			res.write('<html><head><meta charset="utf-8" /></head>');
			res.write('hello');
			res.end();
		}, 2000);

		//如果res.setTimeout和res的timeout事件都没有指定回调函数，当响应超时时会自动关闭与HTTP客户端连接的socket端口。
		//反之不会关闭，即使超时客户端依然能接收到数据。
	}
}).listen(4000, 'localhost');
