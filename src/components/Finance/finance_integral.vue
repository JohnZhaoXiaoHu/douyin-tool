<template>
<!-- 佣金记录 -->
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <financenavbar/>
            <div class="main-goods-right" >
                <!-- 商品中心内容 -->
                <div class="goods-card_body" v-loading="loading">
                    
                    <!--选项卡组件-->
                    <div>
                        <div class="shuaixuan vip-alllist vip-xxxx" style="padding:0 20px;box-sizing:border-box">
                        <div class="fi_searchView" >
                            <div class="sx-input">
                                <label class="el-form-item__label" style="width: 100px;">会员ID : </label>
                                <el-input v-model="value1" placeholder="" type="number" style="width: 200px;"></el-input>
                            </div>

                            <div class="vip-item-list_time mh-market-timeleght mh-finance-balancceinput" >
                                <label class="el-form-item__label" style="width: 100px;">创建时间 : </label>
                                <el-date-picker class="datePickerView" v-model="value3" value-format="timestamp" style="width:260px;"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
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
                        <el-table :data="commdata" border stripe style="width: 100%">
                            <el-table-column prop="userId" label="会员ID" width="80" align="center"> </el-table-column>  
                            <el-table-column  prop="userNickName" label="昵称/手机号" align="center"> 
                                <template slot-scope="scope">
                                    <div>  {{scope.row.userNickName}}  </div>
                                    <div>  {{scope.row.userPhone}}  </div>
                                </template>
                            </el-table-column>  
                            <el-table-column label="变动前" align="center"> 
                                <template slot-scope="scope">
                                    <div>累积积分：{{scope.row.integralBefore}}  </div>
                                    <div>可用积分：{{scope.row.usableBefore}}  </div>
                                </template>
                            </el-table-column>  
                            <el-table-column prop="integral" label="积分变动" width="90" align="center"> </el-table-column>  
                            
                            <el-table-column label="变动后" align="center"> 
                                <template slot-scope="scope">
                                    <div>累积积分：{{scope.row.integralAfter}}  </div>
                                    <div>可用积分：{{scope.row.usableAfter}}  </div>
                                </template>
                            </el-table-column>  
                            <el-table-column label="类型" align="center"> 
                                <template slot-scope="scope">
                                    <div>{{ getIntegralTypeName(scope.row.type) }}  </div>
                                </template>
                            </el-table-column>  

                            <el-table-column prop="createTime" label="申请时间" width="135" align="center">
                                <template slot-scope="scope">
                                    <div>{{scope.row.createTime.time | dateFormat}}</div>
                                </template>
                            </el-table-column>
                        
                            <el-table-column prop="remark" label="备注" align="center">
                                <template slot-scope="scope">
                                    <div v-if="scope.row.remark">{{scope.row.remark}}</div>
                                </template>
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
                                    :total="fivetotalCount">
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
import network from '../../utils/api';
import {
    zm_jsonToString,
    zm_formDataToString,
    // zm_tipsMsg,
    // zm_timestampToDate,
    // zm_standardDateToFormatDate,
    } from "../../filters/zm_tools";

export default {
    data() {
        return {
            value1:'',
            value3:[],
            fivetotalCount:'',
            commdata:[],
            loading:true,
            integralTypeList: [],
            integralTypeDic: {},
        };
    },
    mounted(){
        this.request_integralTypeList();
        
    },
    methods:{
        getIntegralTypeName(type){
            if (type*1 > 9) {
                return '';
            }
            var integralType = this.integralTypeDic[type]
            return integralType.property;
        },
        //积分记录
        request_integralTypeList(){
            let that = this;
            let data = new FormData();
            let urlStr = 'http://106.15.192.67:8080/order/dict/type?t=27';
            this.$http({
                method: "get",
                url: urlStr,
                data: data
            }).then(function(res){
                // console.log('---积分类型：response= '+zm_jsonToString(res.data));
                if(res.data.status ==200){
                    // that.integralTypeList = res.data.data.list;
                    that.integralTypeDic = res.data.data;
                    that.request_integralList();
              }
              if(res.data.status != 200){
                  that.$message.error(res.data.message)
              }   
            })
        },
        //积分记录
        request_integralList(page=1){
            let that = this;
            let data = new FormData();
            let urlStr = network.integralApiIP + network.int_list;
            if(this.value1 != ''){
                 data.append('uid',this.value1);
            }
            if(this.value3.length != 0){
                data.append('startTime',this.value3[0]);
                data.append('endTime',  this.value3[1]); 
            }
            data.append('page',page);
            data.append('limit',20);
            this.$http({
                method: "post",
                url: urlStr,
                data: data
            }).then(function(res){
              if(res.data.status ==200){
                console.log('---积分记录：response= '+zm_jsonToString(res));
                that.commdata       = res.data.list;
                that.fivetotalCount = res.data.totalCount;
                that.loading = false;
              }
              if(res.data.status != 200){
                  that.$message.error(res.data.message)
              }   
            })
        },
        shuaixuan(){
           this.request_integralList();
        },
        handleCurrentChange(val){
            this.request_integralList(val);
        },
        clearData(){
            this.value1 = '';
            this.value3 = '';
        }
    },
    components:{
        navbar,sidebar,financenavbar    
    }
}
</script> 

<style>
.fi_searchView{
    display: flex;
}
.datePickerView{
    width: 300px;
}
</style>

   
            
           