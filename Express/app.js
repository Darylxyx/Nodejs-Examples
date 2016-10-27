var express = require('express');

var app = express();

// app.get('/index.html', (req, res) => {
// 	// send方法封装了writeHead和setHeader方法
// 	res.send('你好');
// });

// app.listen(2000, 'localhost');


app.get('/index.html/:id(\\d+)', (req, res, next) => {
	if (req.params.id > 10) {
		next();
	} else {
		res.send('id参数值必须大于10');
	}
});

app.get('/index.html/:id(\\d+)', (req, res) => {
	res.send('你好');
});

app.listen(2000, 'localhost');