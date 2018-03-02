
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
import Trail from './components/Trail'
import Price from './components/Price'
import Order from './components/Order'
import Account from './components/Account'
import Document from './components/Document'
import News from './components/News'
import axios from 'axios'
import './validate.js'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$http = axios
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