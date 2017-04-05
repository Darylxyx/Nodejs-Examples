var mongo = require('mongodb'),
	host = 'localhost',
	port = '8000',
	server = new mongo.Server(host, port, {auto_reconnect: true}),
	db = new mongo.Db('node-mongo-test', server, {safe: true});

db.open((err, db) => {
	db.collection('users', (err, collection) => {
		collection.find({userName: '张三'}).toArray((err, doc) => {
			
		});
	});
});