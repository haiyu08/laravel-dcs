<template>
	<div id="area_news">
		<div class="cent_news mt_15px">
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
				<div class="area_article">
					<div class="titile_article">{{ title }}<br><span>{{ update_at }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;阅读：{{ readnumber }}</span></div>
					<div class="cont_article" v-html="content"></div>
				</div>
			</div>
			<div class="paihan">
				<ul class="nav_news mb_10">
					<li>热点推荐</li>
				</ul>
				<ul class="list_hot">
					<li v-for="item in items">
						<div class="img_hot"><img src="../assets/img5.jpg"></div>
						<div class="font_hot">{{ item.title }}</div>
					</li>
				</ul>
			</div>
		</div>

		<!--<div style="display:none">{{ getarticle() }}</div>-->


	</div>

</template>

<script>
  export default {
  	mounted() {
        this.getarticle(),
        this.list_ticle()
    },
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
        },
        title: '',
        update_at: '',
        readnumber: '',
        content: '',
        zxzx: false,
        gjhy: false,
        gjmy: false,
        kjds: false,
        cgs: false,
        ghzs: false,
        hyyj: false,
        alfx: false,
        items: [],
        api_article:'http://localhost/get_article',
        api_list:'http://localhost/list_hotarticle',
      }
    },  

	methods: {
		getarticle: function(event){
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

		  return this.$http.get(this.api_article, {
		    params: {
		      id:this.$route.query.id
		    }
		  })
		  .then(response=>{
        	this.title = response.data.data.title
        	this.update_at = response.data.data.create_at
        	this.readnumber = response.data.data.readnumber
        	this.content = response.data.data.content
		  })
		  .catch(function (error) {
        	console.log(response);
		  })
		},

		list_ticle: function(event){
		  return this.$http.get(this.api_list, {
		  })
		  .then(response=>{
        	this.items = response.data.data
		  })
		  .catch(function (error) {
        	console.log(response);
		  })
		}



	}
  }
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
.mt_15px { margin-top:15px; }
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
.list_paihan li.top { width:377px; height: 38px; line-height: 38px; overflow: hidden;text-align: left;background: url('../assets/bg_paihan.png') 0 -20px no-repeat; }
.list_paihan a:link,.list_paihan a:visited { height: 38px; line-height: 38px; text-decoration: none; font-size:16px; margin-left:4px; }
.list_paihan a:hover { text-decoration: underline; font-size:16px; }
.paihan span { margin-right:15px; font-size:13px; color:#fff; text-align: center; position: relative; left:4px; }
.paihan span.pai_10 { margin-right:15px; font-size:12px; color:#fff; position: relative; left:2px; }
.area_article { width:620px; height: auto; margin: 0 auto; }
.titile_article { margin-top:50px; font-size:26px; }
.titile_article span { font-size:14px; }
.cont_article { height: auto; text-align:left; padding-top:30px; }
.cont_article p { text-indent:0em; font-size:16px; line-height: 30px; }
.list_hot { width:620px; height: auto; overflow: hidden; }
.list_hot li { width:620px; float: left; height: 90px; margin-bottom:20px; }
.img_hot { width:165px; height: 90px; float: left; }
.font_hot { width:190px; height: 90px; float: left; text-align: left; margin-left:20px; font-size:14px; line-height: 26px; margin-top:15px; }
.mb_10 { margin-bottom:20px; }
</style>

