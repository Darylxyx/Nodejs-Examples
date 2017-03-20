var mongo = require('mongodb'),
	host = 'localhost',
	port = '8000',
	server = new mongo.Server(host, port, {auto_reconnect: true}),
	db = new mongo.Db('node-mongo-test', server, {safe: true});

var promise = new Promise((resolve, reject) => {
	db.open((err, db) => {
		if (err) {
			throw err;
		} else {
			console.log('数据库创建成功');
			resolve();
		}
	});
});

promise.then(() => {
	db.collection('users', (err, collection) => {
		if (!err) {
			let data = {
				userName: 'ghost_xyx',
				age: 26
			};
			collection.insert(data, (err, docs) => {
				console.log(docs);
				db.close();
			});
		}
	});

}).catch((err) => {
	throw err;
});