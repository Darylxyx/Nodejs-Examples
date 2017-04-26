var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FirstBlood');

var weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'firday'];

var lengthValidator = (val) => {
	if (val && val.length >=5 ) {
		return true;
	}
	return false;
}

var Schema = mongoose.Schema({
	name: {type: String, unique: true, required: true, validate: {validator: lengthValidator, msg: 'Too short'}},
	age: {type: Number, min: 13, max: 19},
	day: {type: String, enum: weekdays}
});

var Model = mongoose.model('Kitten', Schema);

Model.create({
	name: 'ver',
	age: 17,
	day: 'monday'
}, (err, user) => {
	if (err) return console.log(err.message);
	console.log(user);
});


// console.log(Schema);