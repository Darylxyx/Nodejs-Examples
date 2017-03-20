// var mongo = require('mongodb'),
// 	server = new mongo.Server('127.0.0.1', '8888'),
// 	db = new mongo.Db('databaseName', server);

// // console.log(db);

// db.open((err, db) => {
// 	// console.log(err, db);
// 	if (!err) {
// 		console.log(db);
// 	} else {
// 		console.log(err);
// 	}
// });

// db.close(false, (err) => { //db.close([forceClose], [callback]) forceClose: true 强制关闭，不用能open再打开；false 非强制关闭，可用open再打开。ß
// 	if (err) {
// 		console.log(err);
// 	}
// });

var mongo = require('mongodb'),
	host = 'localhost',
	port = mongo.Connection.DEFAULT_PORT,
	server = new mongo.Server(host, port, {auto_reconnect: true}),
	db = new mongo.Db('node-mongo-test', server, {safe: true});

db.open((err, db) => {
	if (err) {
		throw err;
	} else {
		console.log('数据库创建成功');
		db.close();
	}
});

db.on('close', (err, db) => {
	if (err) {
		throw err;
	} else {
		console.log('成功关闭数据库');
	}
});