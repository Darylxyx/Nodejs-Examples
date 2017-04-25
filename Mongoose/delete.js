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
	age: Number
});

var Model = mongoose.model('Kitten', Schema);

Model.remove({name: 'abc'}, (err) => {
	console.log(err);
});

Model.findOneAndRemove({name: 'xieyuxiao'}, {sort: '-age'}, (err, user) => {
	console.log(user);
});

Model.findByIdAndRemove('58feee8eceef280548432dcc', (err, user) => {
	console.log(user);
});