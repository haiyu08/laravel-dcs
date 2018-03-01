<template>
	<div id='area_bottom'>
		<div class="btm_info">
			<div class="btm_logo"><img src="../assets/logo_btm.jpg"></div>
			<div class="list_nav">
				<ul>
					<li class="span_nav"><a href="#">关于我们</a></li>
					<li><a href="#">公司简介</a></li>
					<li><a href="#">加入我们</a></li>
					<li><a href="#">联系方式</a></li>
				</ul>
				<ul>
					<li class="span_nav"><a href="#">价格查询</a></li>
					<li><a href="#">运价查询</a></li>
					<li><a href="#">船期查询</a></li>
					<li><a href="#">联系方式</a></li>
				</ul>
				<ul>
					<li class="span_nav"><a href="#">物流资讯</a></li>
					<li><a href="#">行业热点</a></li>
					<li><a href="#">最新资讯</a></li>
				</ul>
				<ul>
					<li class="span_nav"><a href="#">集团站点</a></li>
					<li><a href="#">深圳分公司</a></li>
					<li><a href="#">厦门分公司</a></li>
				</ul>
			</div>
			<div class="btm_wechat"><div>扫描关注公众号<br><img src="../assets/erweima.png"></div></div>
			<div class="btm_phone"><div>客服热线<br><span>400 688 4321</span>合作邮箱<br>hr@dachangsheng.com</div></div>
		</div>
		<div class="btm_copyright">Copyright © 2018 Sofreight.com. All Rights Reserved 粤ICP备08023234号-4</div>
	</div>
</template>

<script>

</script>	

<style>
#area_bottom { width:100%; height: 253px;  background: #535353; }
.btm_info { width:1140px; height: 167px;margin: 0 auto; padding-top:40px; overflow: hidden; }
.btm_copyright { width:100%; height: 45px; font-size: 12px; margin: 0 auto; background: #343434; text-align: center; color:#999999; line-height: 45px;}
.btm_logo { float: left; }
.list_nav { width:480px; height: auto; float: left; margin-left:50px; position: relative; top:-5px;}
.list_nav ul { width:83px; height: 140px; float: left; margin-left:30px;}
.list_nav ul li { width:83px; float: left; font-size: 13px; line-height: 12px; height: 12px; margin-bottom:24px; text-align: left;}
.list_nav ul li.span_nav { border-right:1px solid #666666; }
.list_nav ul li.span_nav a:link,.list_nav ul li.span_nav a:visited { color:#b3b3b3; }
.list_nav li a:link,.list_nav li a:visited { color:#e6e6e6; }
.list_nav li a:hover { color:#e6e6e6; text-decoration: underline; }
.btm_phone { width:165px; height: 93px; padding-left:30px; float: right; border-left:1px solid #666666; color:#b3b3b3; text-align: left; line-height:24px; position: relative; top:15px; margin-right:20px;}
.btm_wechat { width:100px; height: 93px; padding-left:30px; float: right; border-left:1px solid #666666; color:#b3b3b3; text-align: center; line-height:26px; position: relative; top:15px; font-size: 13px;}
.btm_phone span { color:#e6e6e6; font-size:20px; font-weight: bold; margin-bottom:20px; display: block; }
.btm_phone div { position: relative; top:-10px; }
.btm_wechat div { position: relative; top:-10px; }


</style>