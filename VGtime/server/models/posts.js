var Posts = require('../lib/mongo').Posts

module.exports = {
	findPostsList(cb) {
		Posts
			.find()
			.sort('-score')
			.exec((err, doc) => {
				if (!err) cb(doc);
			});
	}
}