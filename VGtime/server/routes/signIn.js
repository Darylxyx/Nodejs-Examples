var express = require('express'),
	router = express.Router(),
	CORS = require('../middlewares/cors');

router.get('/', CORS, (req, res, next) => {
	res.send('Hello Signin');
});

module.exports = router;