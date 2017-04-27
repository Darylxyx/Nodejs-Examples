module.exports = (app) => {
	// app.use('/signIn', require('./signIn'));
	app.use('/post', require('./posts'));
};