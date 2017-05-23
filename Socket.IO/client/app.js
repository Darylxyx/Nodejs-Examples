function App() {
	var doc = document;
	this.$input = doc.querySelector('#input');
	this.$content = doc.querySelector('.content');
	this.$sendBtn = doc.querySelector('.send-btn');
	this.socket = io();
}

App.prototype.sendMsg = function() {

	var message = this.strEscape(this.$input.value);
	if (!message) return;

	this.socket.emit('client message', {
		text: message,
		time: new Date()
	}, function(a) {
		//发送成功
	});

	this.$content.innerHTML += '<div class="list"><div class="section section-self">'+message+'</div></div>';
	this.$content.scrollTop = this.$content.scrollHeight;
	this.$input.value = '';
};

App.prototype.strEscape = function(str) {
	var div = document.createElement('div');

	if (div.innerText) {
		div.innerText = str;
	} else {
		div.textContent = str;//Support firefox
	}
	return div.innerHTML;
};

window.a = new App();