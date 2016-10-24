var http = require('http'),
	url = require('url'),
	fs = require('fs');

var options = {
	hostname: 'www.baidu.com',
	port: 80,
	path: '/',
	method: 'GET'
};

//可以通过url.parse生成options对象
var req = http.request(options, (res) => {
	var out = fs.createWriteStream('./response.log');
	out.write('状态码: ' + res.statusCode + '\n')
	out.write('响应头: ' + JSON.stringify(res.headers) + '\n');
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		out.write('响应内容: ' + chunk);
	});
	res.on('end', () => {
		out.end('');
	});
});

req.end();