var mongo = require('mongodb'),
	host = 'localhost',
	port = '8000',
	server = new mongo.Server(host, port, {auto_reconnect: true}),
	db = new mongo.Db('node-mongo-test', server, {safe: true});

db.open((err, db) => {
	db.collection('users', (err, collection) => {
		if (!err) {
			let data = {
				userName: 'ghost_xyx',
				age: 26
			};
			collection.insert(data, (err, docs) => {
				console.log(docs);
				db.close(false);
			});
		}
	});
});

db.on('close', (err, db) => {
	if (err) throw err;
	else {
		db.open((err, db) => {
			db.collection('users', (err, collection) => {
				let data = {
					users: 'Daryl_xyx',
					age: 26
				};
				collection.insert(data, (err, doce) => {
					console.log(doce);
					db.close(true);
				});
			});
		});
	}
});