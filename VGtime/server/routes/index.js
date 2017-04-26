module.exports = (app) => {
	// app.use('/signIn', require('./signIn'));
	app.use('/posts', require('./posts'));
};