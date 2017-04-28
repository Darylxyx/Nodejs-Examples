module.exports = (app) => {
	app.use('/signIn', require('./signIn'));
	app.use('/signOut', require('./signOut'));
	app.use('/post', require('./posts'));
};