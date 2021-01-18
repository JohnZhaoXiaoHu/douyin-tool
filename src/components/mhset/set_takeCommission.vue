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

                    <!-- 面包屑：导航标题-->
                    <div class="mh-coupon-divtop">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                               <div class="mh_title"> 抽佣设置 </div> 
                        </el-breadcrumb>     
                    </div>
                    <!-- 面包屑over -->
                   
                   <br>
                        <div class="set_dlView">
                            <div class="set_dlView_title">
                                供应商在自己的店铺产生的订单，平台将抽取实收金额的
                            </div>
                            <div>
                                <el-input v-model="fnServMoneySupplier" type="number" class="set_tcInput" placeholder=""></el-input> 
                            </div>
                            <div class="set_dlView_title"> % 作为平台服务费</div>
                        </div>

                        <div class="set_dlView">
                            <div class="set_dlView_title"> 
                                平台或微店分销供应商商品产生的订单，平台将抽取供货价的
                            </div>
                            <div>
                                <el-input v-model="fnServMoneyVshop" type="number" class="set_tcInput" placeholder=""></el-input> 
                            </div>
                            <div class="set_dlView_title"> % 作为平台服务费</div>
                        </div>


                        <el-button class="set_tcSaveBtn" type="primary" @click="request_infoAddOrUpdate">保存</el-button>
                        <br><br><br>
               
                </div>
                <!-- 商品中心over-->
            </div>
        </div>
        <!-- -->

    </div>
    <!--主体 over-->
    </div>
</template>


<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import settingnav from './settingnav';
import network from "../../utils/api";
import {
    zm_jsonToString,
    zm_formDataToString,
} from "../../filters/zm_tools";

export default {
    data() {
        return {
            setInfoData: "",             
            fnServMoneySupplier: "",
            fnServMoneyVshop: "",
        };
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                // vm.request_infoFindBySuserId();
            } else {
                next('/login');
            }
        })
    },
    mounted() {
        // console.log("--------mounted 抽佣设置");
        this.request_infoFindBySuserId(false);
    },
    methods:{
        // 请求：抽佣设置回显
        request_infoFindBySuserId(refresh){
            let self = this;    
            let params = new FormData();
                params.append('suserId', this.$cookie.get('userId'));
            let urlStr = network.userMSIP + network.set_findServiceMoney;
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            }).then(function(response){
                console.log('---抽佣设置回显 urlStr= ', urlStr +'\n:response= '+zm_jsonToString(response.data));
                if(response.data.status == 200){
                    self.setInfoData = response.data.setting;
                    self.fnServMoneySupplier = self.setInfoData.fnServMoneySupplier;
                    self.fnServMoneyVshop    = self.setInfoData.fnServMoneyVshop;
                }
            })
        },
        // 修改平台信息
        request_infoAddOrUpdate(){
            if(this.fnServMoneySupplier=='' || this.fnServMoneySupplier==null){
                this.fnServMoneySupplier = '';
            }
            if(this.fnServMoneyVshop=='' || this.fnServMoneyVshop==null){
                this.fnServMoneyVshop = '';
            }
            let self = this;    
            let params = new FormData();
                params.append('suserId', this.$cookie.get('suserId'));
                params.append('fnServMoneySupplier', this.fnServMoneySupplier);
                params.append('fnServMoneyVshop', this.fnServMoneyVshop);
            let urlStr = network.userMSIP + network.set_updateServiceMoney;
            // console.log('---抽佣设置 urlStr= ', urlStr+ '\n:params'+ zm_formDataToString(params));

            this.$http({
                method: "post",
                url: urlStr,
                data: params
            }).then(function(response){
                console.log('---抽佣设置 urlStr= ', urlStr+ '\n:params'+ zm_formDataToString(params)
                +'\n:response= '+zm_jsonToString(response.data));
                if(response.data.status == 200){
                    self.$message.success("保存成功");
                }
            })
        },
    },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>

<style scoped >

.mh_title{
    font-size: 15px !important;
}

.set_tcSaveBtn{
    margin: 100px 10px 10px 40%;
}
.set_dlView{
    display: flex;
    margin: 10px 10px 30px 0px;
}
.set_dlView_title{
    margin: 6px 5px 0 0;
    text-align: right;
    font-size: 14px !important;
}
.set_tcdl_titleView{
    display:flex; 
    float: right;
}
.set_tcdlView_subTitle{
    margin-top: 10px;
    color: #666666;
}
.set_tcdlView_star{
    color: red;
}
.set_tcInput {
    width: 80px;
    height: 26px;
    margin-left: 5px;
    margin-right: 5px;
}



</style>



   
            
           