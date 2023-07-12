
import Vue from 'vue';
import './index.css';
import { Button } from 'vant';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue'
import router from '@/router';
// 1.引入路由插件
// import VueRouter from 'vue-router';
// import Dialog from '@/components/Dialog';
Vue.component('Icon', Icon);
const app = new Vue({
	//挂载点
	el: '#app',
	// a:123,
	// 4.将router注入到root中
	// 提供了两个vue实例(全局)$router===routrt $toute
	router,
	components:{App},
	template:'<App/>',
});
//只要传递给组件的配置项，都会被保存在$options
