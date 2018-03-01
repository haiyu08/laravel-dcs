
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'; //添加的内容
import router from './router';//添加的内容
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('Index', require('./components/Index.vue'));



const app = new Vue({
    el: '#app',
    router,//添加的内容
    render:h => h(App)//添加的内容
});