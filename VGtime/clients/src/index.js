import 'babel-polyfill';
import './base.css';
import './main.css';
import Vue from 'vue';

import App from './component/App.vue';
import router from './router'; 

let app = new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
