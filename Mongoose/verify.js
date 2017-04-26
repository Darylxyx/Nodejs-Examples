var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FirstBlood');

var weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'firday'];

var Schema = mongoose.Schema({
	name: {type: String, unique: true, required: true},
	age: {type: Number, min: 13, max: 19},
	day: {type: String, enum: weekdays}
});

var Model = mongoose.model('Kitten', Schema);

Model.create({
	name: 'verifyTest2',
	age: 17,
	day: 'monday'
}, (err, user) => {
	if (err) return console.log(err.message);
	console.log(user);
});


// console.log(Schema);