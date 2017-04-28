var User = require('../lib/mongo').User;

module.exports = {
	createUser(user) {
		return User.create(user);
	},
	getUserById(userId) {
		return User
				.findById(userId)
				.exec();
	}
};