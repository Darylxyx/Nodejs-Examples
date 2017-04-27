var Comment = require('../lib/mongo').Comment;

module.exports = {
	findCommentsById(postId) {
		return Comment
				.find({postId: postId})
				.exec();
	},
	createComment(postId, content, cb) {
		Comment
			.create({
				author: '590053ba955d740d6c4044b2',
				content: content,
				postId: '590053ba955d740d6c4044b2'
			}, (err, doc) => {
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