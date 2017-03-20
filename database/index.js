var mongo = require('mongodb'),
	server = new mongo.Server('127.0.0.1', '8888'),
	db = new mongo.Db('databaseName', server);

// console.log(db);

db.open((err, db) => {
	// console.log(err, db);
	if (!err) {
		console.log(db);
	} else {
		console.log(err);
	}
});

db.close();