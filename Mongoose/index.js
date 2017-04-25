var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FirstBlood');

var db = mongoose.connection;

db.on('error', (err) => {
	console.log(err);
});

db.once('open', (callback) => {
	console.log('ok');
});