import Vue from 'vue';
import VueRouter from 'vue-router';

import root from './component/Root.vue';
import news from './component/News.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{ path: '/', redirect: '/root'},
		{ path: '/root', component: root},
		{ path: '/news', component: news}
	]
});

