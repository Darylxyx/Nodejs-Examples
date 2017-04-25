var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FirstBlood');

var db = mongoose.connection;

db.on('error', (err) => {
	console.error(err);
});

db.once('open', () => {
	console.log('ok');
});

var Schema = mongoose.Schema({
	name: String,
	age: Number,
	exc: String
});

var Model = mongoose.model('Kitten', Schema);

Model.update({name: 'datou'}, {age: 14}, (err, res) => {
	// console.log(err);
	// console.log(res);
});

Model.findOneAndUpdate({name: 'datou'}, {exc: '123'}, (err) => {
	console.log(err);
});