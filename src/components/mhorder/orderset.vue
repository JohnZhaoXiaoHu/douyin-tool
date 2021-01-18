<template>
<!-- 订单设置组件 -->
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <shopnavbar></shopnavbar>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
               <div class="goods-card_body" v-loading="loading">
                    <!--会员设置-->

                    <div class="edit-item goods-item goods-set orderset-div">
                        <div class="edit-info">
                            <h3>订单拆分导出</h3>
                            <p>启用后，订单包含多个商品会导出多条记录。</p>
                        </div>
                        <div class="goods-item-ctn">
                            <el-switch v-model="value1" @change="mhorderswitch"></el-switch>
                        </div>
                    </div>

                    <div class="orderset-sitting">
                       <span>待付款订单取消时间设置</span>
                       <span class="orderju">拍下未付款订单</span>
                       <input type="text" autocomplete="off" v-model="orderone" class="el-input__inner ordersetinput">
                       <span>分钟内未付款，自动取消订单</span>
                    </div>

                    <div class="orderset-sitting">
                        <span>发货后自动确认收货时间设置</span>
                        <span class="orderju">发货</span>
                        <input type="text" autocomplete="off" v-model="ordertwo" class="el-input__inner ordersetinput">
                        <span>天，自动确认收货</span>
                    </div>

                    <div class="orderset-sitting">
                        <span>确认收货后</span>
                        <input type="text" autocomplete="off" v-model="orderthere" class="el-input__inner ordersetinput">
                        <span>天后,关闭售后</span>
                    </div>

                    <button @click="mhorderset" type="button" class="el-button el-button--primary el-button--small"><span>保存</span></button>
                    <!--会员设置over-->
                </div>
                <!-- 商品中心over-->
            </div>
        </div>
        <!--   over     -->
    </div>
    <!--主体 over-->
    </div>
</template>
<script> 
import navbar from '../navbar';
import sidebar from '../sidebar';
import shopnavbar from './shopnavbar';
import baseapi from '../../utils/api';
export default {
      data() {
        return {
            value1:'1',
            splitExport:0,
            orderone:0,
            ordertwo:0,
            orderthere:0,
            options: [] ,
            loading:true
        };
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.adminOrder();
            } else {
                next('/login');
            }
		})
	},
    mounted(){

       
    },
    methods: {
        mhorderswitch(){
            if(this.value1){
                this.splitExport = 1;
            }else{
                this.splitExport = 0;
            }
        },
        //回显示
        adminOrder(){
            let that = this; 
            let data = new FormData();
            this.http.post( baseapi.adminorderSetall,data).then(res=>{
                console.log(res.data.setting);

                if(JSON.stringify(res.data.setting) == "{}"){
                    that.loading = false;
                    return false;
                }
                if(res.data.setting.splitExport == 1){
                    that.value1 = true;
                }else{
                     that.value1 = false;
                }
                that.orderthere =  parseInt(res.data.setting.shutdownAftersale/24) //确认收货后关闭售后时间内 小时
                that.ordertwo = parseInt(res.data.setting.autoConfirmReceipt/24);//自动收货  小时
                that.orderone = parseInt(res.data.setting.autoCancelOrder/60); //自动取消  分钟
                that.loading = false;
            }) 
        },
        mhorderset(){
        //goodsseeting
          let that = this; 
          let data = new FormData();
            data.append('splitExport', this.splitExport); 
            data.append('autoCancelOrder',parseInt(that.orderone*60));      //代付款订单
            data.append('autoConfirmReceipt',parseInt(that.ordertwo*24));
            data.append('shutdownAftersale',parseInt(that.orderthere*24));
            this.$http({
                method: "post",
                url: baseapi.goodsseeting,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId')  }
            })
            .then(function(res){
                console.log(res);
                    if(res.data.status ==200) {
                        that.$message.success("保存成功");             
                    }
                    if(res.data.status ==500){
                         that.$message(res.data.message);      
                    }
                    
            }).catch(function(err){
                    that.$message("保存失败");
                    console.log(err);
            });
        }
    },
    components:{
        navbar,sidebar,shopnavbar    
    }
}
</script>
<style lang="">
.vip-sitting .el-input__inner{
    height: 32px;
    line-height: 32px;
}
.vip-sitting  .el-input__suffix .el-input__icon{
    line-height: 32px;
}
.vip-sit_span{
    color: #606266;
    padding: 0 12px 0 0;
    display: inline-block;
    width: 100px;
    font-size: 12px;
    text-align: right;
}

.orderset-sitting{
    display: flex;
    align-items: center;
    color: rgba(0,0,0,.85);
    font-family: Avenir,Helvetica,Arial,sans-serif;
    font-size: 12px;
    margin-bottom: 14px
}

.orderju{
    margin-left: 10px
}
.orderset-div{
    margin-bottom: 22px!important
}
</style>