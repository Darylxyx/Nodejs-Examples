module.exports = (app) => {
	app.use('/signIn', require('./signIn'));
	app.use('/signUp', require('./signUp'));
	// 404page
	app.use((req, res) => {
		if (!res.headerSent) {
			res.sendStatus(404);
		}
	});
};