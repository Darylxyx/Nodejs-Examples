global.sendResponse = (res, statusCode, doc) => {
	var resJSON = {
		statusCode: statusCode,
		result: doc
	};
	res && res.send(resJSON);
};