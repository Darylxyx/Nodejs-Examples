var express = require('express'),
	router = express.Router();

router.get('/', (req, res, next) => {
	res.send('Hello Signin');
});

module.exports = router;