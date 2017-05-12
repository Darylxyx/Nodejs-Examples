var doc = document,
	$input = doc.querySelector('#input'),
	$content = doc.querySelector('.content'),
	$sendBtn = doc.querySelector('.send-btn'),
	socket = io();

$sendBtn.onclick = function() {
	var message = $input.value;

	socket.emit('client message', {
		text: message,
		time: new Date()
	});

	$input.value = '';
}

socket.on('server message', (data) => {
	console.log('recevie meesage: ' + JSON.stringify(data));
});

socket.on('disconnect', (data) => {
	console.log('server disconnect: ' + JSON.stringify(data));
});