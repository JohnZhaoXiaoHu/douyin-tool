<template>
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
                        <!-- 面包屑 -->
                        <div class="mh-coupon-divtop">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/marketing' }">营销概况</el-breadcrumb-item>
                                <el-breadcrumb-item :to="{ path: '/marketing/collage' }">拼团</el-breadcrumb-item>
                                <el-breadcrumb-item>新增拼团活动</el-breadcrumb-item>
                            </el-breadcrumb>    
                        </div>
                        <!-- 面包屑over -->

                        <div class="mh-coup_detail-wx-mian">
                   
                            <di class="mh-coup_detail-wxright-mian">
                                <el-form ref="form" :model="form" label-width="80px"> 

                                    <el-form-item label="选择商品 :" label-width="115px">
                                        <div>
                                            <div class="mh-xxcard-add-coup"><i class="iconfont icon-add1" style="color: rgb(64, 158, 255);"></i></div>
                                        </div>
                                      
                                    </el-form-item>  

                                    
                                    <el-form-item label="现金红包名称 :" label-width="115px">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>  
                               
                                  
                                    <el-form-item label="活动名称 :" label-width="115px">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>  

                                    <el-form-item label="生效时间 :" label-width="115px">
                                        <div class="mh-collage-sxtime_div"> 
                                                <el-date-picker
                                                v-model="value1"
                                                type="datetimerange"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                                </el-date-picker>
                                        </div>
                                   </el-form-item> 
                                  
                             
                                    <el-form-item label="参团人数 :" label-width="115px">
                                        <el-input v-model="form.name"></el-input>
                                        <span class="mh-coup-wxright-span">请填写2-100的数字</span>
                                    </el-form-item>  

                                     <el-form-item label="拼团有效期 :" label-width="115px">
                                         <div>
                                            <el-select v-model="value" placeholder="请选择">
                                                <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                            <span>日</span>
                                         </div>
                                      
                                    </el-form-item>  

                                    <el-form-item label="商品限购 :" label-width="115px">
                                         <div class="mg-collage-div">
                                           <el-switch
                                                v-model="form.value1"
                                            >
                                            </el-switch>

                                            <div class="mg-collage-div_div">
                                                <el-input v-model="number" type="number"></el-input>
                                                <span>件/人</span>
                                            </div>
                                         </div>                     
                                    </el-form-item> 

                                    <el-form-item label="已抢数量 :" label-width="115px">
                                        <el-input v-model="form.name" placeholder="已抢数量"></el-input>
                                    </el-form-item>  

                                    <el-form-item label="凑团设置 :" label-width="115px">
                                        <div>
                                             <el-checkbox v-model="checked">开启凑团</el-checkbox>
                                        </div>
                                        <span class="mh-coup-wxright-span">开启凑团后，对于未参团的买家，活动商品详情页会显示未成团的团列表，买家可以直接任选一个参团，提升成团率。</span>                                  
                                    </el-form-item> 

                                    <el-form-item label="是否返佣 :" label-width="115px">
                                         <div class="mg-collage-div">
                                           <el-switch
                                                v-model="form.value1"
                                            >
                                            </el-switch>
                                         </div>
                                         <span class="mh-coup-wxright-span">关闭后，将不参与返佣</span>
                                    </el-form-item> 

                                    <el-form-item label="营销活动 :" label-width="115px">
                                         <div class="mg-collage-div">
                                           <el-switch
                                                v-model="form.value1"
                                            >
                                            </el-switch>
                                         </div>
                                         <span class="mh-coup-wxright-span">关闭后，不需要先关注公众号</span>
                                    </el-form-item> 

                                    <el-form-item label="团长享受优惠价 :" label-width="115px">
                                        <div>
                                             <el-checkbox v-model="checked">开启凑团</el-checkbox>
                                        </div>
                                        <span class="mh-coup-wxright-span">开启团长(开团人)优惠后，团长将享受更优惠价格，有助于提高开团率和成团率。</span>                                  
                                    </el-form-item> 
                              
                                    <div class="mh-coup_detail-wxright-tijiao">
                                        <el-button type="primary" size="small">提交</el-button>
                                        <button type="button" class="el-button el-button--default el-button--small"><span>取消</span></button>
                                    </div>

                                </el-form>
                            </di>

                        </div>

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
import baseapi from '../../../utils/api';
export default {
    data() {
        return {
            form:{
                value1:true,
                name:'',
                resource:'1',
                price:0,
                fafang:'',
                dengji:[]
            }
        };
    },
    mounted(){
    },
    methods:{
  
    },
    components:{
        navbar,marknav,sidebar 
    }
}
</script>
<style>
.mh-coup_detail-wxright-goods{
    box-sizing: border-box;
    background-color: #fff;
    padding: 0.1px;
  
}
.mh-coup_detail-wxright-mian   .el-form-item{
    margin-bottom: 14px;
}
.mh-coup-wxright-mianh1{
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0 !important;
}
.mh-coup-wxright-miandiv{
    display: flex;
    align-items: center;
    color: #9a9a9a;
}
.mh-coup-wxright-miandiv .el-input{
    width: 173px;
    margin-right: 10px;
}
.mh-coup-wxright-span{
      color: #9a9a9a;
}
.mh-coup_detail-wxright-tijiao{
    display: flex;
    justify-content: center;
}
.mh-coup_detail-wxright-mian{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    margin-left: 15px;
    background-color: #f8f8f8;
    padding: 20px;
}
.mh-xxcard-add-coup{
    position: relative;
    width: 80px;
    height: 80px;
    cursor: pointer;
    margin: 10px;
    border: 1px dashed #ddd;
    background-color: #fff;
    text-align: center;
    line-height: 80px;
}

.mg-collage-div{
    display: flex;
    align-items: center
    ;
}
.mg-collage-div_div{
    display: flex;
    align-items: center ;
}
.mg-collage-div_div>span{
    width: 40px;
    display: inline-block;
    margin-left: 6px;
}

.mg-collage-div_div .el-input{
    margin-left: 10px;
}



.mh-collage-sxtime_div .el-input__icon{
    line-height: 25px !important;
}

.mh-collage-sxtime_div .el-range-separator{
    line-height: 26px !important;
}
</style>
