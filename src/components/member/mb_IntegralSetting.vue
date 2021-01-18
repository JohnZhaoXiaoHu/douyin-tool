<template>
<!-- 创建 -->
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <membersecnavbar></membersecnavbar>
            <div class="main-goods-right">
                <!-- 创建内容 -->
                <div :v-model="integralSetData">
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing">
                    <!-- 面包屑 -->
                    <div class="mh-coupon-divtop">
                        <div class="mh_title"> 积分设置 </div> 
                    </div>
                    <!-- 面包屑over -->

                    <div class="zm_dl">
                        <div class="partAward">
                            用户每消费
                            <el-input v-model="integralSetData.gainBuyMoney" class="companyEarnings2 zm_elInput" size="mini" type="number" placeholder="">
                            </el-input> 元
                        </div>
                        <div class="partAward">
                            将获得
                            <el-input v-model="integralSetData.gainBuy" class="companyEarnings2 zm_elInput" size="mini" type="number" placeholder="">
                            </el-input> 积分
                        </div>
                    </div>

                    <div class="zm_dl">
                        <div class="zm_dl_title1"> 用户每邀请1个新用户注册成功，    将获得：</div>
                        <el-input v-model="integralSetData.gainInvite" class="companyEarnings2 zm_elInput" type="number" placeholder=""></el-input> 
                        <div class="zm_dl_title1"> &nbsp;&nbsp;积分 </div>
                    </div>
                    <div class="zm_dl">
                        <div class="zm_dl_title1"> 用户签到可获得：</div>
                        <el-input v-model="integralSetData.gainSign" class="companyEarnings2 zm_elInput" type="number" placeholder=""></el-input> 
                        <div class="zm_dl_title1"> &nbsp;&nbsp;积分，每天仅可签到1次 </div>
                    </div>

                    <br>
                    <div class="zm_dl">
                        <div class="zm_dl_title1">  用户分享商品链接给好友，将获得：</div>
                        <el-input v-model="integralSetData.gainShareItem" class="companyEarnings2 zm_elInput" type="number" placeholder=""></el-input> 
                        <div class="zm_dl_title1"> &nbsp;&nbsp;积分，每天最多可获得 </div>
                        <el-input v-model="integralSetData.gainShareItemMax" class="companyEarnings2 zm_elInput" type="number" placeholder=""></el-input> 
                        <div class="zm_dl_title1"> &nbsp;&nbsp;积分 </div>
                    </div>
                    <div class="zm_dl">
                        <div class="zm_dl_title1">  用户每邀请1个新用户参与抢购活动并且下单成功，    将获得：</div>
                        <el-input v-model="integralSetData.gainRush" class="companyEarnings2 zm_elInput" type="number" placeholder=""></el-input> 
                        <div class="zm_dl_title1"> &nbsp;&nbsp;积分 </div>
                    </div>
                    <div class="zm_dl">
                        <div class="zm_dl_title1"> 用户每邀请1个新用户参与7人拼团并且下单成功，    将获得：</div>
                        <el-input v-model="integralSetData.gainGroup7" class="companyEarnings2 zm_elInput" type="number" placeholder=""></el-input> 
                        <div class="zm_dl_title1"> &nbsp;&nbsp;积分 </div>
                    </div>


                        <el-button class="saveBtn" type="primary" size="medium" @click="saveCilck">
                            保存
                        </el-button>
                    </div>    



                    <!--选项卡组件 over-->
                </div>
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
import membersecnavbar from './membersecnavbar';
import network from '../../utils/api';
import goodsSpec from '../resource/goodsSpec_zm.vue';
import VueCookie from 'vue-cookie';
import {
        zm_jsonToString,
        zm_formDataToString,
        zm_tipsMsg,
        zm_timestampToDate,    
        zm_getCurrenDate,
        zm_getCurrenTimestamp,
        zm_standardDateToFormatDate
} from "../../filters/zm_tools"


export default {
    data() {
        return {
            integralSetData: {},
            spId: '',
            spName: '',
        };
    },
    mounted(){
        // console.log('--------mounted 安装初始化成功：模板渲染后= 积分设置');
        this.getData();
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
               console.log('--->beforeRouteEnter');
                // vm.getData(1,0);
            } else {
                next('/login');
            }
		})
    },
    methods:{
        zm_timestampToDate(val){
            return zm_timestampToDate(val);
        },
        getData(){
            //请求：回显数据
            let self = this;
            let urlStr = network.integralApiIP + network.int_settingQuery;
            this.$http({
                method: "post",
                url: urlStr,
                'Content-Type':'Application/json',
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),			
                }
            }).then(function(res){
                console.log('---回显数据（统一设置的数据）：response= '+zm_jsonToString(res.data));
                if(res.status ==200){
                    self.integralSetData = res.data.data;
                  
                } else {
                    self.$message.error(res.data.message);
                }
            })
        },
        saveCilck(){
            if(this.integralSetData.gainBuyMoney<=0){
                this.$message.warning('消费必须大于0！'); return;
            }
            if(this.integralSetData.gainBuy<=0){
                this.$message.warning('消费获得积分必须大于0！'); return;
            }
            if(this.integralSetData.gainInvite<=0){
                this.$message.warning('邀请1个新用户注册获得积分必须大于0！'); return;
            }
            if(this.integralSetData.gainSign<=0){
                this.$message.warning('签到获得积分必须大于0！'); return;
            }

            if(this.integralSetData.gainShareItem<=0){
                this.$message.warning('分享商品链接获得积分必须大于0！'); return;
            }
            if(this.integralSetData.gainShareItemMax<=0){
                this.$message.warning('分享商品链接每天最多获得积分必须大于0！'); return;
            }
            if(this.integralSetData.gainRush<=0){
                this.$message.warning('邀请1个新用户参与抢购活动获得积分必须大于0！'); return;
            }
            if(this.integralSetData.gainGroup7<=0){
                this.$message.warning('邀请1个新用户参与7人拼团获得积分必须大于0！'); return;
            }
  
            let params = new FormData();       
            params.append('gainBuyMoney', this.integralSetData.gainBuyMoney);  
            params.append('gainBuy', this.integralSetData.gainBuyMoney); 
            params.append('gainInvite', this.integralSetData.gainInvite); 
            params.append('gainSign', this.integralSetData.gainSign); 
            params.append('gainShareItem', this.integralSetData.gainShareItem); 
            params.append('gainShareItemMax', this.integralSetData.gainShareItemMax); 
            params.append('gainRush', this.integralSetData.gainRush); 
            params.append('gainGroup7', this.integralSetData.gainGroup7); 

            let self = this;
            let urlStr = network.integralApiIP + network.int_settingUpdate;
            
            // console.log('---积分设置保存 params：' + zm_jsonToString(params), 'urlStr= ', urlStr)
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type':'Application/json',
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),			
                }
            }).then(function(res){
                console.log('---积分设置保存 params：'+zm_formDataToString(params) + 'urlStr= '+urlStr 
                +'\n:response= '+zm_jsonToString(res.data));
                if(res.status ==200){
                    self.$message.success("保存成功！");
                    // setTimeout(() =>{
                    //     self.$router.go(-1)
                    // }, 1000);
                    self.getData();
                } else {
                    self.$message.error(res.data.message);
                }
            })
        }

    },
    components:{
        navbar,membersecnavbar,sidebar,goodsSpec,VueCookie
    }
}
</script>


<style scoped >

.mh_title{
    font-size: 15px !important;
}

.immediatelyShangJiaCheck {
    margin-top: 9px;
    margin-left: 10px;
}
.goods_list_dibu-seven{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}


.zm_searchView{
    display: flex;
    margin: 0 0 20px 0;
    width: 300px;
}
.zm_searchView >>> .el-input__icon {
	margin-top: -3px !important;
}
.zm_searchBtn{
    margin: 0 0 0 20px;
}

.saveBtn {
    margin: 60px 0 100px 40%;
}
.subDetail {
    margin: 5px;
    font-size: 12.5px !important;
}
.mh-follow-coupondiv{
    padding-left: 98px;
    margin-top: 20px;
}

.mh-follow-coupontxt .el-input__icon{
    line-height: 32px !important;
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
.spTeammatecount {
    width: 100px;
    height: 26px;
}

.zm_elInput >>> .el-input__inner{
    padding: 0 0px !important;
    text-align: center;
}
.companyEarnings {
    width: 70px;
    height: 26px;
}
.companyEarnings2 {
    width: 100px;
    height: 26px;
}
.partAwardView{
    display: flex;
}
.partAward{
    margin-right: 50px;
}

.rewardPercent {
    width: 50px;
    height: 26px;
    text-align:center;
    border: 1px solid #f0f0ff !important;
}
.rewardMoney{
    width: 60px;
    height: 26px;
    text-align:center;
    border: 1px solid #f0f0ff !important;
    /* border:5px solid red; */
}

</style>



   
            
           