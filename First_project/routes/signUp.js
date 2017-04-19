var path = require('path'),
	fs = require('fs'),
	sha1 = require('sha1'),
	express = require('express'),
	router = express.Router();

var UserModel = require('../models/user');

router.post('/', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.send({a: 'mmp'});
});

module.exports = router;