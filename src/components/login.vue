<template>
  <div class="login_body">
      <div class="loginContent">
		<div class="login_logo">蜜獾科技分销系统登录</div>
        <div class="login_form">
			<form method="post" οnsubmit="return false" >
			    <ul>
					<li class="login_item">
						<input type="text" name="username" class="login_input" required="required" autofocus="autofocus" placeholder="用户名" v-model="account">
						<span>用户名：</span>
					</li>
					<li class="login_item">					
						<input type="password" name="password" class="login_input" required="required" placeholder="密码" v-model="password">
						<span>密　码：</span>
					</li>
					<!-- <li class="login_item">
						<img src="?m=admin&c=index&a=code" border="0" class="verifyimg" onclick="this.src='?m=admin&c=index&a=code'"/>
						<input type="text" name="code" class="login_input verify_input" required="required" placeholder="验证码">
						<span>验证码：</span>
					</li>
					 -->
					<li class="login-sub">
						<input type="button" value="登　录" @click="dologin"/>
					</li> 
			    </ul>	
           </form>
		</div>
	</div>
	<div class="login_footer"><p>Powered By © 2020 蜜獾</p></div>
  </div>
</template>

<script>
import navbar from './navbar';
import sidebar from './sidebar';
import network from '../utils/api';
import axios from 'axios' ;//创建axios实例
import {    
        zm_jsonToString,
        zm_formDataToString,
} from "../filters/zm_tools"

export default {
      data() {
        return {
		   account:'',
		   password:'',
		   thisUrl:'',
		   thisnote:{},
		   platformInfoData: '',
		};
		
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.beforeUrl = from.path
		})
	},
	beforeRouteLeave (to, from, next) {
		next(vm => {
			axios.interceptors.request.use(function (config) {
			// 在发送请求之前做些什么
			config.headers.common['suserId']= vm.thisnote.userId;
			config.headers.common['roleId'] = vm.thisnote.roleId;
			config.headers.common['adminId']= vm.thisnote.id;
				return config;
			}, function (error) {
			// 对请求错误做些什么
			return Promise.reject(error);
			});
		})
  	},
	mounted(){
		if(sessionStorage.getItem("loginInfo") != ""){
			//   this.$router.push('/home');
		}
		this.$nextTick(() => {
			this.thisUrl  = this.beforeUrl;
		})
    },
	  methods: {
		  //清除所有cookie函数
        clearAllCookie() {
            var keys = document.cookie.match(/[^ =;]+(?==)/g)
			if (keys) {
				for (var i = keys.length; i--;) {
					document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString() 								// 清除当前域名下的,例如：m.ratingdog.cn
					document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString() // 清除当前域名下的，例如 .m.ratingdog.cn
					document.cookie = keys[i] + '=0;path=/;domain=ratingdog.cn;expires=' + new Date(0).toUTCString() 			// 清除一级域名下的或指定的，例如 .ratingdog.cn
				}
			}
		},
		// 请求：查询saas平台信息
        request_infoFindBySuserId(){
            let self = this;    
            let params = new FormData();
                params.append('suserId', this.$cookie.get('userId'));
			let urlStr = network.userIP + network.set_infoFindBySuserId;
			// console.log('---查询saas平台信息 urlStr= ', urlStr +'\n:params= '+zm_formDataToString(params));

            this.$http({
                method: "post",
                url: urlStr,
                data: params
            }).then(function(response){
                console.log('---查询saas平台信息 urlStr= ', urlStr +'\n:response= '+zm_jsonToString(response.data));
                if(response.data.status == 200){
                    self.platformInfoData = response.data;
                    self.headportraitPicture = self.platformInfoData.headportraitPicture;
                    self.name   = self.platformInfoData.name;
                    self.address= self.platformInfoData.address;
                    self.phone  = self.platformInfoData.phone;
                    // login_logo
					self.$cookie.set('miHuanLogo', self.platformInfoData.headportrait, 7);
					self.$cookie.set('miHuanName', self.platformInfoData.name, 7);
                    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                    link.type = 'image/x-icon';
                    link.rel = 'shortcut icon';
                    // link.href = 'http://www.stackoverflow.com/favicon.ico';
                    link.href = self.platformInfoData.headportrait;
					document.getElementsByTagName('head')[0].appendChild(link);
					// 页面跳转
					if(self.thisUrl == '/'){			
						self.$router.push('/home');				
					}else{
						self.$router.push(`${self.thisUrl}`);  // 登陆成功后默认跳转的路由					
					}	
                    
				}//当前信息未设置过
				else if(response.data.status == 500 && response.data.message == "当前suserId未被注册") {
					// 页面跳转
					var mhLogo = "https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/vip/mihuan.png";
					self.$cookie.set('miHuanLogo', mhLogo, 7);
					if(self.thisUrl == '/'){			
						self.$router.push('/home');				
					}else{
						self.$router.push(`${self.thisUrl}`);  // 登陆成功后默认跳转的路由					
					}	
                }
            })
        },
		 dologin(){
		  	let that = this; 
			let data = {"account":that.account,"password":that.password};
			this.$http.post(network.PIP+"/sso/user/access.do",data)
			.then(function(res){
				console.log('---登录res= '+ zm_jsonToString(res.data));
					 if(res.data.status!= 200){
						 that.$message.error(res.data.message);              
                    }else{
						//登录保存cookie
						that.thisnote = res.data.data;
						that.$cookie.set('suserId', res.data.data.userId, 7);
						that.$cookie.set('openId',  res.data.data.openId, 7);
						that.$cookie.set('token',  res.data.data.accessToken, 7);
						that.$cookie.set('_token',  res.data.data.accessToken, 7);
						that.$cookie.set('userId', res.data.data.userId, 7);
						that.$cookie.set('roleId',  res.data.data.roleId, 7);
						that.$cookie.set('adminId ', res.data.data.id, 7);	
						that.$cookie.set('nickName ', res.data.data.adminAlias, 7);	
						// console.log('--------登录保存: suserId= '+  that.$cookie.get('suserId'));
						
						sessionStorage.setItem('loginInfo',JSON.stringify(res.data));			
						if(that.$cookie.get('suserId')){
							// that.request_infoFindBySuserId(); //获取login_logo
							if(that.thisUrl == '/'){			
								// that.$router.push('/home');	
								that.$router.push('/goodslist');				
							}else{
								that.$router.push(`${that.thisUrl}`);  // 登陆成功后默认跳转的路由					
							}					
						}	
                    }				
				})
	  }
	},
    components:{
        navbar,sidebar,network    
    }
}
</script>

<style scoped>
.login_body{height:100%;width:100%;background:url(https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/login_bg.jpg) no-repeat center center fixed;background-size:cover;background-color:#bbb;padding: 0;margin: 0;overflow: hidden;}
/* .clearfix{clear:both;width:0px;height:0px;overflow:hidden;} */
.loginContent{
	margin: 150px auto 50px; 
	/* width: 100%;  */
	max-width: 400px;
	width:400px; 
	_width:400px; 
	min-width:520px; 
	padding: 30px 60px 50px 60px; 
	overflow: hidden; font-size: 14px;
	background:rgba(255,255,255,0.7); 
	/* background: yellow; */
	box-shadow:0px 20px 60px rgba(0,0,0,0.5),0px 0px 150px rgba(0,0,0,0.5);
	border-radius:4px;color:#454545;
}
.loginContent .login_logo{width:100%;height:44px;line-height: 44px;font-size: 20px;text-align: center;border-bottom:1px solid #cdcdcd;color:#454545;}
.loginContent .login_form{margin-top: 15px;}
.loginContent .login_form .login_item{width:380px;padding: 2px 8px;border:1px solid #ababab;margin-top: 10px;height: 39px;line-height: 39px;border-radius:3px;}
.loginContent .login_form .login_input{height: 35px; margin-top:2px;border: 0px; line-height: 35px; width: 299px; min-width: 299px; 
padding:0 8px; font-size: 14px; outline: none;float:right;
background: #f0f0f0;box-sizing: border-box;border-radius:2px;}
.loginContent .login_form .login_input:focus{border: 1px solid #3890ff;box-shadow: 0 0 0 3px rgba(56,144,255,.15);}
/* .loginContent .login_item .verify_input{width: 175px;margin-right:25px;} */
.loginContent .verifyimg{float: right;height: 30px;width:100px; margin-top:5px;cursor:pointer;}
.loginContent .login-sub{text-align: center;}
.loginContent .login-sub input{margin-top:15px;height: 38px; line-height: 38px; width: 100%; color: #fff; font-size: 16px; border-radius:2px;cursor:pointer;outline:none;transition:background 0.3s ease 0s;border: 1px solid #217ef2;background-color: #3890ff;background-image: linear-gradient(0deg,hsla(0,0%,100%,.06) 0,hsla(0,0%,100%,.06)),linear-gradient(0deg,rgba(9,109,236,.5) 0,rgba(76,155,255,.5));box-shadow: inset 0 1px 0 hsla(0,0%,100%,.08), 0 1px 1px rgba(0,0,0,.08);text-shadow: 0 -1px 0 rgba(0,0,0,.1);}
.loginContent .login-sub input:hover{background: #317ee0;}
.login_footer{
	color:#eee;position:fixed;
	_position:absolute;bottom:0px;
	text-align:center;
	width:100%;
	/* width:400px;  */
	background:#453c5a;
	background:rgba(0,0,0,0.3);padding:10px 0;
	/* background:lavenderblush; */
}
</style>