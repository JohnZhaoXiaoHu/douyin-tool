<template>
<!-- 活动列表页面 -->
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
                            <el-breadcrumb-item :to="{ path: '/marketing/source' }">素材</el-breadcrumb-item>             
                        </el-breadcrumb> 
                    </div>
                    <!-- 面包屑over -->
                    
                     <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="活动素材" name="first">
                            <div class="mh-coupon-newcreat_btn">
                                <el-button type="primary" size="small" @click="intoActSon">创建活动素材</el-button>
                            </div>
                            <div class="shuaixuan vip-alllist vip-xxxx">
                                <div class="m-search-box el-row el-row-my-div">
                                    <div class="sx-input">
                                        <label class="el-form-item__label" style="width: 190px;min-width: 128px">素材名称: </label>
                                        <el-input v-model="value1" placeholder="" ></el-input>
                                    </div>

                                    <div class="vip-item-list_time mh-market-timeleght mh-mk-source" >
                                        <label class="el-form-item__label" style="width: 190px;">创建时间：</label>
                                        <el-date-picker 
                                                v-model="value2"
                                                value-format="timestamp"
                                                type="daterange"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                style="width: 100%"
                                                end-placeholder="结束日期">
                                        </el-date-picker>
                                    </div>
                                </div>
                                <div class="goods-sx-btn">
                                    <button  type="button" class="el-button el-button--primary el-button--small"><span>筛选</span></button>
                                    <button  type="button" @click="clearEv" class="el-button el-button--text"><span>清空筛选条件</span></button>
                                </div> 

                            </div>
                            <!--  -->
                            <div>
                                <el-table
                                    :data="tableData"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="name"
                                        label="名称"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                        prop="createTime"
                                        label="创建时间"
                                    >
                                    <template slot-scope="scope">
                                            <div>
                                               {{scope.row.createTime | date}}
                                            </div>
                                    </template>

                                    
                                    </el-table-column>
                                    <el-table-column
                                        prop="userId"
                                        label="创建人"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                        prop="status"
                                        label="状态"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="操作">
                                    <template slot-scope="scope">
                                            <div>
                                                <button @click="intoActSonEdit(scope.row.id)" type="button" class="el-button el-button--default el-button--mini"><span>编辑</span></button>
                                                <button type="button" class="el-button el-button--danger el-button--mini"><span>禁用</span></button>
                                                <button @click="delectSucai(scope.row.id)" type="button" class="el-button el-button--danger el-button--mini"><span>删除</span></button>           
                                            </div>
                                        </template>
                                    </el-table-column>
                                </el-table>

                            </div>
                           
                            <div class="mh-source">
                            <!-- small sizes-->
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="total">
                                </el-pagination>
                            </div>

                        </el-tab-pane>
                        <el-tab-pane label="商品素材" name="second">
                            <div class="mh-coupon-newcreat_btn">
                                <el-button type="primary" size="small" @click="intoGoodsActSon">创建商品素材</el-button>
                            </div>
                            <div class="shuaixuan vip-alllist vip-xxxx">
                                <div class="m-search-box el-row el-row-my-div">
                                    <div class="sx-input">
                                        <label class="el-form-item__label" style="width: 190px;min-width: 128px">素材名称: </label>
                                        <el-input v-model="value1" placeholder="" ></el-input>
                                    </div>

                                    <div class="vip-item-list_time mh-market-timeleght mh-mk-source">
                                        <label class="el-form-item__label" style="width: 190px;">创建时间：</label>
                                        <el-date-picker 
                                                v-model="value2"
                                                value-format="timestamp"
                                                type="daterange"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                style="width: 100%"
                                                end-placeholder="结束日期">
                                        </el-date-picker>
                                    </div>
                                </div>
                                <div class="goods-sx-btn">
                                    <button  type="button" class="el-button el-button--primary el-button--small"><span>筛选</span></button>
                                    <button  type="button" @click="clearEv" class="el-button el-button--text"><span>清空筛选条件</span></button>
                                </div> 

                            </div>
                            <!--  -->
                              <div>
                                <el-table
                                    :data="tableData"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="name"
                                        label="名称"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                        prop="createTime"
                                        label="创建时间"
                                    >
                                    <template slot-scope="scope">
                                            <div>
                                               {{scope.row.createTime | date}}
                                            </div>
                                    </template>

                                    
                                    </el-table-column>
                                    <el-table-column
                                        prop="userId"
                                        label="创建人"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                        prop="status"
                                        label="状态"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="操作">
                                    <template slot-scope="scope">
                                            <div>
                                                <button @click="intoActSonEdit(scope.row.id)" type="button" class="el-button el-button--default el-button--mini"><span>编辑</span></button>
                                                <button type="button" class="el-button el-button--danger el-button--mini"><span>禁用</span></button>
                                                <button @click="delectSucai(scope.row.id)" type="button" class="el-button el-button--danger el-button--mini"><span>删除</span></button>           
                                            </div>
                                        </template>
                                    </el-table-column>
                                </el-table>

                            </div>
                           
                            <div class="mh-source">
                            <!-- small sizes-->
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="total">
                                </el-pagination>
                            </div>

                           
                        </el-tab-pane>
                    </el-tabs>
                
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

import {
        zm_jsonToString,
        zm_formDataToString,
        zm_tipsMsg,
        zm_timestampToDate,    
        zm_getCurrenDate,
        zm_getCurrenTimestamp,
        zm_standardDateToFormatDate
} from "../../../filters/zm_tools"


export default {
 
    filters: {
        date(date) {
            var dateee = new Date(date).toJSON();
            return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
        },
    },
    data() {
        return {
           
            activeName: 'first',


            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
            tableData: [],
            value1:'',
            value2:'',

            tabindex:1,
            valindex:1,
            total:0
        };
    },
    mounted(){
        if (this.$route.params.id == 1) {
            this.activeName = 'first';
        } else {
            this.activeName = 'second';
        }
        this.getdata(2,1);

    },
    methods:{
        //请求素材列表
        getdata(type,page){
            let that = this;
            let data = {
                'type':type,
                // 'name':'',
                // 'beginTime':'',
                // 'endTime':'',
                'pageParams':{
                    'page':page,
                    'size':20
                }
            }
            console.log('---素材 prarms=' +JSON.stringify(data));
            this.$http({
                method: "POST",
                url:API.PIP+'/miniprogram/saas/matter/query.do?openId='+that.$cookie.get('openId'),
                data: JSON.stringify(data),
                headers:{'Content-Type':'application/json', Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                console.log('---素材=' +zm_jsonToString(res.data));
                if(res.data.status == 200){

                    that.tableData = res.data.data.list;
                    that.total  = res.data.data.total;
                    
                    // that.$message.success(res.data.message);
                    // that.getAadmindata();
                }else{
                    that.$message.error('状态:'+res.data.status + ' ,错误信息'+res.data.message);
                }     
            })
        },
        //删除素材
        delectSucai(id){
            let that = this;
            let data = {
                'id':id
            }
            this.$confirm('确认删除该素材?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                this.$http({
                    method: "POST",
                    url:API.PIP+'/miniprogram/saas/matter/remove.do?openId='+that.$cookie.get('openId'),
                    data: JSON.stringify(data),
                    headers:{'Content-Type':'application/json', Authorization:`Bearer ${that.$cookie.get('token')}`}
                })
                .then(function(res){
                    console.log(res);
                    if(res.data.status == 200){
                        that.$message.success(res.data.message);
                        that.getdata(that.tabindex,that.valindex)
                    }else{
                        that.$message.error('状态:'+res.data.status + ' ,错误信息'+res.data.message);
                    }     
                })
            })
        },
        clearEv(){
            this.value1 = '';
            this.value2 = '';
        },
        handleClick(tab, event) {
            this.tabindex = Number(tab.index) + 1;
            console.log(this.tabindex);
            this.getdata(this.tabindex,this.valindex);
        
        },
         handleCurrentChange(val) {
            this.valindex = val;
            this.getdata( this.tabindex,this.valindex)
        },
        intoActSonEdit(papams){
            this.$router.push({
                path: `/marketing/goodsMaterial/${papams}`
            }) 
        },
         intoActSon(){
            this.$router.push({
                path: `/marketing/activityMaterial`
            }) 
        },
        intoGoodsActSon(){
            this.$router.push({
                path: `/marketing/activityMaterial`
            }) 
        }
    },
    components:{
        navbar,marknav,sidebar 
    }
}
</script>
<style>
.mh-mk-source .el-date-editor .el-range__icon{
    line-height:25px !important
}
.mh-mk-source  .el-date-editor .el-range-separator{
     line-height:26px !important
}
.mh-source .el-pagination{
    display: flex;
    justify-content:flex-end;
    margin: 10px 0;
}
</style>



   
            
           