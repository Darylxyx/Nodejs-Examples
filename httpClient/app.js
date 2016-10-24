var http = require('http'),
	url = require('url');

var req = http.request(url.parse('http://www.microsoft.com'), (res) => {
	conosle.log('状态码: ' + res.statusCode);
	console.log('响应头: ' + JSON.stringify(res.headers));
});