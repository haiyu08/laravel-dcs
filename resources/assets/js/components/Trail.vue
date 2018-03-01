<template>
	<div id="trail">
		<div class="hotpic_trail">
			<div class="area_trail">
				<span class="title">轨迹查询</span>
				<el-form ref="form" :model="form" label-width="80px">
				    <el-input class="text_number" v-model="form.name" placeholder="请输入运单号码"></el-input>
				</el-form>
				<div class="btn_trail"><a href="#">查询轨迹</a></div>
			</div>
		</div>

		<div class="area_cont">
			<table class="tab_trail" width="100%" cellspacing="0" cellpadding="0">
				<tr>
					<td>运单号：<span>9082149204</span></td>
					<td>转单号：<span>9082149204</span></td>
					<td>出发地：深圳</td>
					<td>目的地：<span>日本</span>&nbsp;&nbsp;<img src="../assets/flag_japan.jpg"></td>
				</tr>
				<tr>
					<td>件数：26件</td>
					<td>状态：<span>已送达</span></td>
				</tr>
			</table>

		<ul class="area_quan">
			<li><span>准备离港</span></li>
			<li><span>货物在途</span></li>
			<li><span>抵达目的港</span></li>
			<li class="active"><span>配送中</span></li>
			<li class="last_quan noactive"><span>配送完成</span></li>
		</ul>
		<div class="area_info">
			<ul>
				<li class="one_info">
					<div class="title">发货信息已录入</div>
					<div class="cont">2018-02-04 16:58 <br>深圳</div>
				</li>
				<li class="one_info">
					<div class="title">离开操作中心</div>
					<div class="cont">2018-02-04 16:58 <br>深圳</div>
				</li>
			</ul>
			<ul>
				<li class="one_info">
					<div class="title">航班预配</div>
					<div class="cont">2018-02-04 16:58 <br>深圳</div>
				</li>
				<li class="one_info">
					<div class="title">香港国际机场出发</div>
					<div class="cont">2018-02-04 16:58 <br>深圳</div>
				</li>
			</ul>
			<ul>
				<li class="one_info">
					<div class="title">抵达东京羽田国际机场</div>
					<div class="cont">2018-02-04 16:58 <br>深圳</div>
				</li>
				<li class="one_info">
					<div class="title">清关中</div>
					<div class="cont">2018-02-04 16:58 <br>深圳</div>
				</li>
				<li class="one_info">
					<div class="title">关税检查</div>
					<div class="cont">2018-02-04 16:58 <br>深圳</div>
				</li>
				<li class="one_info">
					<div class="title">进口清关完成</div>
					<div class="cont">2018-02-04 16:58 <br>深圳</div>
				</li>
			</ul>
			<ul>
				<li class="one_info">
					<div class="title active">集合</div>
					<div class="cont">2018-02-04 16:58 <br>深圳</div>
				</li>
				<li class="one_info">
					<div class="title active">输送中</div>
					<div class="cont">2018-02-04 16:58 <br>深圳</div>
				</li>
				<li class="one_info">
					<div class="title active">配达中</div>
					<div class="cont">2018-02-04 16:58 <br>深圳</div>
				</li>
			</ul>
			<ul>
<!-- 				<li class="one_info">
	<div class="title">发货信息已录入</div>
	<div class="cont">2018-02-04 16:58 <br>深圳</div>
</li>
<li class="one_info">
	<div class="title">离开操作中心</div>
	<div class="cont">2018-02-04 16:58 <br>深圳</div>
</li> -->
			</ul>
			<div class="clear"></div>
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
.hotpic_trail { width:100%; height: 184px; padding-top:66px;  background:url('../assets/bg_trail.jpg') 0 0 no-repeat; background-size:100%; overflow: hidden; }
.area_trail { width:740px; height: 88px; margin:0px auto; text-align: left; background: url('../assets/bg_trail.png') 0 0 no-repeat; }
.area_trail .title { font-size: 16px; font-weight:normal; color:#333333; position: relative; top:9px; left:17px; }
.text_number input{ width:560px; height: 36px;font-size: 16px; color:#999999; padding-left:10px; position: relative; top:23px; left:55px; border:2px; background: #fff;}
.area_trail .font_text {  position: relative; top:52px; left:-10px;}
.btn_trail { width:115px; height: 51px; display: block; background: #f9c231; text-align: center; font-size: 16px; float:right; position: relative; left:5px; top:-20px;}
.btn_trail a:link,.btn_trail a:visited { width:115px; height: 51px; display: block; line-height: 51px; text-decoration: none;color:#333333;}
.btn_trail a:hover { cursor:pointer; text-decoration: none;}


.el-input__inner:hover,.el-input__inner:active,.el-input__inner:focus { border:0px; }
.area_cont { width:1140px; height: auto; margin: 0px auto; padding:50px 0px; }
.tab_trail { border-collapse:collapse; }
.tab_trail tr { height: 50px; text-align: left; }
.tab_trail td { width:25%; border:1px solid #d9d9d9; height: 50px; height: 50px; padding-left:20px; font-size: 16px; color:#666666; }
.tab_trail td span { color:#e7a800; font-weight: bold; }
.tab_trail img { position:relative; top:6px; }
.text_number .el-input__inner { color:#e7a800; font-size: 16px;}
.area_quan { width:1010px; height: 100px; margin: 40px auto; margin-bottom:0px; position: relative; top:30px; border-top:1px solid #d9d9d9; }
.area_quan li { width: 80px; height: 50px; float: left; margin-right:152px; background: url('../assets/bg_quan.png') 10px 0 no-repeat; position: relative; top:-25px; left:6px; font-size:16px; text-align: center;  }
.area_quan li.active { background: url('../assets/bg_quan.png') 10px -50px no-repeat; color:#e7a800; }
.area_quan li.noactive { background: url('../assets/bg_quan.png') 10px -100px no-repeat; }
li.last_quan { margin-right:0px; }
.area_quan li span { position: relative; top:60px; }
.area_info { width:1140px; height:auto; margin: 15px auto; position: relative; left:0px; }
.one_info { width:180px; height: 96px; float:left; margin-bottom:10px; }
.one_info .title { width:180px; height:40px; line-height: 40px; background: #999999; text-align: center; color:#fff; font-size: 16px;  }
.one_info .cont { width:168px; height:50px; border:1px solid #d9d9d9; border-top:0px; padding-left:10px; padding-top:6px; line-height: 22px; color:#666666; text-align: left; }
.area_info ul { width:180px; height: auto; float: left; margin: 0 24px; }
.one_info .active { background: #e7a800; color:#fff; }
</style>

