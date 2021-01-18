<!-- 备注:蜜獾分销店铺组件 css集合/引入头部和侧边栏组件-->
<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <storesecnavbar></storesecnavbar>

            <div class="main-goods-right">
                 <!-- 商品中心内容          -->
                <div class="goods-card_body" v-loading="loading">
                <!--小程序店主页-->
               <div>
                   <div>
                       <span class="store-home_span">小程序店铺主页</span>
                   </div>
                   
                   <div class="store-home-div">

                       <div class="store-home-div-imgku">
                           <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/image.png" alt="" class="store-home-div-img">
                       </div>

                       <div class="store-home-div_div">
                           <h2 class="store-home-div_div_h2">模板名称：<span store-home-div_div_span>模版1</span></h2>
                           <button @click="edithome" type="button" class="el-button el-button--primary el-button--small store-home-div_div_btn"><span>编辑主页</span></button>
                       </div>

                       <div class="store-home-div_divewm">
                            <img alt="Scan me!" :src="mhqrcode" style="display: block;">
                            <span>手机扫描此二维码，可直接在手机上访问店铺</span>
                       </div>
                   </div>

                   <div class="store-home-twodiv">
                       <!-- <div>
                           <span class="store-home_span">公众号店铺主页</span>
                       </div> -->

                     <!-- <div class="store-home-twodiv_div">
                         <div class="store-home-div-imgku store-home-twodiv">
                             <img src="http://img.wkdao.com/image/system/2019/02/15/0f57bd21852909bfdc6695be9c3124f3.png" alt="" class="store-home-div-img" style="height: 400px!important;">
                             <div class="store-home-twodivbg">
                                进入编辑组件模板 
                               <router-link tag="a" to="/mhmodule">   
                                    <button type="button" class="el-button el-button--success" style="margin-right:12px"><span>启用</span></button>
                                </router-link>  
                                 <router-link tag="a" to="/mhmodule">   
                                   <button type="button" class="el-button el-button--primary"><span>编辑</span></button>
                                 </router-link>  
                             </div>
                         </div> -->
                     </div> 
                   </div>
                </div>
                <!--小程序店铺主页over-->
                </div>
                <!-- 商品中心over -->
            </div>
        </div>
    </div>
    <!--主体 over-->
  
</template>
<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import storesecnavbar from './storesecnavbar';
import UTIL from "../../utils/api";
import {
  zm_jsonToString,
  zm_formDataToString
} from "../../filters/zm_tools";

export default {
    data(){
        return{
           loading : true,
           mhqrcode :'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/wx/erweima.png'
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.getQrCode();
            } else {
                next('/login');
            }
        })
    },
    mounted(){

    },
    methods:{
        edithome(){
            // this.$message('模板正在开发中,暂不支持编辑')
            this.$router.push('/module') 
            
        },
        usermudule(){
              this.$message('启用失败,正在努力编辑~')
        },
        //店铺主页
        //获取小程序二维码和路径
        getQrCode(){
           let that = this; 
            let data = new FormData();      
            // let path = encodeURIComponent("page/index/index"); 
            var path = "pages/index/index"; //"page/component/index";
            // let urlStr = UTIL.PIP + '/miniprogram/wx/mini/qrcode/page/get.do?path=' + path + '&openId='+that.$cookie.get('openId');
            var openId = this.$cookie.get('openId');
            let urlStr = "http://saas.mihuanshop.com/miniprogram/wx/mini/qrcode/page/get.do";
                urlStr = urlStr + "?openId="+openId + "&path="+path;
                   
            this.$http({
                method: "get",
                url: urlStr,
                headers: { 
                    "Content-Type": "multipart/form-data", 
                    Authorization:`Bearer ${that.$cookie.get('token')}`
                }
            }).then(function(res){
                console.log('---获取二维码请求= ' + zm_jsonToString(res.data));
                if(res.data.status == 301){
                    that.$router.push({
                        path: '/'
                    });
                    that.$message.warning('检测到登录过期,请重新登录');
                    return false;
                }
                if(res.data.status == 200) {           
                    that.mhqrcode = res.data.data;
                    that.loading = false;
                }

                if(res.data.status != 200 && res.data.status != 301){
                    that.$message.error(res.data.message);
                }
    
         }); 
       }
    },
    components:{
        navbar,sidebar,storesecnavbar
    },
    created() {
        
    },
}
</script>
<style>
    .store-home_span{
    width: 100%;
    display: inline-block;
    padding:0 0 20px 0 ;
    border-bottom: 1px solid #ebeef5;
    color: #303133;
    font-size: 12px;
}

.store-home-div{
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 15px;
}

.store-home-div-img{
    width:194px;
    height: 328px;
}

.store-home-div_div{
    display: flex;
    flex-direction: column;
    min-width: 200px;
    align-items: center;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #f2f2f2;

}
.store-home-div_div_h2{
    font-size: 12px;
    color: #303133;
    margin: 20px 0;
}
.store-home-div-imgku{
    box-shadow: 3px 3px 8px rgba(0,0,0,.3);
    width: 195px;
    height: 328px;
    margin-right: 20px;
    overflow: hidden;
}
.store-home-div_divewm{
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #f2f2f2;
    display: flex;
    flex-direction: column;
    align-content: center;
}

.store-home-div_divewm span{
    display: inline-block;
    font-size: 12px;
    color: #666;
}
.store-home-div_divewm img{
    display: block;
    width: 180px;
    height: 180px;
    margin-bottom: 20px;
}


.store-home-twodiv-imgku{
    padding: 20px;
    box-sizing: border-box;
}
.store-home-twodiv{
    box-sizing: border-box;
    position: relative;
    width: 194px;
}
.store-home-twodiv_div{
    padding: 20px;
    box-sizing: border-box;
}

.store-home-twodivbg{
    display: none;
    position: absolute;
    top: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.3);
}

.store-home-twodiv:hover .store-home-twodivbg{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>