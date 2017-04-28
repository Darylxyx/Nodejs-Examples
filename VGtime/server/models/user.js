var User = require('../lib/mongo').User;

module.exports = {
	createUser(user) {
		return User.create(user);
	},
	getUserByName(name) {
		return User
				.findOne({name: name})
				.exec();
	}
};