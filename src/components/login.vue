<template>
  <div class="login_body">
      <div class="loginContent">
		<div class="login_logo">抖音工具系统登录</div>
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

					<li class="">
						<el-button type="text"  @click="registerDialog=true" >注册</el-button>
					</li> 
			    </ul>	
           </form>
		</div>


		 <!-- 注册 -->
                    <el-dialog title="注册" :visible.sync="registerDialog" width="60%">
                        <div class="add-shop-cate">
                            <div class="df-basic_row_new el-form-item" style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 100px;">手机号:</label>
                                <div class="el-form-item__content" style="display:flex; margin-left: 10px; width:71%;">                
                                    <el-input type="text" v-model="register_phone" maxlength="11" show-word-limit></el-input>   
									<el-button type="text"  style="display:flex; margin-left: 10px;" @click="getCode" >获取验证码</el-button>                                
                                </div>
                            </div>
                            <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 100px;">密码: </label>
                                <div class="el-form-item__content" style="margin-left: 10px;width:60%; ">                     
                                     <el-input type="text" v-model="register_pwd" ></el-input>                            
                                </div>
                            </div>
                             <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 100px;">昵称: </label>
                                <div class="el-form-item__content" style="margin-left: 10px;width:60%;" >
                                    <el-input type="text" v-model="register_name" placeholder=""></el-input>                      
                                </div>
                            </div>
                            <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 100px;">验证码: </label>
                                <div class="el-form-item__content" style="margin-left: 10px;width:60%;" >
                                    <el-input type="text" v-model="register_code"></el-input>                      
                                </div>
                            </div>
                           
                            <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                <el-button @click="registerDialog = false">取 消</el-button>
                                <el-button type="primary" @click="registerClick">确 定</el-button>
                            </div>
                        </div>
                    </el-dialog>
                    <!-- 修改地址over -->


	</div>
	<div class="login_footer"><p>Powered By © 2020 蜜獾-抖音工具管理平台</p></div>
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
		   registerDialog: false,
		   register_phone: '',
		   register_pwd: '',
		   register_name: '',
		   register_code: '',
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
			//this.$router.push('/home');
		}
		this.$nextTick(() => {
			this.thisUrl  = this.beforeUrl;
		})
    },
	methods: {
		getCode(){

			let that = this;
			let params = new FormData();       
			params.append('phone', that.register_phone); 
			params.append('type', 'register'); 
			params.append('userType', 'supplier');
			let urlStr = network.baseSmsSend;

			this.$http.post(urlStr, params)
			.then(function(res){
				console.log('---获取验证码 data= '+ zm_jsonToString(res.data));
					 if(res.data.status!= 200){
						that.$message.error(res.data.message);              
                    }else{
						that.$message.success('获取成功！');
                    }				
				})

		},
		registerClick(){
			let that = this;
			let params = new FormData();       
			params.append('phone', that.register_phone); 
			params.append('password', that.register_pwd); 
			params.append('name', that.register_name);
			params.append('code', that.register_code);
			let urlStr = network.supplierRegister;

			this.$http.post(urlStr, params)
			.then(function(res){
				console.log('---注册res= '+ zm_jsonToString(res.data));
					if(res.data.status== 200){
						that.$message.success('注册成功！');
						that.registerDialog = false;    
                    } else if(res.data.status== 500){
						that.$message.error("注册失败！"); 
                    } else{
						that.$message.error(res.data.message); 
                    }				
				})

		},
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
		dologin(){
			// this.$router.push('/goodslist');
			// return;

		  	let that = this; 
			// let params = {
			// 	"account":that.account,
			// 	"phone":that.account,
			// 	"password":that.password
			// 	};

			let params = new FormData();       
            params.append('phone', that.account);  
            params.append('password', that.password);

			let urlStr =  network.supplierLogin;

			this.$http.post(urlStr, params)
			.then(function(res){
				// console.log('---登录res= '+ zm_jsonToString(res.data));
					 if(res.data.status!= 200){
						 that.$message.error(res.data.message);              
                    }else{
						//登录保存cookie	
						that.thisnote = res.data.data;
						that.$cookie.set('ssupplierId', res.data.data.user.id, 7);
						that.$cookie.set('supplierId', res.data.data.user.id, 7);
						that.$cookie.set('isBelongDy', res.data.data.user.isBelongDy, 7);
						that.$cookie.set('nickName',  res.data.data.user.openId, 7);
						that.$cookie.set('updateTime',  res.data.data.user.updateTime, 7);
						that.$cookie.set('dyShopId',  res.data.data.user.dyShopId, 7);
						that.$cookie.set('password', res.data.data.user.password, 7);
						that.$cookie.set('createTime',  res.data.data.user.createTime, 7);
						that.$cookie.set('phone ', res.data.data.user.phone, 7);	
						that.$cookie.set('headportrait ', res.data.data.user.headportrait, 7);
						that.$cookie.set('dyShopName ', res.data.data.user.dyShopName, 7);	
						that.$cookie.set('account ', res.data.data.user.account, 7);	
						that.$cookie.set('status ', res.data.data.user.status, 7);	
						that.$cookie.set('token ', res.data.data.token, 7);	
						that.$cookie.set('userId ', res.data.data.user.id);
						that.$cookie.set('roleId ', res.data.data.user.id);
						that.$cookie.set('adminId ', res.data.data.user.id);

						// console.log('--------登录保存: supplierId= '+  that.$cookie.get('supplierId'));
						// console.log('--------登录保存: token= '+  that.$cookie.get('token'));
						// sessionStorage.setItem('loginInfo',JSON.stringify(res.data));

						console.log(1, that.$route);
						console.log(2, that.$router);
						that.$router.push('/goodslist');	//home

						// if(that.$cookie.get('supplierId')){
						// 	if(that.thisUrl == '/'){	
						// 		that.$router.push('/goodslist');	///home			
						// 	}else{
						// 		that.$router.push(`${that.thisUrl}`);  // 登陆成功后默认跳转的路由					
						// 	}					
						// }	
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