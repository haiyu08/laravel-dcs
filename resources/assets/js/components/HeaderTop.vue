<template>
	<div id='header_top'>
    <div class="bg_header">
      <ul class="cont_header">
        <li><img src="../assets/weibo.png"></li>
        <li><img src="../assets/wechat.png"></li>
        <li v-if="user_session === false" class="width_80"><el-button type="text" @click="dialogTableVisible = true">免费注册</el-button></li>        
        <li v-if="user_session === false" class="width_80"><el-button type="text" @click="dialogFormVisible = true">请登录</el-button></li>      
        <li v-if="user_session === true" class="width_80"><el-button type="text" 
          v-on:click="func_logout">退出登录</el-button></li>
        <li  class="width_120" v-if="user_session === true" v-text="session_username"></li> 

        <!--注册-->
        <el-dialog title="注册" :visible.sync="dialogTableVisible" class="dia_register">
          <el-form :model="form">
              <el-input v-model="mobile_register" data-vv-delay="500" name="phone" placeholder="请输入手机号码" auto-complete="off" v-validate="{ required: true, regex: /^(((13[0-9]{1})|(15[0-35-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/ }"></el-input>
              <div class="el-input__prefix"><img src="../assets/bg_user.png"></div>

              <el-input v-model="password_register" data-vv-delay="500" name="alpha_dash" :type="this.registration_data.pwdType" placeholder="请输入登录密码" auto-complete="off" v-validate="{ required: true,max:14,min:6 }" ></el-input>
              <div class="el-input__prefix"><img src="../assets/bg_passwd.png"></div>
              <div class="el-input__prefix" style="position:relative; left:320px;"><img :src="this.registration_data.src" @click="changeType()"/></div>

              <el-input v-model="yzm_register" name="yzm" v-validate="{ required: true }" placeholder="请输入验证码" auto-complete="off" type="text" class='yzm'></el-input>
              <el-button type="primary" v-if="errors.has('phone')" disabled="disabled" style="background:#999;"  class="send_yzm">短信验证码</el-button>
              <el-button type="primary" v-else-if="errors.has('alpha_dash')" disabled="disabled" style="background:#999;"  class="send_yzm">短信验证码</el-button>
              <el-button type="primary" v-on:click="send_yzm(1)" v-else-if="!errors.has('alpha_dash')" class="send_yzm">短信验证码</el-button>

              <el-input v-model="form.name4" class="alert_text position_text" v-if="errors.has('phone')" auto-complete="off" readonly></el-input>
              <div class="el-input__prefix font_alert position_icon" v-if="errors.has('phone')"><img src="../assets/bg_alert.png"><span>{{ errors.first('phone') }}</span></div>

              <template v-else> 
                <el-input v-model="form.name5" class="alert_text position_text" v-if="errors.has('alpha_dash')" auto-complete="off" readonly></el-input>
                <div class="el-input__prefix font_alert position_icon" v-if="errors.has('alpha_dash')"><img src="../assets/bg_alert.png"><span>{{ errors.first('alpha_dash') }}</span></div>
              </template>

          </el-form>
          <div slot="footer" class="dialog-footer position_footer">
            <el-button type="primary" v-on:click="func_register" @click="dialogTableVisible = true">确 定</el-button>
            <!--<div class="mrtop_5"><input type="checkbox"  checked="checked"><span class="f12">我已阅读并同意相关服务条款和隐私政策</span></div>-->
            <div class="el-input__forget mrtop_4">已有帐号？<a href="#" @click="dialogFormVisible = true;dialogTableVisible = false">请登录</a></div>
          </div>
        </el-dialog>

        <!--登录-->
        <el-dialog title="登录" :visible.sync="dialogFormVisible">
          <el-form :model="form">
              <el-input  v-model="username" name="phone_login" data-vv-delay="500" placeholder="请输入手机号码" auto-complete="off" v-validate="{ required: true, regex: /^(((13[0-9]{1})|(15[0-35-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/ }" ></el-input>
              <div class="el-input__prefix"><img src="../assets/bg_user.png"></div>

              <el-input v-model="password" name="alpha_dash_login" data-vv-delay="500" v-validate="{ required: true,max:14,min:6 }" placeholder="请输入登录密码" auto-complete="off" :type="this.registration_data.pwdType"></el-input>
              <div class="el-input__prefix"><img src="../assets/bg_passwd.png"></div>
              <div class="el-input__prefix" style="position:relative; left:320px;"><img :src="this.registration_data.src" @click="changeType()"/></div>

              <el-input v-model="form.name12" class="alert_text" v-if="errors.has('phone_login')" auto-complete="off" readonly></el-input>
              <div class="el-input__prefix font_alert" v-if="errors.has('phone_login')"><img src="../assets/bg_alert.png"><span>{{ errors.first('phone_login') }}</span></div>

              <template v-else> 
              <el-input v-model="form.name13" class="alert_text" v-if="errors.has('alpha_dash_login')" auto-complete="off" readonly></el-input>
              <div class="el-input__prefix font_alert" v-if="errors.has('alpha_dash_login')"><img src="../assets/bg_alert.png"><span>{{ errors.first('alpha_dash_login') }}</span></div>
              </template>

          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" v-on:click="func_login" @click="dialogFormVisible = true">确 定</el-button>
            <div class="el-input__forget">还没有帐号？<a href="#" @click="dialogFormVisible = false;dialogTableVisible = true">请注册</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" @click="dialogFormVisible = false;dialogFormVisiblemima = true">忘记密码？</a></span></div>
          </div>
        </el-dialog>


        <!--忘记密码-->
        <el-dialog title="忘记密码" :visible.sync="dialogFormVisiblemima">
          <el-form :model="form">
              <el-input v-model="mobile_forget" name="phone_login" data-vv-delay="500" placeholder="请输入手机号码" auto-complete="off" v-validate="{ required: true, regex: /^(((13[0-9]{1})|(15[0-35-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/ }"></el-input>
              <div class="el-input__prefix"><img src="../assets/bg_user.png"></div>

              <el-input v-model="password_forget" name="alpha_dash_login" data-vv-delay="500" v-validate="{ required: true,max:14,min:6 }" placeholder="请输入新密码" auto-complete="off" :type="this.registration_data.pwdType"></el-input>
              <div class="el-input__prefix"><img src="../assets/bg_passwd.png"></div>
              <div class="el-input__prefix" style="position:relative; left:320px;"><img :src="this.registration_data.src" @click="changeType()"/></div>

              <el-input v-model="yzm_forget" name="yzm" v-validate="{ required: true }" placeholder="请输入验证码" auto-complete="off" type="text" class='yzm'></el-input>
              <el-button type="primary" v-if="errors.has('phone_login')" disabled="disabled" style="background:#999;"  class="send_yzm">短信验证码</el-button>
              <el-button type="primary" v-else-if="errors.has('alpha_dash_login')" disabled="disabled" style="background:#999;"  class="send_yzm">短信验证码</el-button>
              <el-button type="primary" v-on:click="send_yzm(2)" v-else-if="!errors.has('alpha_dash_login')" class="send_yzm">短信验证码</el-button>


              <el-input v-model="form.name20" class="alert_text position_text" v-if="errors.has('phone_login')" auto-complete="off" readonly></el-input>
              <div class="el-input__prefix font_alert position_icon" v-if="errors.has('phone_login')"><img src="../assets/bg_alert.png"><span>{{ errors.first('phone_login') }}</span></div>

              <template v-else> 
              <el-input v-model="form.name21" class="alert_text position_text" v-if="errors.has('alpha_dash_login')" auto-complete="off" readonly></el-input>
              <div class="el-input__prefix font_alert position_icon" v-if="errors.has('alpha_dash_login')"><img src="../assets/bg_alert.png"><span>{{ errors.first('alpha_dash_login') }}</span></div>
              </template>

          </el-form>
          <div slot="footer" class="dialog-footer position_footer">
            <el-button type="primary" v-on:click="func_resetpassword" @click="dialogFormVisiblemima = true">确 定</el-button>
            <div class="el-input__forget mrtop_4">还没有帐号？<a href="#" @click="dialogFormVisible = false;dialogTableVisible = true">请注册</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" @click="dialogFormVisible = true;dialogTableVisible = false">请登录</a></span></div>
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
					<li><router-link to="./">首 页</router-link></li>
					<li v-bind:class="{active:price}"><router-link to="./price">运价查询</router-link></li>
					<li v-bind:class="{active:trail}"><router-link to="./trail">轨迹查询</router-link></li>
					<li><router-link to="./trail">物流工具</router-link></li>
					<li v-bind:class="{active:news}"><router-link to="./news">物流资讯</router-link></li>
					<li><router-link to="">大常生控股</router-link></li>
				</ul>
			</div>

		</div>
	</div>
</template>

<script>

export default {     
  mounted() {
    this.get_session();
    this.topnav();
  }, 
  data() {
    return {
      name: 'Vue.js',
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisiblemima: false,
      username:'',
      password:'',
      session_username:'',
      user_session:false,
      mobile_register:'',
      password_register:'',
      yzm_register:'',
      mobile_forget:'',
      password_forget:'',
      yzm_forget:'',
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
      registration_data:{
         pwdType:"password",
         src:require("../assets/colse_eyes.png")
        },
      formLabelWidth: '120px',
      api_login: 'http://localhost/login',
      api_session: 'http://localhost/get_session',
      api_list:'http://localhost/list_hotarticle',
      api_logout:'http://localhost/logout',
      api_sendyzm:'http://localhost/message_register',
      api_register:'http://localhost/register',
      api_resetpassword:'http://localhost/resetpassword',
      price:'',
      trail:'',
      news:''
    };
  },  
  methods: {

    topnav: function(event){
      var route_path = window.location.hash;
      //alert(route_path);
      if(route_path == '#/price'){ 
        //this.price = true;
      }else if(route_path == '#/trail'){ 
        //this.trail = true;
      }else if(route_path == 3){ 
        this.gjmy = true;
      }else if(route_path == '#/news'){ 
        //this.news = true;
      }else if(route_path == 5){ 
        this.cgs = true;
      }else if(route_path == 6){ 
        this.ghzs = true;
      }else if(route_path == 7){ 
        this.hyyj = true;
      }else if(route_path == 8){ 
        this.alfx = true;
      }
    },
    changeType:function (event) {
       this.registration_data.pwdType = this.registration_data.pwdType==='password'?'text':'password';
       this.registration_data.src=this.registration_data.src==require("../assets/colse_eyes.png")?require("../assets/open_eyes.png"):require("../assets/colse_eyes.png");
    },

    //登录
    func_login:function (event) {
      return this.$http.get(this.api_login, {
        params: {
          username:this.username,
          password:this.password,
        }
      })
      .then(response=>{
          if(response.data.reasonCode=='00000'){
            alert('登录成功!');
            location.reload();
          }else{ 
            alert('登录失败!');  
          }
      })
      .catch(function (error) {
          //console.log(response);
      })
    },

    //注册发送验证码
    send_yzm:function (type) {
      return this.$http.get(this.api_sendyzm,{ 
        params:{ 
          mobile:this.mobile_register,
          type:type,
        }
      }).then(response=>{
          alert('验证码发送成功!');
      })
    },

    //重置密码发送验证码
    send_yzm:function (type) {
      return this.$http.get(this.api_sendyzm,{ 
        params:{ 
          mobile:this.mobile_forget,
          type:type,
        }
      }).then(response=>{
          alert('验证码发送成功!');
      })
    },

    //确认注册
    func_register:function (event) {
      return this.$http.get(this.api_register,{ 
        params:{ 
          username:this.mobile_register,
          password:this.password_register,
          yzm:this.yzm_register,
        }
      }).then(response=>{
          if(response.data.reasonCode=='00000'){
            alert('用户注册成功!');
            location.reload();
          }else{ 
            alert(response.data.reasonCode);
            alert('验证码不正确!');  
          }
      })
      .catch(function (error){
          alert('用户注册失败!'); 
          location.reload();       
      })

    },

    //重置密码
    func_resetpassword:function (event) {
      return this.$http.get(this.api_resetpassword,{ 
        params:{ 
          username:this.mobile_forget,
          password:this.password_forget,
          yzm:this.yzm_forget,
        }
      }).then(response=>{
          if(response.data.reasonCode=='00000'){
            alert('用户重置密码成功!');
            location.reload();
          }else{ 
            alert('验证码不正确!');  
          }
      })
      .catch(function (error){
          alert('用户重置密码失败!'); 
          location.reload();       
      })

    },

    func_logout:function (event) { 
      return this.$http.post(this.api_logout,{})
      .then(response=>{
        alert('退出成功');
        location.reload();
      })
      .catch(function (error){})
    },

    get_session:function (event) { 
      return this.$http.get(this.api_session, {
      })
      .then(response=>{
          this.session_username = response.data.data.username;
          this.user_session = response.data.data.user_session;
          console.log(response.data.data);
          console.log('应该有值啊');
      })
      .catch(function (error) {
          console.log(response);
      })
    },

  }
};
</script>


<style>
.bg_header { width:100%; height:50px; background: #f3f3f3; overflow: hidden;}
.cont_header { width:1140px; height: 50px; margin:0 auto; }
ul li { list-style: none; float: left; }
ul.cont_header li { width:60px; border-right: 1px solid #dce0e5; line-height: 50px; float:right; height: 50px; } 
ul.cont_header li.width_80 { width:80px; }
ul.cont_header li.width_120 { width:120px; }
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
.area_nav li { width:130px; float: left; height: 55px; line-height: 55px; }
.area_nav li a:link,.area_nav li a:visited { color:#333333; font-size: 16px; text-decoration: none; }
.area_nav li.active a:link,.area_nav li.active a:visited { color:#333333; font-size: 16px; text-decoration: none; font-weight:bold; }
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
.position_footer { position: relative; top:-43px; clear: both; }
.dia_register .el-dialog__body { padding-top:55px; }
.mrtop_5 { margin-top:10px; position: relative; left:-8px; }
.mrtop_5 span { position: relative; top:-2px; }
.mrtop_4 { margin-top:-5px; }
</style>