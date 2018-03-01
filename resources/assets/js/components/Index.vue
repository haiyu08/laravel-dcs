<template>
	<div id="price">
		<!-- swiper -->
		<swiper :options="swiperOption">
			<swiper-slide><img src="../assets/hotpic1.jpg" width='100%'></swiper-slide>
			<swiper-slide><img src="../assets/hotpic1.jpg" width='100%'></swiper-slide>
			<swiper-slide><img src="../assets/hotpic1.jpg" width='100%'></swiper-slide>
			<swiper-slide><img src="../assets/hotpic1.jpg" width='100%'></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		</swiper>
		
		<div class="check_price">
			<!--运价查询-->
			<div class="area_trail">
				<span class="title">运价查询</span>

				  <el-form :model="form">
				    <el-form-item>
				      <el-select v-model="form.region1" placeholder="请输入起运城市">
				        <el-option label="广州" value="1"></el-option>
				        <el-option label="深圳" value="2"></el-option>
				        <el-option label="福州" value="3"></el-option>
				        <el-option label="厦门" value="4"></el-option>
				      </el-select>
				    </el-form-item>
				  </el-form>

					<el-form :model="form">
				  <el-form-item>
				    <el-select v-model="form.region2" placeholder="请选择目的地国家">
				      <el-option label="日本" value="1"></el-option>
				      <el-option label="澳洲" value="2"></el-option>
				      <el-option label="美国" value="3"></el-option>
				    </el-select>
				  </el-form-item>
				</el-form> 

				<div class="btn_trail"><a href="#">查询运价</a></div>
			</div>

			<!--轨迹查询-->
			<div class="area_trail area_trail_index">
				<span class="title">轨迹查询</span>
				<el-form ref="form" :model="form" label-width="80px">
				    <el-input class="text_number" v-model="form.name" placeholder="请输入运单号码"></el-input>
				</el-form>
				<div class="btn_trail btn_trail_index"><a href="#">查询轨迹</a></div>
			</div>

		</div>

		<div style="position:relative; top:-160px;">
			<!--查询工具-->
			<div class="area_tool">
				<div class="title_tool">
					<span class="title_cn">查询工具</span><br><span class="title_en">QUERY TOOL</span>
				</div>
				<ul class="cont_tool">
					<li class="tool_ryfj"><a href=""><span></span>燃油附加费查询</a></li>
					<li class="tool_hkgs"><a href=""><span></span>航空公司查询</a></li>
					<li class="tool_qqjc"><a href=""><span></span>全球机场查询</a></li>
					<li class="tool_pycx"><a href=""><span></span>偏远查询</a></li>
					<li class="tool_fhzn"><a href=""><span></span>发货指南</a></li>
					<li class="tool_cjwt"><a href=""><span></span>常见问题</a></li>
				</ul>
			</div>

			<!--产品介绍-->
			<div class="product">
				<div class="area_product">
					<div class="title_en_big">PRODUCT INTRODUCTION</div>
					<div class="title_cn_big">产品介绍</div>
					<div class="font_product">大常生物流隶属于深圳大常生控股集团重金打造的综合国际物流服务平台，大常生物流可为您提供在线查询国际物流价格、在线订舱、在线对单、在线支付等功能。涵盖进出口国际海运整箱、海运拼箱、国际空运、国际快递等业务范围。还针对不同行业、不同目的地、不同业务类别做出细分解决方案......</div>
					<ul class="cont_product">
						<li>
							<div class="icon_product"></div>
							<div class="font_oneproduct"><span>国际空运</span><br>大常生海空运服务覆盖全球1062个国际机场、177个国家，整合联盟航空公司65家。让您的货物通达全球!</div>
						</li>
						<li>
							<div class="icon_product bg_ping"></div>
							<div class="font_oneproduct"><span>海运拼箱</span><br>大常生海运拼箱直接拼全球60多个港口，覆盖全球200多个国家。目的港收费公正、透明、船期稳定!</div>
						</li>
						<li>
							<div class="icon_product bg_sea"></div>
							<div class="font_oneproduct"><span>海运双清</span><br>大常生海运双清关服务开创DDU/DDP服务新纪元。解决中小企业清关派送难题。</div>
						</li>
					</ul>
				</div>
			</div>


			<!--优势介绍-->
			<div class="advantage">			
				<div class="title_en_big">ADVANTAGE INTRODUCTION</div>
				<div class="title_cn_big">优势介绍</div>
				<div class="advantage_top">
					<div class="image_advantage">
						<img src="../assets/advantage_left.jpg">
					</div>
					<div class="font_advantage">
						<div class="title_tool height_80">
							<span class="title_cn">空派优势</span><br><span class="title_en">AIR DELIVERY ADVANTAGE</span>
							<span class="bg_line"></span>
						</div>
						<div class="cont_air">空派指货件从大陆或香港出发，到达目的地机场后，由合作代理处理相关清关事宜，合作商从机场提取货件，再由当地联邦或UPS提取货件并安排转运和派送。</div>
						<div class="btn_advantage"><a href="#">查看更多</a></div>
					</div>
				</div>
				<div class="bg_dot"></div>
				<div class="advantage_top left_40">
					<div class="font_advantage">
						<div class="title_tool height_80">
							<span class="title_cn">海派优势</span><br><span class="title_en">MARITIME TRANSPORT ADVANTAGE</span>
							<span class="bg_line"></span>
						</div>
						<div class="cont_air">空派指货件从大陆或香港出发，到达目的地机场后，由合作代理处理相关清关事宜，合作商从机场提取货件，再由当地联邦或UPS提取货件并安排转运和派送。</div>
						<div class="btn_advantage"><a href="#">查看更多</a></div>
					</div>
					<div class="image_advantage">
						<img src="../assets/advantage_right.jpg">
					</div>
				</div>
			</div>
			
			<!--公司介绍-->
			<div class="area_company">
				<div class="left_company">
				</div>
				<div class="right_company">
					<div class="font_advantage ps_company">
						<div class="title_tool height_80">
							<span class="title_cn">公司介绍</span><br><span class="title_en">COMPANY INTRODUCTION</span>
							<span class="bg_line"></span>  
						</div>
						<div class="cont_air">大常生物流还是国家物流电子商务试点单位、O2O示范企业。大常生物流以互联网思维解决传统物流行业的信息不对称与服务无标准的难点。大常生物流组建专业的电商客服队伍，为您提供透明、公正、方便、快捷的O2O服务。</div>
						<div class="btn_advantage mrtop_30"><a href="#">查看更多</a></div>
					</div>
				</div>
			</div>

			<!--尾部-->
			<div class="btm_news">
				<div class="area_news">
					<div class="left_news">
						<div class="title_tool height_80">
							<span class="title_cn">行业热点</span><br><span class="title_en">INDUSTRY HOT SPOT</span>
						</div>
						<div class="list_industry">
							<div class="img_industry">
								<a href="#"><img src="../assets/news.jpg" width="305" height="215"></a><br>美国冬季风暴入侵，航班取消，港口关闭
							</div>
							<ul class="font_industry">
								<li><a href="#">美国冬季风暴入侵，航班取消，港口关闭，美国东海岸...</a></li>
								<li><a href="#">美国佛罗里达州一列运输危险化学物品的火车脱轨</a></li>
								<li><a href="#">货代行业的新秀，物流巴士运价平台初体验</a></li>
								<li><a href="#">一听到“海关查验”就紧张？淡定！</a></li>
								<li><a href="#">但斌再唱多：茅台存活一千年概率大 需求端非常大</a></li>
								<li><a href="#">联邦快递发布2018年春节假期服务安排</a></li>
							</ul>
						</div>
					</div>
					<div class="right_news">
						<div class="title_tool height_80">
							<span class="title_cn">最新资讯</span><br><span class="title_en">LATEST INFORMATION</span>
						</div>
						<div class="one_zixun">
							<div class="fl"><a href="#"><img src="../assets/news1.jpg"></a></div>
							<div class="font_zixun"><a href="#">1月人民币对美元创24年来最大单月涨幅，中国出口商头疼</a></div>
						</div>
						<div class="one_zixun">
							<div class="fl"><a href="#"><img src="../assets/news1.jpg"></a></div>
							<div class="font_zixun"><a href="#">1月人民币对美元创24年来最大单月涨幅，中国出口商头疼</a></div>
						</div>
					</div>
				</div>
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
        },
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style>
.hotpic { width: 100%; height: 740px; margin: 0 auto;}
.main_hotpic { width: 1140px; height: 740px; }
.area_tool { width:1140px; height: 235px; margin:0 auto; overflow: hidden; } 
.title_tool { width:280px; height: 50px;  margin-top:50px; text-align: left; }
.title_cn { font-size: 22px; color:#333333; font-weight: normal; }
.title_en { font-size: 13px; color:#cccccc; }
.cont_tool { width: 1140px; height: 45px; margin-top:40px; }
ul.cont_tool li { width:175px; height: 47px; font-size: 16px; color:#999999; line-height: 43px; margin-right:15px;text-align: left;}
ul.cont_tool li a:link,ul.cont_tool li a:visited { width:171px; height: 43px; display: block; color:#999999; text-decoration: none; border:2px solid #d9d9d9; }
ul.cont_tool li a:hover { width:171px; height: 43px; display: block; cursor:pointer; background:#f9c231; color:#fff; border:2px solid #f9c231;}
ul.cont_tool li span { margin-right:11px; }

.tool_ryfj span{ width:21px; height:22px; display:block; float: left; background:url('../assets/icon_tool.png') 0 0 no-repeat; margin-left:15px; margin-top:8px; }
ul.cont_tool li.tool_ryfj a:hover  span { background:url('../assets/icon_tool.png') 0 -22px no-repeat;  }

.tool_hkgs span{ width:21px; height:22px; display:block; float: left; background:url('../assets/icon_tool.png') -25px 0 no-repeat; margin-left:15px; margin-top:10px; }
ul.cont_tool li.tool_hkgs a:hover span { background:url('../assets/icon_tool.png') -25px -22px no-repeat;  }

.tool_qqjc span{ width:21px; height:22px; display:block; float: left; background:url('../assets/icon_tool.png') -50px 0 no-repeat; margin-left:15px; margin-top:10px; }
ul.cont_tool li.tool_qqjc a:hover span { background:url('../assets/icon_tool.png') -50px -22px no-repeat;  }

.tool_pycx span{ width:21px; height:22px; display:block; float: left; background:url('../assets/icon_tool.png') -75px 0 no-repeat; margin-left:15px; margin-top:10px; }
ul.cont_tool li.tool_pycx a:hover span { background:url('../assets/icon_tool.png') -75px -22px no-repeat;  }

.tool_fhzn span{ width:21px; height:22px; display:block; float: left; background:url('../assets/icon_tool.png') -100px 0 no-repeat; margin-left:15px; margin-top:10px; }
ul.cont_tool li.tool_fhzn a:hover span { background:url('../assets/icon_tool.png') -100px -22px no-repeat;  }

.tool_cjwt span{ width:21px; height:22px; display:block; float: left; background:url('../assets/icon_tool.png') -125px 0 no-repeat; margin-left:15px; margin-top:10px; }
ul.cont_tool li.tool_cjwt a:hover span { background:url('../assets/icon_tool.png') -125px -22px no-repeat;  } 

.product { width:100%; height: 395px; background: #eeeeee; padding-top:55px; }
.area_product { width:1140px; height: auto; overflow:hidden; margin: 0 auto; }
.title_en_big { font-size: 24px; color:#bdbdbd; }
.title_cn_big { width:243px; height: 40px; font-size: 26px; color:#333333; margin: 0 auto; margin-bottom:10px; background: url('../assets/bg_title_cn.png') 0 20px no-repeat; position: relative; top:5px; }
.font_product { width:960px; height: auto; line-height: 26px; margin: 20px auto; text-indent:2em; }
.cont_product { width:1180px; height: 143px; margin: 0 auto; margin-top:50px; } 
ul.cont_product li { width:365px; height: 143px; background: #fff; border:1px solid #d9d9d9; margin-right:23px; }
.icon_product { width:58px; height: 55px; float:left; background: url('../assets/icon_product.png') 0 0 no-repeat; margin-left:25px; margin-top:40px; }
.bg_ping { background: url('../assets/icon_product.png') -60px 0 no-repeat; }
.bg_sea { background: url('../assets/icon_product.png') -120px 0 no-repeat; }
.font_oneproduct { width:225px; height: 94px; float:left; text-align: left; font-size: 14px; color:#4d4d4d; line-height: 24px; margin-left:30px; margin-top:18px;}
.font_oneproduct span { font-size: 16px; font-weight: bold; margin-bottom:-15px; display: block; }
.advantage { width:1140px; height: 900px; margin: 0 auto; padding-top:60px; }
.advantage_top{ width:1140px; height: 320px;}
.image_advantage { width:540px; height: 320px; float:left; margin-right:30px; margin-left:20px; margin-top:20px; }
.font_advantage{ width:510px; height: 320px; float:left; }
.bg_line { width:100px; height: 1px; background: #cecece; display: block; position: relative; top:20px; }
.cont_air { width:510px; height: 80px; font-size: 14px; color:#666666; margin-top:25px; line-height: 26px; text-align:left; }
.btn_advantage { width:210px; height: 40px; background: #f9c231; text-align: center; color:#333333; font-size: 14px; line-height: 40px; }
.btn_advantage a:link,.btn_advantage a:visited { width:210px; height: 40px; display:block; color:#535353; }
.btn_advantage a:hover { width:210px; height: 40px; display:block; cursor:pointer; color:#535353; text-decoration: none; }
.height_80 { height:80px; }
.bg_dot { width:510px; height: 1px; margin: 20px auto; background: url('../assets/bg_dot.png') 0 0 repeat-x; margin-top:50px; }
.left_40 { margin-left:40px; }
.area_company { width:100%; height: 380px; background: #eeeeee; }
.left_company { width:50%; height: 380px; float:left; background: url('../assets/bg_company.jpg') 0 0 no-repeat; }
.right_company { width:50%; height: 380px; float: right; }
.ps_company { position: relative; left:60px; }
.mrtop_30 { margin-top:30px; }
.btm_news { width:100%; height: 425px; }
.area_news { width:1140px; height: 425px; margin: 0 auto;}
.left_news { width:690px; height: 340px; float:left; }
.list_industry { width:690px; height: 250px; }
.img_industry { width:305px; height: 250px; float:left; line-height: 26px; }
ul.font_industry { width:350px; height: 220px; float:left; margin-left:26px; }
ul.font_industry li { line-height: 30px; }
ul.font_industry li a:link,ul.font_industry li a:visited { color:#333333; }
ul.font_industry li a:hover { color:#000; text-decoration:underline;  }
.right_news { width:410px; height: 340px; float:right; }
.one_zixun { width:390px; height: 100px; text-align: left; float:left; margin-bottom:30px;}
.one_zixun a:link,.one_zixun a:visited { color:#535353; }
.one_zixun a:hover { color:#535353; text-decoration: underline; }
.font_zixun { padding-left:15px; float: left; width:220px; line-height: 24px; padding-top:20px; }
.swiper-button-next { right:20%; width:40px; height: 75px; background-size:40px 75px; opacity:0.6;}
.swiper-button-prev { left:20%; width:40px; height: 75px; background-size:40px 75px; opacity:0.6;}



.hotpic_trail { width:100%; height: 184px; padding-top:66px;  background:url('../assets/bg_price.jpg') 0 0 no-repeat; background-size:100%; overflow: hidden; }
.area_trail { width:550px; height: 88px; float:left; text-align: left; background: url('../assets/bg_price_index.png') 0 0 no-repeat; margin-top:20px; margin-left:40px; }
.area_trail .title { font-size: 16px; font-weight:normal; color:#333333; position: relative; top:9px; left:17px; float: left;}
.text_city input{ width:250px; height: 36px;font-size: 16px; color:#999999; padding-left:10px; position: relative; top:23px; left:55px; border:2px; background: #fff;}
.area_trail .font_text {  position: relative; top:52px; left:-10px;}
.btn_trail { width:115px; height: 51px; display: block; background: #f9c231; text-align: center; font-size: 16px; position: relative; left:10px; top:37px; overflow:hidden;} 
.btn_trail a:link,.btn_trail a:visited { width:115px; height: 51px; display: block; line-height: 51px; text-decoration: none;color:#333333;}
.btn_trail a:hover { cursor:pointer; text-decoration: none;}
.el-input__inner:hover,.el-input__inner:active,.el-input__inner:focus { border:0px; }
.area_cont { width:1140px; height: auto; margin: 0px auto; padding:50px 0px; }
.tab_trail { border-collapse:collapse; }
.tab_trail tr { height: 50px; text-align: left; }
.tab_trail td { width:25%; border:1px solid #d9d9d9; height: 50px; height: 50px; padding-left:20px; font-size: 16px; color:#666666; }
.tab_trail td span { color:#e7a800; font-weight: bold; }
.tab_trail img { position:relative; top:6px; }
.text_city .el-input__inner { color:#e7a800; font-size: 16px;}
.area_quan { width:1010px; height: 100px; margin: 40px auto; margin-bottom:0px; position: relative; top:30px; border-top:1px solid #d9d9d9; }
.area_quan li { width: 80px; height: 50px; float: left; margin-right:152px; background: url('../assets/bg_quan.png') 10px 0 no-repeat; position: relative; top:-25px; left:6px; font-size:16px; text-align: center;  }

.area_quan li.active { background: url('../assets/bg_quan.png') 10px -50px no-repeat; color:#e7a800; }
.area_quan li.noactive { background: url('../assets/bg_quan.png') 10px -100px no-repeat; }
li.last_quan { margin-right:0px; }
.area_quan li span { position: relative; top:40px; }
.area_info { width:1140px; height:auto; margin: 15px auto; position: relative; left:0px; }
.one_info { width:180px; height: 96px; float:left; margin-bottom:10px; }
.one_info .title { width:180px; height:40px; line-height: 40px; background: #999999; text-align: center; color:#fff; font-size: 16px;  }
.one_info .cont { width:168px; height:50px; border:1px solid #d9d9d9; border-top:0px; padding-left:10px; padding-top:6px; line-height: 22px; color:#666666; text-align: left; }
.area_info ul { width:180px; height: auto; float: left; margin: 0 24px; }
.one_info .active { background: #e7a800; color:#fff; }
/*
.el-input__prefix, .el-input__suffix { height: 36px; }
*/
span.el-input__suffix-inner { position: relative; top:-10px; display: none; }

#price .el-form-item { width:260px; position: relative; left:-15px; top:42px;  }

#price .el-scrollbar { width:290px; position: relative; left:50px; top:80px; } 
/*#price .el-input--suffix .el-input__inner { float:left; border:1px; font-size: 16px; }*/
#price .el-input--suffix .el-input__inner { border:0px; font-size: 16px; width:160px; margin-right:20px; padding-right: 0px; }
#price .el-form { width:180px; float: left; margin-right:0px; padding-right: 0px;}
.th_price { width:1138px; height: 68px; border:1px solid #d9d9d9; font-size: 16px; text-align: center;}
.th_price span { font-size: 13px; color:#e7a800; }
.one_price { font-size: 14px; width:1140px; height: 96px; text-align: center;}
.one_price tr { height: 96px; }
.one_price tr.bg_f6f6f6 { height: 96px; background: #f6f6f6;}
.one_price td { line-height: 26px; padding:0 20px;}
.font_fy { font-size: 16px; color:#e7a800;}
.one_price .btn_price a:link,.one_price .btn_price a:visited { width:90px; height: 35px; background:#f9c231; color:#333333; display: block; text-align: center; line-height: 35px; text-decoration: none; margin: 0 auto; }
.one_price img { position: relative; top:5px; }
.type_price { text-align: left; position: relative; left:20px; }
.el-select-dropdown { z-index: 9999; }
.check_price { width:1140px; height:180px; background:url('../assets/bg_chaxun_index.png') 0 0 no-repeat;margin:0 auto; position:relative; top:-230px; z-index: 99; border-radius: 4px; overflow: display; }

.area_trail_index { width:470px; height: 88px; float:left; text-align: left; background: url('../assets/bg_trail_index.png') 0 0 no-repeat; margin-top:20px; margin-left:40px; }
.text_number input{ width:200px; height: 36px;font-size: 16px; color:#999999; padding-left:10px; position: relative; top:45px; left:-10px; border:2px; background: #fff;}
.btn_trail_index { width:115px; height: 51px; display: block; background: #f9c231; text-align: center; font-size: 16px; position: relative; left:110px; top:37px; overflow:hidden;} 


</style>







