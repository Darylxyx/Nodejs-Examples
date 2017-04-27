var express = require('express'),
	router = express.Router();

var	PostsModel = require('../models/posts')
	CommentsModel = require('../models/comments'),
	CORS = require('../middlewares/cors'),

router.get('/', CORS, (req, res) => {
	PostsModel.findPostsList()
	.then((doc) => {
		res.send(doc);
	}).catch();
});

router.get('/delcomment', CORS, (req, res) => {
	let pId = req.params.postId,
		cId = req.query.commentId;

	CommentsModel.deleteComment(cId, (result) => {
		res.send(result);
	});
});

router.get('/:postId', CORS, (req, res) => {
	let pId = req.params.postId;

	PostsModel.findPostDetail(pId)
	.then((doc) => {
		res.send(doc);
	}).catch((err) => {
		res.send(err);
	});
});

router.get('/:postId/comments', CORS, (req, res) => {
	let pId = req.params.postId;

	CommentsModel.findCommentsById(pId)
	.then((doc) => {
		res.send(doc);
	}).catch((err) => {
		res.send(err);
	});
});

router.post('/:postId/comment', CORS, (req, res) => {
	let pId = req.params.postId,
		content = req.query.content;

	CommentsModel.createComment(pId, content, (result) => {
		res.send(result);
	})
});

module.exports = router;