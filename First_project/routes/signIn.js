var express = require('express'),
	router = express.Router(),
	checkLogin = require('../middlewares/check').checkLogin;

router.get('/', checkLogin, (req, res, next) => {
	res.send('Hello Signin');
});

module.exports = router;