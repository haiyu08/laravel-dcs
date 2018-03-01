<template>
	<div id="order">
		<div class="area_cont top_line">
			<ul class="nav_order">
				<li class="first"><a href="#"><span>我的订单</span></a></li>
				<li class="second hover"><a href="#"><span>我的账单</span></a></li>
				<li class="third"><a href="#"><span>我的文档</span></a></li>
			</ul>
		</div>
		<table class="table_order" cellspacing="0" cellpadding="0">
			<tr class="title_order">
				<td width="20%">账单号</td>
				<td width="20%">订单号</td>
				<td width="12%">币种</td>
				<td width="12%">金额</td>
				<td width="18%">状态更新时间</td>
				<td width="18%">状态</td>
			</tr>
			<tr class="one_order">
				<td>CG20180626889</td>
				<td>CG20180626889</td>
				<td>人民币</td>
				<td>5966</td>
				<td>2018-01-23 15:14:32</td>
				<td>已付款</td>
			</tr>
			<tr class="one_order bg_f5f5f5">
				<td>CG20180626889</td>
				<td>CG20180626889</td>
				<td>人民币</td>
				<td>5966</td>
				<td>2018-01-23 15:14:32</td>
				<td>已付款</td>
			</tr>
			<tr class="one_order">
				<td>CG20180626889</td>
				<td>CG20180626889</td>
				<td>人民币</td>
				<td>5966</td>
				<td>2018-01-23 15:14:32</td>
				<td>已付款</td>
			</tr>
			<tr class="one_order bg_f5f5f5">
				<td>CG20180626889</td>
				<td>CG20180626889</td>
				<td>人民币</td>
				<td>5966</td>
				<td>2018-01-23 15:14:32</td>
				<td>已付款</td>
			</tr>
			<tr class="one_order">
				<td>CG20180626889</td>
				<td>CG20180626889</td>
				<td>人民币</td>
				<td>5966</td>
				<td>2018-01-23 15:14:32</td>
				<td>已付款</td>
			</tr>
			<tr class="one_order bg_f5f5f5">
				<td>CG20180626889</td>
				<td>CG20180626889</td>
				<td>人民币</td>
				<td>5966</td>
				<td>2018-01-23 15:14:32</td>
				<td>已付款</td>
			</tr>
		</table>
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
          detdvery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
  }
</script>

<style>
.nav_order { width: 1140px; height:40px; border-bottom:1px solid #d9d9d9; margin:30px auto; } 
.top_line { width:100% ; border-top:1px solid #d9d9d9; }
.nav_order li span { position: relative; left:10px; }
.nav_order li.hover span { position: relative; left:0px; }
.nav_order li { width:180px; height: 40px; float: left; }
.nav_order li a:link,.nav_order li a:visited { width:180px; height: 39px; border:1px solid #d9d9d9;display:block; line-height: 39px; font-size: 16px;}

.nav_order li.first a:link,.nav_order li.first  a:visited { border-right:0px;background: url('../assets/bg_order.png') 20px 7px no-repeat;}
.nav_order li.second a:link,.nav_order li.second  a:visited { border-right:0px;background: url('../assets/bg_account.png') 20px 7px no-repeat;}
.nav_order li.third a:link,.nav_order li.third a:visited {  border-left:0px; background: url('../assets/bg_document.png') 20px 9px no-repeat;}

.nav_order li a:hover { width:180px; height: 39px; background: #f9c231; border:0px; display:block; font-size: 16px; line-height: 39px; border:1px solid #d9d9d9; } 
.nav_order li.hover a:link,.nav_order li.hover a:visited,.nav_order li.hover a:hover { width:180px; height: 39px; background: #f9c231; border:1px solid #d9d9d9;}
.table_order { width:1140px; height: 60px; margin: 0 auto; margin-bottom: 80px;}
.table_order td { border-bottom: 1px solid #d9d9d9; }
.title_order { width:1140px; font-size: 16px; font-weight: normal; height: 50px; line-height: 50px;border-bottom:1px solid #d9d9d9;}
tr.one_order { width: 1140px; height:50px; line-height: 50px; margin:0 auto;}
tr.bg_f5f5f5 { background: #f5f5f5; }
</style>

