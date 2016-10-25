//***向本地服务器请求数据(客户端请求)***

var http = require('http');

var options = {
	hostname: 'localhost',
	port: 2000,
	path: '/',
	method: 'POST'
};

var req = http.request(options, (res) => {
	res.on('data', (data) => {
		console.log('接收到服务器返回的数据：' + data);
	});
	res.on('end', () => {
		console.log('Trailers 头信息' + JSON.stringify(res.trailers));
	});
});

req.write('你好');
req.end('再见');

req.on('error', (err) => {
	if (err.code == 'ECONNRESET') {
		console.log('socke 端口超时');
	} else {
		console.log('请求过程发生错误，错误代码: ' + err.code);
	}
});