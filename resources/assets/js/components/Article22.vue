<template>
	<div id="area_news">
		<div class="cent_news mt_15px">
			<div class="left_list">
				<ul class="nav_news">
					<li class="hover"><a href="#">最新资讯</a></li>
					<li><a href="#">国际海运</a></li>
					<li><a href="#">国际贸易</a></li>
					<li><a href="#">跨境电商</a></li>
					<li><a href="#">船公司</a></li>
					<li><a href="#">干货知识</a></li>
					<li><a href="#">行业预警</a></li>
					<li><a href="#">案例分析</a></li>
				</ul>
				<div class="area_article">
					<div class="titile_article">寄快递到乌拉圭可走什么快递？<br><span>2018-02-05 19:20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;阅读：206</span></div>
					<div class="cont_article">
						<p><img src="../assets/img3.jpg"/><br><center>这是图片说明</center></p>
						<p>乌拉圭是南美洲东南部的一个国家，与巴西、阿根廷接壤，东南临大西洋。乌拉圭首都为蒙得维的亚，官方语言为西班牙语。</p>
<p>乌拉圭经济水平在拉美国家中处于中等发展水平，主要经济以出口农业为主。主要生产并出口肉类、羊毛、水产品、皮革和稻米等。主要进口产品为汽车、汽车配件和电话等。主要进口来源地为中国、阿根廷、巴西和美国。</p>

　　<p>进口关税</p>

　　<p>乌拉圭政府自1975年起采取了较为开放的自由进口及低关税的外贸政策。鼓励进口原材料、中间产品和制成品。以前的进口关税为300%，须预付200%，并且要有进口许可证。现在的进口关税平均为14%，最高为22.5%。</p>

　　<p>限制进口措施</p>

　　<p>1、禁止进口二手交通工具，该法令由现政府指定并且每180天重申一次。</p>

　　<p>2、原油及其制成品、液化、半液化及气态碳氢燃料的进口须获得政府许可。</p>

　　<p>3、禁止进口含砷和锑物质的用于牛、羊、猪、马和家禽的促生长和催肥的产品。</p>

　　<p>4、禁止进口用于牛、羊、猪、马和家禽的促生长和催肥的兽医药品，因为这些药品含转基因激素或有去甲状腺素作用、含有合成的或自然的代谢激素。</p>

　　<p>5、纺织品方面，乌拉圭列出了布匹和服装清单并制定了特别关税。任何纺织品的进口都需要事先得到许可证，但其关税不能超过到岸价格的35%。</p>

　　<p>6、有特殊附加条件的进口商品。</p>

　　<p>7、民用、军用和警用汽车等交通工具。</p>

　　<p>反倾销规定</p>

　　<p>乌拉圭第142/966法令规定，当进口的商品属于倾销性质并损害了本国工业的生产时，将对该商品实行反倾销措施。已被实行反倾销措施的商品有：阿根廷的食用油、意大利的热水器、澳大利亚的电镀板材等。</p></div>
				</div>
			</div>
			<div class="paihan">
				<ul class="nav_news mb_10">
					<li>热点推荐</li>
				</ul>
				<ul class="list_hot">
					<li>
						<div class="img_hot"><img src="../assets/img5.jpg"></div>
						<div class="font_hot">国家能源集团与国电集团今日签署《合并协议》</div>
					</li>
					<li>
						<div class="img_hot"><img src="../assets/img4.jpg"></div>
						<div class="font_hot">国家能源集团与国电集团今日签署《合并协议》</div>
					</li>
					<li>
						<div class="img_hot"><img src="../assets/img5.jpg"></div>
						<div class="font_hot">国家能源集团与国电集团今日签署《合并协议》</div>
					</li>
					<li>
						<div class="img_hot"><img src="../assets/img4.jpg"></div>
						<div class="font_hot">国家能源集团与国电集团今日签署《合并协议》</div>
					</li>
					<li>
						<div class="img_hot"><img src="../assets/img5.jpg"></div>
						<div class="font_hot">国家能源集团与国电集团今日签署《合并协议》</div>
					</li>
					<li>
						<div class="img_hot"><img src="../assets/img4.jpg"></div>
						<div class="font_hot">国家能源集团与国电集团今日签署《合并协议》</div>
					</li>
					<li>
						<div class="img_hot"><img src="../assets/img5.jpg"></div>
						<div class="font_hot">国家能源集团与国电集团今日签署《合并协议》</div>
					</li>
					<li>
						<div class="img_hot"><img src="../assets/img4.jpg"></div>
						<div class="font_hot">国家能源集团与国电集团今日签署《合并协议》</div>
					</li>
				</ul>
			</div>
		</div>




	</div>

</template>

<script>
  export default {
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
.cont_article p { text-indent:2em; font-size:16px; line-height: 30px; }
.list_hot { width:620px; height: auto; overflow: hidden; }
.list_hot li { width:620px; float: left; height: 90px; margin-bottom:20px; }
.img_hot { width:165px; height: 90px; float: left; }
.font_hot { width:190px; height: 90px; float: left; text-align: left; margin-left:20px; font-size:14px; line-height: 26px; margin-top:15px; }
.mb_10 { margin-bottom:20px; }
</style>

