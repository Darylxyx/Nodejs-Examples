var express = require('express'),
	router = express.Router();

router.get('/:name', (req, res) => {
	res.send('Hello ' + req.params.name);
});

module.exports = router;