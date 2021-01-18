<template>
<!-- 余额记录 -->
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <financenavbar/>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div class="goods-card_body"  v-loading="loading">
                    
                    <!--选项卡组件-->
                    <div>
                        <div class="shuaixuan vip-alllist vip-xxxx" style="padding:0 20px;box-sizing:border-box">
                        <div class="m-search-box el-row el-row-my-div">
                            <div class="sx-input">
                                <label class="el-form-item__label" style="width: 120px;">会员ID : </label>
                                <el-input v-model="value1" placeholder="" ></el-input>
                            </div>

                            <div class="vip-item-list_time mh-market-timeleght mh-finance-balancceinput">
                                <label class="el-form-item__label" style="width: 120px;">创建时间 : </label>
                                <el-date-picker 
                                        v-model="value3"
                                        value-format="timestamp"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        style="width: 100%"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </div>

                        </div>
                    

                        <div style="padding-left:95px">
                            <button @click="shuaixuan"  type="button" class="el-button el-button--primary el-button--small"><span>筛选</span></button>
                            <button @click="clearData"  type="button" class="el-button el-button--text"><span>清空筛选条件</span></button>
                        </div> 

                    </div>
                
                    <template>
                        <el-table
                            :data="balancedata"
                            border
                            stripe
                            style="width: 100%">
                                <el-table-column  
                            prop="userId"                                                       
                            label="会员ID">
                            </el-table-column>  
                            <el-table-column  
                            prop="userNickName"                                                       
                            label="昵称/手机号">
                            <template slot-scope="scope">
                                <div class="mh-finance-tab-div">
                                    <div>{{scope.row.userNickName ? scope.row.userNickName : ''}}</div>  
                                        <div>{{scope.row.userPhone ? parseFloat(scope.row.userPhone) : ''}}</div>                                    
                                </div>
                            </template>
                            </el-table-column>  

                            <el-table-column
                                label="变动前">
                                <template slot-scope="scope">
                                <div class="goods-table">
                                    <span>{{parseFloat(scope.row.balanceBefore/100)}}</span>                                       
                                </div>
                            </template>
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                label="变动金额">
                                <template slot-scope="scope">
                                <div class="goods-table">
                                    <span v-if="parseFloat(scope.row.money/100) > 0"  style="color:#5Cb87A">+{{parseFloat(scope.row.money/100)}}</span>  
                                    <span v-if="parseFloat(scope.row.money/100) < 0"  style="color:#F56C6C">{{parseFloat(scope.row.money/100)}}</span>                                      
                                </div>
                            </template>
                                show-overflow-tooltip>
                        </el-table-column>
                                <el-table-column
                                label="变动后">
                                <template slot-scope="scope">
                                <div class="goods-table">
                                    <span>{{parseFloat(scope.row.balanceAfter/100)}}</span>                                       
                                </div>
                            </template>
                                show-overflow-tooltip>
                        </el-table-column>
                            <el-table-column
                            prop="typeMsg"
                            label="类型"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="createTime"              
                            label="创建时间">
                            <template slot-scope="scope">
                                <div>
                                    {{scope.row.createTime.time | dateFormat}}
                                </div>
                            </template>
                            </el-table-column>
                                <el-table-column
                            prop="remark"
                            label="备注">
                            </el-table-column>                      
                        </el-table>
                        </template>
                      
                    <div class="el-row goods_list_dibu" style="margin-top:10px;padding-bottom:10px">
                        <div class="goods_list_dibu-onediv"></div>
                        <div class="goods_list_dibu-twodiv">
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[100, 200, 300, 400]"
                                    :page-size="20"
                                    layout="total, prev, pager, next, jumper"
                                    :total="fourthtotalCount">
                            </el-pagination>
                        </div>
                        </div>
                    </div>
                    </div>
                    <!--选项卡组件 over-->         
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
import financenavbar from './financenavbar';
import baseapi from '../../utils/api';

export default {
    data() {
        return {
            value1:'',
            value3:[],
            fourthtotalCount:'',
            balancedata:[],
            loading:true
        };
    },
    mounted(){
        this.CommissionMethod();
    },
    methods:{
        //佣金记录
        CommissionMethod(page=1){
            let that = this;
            let data = new FormData();
            if(this.value1 != ''){
                 data.append('suid',this.value1);//账号手机号
            }
       
            if(this.value3.length != 0){
                data.append('sptimestart',this.value3[0]);
                data.append('sptimeend',this.value3[1]); 
            }


            data.append('page',page);
            data.append('limit',20);
            this.$http({
                method: "post",
                url: baseapi.balanceApi,
                data: data
            })
            .then(function(res){
              if(res.data.status ==200){
                console.log('余额记录',res);
                that.balancedata = res.data.list;
                that.fourthtotalCount = res.data.totalCount;
                that.loading = false;
              }
              if(res.data.status != 200){
                  that.$message.error(res.data.message)
              }   
            })
        },
        shuaixuan(){
            this.CommissionMethod();
        },
        clearData(){
            this.value1 = '';
            this.value3 = '';
        },
        handleCurrentChange(val){
            this.CommissionMethod(val);
        }
    },
    components:{
        navbar,sidebar,financenavbar    
    }
}
</script>
<style>
    .mh-finance-tab-div{
        display: flex;
        flex-direction: column;
    }


</style>



   
            
           