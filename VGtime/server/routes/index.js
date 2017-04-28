module.exports = (app) => {
	app.use('/signIn', require('./signIn'));
	app.use('/signUp', require('./signUp'));
	app.use('/signOut', require('./signOut'));
	app.use('/post', require('./posts'));
};