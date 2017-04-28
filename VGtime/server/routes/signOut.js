var express = require('express'),
	router = express.Router();

var CORS = require('../middlewares/cors');

router.get('/', CORS, (req, res) => {
	req.session.user = null;
	res.send('Signout successfully.');
});

module.exports = router;