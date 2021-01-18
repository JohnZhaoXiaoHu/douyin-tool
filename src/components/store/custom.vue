<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <storesecnavbar></storesecnavbar>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
               <div class="goods-card_body" v-loading="loading">
                    <!--小程序店主页-->
                    <div class="store-header-zidingyi">

                    <router-link to='/wxstore/custom/add'>
                         <el-button type="primary" size="small">新建自定义模块</el-button>

                    </router-link>                
                        <!-- <div class="el-input el-input--prefix" style="float: right; width: 200px;"><input type="text" autocomplete="off" placeholder="搜索" class="el-input__inner"><span class="el-input__prefix"><i class="el-input__icon el-icon-search"></i></span></div> -->
                    </div>


                    <div class="store-table">
                        <el-table
                                :data="tableData"
                                stripe
                                style="width: 100%">
                            <el-table-column
                                    prop="customName"
                                    label="名称"
                                   >
                            </el-table-column>
                            <!-- <el-table-column
                                    prop="customDescription"
                                    label="描述"
                                   >
                            </el-table-column> -->
                   
                            <el-table-column
                                    prop="name"
                                    label="共应用次数"
                                  >
                            </el-table-column>
                            <el-table-column
                                    prop="handle"
                                    label="操作"
                                  >
                                <template slot-scope="scope">
                                    <div>
                                        <button @click="edit(scope.row.id)" type="button"  class="el-button el-button--default el-button--mini"><span>编辑</span></button>
                                        <button @click="delect(scope.row.id)" type="button" class="el-button el-button--danger el-button--mini"><span>删除</span></button>
                                        <!-- <button type="button" class="el-button el-button--default el-button--mini"><span>推广</span></button> -->
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="store_page">
                        <!-- small sizes-->
                        <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage4"
                                :page-sizes="[100, 200, 300, 400]"
                                :page-size="100"
                                layout="total, prev, pager, next, jumper"
                                :total="contentlength">
                        </el-pagination>
                    </div>
                    <!--小程序店铺主页over-->
                </div>
                <!-- 商品中心over-->
            </div>
        </div>  <!----> 
    </div>
    <!--主体 over-->
    </div>
</template>
<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import storesecnavbar from './storesecnavbar';
import UTIL from "../../utils/utils";
import { formatDate } from "../../filters/date";
export default {
    data() {
        return {
          tableData: [],
            currentPage4: 0, //分页
            contentlength:0,
            loading:true

        };
    },
    filters: {
        formatDate(time) {
            let date = new Date(time)
            return formatDate(date, 'yyyy-MM-dd hh:mm')
          
        }
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.getData();
            } else {
                next('/login');
            }
		})
	},
    mounted(){
       
    },
    methods: {
        getData(){
            let self = this;
            UTIL.vueRequest(self, "/miniprogram/wx/custom/get.do", "post", "json", {lastModify : 0,page:1,limit:20},
            "Content-Type: application/json;charset=utf-8",
            function(data) {
                console.log(data);
                if(data.status == 200){
                     self.tableData =  data.data;
                     self.contentlength = data.data.length 
                     self.loading = false;
                }
            }, undefined, undefined, "saas")
        },
        edit(id){
            this.$router.push({
                path: `/wxstore/custom/edit/${id}`
            })
        },
        delect(id){
            let self = this;
            UTIL.vueRequest(self, "/miniprogram/wx/custom/detail/del.do", "post", "json",  self.$qs.stringify({id:id }),
            "application/x-www-form-urlencoded",
            function(data) {
                console.log(data);
                if(data.status == 200){
                    self.$message.success("删除自定义模块成功");
                    self.getData();
                }
            }, undefined, undefined, "saas")
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    },
    components:{
        navbar,sidebar,storesecnavbar    
    }
}
</script>

<style>
.store_page{
    width: 100%;
    text-align: right;
}
.store-table{
    margin-bottom: 12px;
}
.store-header-zidingyi{
    padding-bottom: 10px;
    border-bottom: 2px solid #f2f2f2;
}
.store-table .el-table{
    font-size: 12px;
}
</style>