var doc = document,
	$input = doc.querySelector('#input'),
	$content = doc.querySelector('.content'),
	$sendBtn = doc.querySelector('.send-btn'),
	socket = io();

//通知用户进入聊天室
socket.on('user conncet', (data) => {
	console.log(data);
});

//通知用户离开聊天室
socket.on('user disconnect', (data) => {
	console.log(data);
});

//接收消息
socket.on('server message', (data) => {
	console.log('recevie meesage: ' + JSON.stringify(data));
	$content.innerHTML += '<div class="list"><div class="section">'+data.text+'</div></div>';
	$content.scrollTop = $content.scrollHeight;
});

//断连通知
socket.on('disconnect', (data) => {
	console.log('server disconnect: ' + JSON.stringify(data));
});

$sendBtn.onclick = sendMsg;

//发送消息
function sendMsg() {
	var message = strEscape($input.value);
	if (!message) return;

	socket.emit('client message', {
		text: message,
		time: new Date()
	}, function(a) {
		//发送成功
	});

	$content.innerHTML += '<div class="list"><div class="section section-self">'+message+'</div></div>';
	$content.scrollTop = $content.scrollHeight;
	$input.value = '';
}

function strEscape(str){
       var div=document.createElement('div');
       if(div.innerText){
           div.innerText=str;
       }else{
           div.textContent=str;//Support firefox
       }
       return div.innerHTML;
  }
