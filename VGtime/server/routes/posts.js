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

router.get('/:postId', CORS, (req, res) => {
	let pId = req.params.postId;

	PostsModel.findPostDetail(pId)
	.then((doc) => {
		res.send(doc);
	}).catch((err) => {
		res.send(doc);
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

module.exports = router;