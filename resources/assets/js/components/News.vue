<template>
	<div id="area_news">
		<div class="top_news">
			<div class="hotpic_news">
				
  				<router-link :to="{ path: 'article', query: { id: 1 , type: 2 }}">
				<img src="../assets/img_news.jpg"><br>
				<div>国产品牌从“农村”走向国际路径：收购国际大牌</div>
				</router-link>

			</div>
			<ul class="font_commond">
				<li><a href="#">国家能源集团与国电集团今日签署《合并协议》</a></li>
				<li><a href="#">离岸人民币升破6.29 日内累计大涨250点</a></li>
				<li><a href="#">新华社：资本市场“现金分红”理应做到知行合一</a></li>
				<li><a href="#">国家能源集团与国电集团今日签署《合并协议》</a></li>
				<li><a href="#">离岸人民币升破6.29 日内累计大涨250点</a></li>
				<li><a href="#">新华社：资本市场“现金分红”理应做到知行合一</a></li>
			</ul>
		</div>
		<div class="cent_news">
			<div class="left_list">
				<ul class="nav_news">
					<li v-bind:class="{hover:zxzx}"><a href="#">最新资讯</a></li>
					<li v-bind:class="{hover:gjhy}"><a href="#">国际海运</a></li>
					<li v-bind:class="{hover:gjmy}"><a href="#">国际贸易</a></li>
					<li v-bind:class="{hover:kjds}"><a href="#">跨境电商</a></li>
					<li v-bind:class="{hover:cgs}"><a href="#">船公司</a></li>
					<li v-bind:class="{hover:ghzs}"><a href="#">干货知识</a></li>
					<li v-bind:class="{hover:hyyj}"><a href="#">行业预警</a></li>
					<li v-bind:class="{hover:alfx}"><a href="#">案例分析</a></li>
				</ul>
				<div class="one_news">
					<div class="img"><a href="#"><img src="../assets/img1.jpg"></a></div>
					<div class="font_summer"><span><a href="#">新华社：资本市场“现金分红”理应做到知行合一</a></span><br>2月5日，联美控股、阳泉煤业等五家沪市上市公司就多年“符合条件却未进行现金分红”向投资者作出现场说明。本次说明会的举行，表明监管层对于上市公司分红制度切实地由制…</div>
				</div>
				<div class="one_news">
					<div class="img"><a href="#"><img src="../assets/img2.jpg"></a></div>
					<div class="font_summer"><span>外管局：严打以创新为名的各类外汇违法犯罪行为</span><br>日前，国家外汇管理局与公安部联合召开打击外汇违法犯罪活动工作总结部署会议。会议指出，2017年，面对复杂的改革任务和国内外经济金融形势，在党中央、国务院的正确领…</div>
				</div>
				<div class="one_news">
					<div class="img"><a href="#"><img src="../assets/img1.jpg"></a></div>
					<div class="font_summer"><span>新华社：资本市场“现金分红”理应做到知行合一</span><br>2月5日，联美控股、阳泉煤业等五家沪市上市公司就多年“符合条件却未进行现金分红”向投资者作出现场说明。本次说明会的举行，表明监管层对于上市公司分红制度切实地由制…</div>
				</div>
				<div class="one_news">
					<div class="img"><a href="#"><img src="../assets/img2.jpg"></a></div>
					<div class="font_summer"><span>外管局：严打以创新为名的各类外汇违法犯罪行为</span><br>日前，国家外汇管理局与公安部联合召开打击外汇违法犯罪活动工作总结部署会议。会议指出，2017年，面对复杂的改革任务和国内外经济金融形势，在党中央、国务院的正确领…</div>
				</div>
			</div>
			<div class="paihan">
				<ul class="nav_news">
					<li>资讯排行</li>
				</ul>
				<ul class="list_paihan">
<!-- 					<li class="top"><span>1</span><a href="#">国家能源集团与国电集团今日签署《合并协议》</a></li>
					<li class="top"><span>2</span><a href="#">离岸人民币升破6.29 日内累计大涨250点</a></li>
					<li class="top"><span>3</span><a href="#">新华社：资本市场“现金分红”理应做到知行合一</a></li>
					<li><span>4</span><a href="#">离岸人民币升破6.29 日内累计大涨250点</a></li>
					<li><span>5</span><a href="#">国家能源集团与国电集团今日签署《合并协议》</a></li>
					<li><span>6</span><a href="#">离岸人民币升破6.29 日内累计大涨250点</a></li>
					<li><span>7</span><a href="#">新华社：资本市场“现金分红”理应做到知行合一</a></li>
					<li><span>8</span><a href="#">国家能源集团与国电集团今日签署《合并协议》</a></li>
					<li><span>9</span><a href="#">离岸人民币升破6.29 日内累计大涨250点</a></li>
					<li><span class="pai_10">10</span><a href="#">新华社：资本市场“现金分红”理应做到知行合一</a></li> -->
					<li v-for="(item,index) in items" :class="{'top1':index==0,'top2':index==1,'top3':index==2}" ><span>{{ index+1 }}</span><a href="#">{{ item.title }}</a></li>
				</ul>
			</div>
		</div>

	</div>

</template>

<script>
/*  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
  }*/
  
export default {    
  mounted() {
    this.getarticle()
    this.list_rankarticle()
  },
  data() {
    return {
      name: 'Vue.js',
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisiblemima: false,
      username:1111,
      password:2222,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },        
        zxzx: false,
        gjhy: false,
        gjmy: false,
        kjds: false,
        cgs: false,
        ghzs: false,
        hyyj: false,
        alfx: false,
        items: [],
      formLabelWidth: '120px',
      api_list:'http://localhost/list_rankarticle',
    };
  },  
  methods: {
		getarticle: function(event){
			alert(this.$route.query.type);
			if(this.$route.query.type == 1){ 
				this.zxzx = true;
			}else if(this.$route.query.type == 2){ 
				this.gjhy = true;
			}else if(this.$route.query.type == 3){ 
				this.gjmy = true;
			}else if(this.$route.query.type == 4){ 
				this.kjds = true;
			}else if(this.$route.query.type == 5){ 
				this.cgs = true;
			}else if(this.$route.query.type == 6){ 
				this.ghzs = true;
			}else if(this.$route.query.type == 7){ 
				this.hyyj = true;
			}else if(this.$route.query.type == 8){ 
				this.alfx = true;
			}
		},
		
		list_rankarticle: function(event){
		  return this.$http.get(this.api_list, {
		  })
		  .then(response=>{
		  	console.log(response.data.data);
        	this.items = response.data.data;
		  })
		  .catch(function (error) {
        	console.log(error);
		  })
		},


  }
};
</script>

<style>
#area_news { width:100%; height: auto; border-top:1px solid #d9d9d9; margin: 0 auto; margin-bottom:70px;}
.top_news { width: 1140px; height: 240px; margin:30px auto; margin-bottom:0px;   }
.hotpic_news { width:655px; height: 240px; float: left; }
.font_commond { width:450px; height: 220px; float: right; position: relative; top:-10px; }
.font_commond li a:link,.font_commond li a:visited { font-size: 18px; line-height: 36px; }
.font_commond li a:hover { text-decoration: underline; }
.hotpic_news div{ height:40px; line-height: 40px; background: #000; opacity:0.8; color:#fff; font-size: 16px; position: relative; top:-44px; }
.cent_news { width: 1140px; height: auto; margin: 0 auto; overflow: hidden; }
.left_list { width:690px; height: auto; float:left; }
.left_list ul.nav_news { width:690px; height: 34px; border-bottom:1px solid #d9d9d9; }
.left_list ul.nav_news li a:link,.left_list ul.nav_news li a:visited { color:#333333; font-size:16px; width:82px; display: block; height: 34px; line-height: 34px; }
.left_list ul.nav_news li.hover a { font-weight:bold; color:#333333; font-size:16px; display: block; cursor:pointer; border-bottom:2px solid #f9c231;height: 33px; }
.one_news { width:690px; height:120px; margin-top:30px; text-align: left;}
.one_news .img { width:200px; height: 120px; float: left; }
.font_summer { width:470px; height: 120px; float: right; font-size: 14px; color:#666666; line-height:24px;}
.font_summer span { font-size:16px; color:#333333; line-height:40px; }
.font_summer a:link,.font_summer a:visited { color:#333333; text-decoration: none; }
.font_summer a:hover { text-decoration: underline; }
.paihan { width:377px; height: auto; float: right; }
.paihan ul.nav_news { width:377px; height: 34px; border-bottom:1px solid #d9d9d9; font-size:16px; font-weight: bold; }
.paihan ul.nav_news li { width:82px; border-bottom:2px solid #f9c231; height: 33px;  }
.list_paihan li { width:377px; height: 38px; line-height: 38px; overflow: hidden;text-align: left;background: url('../assets/bg_paihan.png') 0 12px no-repeat; }
.list_paihan li.top1,.list_paihan li.top2,.list_paihan li.top3 { width:377px; height: 38px; line-height: 38px; overflow: hidden;text-align: left;background: url('../assets/bg_paihan.png') 0 -20px no-repeat; }
.list_paihan a:link,.list_paihan a:visited { height: 38px; line-height: 38px; text-decoration: none; font-size:16px; margin-left:4px; }
.list_paihan a:hover { text-decoration: underline; font-size:16px; }
.paihan span { margin-right:15px; font-size:13px; color:#fff; text-align: center; position: relative; left:4px; }
.paihan span.pai_10 { margin-right:15px; font-size:12px; color:#fff; position: relative; left:2px; }
</style>

