var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FirstBlood');

var Schema = mongoose.Schema({
	name: {type: String, unique: true, required: true},
	age: {type: Number, min: 13, max: 19}
});

var Model = mongoose.model('Kitten', Schema);

Model.create({
	name: 'verifyTest',
	age: 20
}, (err, user) => {
	if (err) return console.log(err.message);
	console.log(user);
});

// console.log(Schema);