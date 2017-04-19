var User = require('../lib/mongo').User;

module.exports = {
	create(user) { // 注册用户
		return User.create(user).exec();
	},

	getUserByName(name) {
		return User
			.findOne({ name: name })
			.addCreatedAt()
			.exec();
	}
}