var Posts = require('../lib/mongo').Posts

module.exports = {
	findPostsList(cb) {
		Posts
			.find()
			.exec((err, doc) => {
				if (!err) cb(doc);
			});
	}
}