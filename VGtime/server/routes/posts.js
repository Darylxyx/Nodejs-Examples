var express = require('express'),
	router = express.Router();

var	PostsModel = require('../models/posts')
	CORS = require('../middlewares/cors'),

router.get('/', CORS, (req, res) => {
	PostsModel.findPostsList().then((doc) => {
		res.send(doc);
	}).catch();
});

module.exports = router;