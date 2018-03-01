<template>
	<div id='header_top'>
		<div class="bg_header">
			<ul class="cont_header">
				<li><img src="../assets/weibo.png"></li>
				<li><img src="../assets/wechat.png"></li>

        <li class="width_80"><el-button type="text" @click="dialogTableVisible = true">免费注册</el-button></li>        
				<li class="width_80"><el-button type="text" @click="dialogFormVisible = true">请登录</el-button></li>

        <el-dialog title="注册" :visible.sync="dialogTableVisible" class="dia_register">
          <el-form :model="form">
              <el-input v-model="form.name1" placeholder="请输入手机号码" auto-complete="off"></el-input>
              <div class="el-input__prefix"><img src="../assets/bg_user.png"></div>
              <el-input v-model="form.name2" placeholder="请输入登录密码" auto-complete="off" type="password"></el-input>
              <div class="el-input__prefix"><img src="../assets/bg_passwd.png"></div>

              <el-input v-model="form.name3" placeholder="请输入验证码" auto-complete="off" type="text" class='yzm'></el-input>
              <el-button type="primary" class="send_yzm">短信验证码</el-button>

              <el-input v-model="form.name4" class="alert_text position_text" auto-complete="off" readonly></el-input>
              <div class="el-input__prefix font_alert position_icon"><img src="../assets/bg_alert.png"><span>请输入正确手机号</span></div>
          </el-form>
          <div slot="footer" class="dialog-footer position_footer">
            <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
            <div class="mrtop_5"><input type="checkbox"><span class="f12" checked="checked">我已阅读并同意相关服务条款和隐私政策</span></div>
            <div class="el-input__forget mrtop_4">已有帐号？<a href="#">请登录</a></div>
          </div>
        </el-dialog>

        <el-dialog title="登录" :visible.sync="dialogFormVisible">
          <el-form :model="form">
              <el-input v-model="form.name1" placeholder="请输入手机号码" auto-complete="off"></el-input>
              <div class="el-input__prefix"><img src="../assets/bg_user.png"></div>
              <el-input v-model="form.name2" placeholder="请输入登录密码" auto-complete="off" type="password"></el-input>
              <div class="el-input__prefix"><img src="../assets/bg_passwd.png"></div>
              <el-input v-model="form.name3" class="alert_text" auto-complete="off" readonly></el-input>
              <div class="el-input__prefix font_alert"><img src="../assets/bg_alert.png"><span>请输入正确手机号</span></div>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            <div class="el-input__forget">还没有帐号？<a href="#">请注册</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">忘记密码？</a></span></div>
          </div>
        </el-dialog>

			</ul>
		</div>
		
		<div class="main_nav">
			<div class="top_nav">
				<div class="right_topnav">
					<div class="phone"><img src="../assets/phone.png"></div>
					<div class="fontline">客服<br>热线</div>
					<div class="hotline fl f26 fb">400 688 4321</div>
				</div>
			</div>
			<div class="btm_nav">
				<div class="left_btmnav">
					<div class="left_topnav"><img src="../assets/logo.png"></div>
				</div>
				<div class="right_btmnav">
				</div>
				<ul class="area_nav">
					<li><a href="#">首 页</a></li>
					<li><a href="#">运价查询</a></li>
					<li><a href="#">轨迹查询</a></li>
					<li><a href="#">物流工具</a></li>
					<li><a href="#">物流资讯</a></li>
					<li><a href="#">大常生控股</a></li>
				</ul>
			</div>

		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '120px'
      };
    }
  };
</script>

<style>
.bg_header { width:100%; height:50px; background: #f3f3f3; overflow: hidden;}
.cont_header { width:1140px; height: 50px; margin:0 auto; }
ul li { list-style: none; float: left; }
ul.cont_header li { width:60px; border-right: 1px solid #dce0e5; line-height: 50px; float:right; height: 50px; } 
ul.cont_header li.width_80 { width:80px; }
.main_nav { width: 100%; height: 125px; overflow: hidden; }
.left_topnav { float: right; padding-top:0px; position: relative; right:320px; top:-25px;}
.top_nav { width:1140px; height: 48px; padding-top: 22px; margin: 0 auto; overflow:hidden; z-index: 2;}
.right_topnav { width:256px; float: right; }
.phone { float:left; margin-right: 10px; }
.fontline { font-size: 12px; float:left; position: relative; top:-2px; margin-right:12px; }
.hotline { border-left:1px solid #b4b8bb; padding-left:12px; height: 21px; line-height: 21px; position: relative; top:3px; }
.btm_nav { height: 55px; width:100%; z-index: 1;}
.left_btmnav { float:left; height: 55px; width:50%; background: url('../assets/bg_nav.png') right 0 no-repeat; z-index: 1; }
.right_btmnav { float:left; height: 55px;width:50%; background: #f9c231; z-index: 2;}
.area_nav { width:840px; margin:0 auto; position: relative; top:-55px; left:210px;}
.area_nav li { width:130px; float: left; height: 55px; line-height: 55px; text-align:center; }
.area_nav li a:link,.area_nav li a:visited { color:#333333; font-size: 16px; text-decoration: none; }
.el-dialog { width:450px; height: 470px; }
.el-dialog__header { height: 40px; background: #ebebeb; padding: 0px; line-height: 40px; font-size: 14px; color:#333333; } 
.el-dialog__headerbtn { top:12px; right:12px; }
.el-button--text { color:#333333; }
.el-button--text:hover, .el-button--text:focus, .el-button--text:active { color:#333333; background-color: none; }
#header_top .el-input__inner { width:250px; height: 36px; margin-bottom:20px; padding-left: 35px;border:1px solid #d9d9d9;}
#header_top .yzm .el-input__inner { width:250px; height: 36px; margin-bottom:20px; padding-left: 10px;border:1px solid #d9d9d9;}
.yzm .el-input__inner { width:250px; height: 36px; float: left; margin-left:100px; text-align:left; padding-left:10px; }
.el-input__inner:focus { border:1px solid #d9d9d9; color:#333333; }
.el-button--primary { width:250px; height: 40px; line-height: 40xp; background: #f9c231; color:#333333; border:0px; font-size: 16px; }
.send_yzm { width:120px; height: 36px; float: left; position: relative; top:-63px; left:230px; font-size: 14px; }
.el-dialog__footer { text-align: center; padding-top:0px; }
.el-dialog__body { padding:85px 0px 0px; }
.el-input__prefix { position:relative; top:-47px;left:110px; text-align: left; height: 0px; }
.el-input__forget { position:relative; top:15px;left:85px; text-align: left; height: 0px;}
.alert_text .el-input__inner { border:1px solid #ef2b2e; color:#ef2b2e; }
.font_alert { color:#ef2b2e; }
.font_alert span { position: relative; top:-3px; left:10px;}
.el-button--primary:focus, .el-button--primary:hover { background: #f9c231; color:#333333; }
.el-input__forget a:link,.el-input__forget a:visited { color:#333333; text-decoration: none; }
.el-input__forget a:hover { color:#333333; text-decoration:underline; }
.position_text { position: relative; top:-43px; }
.position_icon { position: relative; top:-90px; }
.position_footer { position: relative; top:-43px; }
.dia_register .el-dialog__body { padding-top:55px; }
.mrtop_5 { margin-top:10px; position: relative; left:-8px; }
.mrtop_5 span { position: relative; top:-2px; }
.mrtop_4 { margin-top:-5px; }
</style>