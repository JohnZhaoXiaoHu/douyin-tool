<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <homeNav></homeNav>
            

            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div>
                    <!--选项卡组件-->
                    
                    <!-- uba: userBehaviorAnalysis -->
                    <div class="uba_headerInfoView" :v-model="totalInfo">
                        <div class="uba_headerView1">
                            <div class="uba_headerTitle" >平台累计访问用户数</div>
                            <div class="uba_headerData">{{totalInfo.uv+totalInfo.pv}}人</div>
                        </div>

                        <div class="uba_headerView1">
                            <div class="uba_headerTitle" >平台累计注册用户数</div>
                            <div class="uba_headerData">{{totalInfo.newUser}}人</div>
                        </div>

                        <div class="uba_headerView1">
                            <div class="uba_headerTitle" >活跃用户数</div>
                            <div class="uba_headerData">{{totalInfo.activityUser}}人</div>
                        </div>
                    </div>

                    <div class="pbd_dataView1">
                        <!-- 1.新用户留存率 nurr: NewUserRetentionRate-->
                        <div class="pbd_pvLineChartView">
                            <div class="pbd_itemTitle">新用户留存率</div>
                            <div class="pbd_itemDate">
                                <!-- 2020-09-01 ~ 2020-10-31 -->
                                <el-date-picker v-model="nurrDate" type="date" placeholder="选择日期">
                                </el-date-picker>
                            </div>
                            <div class="pbd_pvLineChartDataView">
                                <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
                                <div id="uba_ECharts" style="width: 800px; height:400px;"></div>
                            </div>
                        </div>
                    </div>



                     <!-- 2.钻石用户群体、3.活跃群体、4.流失用户群体、5.种子用户群体 -->
                    <div class="uba_dataView3456">
                        <div class="uba_dataView34">
                            <!-- 2、钻石用户群体  :max-height="tableHeight" -->
                            <div class="uba_diamondUserGroupView">
                                <div class="pbd_itemTitle">钻石用户群体</div>

                                <el-table ref="table2" :height="tableHeight2" :data="tableData3" class="uba_TableView" width="600px">
                                    <el-table-column prop="date" label="排行" width="50"> 
                                        <template slot-scope="scope" align="left">
                                            <div>{{scope.$index}}</div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="name" label="用户" width="150">
                                        <template slot-scope="scope" align="left">
                                            <div class="uba_productInfoView">
                                                <img :src="scope.row.userHead" class="uba_productImg" />
                                                <div class="uba_productInfo">
                                                    <!-- 名称、手机号-->
                                                    <div class="uba_productName">
                                                        <p class="line_limit_length">{{scope.row.userName}}</p>
                                                    </div>
                                                    <span class="psProductPrice">{{scope.row.userPhone}}</span>
                                                </div>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="userVisitTimes" label="访问次数" width="120" align="center"> </el-table-column>
                                    <el-table-column prop="userOrderTimes" label="下单次数" width="80" align="center"> </el-table-column>
                                    <el-table-column prop="userTotalMoney" label="累积消费" width="80" align="center"> 
                                        <template slot-scope="scope" >
                                            ￥{{scope.row.userTotalMoney/100}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="lasttime" label="距上次访问/天" width="120" align="center"> </el-table-column>
                                </el-table>
                            </div>

                            <!-- 3、活跃群体 -->
                            <div class="uba_activeGroupView">
                                <div class="pbd_itemTitle">活跃群体</div>

                                <el-table ref="table3" :height="tableHeight3" :data="tableData3" class="uba_TableView" width="600px">
                                    <el-table-column prop="date" label="排行" width="50"> 
                                        <template slot-scope="scope" align="left">
                                            <div>{{scope.$index}}</div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="name" label="用户" width="150">
                                        <template slot-scope="scope" align="left">
                                            <div class="uba_productInfoView">
                                                <img :src="scope.row.userHead" class="uba_productImg" />
                                                <div class="uba_productInfo">
                                                    <!-- 名称、手机号-->
                                                    <div class="uba_productName">
                                                        <p class="line_limit_length">{{scope.row.userName}}</p>
                                                    </div>
                                                    <span class="psProductPrice">{{scope.row.userPhone}}</span>
                                                </div>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="userVisitTimes" label="访问次数" width="120" align="center"> </el-table-column>
                                    <el-table-column prop="userOrderTimes" label="下单次数" width="80" align="center"> </el-table-column>
                                    <el-table-column prop="userTotalMoney" label="累积消费" width="80" align="center"> 
                                        <template slot-scope="scope" >
                                            ￥{{scope.row.userTotalMoney/100}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="lasttime" label="距上次访问/天" width="120" align="center"> </el-table-column>
                                </el-table>
                            </div>
                        </div>

                        <div class="uba_dataView56">
                            <!-- 4、流失用户群体 -->
                            <div class="uba_activeGroupView5">
                                <div class="pbd_itemTitle">流失用户群体</div>
                                <el-table ref="table4" :height="tableHeight4" :data="tableData4" class="uba_TableView" width="600px">
                                    <el-table-column prop="date" label="排行" width="50"> 
                                        <template slot-scope="scope" align="left">
                                            <div>{{scope.$index}}</div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="name" label="用户" width="150">
                                        <template slot-scope="scope" align="left">
                                            <div class="uba_productInfoView">
                                                <img :src="scope.row.userHead" class="uba_productImg" />
                                                <div class="uba_productInfo">
                                                    <div class="uba_productName">
                                                        <p class="line_limit_length">{{scope.row.userName}}</p>
                                                    </div>
                                                    <span class="psProductPrice">{{scope.row.userPhone}}</span>
                                                </div>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="userVisitTimes" label="访问次数" width="120" align="center"> </el-table-column>
                                    <el-table-column prop="userOrderTimes" label="下单次数" width="80" align="center"> </el-table-column>
                                    <el-table-column prop="userTotalMoney" label="累积消费" width="80" align="center"> 
                                        <template slot-scope="scope" >
                                            ￥{{scope.row.userTotalMoney/100}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="lasttime" label="距上次访问/天" width="120" align="center"> </el-table-column>
                                </el-table>
                            </div>

                            <!-- 5、种子用户群体 -->
                            <div class="uba_activeGroupView">
                                <div class="pbd_itemTitle">种子用户群体</div>
                                <el-table ref="table5" :height="tableHeight5" :data="tableData5" class="uba_TableView" width="600px">
                                    <el-table-column prop="date" label="排行" width="50"> 
                                        <template slot-scope="scope" align="left">
                                            <div>{{scope.$index}}</div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="name" label="用户" width="150">
                                        <template slot-scope="scope" align="left">
                                            <div class="uba_productInfoView">
                                                <img :src="scope.row.userHead" class="uba_productImg" />
                                                <div class="uba_productInfo">
                                                    <div class="uba_productName">
                                                        <p class="line_limit_length">{{scope.row.userName}}</p>
                                                    </div>
                                                    <span class="psProductPrice">{{scope.row.userPhone}}</span>
                                                </div>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="userVisitTimes" label="访问次数" width="120" align="center"> </el-table-column>
                                    <el-table-column prop="userOrderTimes" label="下单次数" width="80" align="center"> </el-table-column>
                                    <el-table-column prop="userTotalMoney" label="累积消费" width="80" align="center"> 
                                        <template slot-scope="scope" >
                                            ￥{{scope.row.userTotalMoney/100}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="lasttime" label="距上次访问/天" width="120" align="center"> </el-table-column>
                                </el-table>
                            </div>
                        </div>

                        
                        <!-- 结束：2.钻石用户群体、3.活跃群体、4.流失用户群体、5.种子用户群体 -->
                    </div>


                    <!-- 6、用户行为流水 -->
                    <div class="uba_userBehaviorFlowView">
                        <div class="pbd_itemTitle">用户行为流水</div>

                        <div class="uba_searchView">
                            <div class="uba_searchView1">

                                <label class="uba_searchTitle" style="width: 40px;">页面:</label>
                                <el-select v-model="pagetype" placeholder="请选择首页">
                                    <el-option v-for="item in options1" :label="item.label"
                                    :key="item.value" 
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                
                                <label class="uba_searchDate" style="width: 60px;">创建时间:</label>
                                <el-date-picker v-model="dateValue" value-format="timestamp" type="date" placeholder="选择日期">
                                </el-date-picker>
                            </div>

                            <div class="uba_searchView2">
                                <label class="uba_searchTitle" style="width: 60px;">选择事件:</label>
                                <el-select v-model="selectThing" placeholder="请选择">
                                    <el-option v-for="item in options2" :label="item.label"
                                    :key="item.value" 
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <div class="">
                                    <label class="uba_searchTitle" style="width: 60px;">活动名称:</label>
                                    <el-input class="uba_searchName" v-model="userIdorName" style="width: 190px;min-width: 128px" placeholder="请输入内容" >
                                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                    </el-input>
                                </div>
                                <div class="search_btnView">
                                    <button @click="searchClick"  type="button" class="el-button el-button--primary el-button--small"><span>筛选</span></button>
                                    <button @click="clearDataClick"  type="button" class="el-button el-button--text"><span>清空筛选条件</span></button>
                                </div> 
                            </div>
                            <!-- 结束：搜索 -->
                        </div>

                        <el-table class="uba_userBehaviorFlowTable" :data="tableData2" border="1" style="width: 831px">
                            <el-table-column prop="behaviorTime" label="操作时间"   width="160" align="center">  </el-table-column>
                            <el-table-column prop="userId" label="userId" width="120" align="center"> </el-table-column>
                            <el-table-column prop="" label="用户" width="250" > 
                                <template slot-scope="scope" align="left">
                                    <div class="uba_productInfoView">
                                        <img :src="scope.row.userHeadurl" class="uba_productImg" />
                                        <div class="uba_productInfo">
                                            <div class="uba_productName">
                                                <p class="line_limit_length">{{scope.row.userName}}</p>
                                            </div>
                                            <span class="psProductPrice">{{scope.row.userPhone}}</span>
                                        </div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="ssym" label="所属页面" width="150" align="center"> </el-table-column>
                            <el-table-column prop="yhcz" label="用户操作" width="150" align="center"> </el-table-column>
                        </el-table>

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
import baseapi from '../../utils/api';
import homehttp from '../../utils/http.js';
import homeNav from './HomeNav';
import {    
        zm_cityList,
        zm_getList1,
        zm_homeBasicInfo,
        get_NewUserRetentionRate_array,
        get_basicInfoPV_array,
        get_moneyTable_array1,
	    get_moneyTable_array2,
	    get_moneyTable_array3,
    } from "../../filters/zm_data.js";
import {    
    // zm_DateToTimestamp,
    zm_formDataToString,
    zm_jsonToString
} from "../../filters/zm_tools.js";
import {    
    zm_getCurrenTimestamp,
    zm_getCurrenDateYYYYMMDD,
    zm_dateStringToTimestamp,
    zm_DateToTimestamp,
    zm_todayZeroTimestamp,
    zm_isLeapYear,
    zm_generateSevenDay,
    zm_getLateSevenDay,
    zm_getBeforeLaterDate,
 } from "../../filters/zm_dateTime.js";

export default {
    data() {
        return {
            tableData: zm_getList1(),
            tableData2: zm_getList1(),

            totalInfo: '',
            userIdorName:'',
            dateValue:'',
            behaviorTime: '',
            startTime: '',
            endTime: '',
            todayZeroTimestamp: '',
            tableData1: [],
            tableData2: [],
            tableData3: [],
            tableData4: [],
            tableData5: [],
            tableData6: [],

            options1: [{
                value: '0',
                label: '黄金糕'
                }, {
                value: '1',
                label: '首页'
                }, {
                value: '2',
                label: '抢购活动页'
                }, {
                value: '3',
                label: '抢购活动详情页'
                }, {
                value: '4',
                label: '七人拼团页'
                }, {
                value: '5',
                label: '七人拼团活动详情页'
                }, {
                value: '6',
                label: '个人中心'
                }, {
                value: '7',
                label: '商品详情页 '
                }, {
                value: '8',
                label: '订单确认页'
                }],
            options2: [],
            pagetype: '',
            selectThing: '',
            nurrDate: '',
            formatterNurrDate: '',
            hmChart: '',
            hmOption: '',
            newUserRetentionRateArray: [],
            tableHeight2: 565,  //表格高度
            tableHeight3: 565,  //表格高度
            tableHeight4: 565,  //表格高度
            tableHeight5: 565,  //表格高度
        }
    },
    //路由前置
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                // vm.sassData();
                // vm.vipMoneySort();
            } else {
                next('/login');
            }
		})
	},
    mounted(){

        // 基于准备好的dom，初始化echarts实例（ECharts 折线图）
        // 指定图表的配置项和数据 
        var dom = document.getElementById("uba_ECharts");
        this.hmChart = echarts.init(dom, 'light');
        this.hmOption = {
            backgroundColor: 'rgba(0,0,0,0)',
            title: {
                text: "", 
            },
            tooltip: {
                trigger: 'axis'
            },
            // textStyle: {
            //     color: 'red'
            // },
            legend: {
                data: []
                // data: ['付款订单金额', '付款订单数', '成功订单金额', '成功订单数', '佣金金额']
                // data: ["首页", "抢购活动页", "抢购活动详情页", "7人拼团页", "7人拼团详情页", "个人中心页", "商品详情页", "订单确认页"],
            },
            //刻度名称：X轴 
            xAxis: {
                type: 'category',
				boundaryGap: false,
                // data: ["09-01", "09-02", "09-03", "09-04", "09-05", "09-06", "09-07", "09-08", "09-09", "09-10", 
                //        "09-10", "09-11", "09-12", "09-13", "09-14", "09-15", "09-16", "09-17", "09-18", "09-19", 
                //        "09-20", "09-21", "09-22", "09-23", "09-24", "09-25", "09-30"],
                data: ["当日", "第1日", "第2日","第3日","第4日","第5日","第6日","第7日","第8日","第9日","第10日",
                      "第11日","第12日","第13日","第14日","第15日","第16日","第17日","第18日","第19日","第20日",
                      "第21日","第22日","第23日","第24日","第25日","第26日","第27日","第28日","第29日","第30日"],
            },
            //刻度名称：Y轴
            yAxis: {
                type: 'value',
                data: ["0%", "20%", "40%", "60%", "80%", "100%"],
				axisLabel: {
					formatter: '{value}%'
                }
            },
            series: [],
        };
        // 使用刚指定的配置项和数据显示图表。  get_basicInfoPV_array 
        this.newUserRetentionRateArray = get_NewUserRetentionRate_array();
        this.hmOption.series = this.newUserRetentionRateArray;
        this.hmChart.setOption( this.hmOption );

        //  this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 50;
        //window.innerHeight:浏览器的可用高度
        //this.$refs.table.$el.offsetTop：表格距离浏览器的高度
        //后面的50：根据需求空出的高度，自行调整
        // this.handleTableHeight();
        

        this.todayZeroTimestamp = zm_todayZeroTimestamp();
        this.request_trackAdminBasic(); //用户行为分析-累计访问数
        this.request_trackAdminData("user.retention", this.todayZeroTimestamp, "", 1, "1新用户存活率");
        this.request_trackAdminData("user.userlist.diamond", this.formatterNurrDate, "", 2, "2钻石用户群体页面");
        this.request_trackAdminData("userlist.huoyue", "", "", 3, "3活跃群体页面");
        this.request_trackAdminData("userlist.lose", "", "", 4, "4流失用户群体");
        this.request_trackAdminData("userlist.seed", "", "", 5, "5种子用户群体");
        this.request_trackAdminData("user.retention", "", "", 6, "6用户行为流水");

        this.tableHeight2 = window.innerHeight - this.$refs.table2.$el.offsetTop - 50;
        this.tableHeight3 = window.innerHeight - this.$refs.table3.$el.offsetTop - 50;
        this.tableHeight4 = window.innerHeight - this.$refs.table4.$el.offsetTop - 50;
        this.tableHeight5 = window.innerHeight - this.$refs.table5.$el.offsetTop - 50;
        // console.log('---innerHeight= '+  window.innerHeight);
        // console.log('---offsetTop= '+  this.$refs.table2.$el.offsetTop);
        // console.log('---tableHeight= '+  this.tableHeight2);

    },
    //移除事件监听，避免内存泄漏
    beforeDestroy() {
        window.removeEventListener('resize', this.resizefun)
        this.resizefun = null; 
    },
    watch:{
        nurrDate(newVal, objVal) {
            this.formatterNurrDate = zm_DateToTimestamp(newVal, 1);
            // console.log('---nurrDate: newVal= '+newVal +'、objVal= '+objVal);
            console.log('---formatterNurrDate= '+  this.formatterNurrDate);
            this.request_trackAdminData("user.retention", this.formatterNurrDate, "", 1, "1新用户存活率");
        }, 
        dateValue(newVal, objVal) {
            this.behaviorTime = zm_DateToTimestamp(newVal, 1);
            console.log('---behaviorTime= '+  this.behaviorTime);
        }, 
        pagetype(newVal, objVal) {
            console.log('---pagetype= '+  newVal);
        }, 
        deep:true   
    },
    methods:{
       
         searchClick(){
            //console.log('---搜索：search')
            this.request_trackAdminData("user.retention", "", "", 6, "6用户行为流水");
        },
        clearDataClick(){
            this.userIdorName = '';
            this.dateValue = '';
        },
        request_trackAdminBasic(){
            // 请求: 用户行为分析-累计访问数
            let self = this;
            let params = new FormData();  
            params.append('t', 'total');  
            let urlStr = baseapi.logIP + baseapi.bp_adminBasic;
            
            console.log('---基础指标概览: params=' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),			
                }
            }).then(function(res){
                console.log('---用户行为分析-累计访问数: response= '+zm_jsonToString(res.data));
                if (res.data.status != "200") {
                    self.$message.error(res.data.message);
                    return;
                }
                self.totalInfo = res.data.data;
                
            },function(res){
                self.$message.error(res.data.message);
            })
        },
        request_trackAdminData(type, startTime, endTime, dataType, dataName) {
            // 请求页面分析数据
            let self = this;
            let params = new FormData();       
            params.append('startTime', startTime);
            params.append('endTime', endTime);
            params.append('t', type);
            if (type==6) {
                params.append('pagetype', this.pagetype);
                params.append('behaviorTime', this.behaviorTime);
                params.append('userIdorName', this.userIdorName);
                params.append('thing', this.userIdorName);
            }
            let urlStr = baseapi.logIP + baseapi.bp_adminData;
            
            console.log('---'+dataName+': params=' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),			
                }
            }).then(function(res){
                console.log('---'+dataName+': response= '+zm_jsonToString(res.data));
                if (res.data.status != "200") {
                    self.$message.error(res.data.message);
                    return;
                }
                if (dataType == 1) {     
                    if (res.data) {
                        let newUserRetentionRate = self.newUserRetentionRateArray[0];
                        self.tableData1 = res.data.list;
                        newUserRetentionRate.data = res.data.list;
                        // 使用刚指定的配置项和数据显示图表。  get_basicInfoPV_array 
                        self.hmOption.series = self.newUserRetentionRateArray;
                        self.hmChart.setOption( self.hmOption );

                    }       
                } else if (dataType == 2) {     
                    if (res.data.data) {
                         self.tableData2 = res.data;
                    }  
                } else if (dataType == 3) {  
                    // 3.活跃群体页面  
                    console.log('---'+dataName+': response data= '+res.data);
                    if (res.data) {
                         self.tableData3 = res.data.list;
                    }  
                } else if (dataType == 4) {  
                    // 4.流失用户群体
                    if (res.data) {
                         self.tableData4 = res.data.list;
                    }  
                } else if (dataType == 5) {    
                    if (res.data) {
                         self.tableData5 = res.data.list;
                    }  
                } else if (dataType == 6) {    
                    if (res.data) {
                         self.tableData6 = res.data.list;
                    }  
                } 
                
                // self.tableHeight = window.innerHeight - self.$refs.table.$el.offsetTop - 50;
                // console.log('---innerHeight= '+  window.innerHeight);
                // console.log('---offsetTop= '+  self.$refs.table.$el.offsetTop);
                // console.log('---tableHeight= '+  self.tableHeight);

            },function(res){
                self.$message.error(res.data.message);
            })
        },
 
    },
    components:{
        navbar,sidebar, homeNav
    }
}
</script>

<style scoped>


.pbd_dataView1{
    display: flex;
    margin: 0 0 20px 0;
}
/************* 1、各页面基础数据情况 *************/
.pbd_pageDataView{
    background: white !important;
    width: 700px;
    height: 500px;
    border: 0.5px solid #DFE6E8;
    padding: 5px;
}

.pbd_pageDataTable {
    width: 680px;
}
.pbd_itemTitle{
    font-size: 22px !important;
    font-weight: 500;
    color: #4B5769;
    margin: 10px 0 0 5px;
}
.pbd_itemDate{
    color: #7B8088;
    margin: 10px 0 0 2px;
}



/************* 2、新用户留存率 *************/
.pbd_pvLineChartView{
    background: white !important;
    /* width: 700px; */
    /* min-width: 500px; */
    height: 500px;
    border: 0.5px solid #DFE6E8;
    padding: 5px;
    /* margin: 0 0 0 0px; */
}
.pbd_pvLineChartDataView{
    margin: 5px;
    /* background: lavender; */
    display: flex;
    min-width: 800px;
    height: 400px;
}


/************* 3.钻石用户群体、4.活跃群体 *************/
.uba_dataView3456 {
    /* display: flex; */
    /* background: white; */
    margin: 40px 0 20px 0;
}
.uba_dataView34 {
    display: flex;
    margin: 40px 0 10px 0;
}
.uba_dataView56 {
    display: flex;
    margin: 0px 0 20px 0;
}

.uba_diamondUserGroupView{
    background: white !important;
    width: 700px;
    height: 600px;
    border: 0.5px solid #DFE6E8;
    padding: 5px;
    margin: 0 0 10px 0px;
    position: relative;
}
.uba_activeGroupView{
    background: white !important;
    height: 600px;
    border: 0.5px solid #DFE6E8;
    padding: 5px;
    margin: 0 20px 20px 20px;
}

.uba_TableView {
    height:100%; 
    /* height: 500px; */
    /* max-height: 500px; */
}


.uba_TableView th,.uba_TableView td{
    padding:0!important;    
    height:20px;  
    line-height:20px;
}


.uba_activeGroupView5{
    background: white !important;
    /* height: 500px; */
    border: 0.5px solid #DFE6E8;
    padding: 5px;
    margin: 0 0 20px 0px;
}




/************* 7、用户行为流水 *************/
.uba_userBehaviorFlowView {
    background: white;
    padding: 5px 5px 10px 10px;
    margin: 40px 0 50px 0;
}
.uba_userBehaviorFlowTitle{
    margin: 30px 0 5px 5px;
    font-size: 14px !important;
    font-weight: 500;
}
.uba_searchView1{
    display: flex;
    margin: 20px 0 10px 0;
}
.uba_searchView2{
    display: flex;
    margin: 20px 0 10px 0;
}
.uba_searchDate{
    margin-left: 30px;
    margin-top: 5px;
}
.uba_searchTitle{
     margin-left: 10px;
     margin-top: 5px;
}
.uba_searchName{
    margin-left: 5px;
}


.search_btnView{
    margin-left: 50px;  
}
.createBtn {
    margin: 20px;
}

.uba_userBehaviorFlowTable {
    margin-top: 20px;
    margin-bottom: 20px;
}
/* 取消悬停背景色 */
.uba_userBehaviorFlowTable >>> tr:hover>td{
	background-color: #ffffff !important;
}
/* 取消表头背景色 */
.uba_userBehaviorFlowTable >>> thead.is-group th {
    background: white;
}

.uba_productInfoView{
    display: flex;
}
.uba_productImg {
    margin-top: 5px;
    width: 35px;
	height: 35px;
}
.uba_productName{
    width: 120px;
    margin: 0 10px 0 10px;
}

.line_limit_length {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap; 
}
/*//文本不换行，这样超出一行的部分被截取，显示...*/
.psProductPrice {
  margin-left: 10px;
  color: red;
}


/************* 头部 *************/
.uba_headerInfoView {
    display: flex;
    margin: 10px 0px 30px 0px;
    width: 800px;
    background: white;
    border: 0.8px solid #dddddd;
}
.uba_headerView1{
    align-items: stretch;
    width: 200px;
    height: 90px;
    margin-right: 40px;
}
.uba_headerView2{
    width: 200px;
}
.uba_headerView3{
    width: 200px;
}
.uba_headerTitle{
    width: 100%;
    text-align: center;
    margin-top: 10px;
    font-size: 15px !important;
    font-weight: 500;
    color: #666666;
}
.uba_headerData{
    width: 100%;
    text-align: center;
    margin-top: 15px;
}



</style>