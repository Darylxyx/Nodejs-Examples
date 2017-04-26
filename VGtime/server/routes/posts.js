var express = require('express'),
	router = express.Router();

var	PostsModel = require('../models/')
	CORS = require('../middlewares/cors'),


router.get('/', CORS, (req, res) => {
	res.send('Hello Posts');


});

module.exports = router;