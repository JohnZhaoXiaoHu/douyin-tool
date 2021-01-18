<template>
<!-- 创建活动页面 -->
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <marknav></marknav>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div>
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing">
                        <div class="mh-coupon-divtop" style="height:31px">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/marketing' }">营销概况</el-breadcrumb-item>
                                <el-breadcrumb-item :to="{ path: '/marketing/source/1' }">素材</el-breadcrumb-item>
                                <el-breadcrumb-item :to="{ path: '/marketing/activityMaterial' }">活动素材</el-breadcrumb-item>
                            </el-breadcrumb>     
                        </div>

                        <div class="mh-act-main">
                                <el-form ref="form" :model="form" label-width="80px">
                                    <el-form-item label="素材名称">
                                        <el-input style="width:300px" v-model="form.name"></el-input>
                                    </el-form-item>


                                    <el-form-item label="素材类型">
                                         <el-radio-group v-model="form.type">
                                            <el-radio label="商品素材"></el-radio>
                                            <el-radio label="活动素材"></el-radio>
                                        </el-radio-group>
                                    </el-form-item>

                                    <div class="mh-act-imgcnt">
                                        <div class="mh-act-name">素材文案(限700字)</div>
                                        <el-input type="textarea" v-model="form.desc" :rows="10" maxlength="700" show-word-limit></el-input>
                                    </div>

                                    <div class="mh-act-imgcnt">
                                        <div class="mh-act-name">素材图片(不超过8张,建议尺寸 750px)</div>
                                        <div style="display:flex">
                                            <div class="mh-act-imgcnt-img"> 
                                                <block v-for="(item,index) of imgarrT" :key="index">
                                                    <img :src="item" alt="" width="82" height="82">
                                                </block>
                                            </div>
                                            <div class="mh-act-k" @click="openImgSon">
                                                <i class="el-icon-plus mh-goods-resimg-i"></i>
                                            </div>
                                        </div>
                                    </div>

                                     <div class="mh-act-imgcnt" v-if="statusType">
                                        <div class="mh-act-name" style="margin-bottom:12px"> <el-button type="warning" size="small" @click="selectGoods">关联商品</el-button></div>
                                        <div>
                                           <div class="mh-act-imgcntdv" v-if="goodsMap.id != ''">
                                               <img :src="goodsMap.imageUrl" alt="" sizes="" srcset="">
                                               <div>
                                                   <span>{{goodsMap.name}}</span>
                                                   <div class="mh-act-imgcntdv-d2">
                                                       <span style="display: inline-block;margin-right:10px">{{goodsMap.skuList[0].price/100}}</span>
                                                       <span>{{goodsMap.skuList[0].priceCost/100}}</span>
                                                   </div>
                                               </div>
                                           </div>
                                        </div>
                                    </div>

                                    <el-form-item size="large">
                                        <el-button type="primary" @click="setSucai">立即创建</el-button>
                                        <el-button @click="cancelEv">取消</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                         
                            <goodsSpec ref="goodsSpec"></goodsSpec>
                            <imgsrc ref="imgsrc"></imgsrc>
                    </div>    
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

import navbar from '../../navbar';
import sidebar from '../../sidebar';
import marknav from '../marknav';
import API from '../../../utils/api';
import goodsSpec from '../../resource/allgoods';

import imgsrc from '../../resource/imgsrc';
export default {
    data() {
        return {
            imgarrT:[],
            goodsMap:{
                skuList:[{'price':0}],
                id:''
            },
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: '活动素材',
                resource: '',
                desc: ''
            },
            statusType:false,
        };
    },
    watch:{
        'form.type':{//深度监听，可监听到对象、数组的变化
        handler(val, oldVal){
            console.log(val);
            if(val == '商品素材'){
                this.statusType = true;
            }else{
                 this.statusType = false;
            }
        },
        deep:true //true 深度监听
        }
    },
    mounted(){
    
    },
    methods:{   
        setSucai(){

            let nameNumer = 1;
            if(this.form.type == '商品素材'){
                nameNumer = 2;
            }
            if(this.form.type == '活动素材'){
                nameNumer = 1;
            }

            let that = this;
            let data = {
                'type':nameNumer,
                'name':this.form.name,
                'content':this.form.desc,
                'images':this.imgarrT.join(','),
                'spu':this.goodsMap.id || '',
                'spuContent' : JSON.stringify(this.goodsMap)
            }
            this.$http({
                method: "POST",
                url:API.PIP+'/miniprogram/saas/matter/add.do?openId='+that.$cookie.get('openId'),
                data: JSON.stringify(data),
                headers:{'Content-Type':'application/json', Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 200){
                    that.$message.success(res.data.message);
                    if(that.form.type == '商品素材'){
                        that.$router.push({
                            path: `/marketing/source/2`
                        }) 
                    }
                    if(that.form.type == '活动素材'){
                        that.$router.push({
                            path: `/marketing/source/1`
                        }) 
                    }

                }else{
                    that.$message.error('状态:'+res.data.status + ' ,错误信息'+res.data.message);
                }     
            })
        },
        cancelEv(){
            if(this.form.type == '商品素材'){
                this.$router.push({
                    path: `/marketing/source/2`
                }) 
            }
            if(this.form.type == '活动素材'){
                this.$router.push({
                    path: `/marketing/source/1`
                }) 
            }
        },
        onSubmit(){
            
        },
        //图片弹窗事件
        openImgSon(){
            this.$refs.imgsrc.imgdialogFormVisible = true;
            this.$refs.imgsrc.pid = 99;
        },
        selectGoods(){
                //属性弹框组件
            this.$refs.goodsSpec.upgoodsvalue = true;
        }
    },
    components:{
        navbar,marknav,sidebar,goodsSpec,imgsrc
    }
}
</script>
<style>

.mh-act-imgcntdv{
    display: flex;
    align-items: center;
    border: 2px solid #eee;
    width: 300px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.mh-act-imgcntdv img{
    width: 160px;
    height: 80px;
    margin-right:12px ;
}
.mh-act-imgcntdv span{
    color: #606266;
}
.mh-act-imgcntdv-d2 span:last-child{
    text-decoration:line-through
}

.mh-act-main{
    width: 60%;
}
.mh-act-k{
    width: 80px;
    height: 80px;
    border: 1px dashed #ccc;
    text-align: center;
    position: relative;
    cursor: pointer;
}

.mh-act-name{
    color: #606266;
    line-height: 40px;
    height:40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.mh-act-imgcnt{
    padding: 0 22px;
    box-sizing: border-box;
    margin-bottom: 20px;
}
.mh-act-imgcnt-img{
    display: flex;
    flex-wrap: wrap;
    
}
.mh-act-imgcnt-img img{
    margin-right: 12px;
    border-radius: 6px;
}
</style>



   
            
           