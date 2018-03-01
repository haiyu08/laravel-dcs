import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name:"index",
            path:'/',
            component: resolve =>void(require(['./components/Index.vue'], resolve))
        },
        {
            name:"trail",
            path:'/trail',
            component: resolve =>void(require(['./components/Trail.vue'], resolve))
        },
        {
            name:"price",
            path:'/price',
            component: resolve =>void(require(['./components/Price.vue'], resolve))
        },
        {
            name:"order",
            path:'/order',
            component: resolve =>void(require(['./components/Order.vue'], resolve))
        },
        {
            name:"account",
            path:'/account',
            component: resolve =>void(require(['./components/Account.vue'], resolve))
        },
        {
            name:"document",
            path:'/document',
            component: resolve =>void(require(['./components/Document.vue'], resolve))
        },
        {
            name:"news",
            path:'/news',
            component: resolve =>void(require(['./components/News.vue'], resolve))
        },
        {
            name:"article",
            path:'/article',
            component: resolve =>void(require(['./components/Article.vue'], resolve))
        }
    ],
  	//mode:"history",
})