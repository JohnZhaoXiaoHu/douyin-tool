<template>
<!-- 收款设置 -->
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <settingnav></settingnav>
           

            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div class="goods-card_body">
                    <!--选项卡组件-->
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="通用设置" name="first">
                            <div>
                                <div class="edit-item goods-item goods-set">
                                    <div  class="edit-info">
                                        <h3>直播状态</h3>
                                        <p>开通直播，可以使用直播权限</p>
                                    </div>
                                    <div class="goods-item-ctn">
                                        <el-switch @change="subMit" v-model="status"></el-switch>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        

                    </el-tabs>

               
                    <!--选项卡组件 over-->
                </div>
                <!-- 商品中心over-->
            </div>
        </div>


        <!--        -->

    </div>
    <!--主体 over-->
    </div>
</template>

<script>

import navbar from '../navbar';
import sidebar from '../sidebar';
import settingnav from './settingnav';
import api from '../../utils/api';;
// import baseapi from '../../../utils/api';
import {
        zm_jsonToString,
        zm_formDataToString
} from "../../filters/zm_tools.js"


export default {
    data() {
        return {
             activeName: 'first',
             status:false
        };
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                // vm.request_getData();
            } else {
                next('/login');
            }
        })
    },
    mounted(){
      this.request_getData();
    },
    methods:{
        subMit(){
            let that = this;    
            let params = new FormData();
            params.append('id',1)
            that.status ?  params.append('status',1) :  params.append('status',0);
            let urlStr = api.shopIP + api.set_updateStatus;
            console.log('---直播设置 params=' + zm_formDataToString(params) +'\n urlStr= ', urlStr);
           
           this.$http({ method: "post",
                url: urlStr,
                data: params
            })
            .then(function(res){
                console.log('---直播设置 res= ' +zm_jsonToString(res.data));
                if(res.data.status == 200){
                    that.$message.success('操作成功');
                }
            })
        },
        request_getData(){
            let self = this;    
            let params = new FormData(); 
            let urlStr = api.shopIP + api.set_findButtonStatus;
            params.append('id',1);
            console.log('---直播设置回显 params=' + zm_formDataToString(params) +'\n urlStr= ', urlStr);

            this.$http({ method: "post",
                url: urlStr,
                data: params
            })
            .then(function(res){
                console.log('---直播设置回显 res= ' +zm_jsonToString(res.data));
                if(res.data.status == 200){
                    self.status = Boolean(res.data.map.status);
                }else{
                    that.$message.error('状态码:'+res.data.status+' ,错误提示:'+res.data.message);
                }   
            })
        }
    },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>



   
            
           