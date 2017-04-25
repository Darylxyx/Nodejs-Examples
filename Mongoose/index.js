var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FirstBlood');

var db = mongoose.connection;

db.on('error', (err) => {
	console.log(err);
});

db.once('open', (callback) => {
	console.log('ok');
});

var kittySchema = mongoose.Schema({
	name: String,
	age: Number
});

kittySchema.methods.speak = function() {
	var name = 'My name is ' + this.name;
	console.log(name);
};

var kittyModel = mongoose.model('Kitten', kittySchema);

var xyx = new kittyModel({
	name: 'xieyuxiao',
	age: 26
});

var datou = new kittyModel({
	name: 'datou',
	age: 25
});

xyx.save((err, self) => {
	if (err) return console.error(err);
	self.speak();
});

datou.save((err, self) => {
	if (err) return console.error(err);
	self.speak();
});

kittyModel.find((err, self) => {
	if (err) return console.error(err);
	console.log(self);
});

console.log(xyx);