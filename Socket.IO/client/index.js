var doc = document,
	$input = doc.querySelector('#input'),
	$content = doc.querySelector('.content'),
	$sendBtn = doc.querySelector('.send-btn'),
	socket = io();

$sendBtn.onclick = function() {
	var message = $input.value;

	if (!message) return;

	socket.emit('client message', {
		text: message,
		time: new Date()
	}, function(a) {
		//发送成功
	});

	$content.innerHTML += '<div class="list"><div class="section section-self">'+message+'</div></div>';
	$input.value = '';
}

socket.on('user conncet', (data) => {
	console.log(data);
});

socket.on('server message', (data) => {
	console.log('recevie meesage: ' + JSON.stringify(data));
	$content.innerHTML += '<div class="list"><div class="section">'+data.text+'</div></div>';
});

socket.on('disconnect', (data) => {
	console.log('server disconnect: ' + JSON.stringify(data));
});