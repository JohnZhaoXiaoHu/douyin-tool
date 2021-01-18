<template>
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
                <div v-loading="loading">
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing mh-mhset_logs_header-body">
                    <!-- 面包屑 -->
                    <div class="mh-mhset_logs_header">
                       <h5>操作日志</h5>    
                    </div>
                    <!-- 面包屑over -->

                    <div class="shuaixuan vip-alllist vip-xxxx" style="padding:0 20px;box-sizing:border-box">

                        <div class="m-search-box el-row el-row-my-div">
                            <div class="sx-input">
                                <label class="el-form-item__label" style="width: 190px;min-width: 128px">账号 : </label>
                                <el-input v-model="value1" placeholder="" ></el-input>
                            </div>

                            <div class="mh-mhset-logs_select">
                                <label class="el-form-item__label" style="width: 130px;">模块 : </label>
                                <el-select v-model="value2" placeholder="请选择模块">
                                    <el-option
                                    v-for="item in optionsMoudle"
                                    :key="item.id"
                                    :label="item.property"
                                    :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>

                            <div>
                                <label class="el-form-item__label" style="width: 130px;">操作人ID : </label>
                                <el-input v-model="value3" placeholder=""></el-input>
                            </div>
                        </div>
                    
                        <!-- 两行 -->
                        <div class="m-search-box el-row el-row-my-div">
                         
                            <div class="vip-item-list_time mh-market-timeleght" >
                                <label class="el-form-item__label" style="width: 190px;">创建时间 : </label>
                                <el-date-picker 
                                        v-model="value4"
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
                            <button @click="shuaixuan"  type="button" class="el-button el-button--primary el-button--small"><span>筛选</span></button>
                            <button @click="clearData"  type="button" class="el-button el-button--text"><span>清空筛选条件</span></button>
                        </div> 

                    </div>
                
    

                     <div style="padding:0 20px 15px;border-box">
                         <!-- stripe -->
                        <template>
                            <el-table
                                :data="tableData"      
                                border
                                style="width: 100%">
                                <el-table-column
                                prop="phone"
                                label="操作人"
                                >
                            
                                </el-table-column>
                                <el-table-column
                                prop="project"
                                label="操作模块"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="createTime"
                                label="操作时间"
                                :formatter="dateFormat"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="adminId"
                                label="操作ID"
                                >
                                </el-table-column>

                                <el-table-column
                                prop="context"
                                label="操作内容"
                                >
                                </el-table-column>
                            </el-table>
                            <div class="mh-mhsegt-logs_pages">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCount">
                                </el-pagination>
                            </div>
                        </template>

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

import navbar from '../navbar';
import sidebar from '../sidebar';
import settingnav from './settingnav';
import api from '../../utils/api';
export default {
    data() {
        return {
            loading : true,
            tableData:[],
            totalCount:0,
            value1:'',
            value2:'',
            value3:'',
            value4:[],
            optionsMoudle:[{
                value: '1',
                label: '用户'
            },{
                value: '2',
                label: '商城'
            },{
                value: '3',
                label: '订单'
            },{
                value: '4',
                label: '财务'
            }]
        };
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.getData(1);
            } else {
                next('/login');
            }
		})
	},
    mounted(){
        this.syebol();
    },
    methods:{
        getData(parme,status){
            let that = this;
            let data = new FormData();       
            data.append('page', parme);  
            data.append('limit',20);
        
       
            if(this.value1 != ''){
                 data.append('saccount',this.value1);//账号手机号
            }

            if(this.value2 != ''){
                 data.append('smodule',this.value2)
            }

            if(this.value3 != ''){
                console.log(this.value3);
                 data.append('sadminId',this.value3)
            }
            if(this.value4.length != 0){
                data.append('stimeStart',this.value4[0]);
                data.append('stimeEnd',this.value4[1]); 
            }

            this.$http({
                method: "post",
                url:api.logList,
                data: data
            })
            .then(function(res){
                console.log(res);
                if(res.data.status ==200){
                    let data =   res.data.list;
                   
                    that.tableData = data;
                    that.totalCount = res.data.totalCount;
                    that.loading = false
                    if (status == 9) {
                        that.$message.success({
                            showClose: true,
                            message: '筛选成功',
                            type:'success',
                            duration:600
                         });
                    }     
                }else{
                    that.$message.error(res.data.message);
                }
            }).catch(function(error){
                console.error(error);
            }); 

        },
        syebol(){
            let that = this;
            this.$http({
                method: "post",
                url:api.sysbelNum
            }).then(function(res){
                    let list =  res.data.data;
                    // that.syebolArr = res.data.data;
                     let keys = Object.values(list);
                    that.optionsMoudle = keys

            })
        },
        shuaixuan(){
            this.getData(1,9)
        },
        clearData(){
            this.value1 = '';
            this.value2 = '';
            this.value3 = '';
            this.value4 = '';
        },
        handleCurrentChange(val){
            this.getData(val)
        },
        dateFormat(row, column, cellValue, index){
          const daterc = row[column.property];
            if(daterc!=null){
             const dateMat= new Date(daterc.time);

            //const dateMat= new Date(parseInt(daterc.replace("/Date(", "").replace(")/", ""), 10));
             const year = dateMat.getFullYear();
             const month = dateMat.getMonth() + 1;
             const day = dateMat.getDate();
             const hh = dateMat.getHours();
             const mm = dateMat.getMinutes();
             const ss = dateMat.getSeconds();
             const timeFormat= this.getzf(year) + "-" + this.getzf(month)  + "-" + this.getzf(day) + " " + this.getzf(hh)  + ":" + this.getzf(mm) + ":" + this.getzf(ss);
                    return timeFormat;
             }             
      },
       //补0操作  
        getzf(num){  
            if(parseInt(num) < 10){  
                num = '0'+num;  
            }  
            return num;  
        }
     
       
    },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>
<style>
.mh-mhset-logs_select .el-input__icon{
    line-height: 28px;
}
.mh-mhset_logs_header-body{
    padding: 0 !important;
    box-sizing: border-box;
}
.mh-mhset_logs_header{
   width:100%;
   border-bottom: 1px solid #ebeef5;
   padding: 18px 20px;
  
   margin-bottom: 20px;
       box-sizing: border-box;
   
}
.mh-mhset_logs_header>h5{
    color: #303133;
    font-weight: normal;
}
.mh-mhsegt-logs_pages{
    width: 100%;
    display: flex;
    justify-items: center;
    justify-content: flex-end;
    margin: 15px 0 0;
}
.goods_list_dibu-seven{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}
.mh-seven-div{
    display: flex;
    /* flex-direction: column; */

    align-items: center;
}
.mh-seven-div-span{
    display: flex;
    align-items: center;
    width: 100%;
    overflow:hidden; /*超出的部分隐藏起来。*/ 
    white-space:nowrap;/*不显示的地方用省略号...代替*/
    text-overflow:ellipsis;/* 支持 IE */
}
.mh-seven-div-parent{
    width: 150px;
}

.mh-seven-div-span>span:nth-child(2){
    width: 80%;
      overflow:hidden; /*超出的部分隐藏起来。*/ 
    white-space:nowrap;/*不显示的地方用省略号...代替*/
    text-overflow:ellipsis;/* 支持 IE */
}
.mh-market-timeleght .el-date-editor .el-range__icon{
    line-height: 26px !important
}
.mh-market-timeleght .el-date-editor .el-range-separator{
    line-height: 26px !important
}

</style>




            
           