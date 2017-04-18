module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send({desc: 'Hello Route'});
	});

	app.use('/signIn', require('./signIn'));
};