import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name:"index",
            path:'/',
            //component: resolve =>void(require(['./components/ExampleComponent.vue'], resolve))
            component: resolve =>void(require(['./components/Index.vue'], resolve))
        },
    ],
  	mode:"history"
})