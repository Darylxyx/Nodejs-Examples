var mongo = require('mongodb'),
	host = 'localhost',
	port = '8000',
	server = new mongo.Server(host, port, {auto_reconnect: true}),
	db = new mongo.Db('node-mongo-test', server, {safe: true});

db.open((err, db) => {
	db.collection('users', (err, collection) => {
		if (err) throw err;
		else {
			collection.find({userName: '张三'}).toArray((err, docs) => {
				if (err) throw err;
				else {
					console.log(docs);
					// db.close();
				}
			});
		}
	});

	db.collection('foods', (err, collection) => {
		let docs = [
			{type: 'food', price: 11},
			{type: 'food', price: 10},
			{type: 'food', price: 9},
			{type: 'food', price: 8},
			{type: 'book', price: 9},
		];
		collection.insert(docs, (err, docs) => {
			if (err) throw err;
			else {
				collection.find({type: 'food', price: {$lt: 10}}).toArray((err, docs) => {
					console.log(docs);
				});
			}
		})
	});
});

// 条件查询符号：
//$in 包含 collection.find({username: {$in: ['三', '凌牛']}})
//$or 或  collection.find({$or: [{type: 'food'}, {price: {$lt: 10}}]})
//$nin 不包含

//$gt >
//$gte >=
//$lt <
//$lte <=
//$ne !=

//$where js函数
//collection.find({$where: function() {return this.name == '陆凌牛'}})
