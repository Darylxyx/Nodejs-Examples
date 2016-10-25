//***向其他网站请求数据***

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
//还可以通过 http.get(options, callback) 向网站请求数据，该方法与request方法的区别在于只能使用GET方式请求，不需要调用req.end()方法，Node.js将自动调用end方法。
var req = http.request(options, (res) => {
	var out = fs.createWriteStream('./response.log');
	out.write('状态码: ' + res.statusCode + '\n')
	out.write('响应头: ' + JSON.stringify(res.headers) + '\n');


	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		out.write('响应内容: ' + chunk);
	});

	res.on('end', () => {
		console.log('数据响应完成')
		out.end('');
	});
});

// req.abort(); //终止请求

req.setTimeout(2000, () => {
	req.abort();  
});

req.on('socket', (socket) => {
	socket.setTimeout(2000);
	socket.on('timeout', () => {
		//socket超时时将终止本次请求并发送错误代码ECONNRESET
		console.log('socket对象超时');
		req.abort();
	});
});

req.on('error', (err) => {
	if (err.code == 'ECONNRESET') {
		console.log('socke 端口超时');
	} else {
		console.log('请求过程发生错误，错误代码: ' + err.code);
	}
});

req.end();