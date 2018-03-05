<template>
	<div id="price">
		<div class="hotpic_trail">
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
		</div>

		<div class="area_cont">
			<table class="th_price">
				<tr>
					<td width="23%">方案名称</td>
					<td width="15%">运输方式</td>
					<td width="15%">参考失效<br><span>(以到仓时间起算)</span></td>
					<td width="13%">预算费用<br><span>(含油)</span></td>
					<td width="22%">费用详情</td>
					<td width="15%">操作</td>
				</tr>
			</table>
			<table class="one_price" cellspacing="0" cellpadding="0">
				<tr>
					<td width="23%">美国西岸(邮编7.8.9开头)电池包税专线-25</td>
					<td width="15%" class="type_price"><img src="../assets/bg_feiji.png">&nbsp;&nbsp;空派专线<br><img src="../assets/bg_position.png">&nbsp;&nbsp;深圳</td>
					<td width="15%">9-12工作日<br>准点率 82%</td>
					<td width="13%"><span class="font_fy">CN￥ 121.75</span><br>原价：267.75元</td>
					<td width="22%">计费重：0.50Kg（除7000）<br>单价：￥ 243.50元/Kg</td>
					<td width="15%" class="btn_price"><a href="">客服下单</a></td>
				</tr>
				<tr class="bg_f6f6f6">
					<td width="23%">美国西岸(邮编7.8.9开头)电池包税专线-25</td>
					<td width="15%" class="type_price"><img src="../assets/bg_feiji.png">&nbsp;&nbsp;空派专线<br><img src="../assets/bg_position.png">&nbsp;&nbsp;深圳</td>
					<td width="15%">9-12工作日<br>准点率 82%</td>
					<td width="13%"><span class="font_fy">CN￥ 121.75</span><br>原价：267.75元</td>
					<td width="22%">计费重：0.50Kg（除7000）<br>单价：￥ 243.50元/Kg</td>
					<td width="15%" class="btn_price"><a href="">客服下单</a></td>
				</tr>
				<tr>
					<td width="23%">美国西岸(邮编7.8.9开头)电池包税专线-25</td>
					<td width="15%" class="type_price"><img src="../assets/bg_feiji.png">&nbsp;&nbsp;空派专线<br><img src="../assets/bg_position.png">&nbsp;&nbsp;深圳</td>
					<td width="15%">9-12工作日<br>准点率 82%</td>
					<td width="13%"><span class="font_fy">CN￥ 121.75</span><br>原价：267.75元</td>
					<td width="22%">计费重：0.50Kg（除7000）<br>单价：￥ 243.50元/Kg</td>
					<td width="15%" class="btn_price"><a href="">客服下单</a></td>
				</tr>
				<tr class="bg_f6f6f6">
					<td width="23%">美国西岸(邮编7.8.9开头)电池包税专线-25</td>
					<td width="15%" class="type_price"><img src="../assets/bg_feiji.png">&nbsp;&nbsp;空派专线<br><img src="../assets/bg_position.png">&nbsp;&nbsp;深圳</td>
					<td width="15%">9-12工作日<br>准点率 82%</td>
					<td width="13%"><span class="font_fy">CN￥ 121.75</span><br>原价：267.75元</td>
					<td width="22%">计费重：0.50Kg（除7000）<br>单价：￥ 243.50元/Kg</td>
					<td width="15%" class="btn_price"><a href="">客服下单</a></td>
				</tr>
				<tr>
					<td width="23%">美国西岸(邮编7.8.9开头)电池包税专线-25</td>
					<td width="15%" class="type_price"><img src="../assets/bg_feiji.png">&nbsp;&nbsp;空派专线<br><img src="../assets/bg_position.png">&nbsp;&nbsp;深圳</td>
					<td width="15%">9-12工作日<br>准点率 82%</td>
					<td width="13%"><span class="font_fy">CN￥ 121.75</span><br>原价：267.75元</td>
					<td width="22%">计费重：0.50Kg（除7000）<br>单价：￥ 243.50元/Kg</td>
					<td width="15%" class="btn_price"><a href="">客服下单</a></td>
				</tr>
				<tr class="bg_f6f6f6">
					<td width="23%">美国西岸(邮编7.8.9开头)电池包税专线-25</td>
					<td width="15%" class="type_price"><img src="../assets/bg_feiji.png">&nbsp;&nbsp;空派专线<br><img src="../assets/bg_position.png">&nbsp;&nbsp;深圳</td>
					<td width="15%">9-12工作日<br>准点率 82%</td>
					<td width="13%"><span class="font_fy">CN￥ 121.75</span><br>原价：267.75元</td>
					<td width="22%">计费重：0.50Kg（除7000）<br>单价：￥ 243.50元/Kg</td>
					<td width="15%" class="btn_price"><a href="">客服下单</a></td>
				</tr>
			</table>
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
.hotpic_trail { width:100%; height: 184px; padding-top:66px;  background:url('../assets/bg_price.jpg') 0 0 no-repeat; background-size:100%; overflow: hidden; }
.area_trail { width:740px; height: 88px; margin:0px auto; text-align: left; background: url('../assets/bg_price.png') 0 0 no-repeat; }
.area_trail .title { font-size: 16px; font-weight:normal; color:#333333; position: relative; top:9px; left:17px; float: left;}
.text_city input{ width:250px; height: 36px;font-size: 16px; color:#999999; padding-left:10px; position: relative; top:23px; left:55px; border:2px; background: #fff;}
.area_trail .font_text {  position: relative; top:52px; left:-10px;}
.btn_trail { width:115px; height: 51px; display: block; background: #f9c231; text-align: center; font-size: 16px; float:right; position: relative; left:5px; top:37px;}
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
.el-input__prefix, .el-input__suffix { height: 36px; }
span.el-input__suffix-inner { position: relative; top:-10px; display: none; }

#price .el-form-item { width:260px; position: relative; left:-15px; top:42px;  }

#price .el-scrollbar { width:290px; position: relative; left:50px; top:80px; } 
/*#price .el-input--suffix .el-input__inner { float:left; border:1px; font-size: 16px; }*/
#price .el-input--suffix .el-input__inner { border:0px; font-size: 16px; }
#price .el-form { width:260px; float: left; margin-right:15px; }
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
</style>

