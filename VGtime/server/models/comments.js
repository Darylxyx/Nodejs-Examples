var Comment = require('../lib/mongo').Comment;

module.exports = {
	findCommentsById(postId) {
		return Comment
				.find({postId: postId})
				.exec();
	},
	createComment(data, cb) {
		Comment
			.create(data, (err, doc) => {
				if (err) cb && cb(err);
				else cb && cb(doc);
			});
	},
	deleteComment(commentId, cb) {
		Comment.findByIdAndRemove(commentId, (err, doc) => {
			if (err) cb && cb(err);
			else cb && cb(doc);
		});
	}
}