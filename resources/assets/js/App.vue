<template>
    <div>
    <HeaderTop/>
        <router-view></router-view>
    <Bottom/>
    </div>
</template>

<script>
import HeaderTop from './components/HeaderTop'
import Bottom from './components/Bottom'

import 'swiper/dist/css/swiper.css'
    export default {
        data(){
            return {}
        },
        components: {
            HeaderTop,
            Bottom,
        },
        computed: {},
        methods: {

        },
        mounted() {
        },
    }
</script>

<style>
body{ 
  margin:0px;
  padding:0px;
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  font-size: 14px;
  text-align: center;
  /*overflow-x:hidden;*/
 }
ul { padding:0px; }
ul li { text-align: center; }
li a{ text-decoration: none; color:#333333; }
a:link,a:visited { text-decoration: none; }
.fl { float: left; }
.f12 { font-size: 12px; }
.f26 { font-size: 26px; }
.fb { font-weight: bold; }
.clear { clear:both; }
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>