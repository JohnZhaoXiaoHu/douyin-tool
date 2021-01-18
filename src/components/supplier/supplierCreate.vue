<template>
<!-- 创建 -->
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <marknav></marknav>
            <div class="main-goods-right">
                <!-- 创建内容 -->
                <!-- <div> -->
                <!--选项卡组件-->
                <div class="goods-card_body marketing">
                    <!-- 面包屑 -->
                    <div class="mh-coupon-divtop">
                         <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/supplier' }">供应商列表</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/supplier/createSupplier' }">{{spTitle}}</el-breadcrumb-item>
                        </el-breadcrumb>   
                    </div>
                    <!-- 面包屑over -->

                    <br><br>
                    <div class="zm_title3">基础信息</div>
                    <div class="zm_dl sx-input">
                        <div class="zm_dl_title1">供应商名称：</div>
                        <el-input v-model="spName" class="activityName"  placeholder=""></el-input>
                    </div>
                    
                    <div class="zm_dl">
                        <div class="zm_dl_title1">登录手机号：</div>
                        <el-input v-if="isEdit" v-model="longinName" disabled type="number" class="spItemprice" placeholder=""></el-input> 
                        <el-input v-else v-model="longinName" type="number" class="spItemprice" placeholder=""></el-input>
                        <div class="zm_dl_title1" v-bind:class="[noHave ? cp_title1 : cp_title2]"> 
                            &nbsp;&nbsp;该登陆名称已存在 请重新输入 
                        </div>
                    </div>

                    <div class="zm_dl">
                        <div class="zm_dl_title1">&nbsp;&nbsp;&nbsp;&nbsp;登录密码：</div>
                        <el-input v-model="longinPwd" class="spSkucost" placeholder="请输入6位密码"></el-input> 
                    </div>
         
                    <el-button class="saveBtn" type="primary" size="medium" @click="saveCilck">保存</el-button>
                </div>    

                
                    <!--选项卡组件 over-->
                <!-- </div> -->
                <!-- 商品中心over-->
            </div>
        </div>
        <!--  -->
    </div>
    <!--主体 over-->
    </div>
</template>

<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import marknav from './supplierNav';
import baseapi from '../../utils/api';
import VueCookie from 'vue-cookie';
import {
        zm_jsonToString,
        zm_formDataToString,
        zm_timestampToDate,    
        zm_getCurrenDate,
        zm_getCurrenTimestamp,
        zm_isPhoneNum
} from "../../filters/zm_tools"

export default {
    data() {
        return {
            spTitle: '创建供应商',
            itemData: '',
            huiXianData: '',
            isEdit: false,
            spId: '',
            spName: '',
            longinName: '',
            longinPwd: '',
            noHave: true,
            cp_title1: 'cp_title1',
            cp_title2: 'cp_title2',
        };
    },
    created(){
    //    console.log('--------created 模板渲染前= 创建供应商');
        //获取页面传递数据：把字符串转为--> 对象
        this.itemData =  eval('(' + this.$route.query.itemData + ')');
        this.isEdit   =  eval('(' + this.$route.query.isEdit + ')');
        console.log('--->编辑供应商: itemData= '+zm_jsonToString(this.itemData));

    },
    mounted(){
        console.log('--------mounted 安装初始化成功：模板渲染后= '+ zm_getCurrenDate());
        if (this.isEdit) {
            this.getData();
            this.spTitle = "编辑供应商";
        }

    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                // console.log('--->beforeRouteEnter');
                // vm.getData(1,0);
            } else {
                next('/login');
            }
		})
    },
    watch:{
        longinName: function(val) {
            console.log("---longinName= "+ val);
            this.noHave = true;
        },
        deep:true //true 深度监听
    },
    methods:{
        getData(){
            //请求：回显数据
            let self = this;
            let urlStr = baseapi.userIP + baseapi.sp_detail+"?id="+this.itemData.id;
             var params = {
                id: this.itemData.id,
                suserId: this.$cookie.get('suserId'),
            }
            console.log('---供应商明细 params：' + zm_jsonToString(params), 'urlStr= ' + urlStr);

            this.$http({
                method: "post",
                url: urlStr,
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),			
                }
            }).then(function(res){
                console.log('---回显数据（供应商明细）：response= '+zm_jsonToString(res.data));
                if(res.status ==200){
                     self.huiXianData = res.data.data;
                    //数据回显
                    self.spName     = self.huiXianData.name;
                    self.longinName = self.huiXianData.account;
                    self.longinPwd  = self.huiXianData.password;
                } else {
                    self.$message.error(res.data.message);
                }
            })
        },
        saveCilck(){
            console.log('---保存：saveCilck');
            if(this.spName=='' || this.spName==null){
                this.$message.warning('供应商名称不能为空！'); return;
            }
            if(this.longinName=='' || this.longinName==null){
                this.$message.warning('登录手机号不能为空！'); return;
            }
            if( !zm_isPhoneNum(this.longinName)){
                this.$message.warning('登录名必须是手机号！'); return;
            }
            if(this.longinPwd=='' || this.longinPwd==null){
                this.$message.warning('登录密码不能为空！'); return;
            }
            let self = this;
            let urlStr = baseapi.userIP + baseapi.sp_add;
            let params = new FormData(); 
            params.append('name', this.spName);  
            params.append('account',this.longinName);
            params.append('password',this.longinPwd);
            params.append('status', 1);
            if (this.isEdit) {
                urlStr = baseapi.userIP + baseapi.sp_update;
                params.append('id', this.huiXianData.id);
                params.append('status', this.huiXianData.status);
                console.log('---编辑供应商：params=' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            }else{
                console.log('---创建供应商：params=' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            }
            
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type': 'multipart/form-data',
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),			
                }
            }).then(function(res){
                console.log('---创建/编辑 response= '+zm_jsonToString(res.data));
                if(res.data.status ==200){
                    if (self.isEdit) {
                        self.$message.success("修改成功！");
                    }else{
                        self.$message.success("创建成功！");
                    }
                    setTimeout(() =>{
                        self.$router.go(-1)
                    }, 1000);
                } else if(res.data.message =="该账号已存在"){
                    self.$message.error(res.data.message);
                    self.noHave = false;
                } else {
                    self.$message.error(res.data.message);
                }
            })
        }
    },
    components:{
        navbar,marknav,sidebar,VueCookie
    }
}
</script>


<style scoped >

.goods_list_dibu-seven{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.saveBtn {
    margin: 60px 0 100px 40%;
}
.zm_dl{
    display: flex;
    margin: 10px 10px 40px 10px;
}
.zm_dl_content {
    margin-top: 8px;
}
.zm_dl_title1{
    margin-top: 8px;
}
.cp_title1{
    margin-top: 8px;
    display: none;
}
.cp_title2{
    display: '';
    margin-top: 8px;
    color: #FF2600 !important;
}
.zm_title3{
    font-size: 15px !important;
    font-weight: 500;
}
.zm_title5{
    font-weight: 500;
}
.activityName, .spItemprice, .spSkucost{
    width: 200px;
    height: 26px;
}
.zm_elInput >>> .el-input__inner{
    padding: 0 0px !important;
    text-align: center;
}

</style>



   
            
           