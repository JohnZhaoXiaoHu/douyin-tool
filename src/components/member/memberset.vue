<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <membersecnavbar></membersecnavbar>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
               <div class="goods-card_body"  v-loading="loading">
                    <!--会员设置-->
                    <div class="edit-item goods-item goods-set">
                        <div class="edit-info">
                            <h3>指定会员等级</h3>
                            <p>启用后，成为会员时将会设置为指定的会员等级。</p>
                        </div>
                        <div class="goods-item-ctn">
                            <el-switch v-model="value1"></el-switch>
                        </div>
                    </div>

                    <div class="vip-sitting">
                        <span class="vip-sit_span">会员等级：</span>
                        <el-select v-model="value" placeholder="请选择" :disabled="thisdisabled" @change="vipzhimethod">
                            <el-option
                                    v-for="item in options"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </div>

                    <button @click="editvipdengji" type="button"  class="el-button el-button--primary el-button--small" style="margin-top: 10px; margin-left: 150px;"><span>保存</span></button>
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
import membersecnavbar from './membersecnavbar';
import baseapi from '../../utils/api';
export default {
      data() {
        return {
            loading:true,
            thisdisabled:false,
            value1:false,
            value:'',
            options: [],
            vipdengji:[],
            settingVipiD:0
        };
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.Membersetting();
            } else {
                next('/login');
            }
		})
	},
    mounted(){
       
    },
    watch:{
        value1(val, oldval){
            val ? this.thisdisabled = false : this.thisdisabled = true;
        },
        deep:true //true 深度监听
    },
    methods: {
        //会员设置查询接口
        Membersetting(){
            let data = new FormData();
            this.http.post( baseapi.vipsetingquery,data).then(res=>{

               let id = res.data.setting.usGrade;
               if(id > 0 ){
                   this.value1 = true;
                   this.thisdisabled = false;
               }else{
                   this.value1 = false;
                   this.thisdisabled = true;
               }
             
               this.settingVipiD =  res.data.setting.usGrade;
               this.selectvipdenhgji();
               
            })  
        },  
        // 会员设置 -  查询等级列表
        selectvipdenhgji(){
            let that = this;
            let data = new FormData();
            data.append("page",1);  
            data.append("limit",20);  
            this.http.post( baseapi.vipdengjilistnew,data).then(res=>{
                let list = res.data.list;
                list.forEach(item => {
                    if(that.settingVipiD == item.id){
                        that.value = item.name
                    }
                });
                that.options  = res.data.list;
                that.loading = false;
             })  
         },  
        /* 会员设置 -  保存会员等级[接口设置用户等级]*/ 
         editvipdengji(){
            let that = this; 
            let data = new FormData();

            if (this.value1) { 
                if (this.value == '' && this.value == 0) {
                    that.$message.error('请选择会员等级');
                    return false;
                }else{
                      data.append('usGrade',this.value)  
                  
                }
            }else{
                data.append('usGrade',0)  
            }

            this.http.post( baseapi.settingvipdengji,data).then(res=>{
                if (res.data.status ==200) {
                    that.$message.success('设置成功');
                } else {
                    that.$message(res.data.messages)
                } 
            })  
         },
    },
    components:{
        navbar,sidebar,membersecnavbar    
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
</style>