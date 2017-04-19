module.exports = (app) => {
	// app.get('/', (req, res) => {
	// 	res.send({desc: 'Hello Route'});
	// });

	// app.use('/signIn', require('./signIn'));
	app.use('/signUp', require('./signUp'));

	// 404page
	app.use((req, res) => {
		if (!res.headerSent) {
			res.sendStatus(404);
		}
	});
};