<template>
<!-- 收款设置 -->
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
                <div class="goods-card_body">
                    <!--选项卡组件-->
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="通知设置" name="first">
                            <div>

                                <div class="edit-item goods-item goods-set">
                                    <div  class="edit-info">
                                        <h3>首页公告</h3>
                                        <p>开启后首页将展示对应的公告</p>
                                    </div>
                                    <div class="goods-item-ctn">
                                        <el-switch v-model="spwNoticeStatus"></el-switch>
                                    </div>
                                </div>
                                <div class="edit-item goods-item goods-set">
                                    <div  class="edit-info">
                                        <h3>订单确认页温馨提示</h3>
                                        <p>开启后订单确认页下方将展示想要告知给客户的提示</p>
                                    </div>
                                    <div class="goods-item-ctn">
                                        <el-switch v-model="set_noti"></el-switch>
                                    </div>
                                </div>
                                <!--  @change="subMit(2)" -->
                                <div class="newspaperView">
                                    <div class="zm_title5">订单确认页温馨提示文案</div>
                                    <el-input class="spwMessageInput" type="textarea" :rows="4" placeholder="请输入内容" v-model="spwMessage">
                                    </el-input>
                                </div>
                                

                                <br><br><br>
                                <!-- <div class="zm_line"></div> -->
                                <div class="newspaperView">
                                    <div class="zm_title5">首页公告设置</div>
                                    <el-button class="addRankingList" type="primary" plain size="medium"  @click="addRankClick()"> 
                                    添加</el-button>
                                </div>
                                <!-- 列表 -->
                                <el-table :data="newspaperList" border class="zm_rankTable" >
                                    <el-table-column prop="spnId" label="ID" width="60" align="center"> </el-table-column>
                                    <el-table-column prop="spnContent" label="内容" > </el-table-column>
                                    <el-table-column prop="spnStartTime" label="开始时间" width="85px" align="center" :formatter="dateFormat">
                                    </el-table-column>
                                    <el-table-column prop="spnEndTime" label="截止时间" width="90px" align="center" :formatter="dateFormat">
                                    </el-table-column>
                                    <el-table-column prop="spnCreatePeopleName" label="创建人" width="60" align="center"> </el-table-column>
                                    <el-table-column prop="spnCreateTime" label="创建时间" width="80px" align="center" :formatter="dateFormat">
                                    </el-table-column>
                                    <el-table-column label="编辑" width="150" align="center"> 
                                        <template slot-scope="scope">
                                            <div class="set_opreate">
                                                <el-button class="set_editBtn" size="medium" type="text" @click="editRankClick(scope.$index)"> 编辑 </el-button>
                                                <div>
                                                    <img class="deleteNotiBtn" @click="deleteRankClick(scope.$index)" src="../../../static/images/icon/delete_blue1.png" alt="">
                                                </div>
                                                <div>
                                                    <el-switch class="set_statusBtn" v-model="scope.row.spnStatus" active-color="#13ce66" inactive-color="#DCDFE6" 
                                                        :active-value='1' :inactive-value='0'  @change="changeSwitch(scope.$index, scope.row)">
                                                    </el-switch>
                                                </div>
                                            </div>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <!-- small sizes 分页-->
                                <!-- <div class="goods_list_dibu-seven zm_rankPage">
                                    <el-pagination @current-change="handleCurrentChange" 
                                    :current-page="currentPage" 
                                    :page-size="rankPageSize" 
                                    :total="totalCount" background layout="total, prev, pager, next, jumper">
                                    </el-pagination>
                                </div> -->


                                <!-- 添加： 收益排行榜（弹框）-->
                                <el-dialog title="公告创建" :visible.sync="rankDialogTableVisible" min-width="70%">
                                    <div class="zm_notiMsg">
                                        <div class="zm_noti_title">是否开启：</div>
                                        <el-switch v-model="spnStatus"></el-switch>
                                    </div>
                                    <div class="zm_notiMsg">
                                        <div class="zm_noti_title">使用期限: </div>
                                        <el-date-picker v-model="dateValue"
                                            value-format="timestamp" type="datetimerange" style="width: 320px"
                                            start-placeholder="开始日期"
                                            range-separator="至"
                                            end-placeholder="结束日期">
                                        </el-date-picker>
                                    </div>
                                    <div class="zm_notiMsg">
                                        <div class="zm_noti_title">公告内容：</div>
                                        <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="spnContent">
                                        </el-input>
                                    </div>
                                    <el-button class="zm_saveBtn" type="primary" size="medium" @click="addRankRequest">保存</el-button>
                                </el-dialog>
                                <br><br><br><br>

                            </div>
                         </el-tab-pane>
                    </el-tabs>

                    <el-button class="zm_saveBtn1" type="primary" size="medium" @click="set_saveCilck">保存</el-button>

                    

               
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
// import api from '../../utils/api';;
import baseapi from '../../utils/api';

import {    
        zm_fundsSetup,
        zm_getList1,
        zm_getList
    } from "../../filters/zm_data"
import {    
        zm_jsonToString,
        zm_tipsMsg,
        zm_timestampToDate,
        zm_getCurrenDate,
        zm_getCurrenTimestamp,
        zm_standardDateToFormatDate,
        zm_formDataToString,
        zm_getCurrenDateYYYYMMDD
    } from "../../filters/zm_tools"
import { zm_dateFormat } from '../../filters/zm_dateTime';


export default {
    data() {
        return {
            activeName: 'first',
            spwNoticeStatus:false,
            set_noti:false,
            spwMessage: '新疆地区因疫情原因暂不发货，西藏、青海、甘肃等偏远地区的用户下单前请跟客服确认能否发货。',
            currentPage: 1,
			totalCount: 0,
            rankPageSize: 20,
            newspaperList:[],
            //
            rankDialogTableVisible: false,
            rankItemData: '',
            //
            isEditRank: false,
            isChange: false,
            spraId: '',
            dateValue:[],
            spnStatus: false,
            spnStartTime: '',
            spnEndTime: '',
            spnContent: '',
            spnCreateTime: '',
            spnCreatePeopleId: '',
            spnCreatePeopleName: '',
        };
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                // vm.getData();
            } else {
                next('/login');
            }
        })
    },
    mounted(){
      this.getData();
      this.request_NewspaperList();
    },
    watch:{
        dateValue: function(val) {
			if(val) {
                this.spnStartTime = val[0];
                this.spnEndTime = val[1];
                console.log("---startTime= "+ this.spnStartTime+ "、endTime= "+this.spnEndTime);
			}
        },
    },
    methods:{
         //时间处理函数
        dateFormat(row, column, cellValue, index){
            const daterc = row[column.property];
            return zm_dateFormat(daterc);           
        },
        changeSwitch(index, rowItem) {
		    //var item = this.tableData[index];
            console.log('---changeSwitch 选择了: index_' + index + '、spZdsc= ' + rowItem.spnStatus);
            //编辑响应
            this.isEditRank = true;
            this.rankItemData = this.newspaperList[index];
            this.spraId     = this.rankItemData.spnId;
            this.spnContent = this.rankItemData.spnContent;
            this.spnStatus  = rowItem.spnStatus;
            this.spnCreateTime      = this.spnCreateTime;
            this.spnCreatePeopleId  = this.rankItemData.spnCreatePeopleId;
            this.spnCreatePeopleName= this.rankItemData.spnCreatePeopleName;
            this.spnStartTime       = this.rankItemData.spnStartTime;
            this.spnEndTime         = this.rankItemData.spnEndTime;
            this.addRankRequest(2);
        },
        handleCurrentChange: function(currentPage) {
			//分页：点击第几页（请求分页数据：改变时会触发	当前页currentPage） 
			console.log('---当前页 currentPage= ', currentPage)
			this.currentPage = currentPage
			this.request_NewspaperList();
        },
        //---------------------公告列表--------------------- 
        request_NewspaperList(){
            //公告（列表）
            let self = this;
            let urlStr = baseapi.TIP + baseapi.set_noticeFindAll;
            // urlStr = "http://172.16.1.84:8083/panicbuy/notice/findAll";
            // urlStr = baseapi.TIP + '/shop' +"/panicbuy/notice/findAll"
            console.log('---公告列表: urlStr= '+urlStr);
            this.$http({
                method: "post",
                url: urlStr,
            }).then(function(res){
                // console.log('---公告列表：response= '+zm_jsonToString(res));
                if(res.status ==200){
                    if (res.data) {
                        if (res.data.length>0) {
                            self.newspaperList = res.data;
                        }
                    }
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
        addRankClick(){
            //添加响应
            this.isEditRank = false;
            this.spraId = '';
            this.spnContent = '';
            this.spnStatus  = false;
            this.spnCreateTime      = '';
            this.spnCreatePeopleId  = '';
            this.spnCreatePeopleName= ''
            this.spnStartTime       = '';
            this.spnEndTime         = '';
            this.dateValue = []
            this.rankDialogTableVisible = true;
        },
        editRankClick(index){
             //编辑响应
            this.isEditRank = true;
            this.isChange   = false;
            this.rankItemData = this.newspaperList[index];
            this.spraId     = this.rankItemData.spnId;
            this.spnContent = this.rankItemData.spnContent;
            this.spnStatus  = Boolean(this.rankItemData.spnStatus);
            this.spnCreateTime      = this.spnCreateTime;
            this.spnCreatePeopleId  = this.rankItemData.spnCreatePeopleId;
            this.spnCreatePeopleName= this.rankItemData.spnCreatePeopleName;
            this.spnStartTime       = this.rankItemData.spnStartTime;
            this.spnEndTime         = this.rankItemData.spnEndTime;
            this.dateValue = [this.rankItemData.spnStartTime, this.rankItemData.spnEndTime];
            this.rankDialogTableVisible = true;
        },
        deleteRankClick(index){
            //公告（删除）
            let item = this.newspaperList[index];
            let self = this;
            let urlStr = baseapi.TIP + baseapi.set_noticeDelete;
            let params = new FormData();       
            params.append('id', item.spnId);  
            console.log('---spnId= '+item.spnId);
            // urlStr = "http://172.16.1.84:8083/panicbuy/notice/delete";
            // urlStr = baseapi.TIP + '/shop'+'/panicbuy/notice/delete'
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            })
            .then(function(res){
                if(res.status ==200){
                    self.newspaperList.splice(index, 1);
                    self.$message.success('删除成功！');
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
         addRankRequest(type){
            //公告（添加）
            if( this.spnContent==null){
                this.$message.warning('通告不能为空！'); return;
            }
            if( this.spnStartTime==null || this.spnStartTime==''){
                this.$message.warning('使用时间不能为空！'); return;
            }
            this.spnCreateTime = zm_getCurrenDate();
            let self = this;
            let urlStr = baseapi.TIP + baseapi.qg_TYsetInsert;            
            let params = {
                // 'spnCreateTime':this.spnCreateTime,
                'spnContent':this.spnContent,
                'spnStatus':this.spnStatus*1,
                'spnCreatePeopleId':this.$cookie.get("userId")*1,
                'spnCreatePeopleName':this.$cookie.get("nickName"),
                'spnStartTime':this.spnStartTime,
                'spnEndTime':this.spnEndTime
            };
            if (this.isEditRank == false) {
                urlStr = baseapi.TIP + baseapi.set_noticeInsert;
                // urlStr = "http://172.16.1.84:8083/panicbuy/notice/insert";
            } else {
                urlStr = baseapi.TIP + baseapi.set_noticeUpdate;
                // urlStr = "http://172.16.1.84:8083/panicbuy/notice/update";
                params["spnId"] = this.spraId;
            }
            console.log('---添加/编辑：response= '+urlStr + '\n params= '+ zm_jsonToString(params));
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            })
            .then(function(res){
                // console.log('---添加/编辑：response= '+zm_jsonToString(res));
                if(res.status ==200){
                    self.rankDialogTableVisible = false;
                    self.$message.success('保存成功');
                    if(type==2){

                    }else{
                        self.request_NewspaperList();
                    }
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
        // set_saveCilck(){
        //     //subMit
        // },
        set_saveCilck(){
            console.log('---set_noti= '+ this.set_noti);
            let that = this;    
            var params = {
                spwId: 1,
                spwNoticeStatus: this.spwNoticeStatus*1,
                spwStatus: this.set_noti*1,
                spwMessage: this.spwMessage,
            }
            let urlStr = "http://172.16.1.84:8083/panicbuy/w/update";
            urlStr = baseapi.TIP + baseapi.set_update;

            console.log('---通知设置: urlStr= '+urlStr +"---params= "+zm_jsonToString(params));
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(res){
                console.log('---通知设置= '+zm_jsonToString(res));
                if(res.data.status == 200){
                    that.$message.success('操作成功');
                }
            })
        },
        getData(){
            let that = this;    
            let params = new FormData();     
            params.append('id',1);
            // let urlStr = "http://172.16.1.84:8083/panicbuy/w/findById";
            let urlStr = baseapi.TIP + baseapi.set_findById;
            console.log('---通知设置 回显：response= '+urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
            })
            .then(function(res){
                console.log('---通知设置 回显= '+zm_jsonToString(res));
                if(res.status == 200){
                    that.set_noti = Boolean(res.data.spwStatus);
                    that.spwNoticeStatus = Boolean(res.data.spwNoticeStatus);
                }else{
                    that.$message.error('状态码:'+res.status+' ,错误提示:'+res.message);
                }   
            })
        }
    },
    components:{
        navbar,sidebar,settingnav    
    }
}

</script>

<style scoped >

.newspaperView{
    margin: 10px 0 0 0;
}
.spwMessageInput{
    width: 500px !important;
    margin-top: 10px !important;
}
.zm_line{
    border-bottom:solid 1px #dddddd;
}
.zm_saveBtn1 {
    margin: 20px 0 30px 40%;
}
.zm_saveBtn {
    margin: 50px 0 100px 40%;
}

.set_opreate{
    display: flex !important;
}
.set_editBtn{
    margin-top: 0px !important;
}
.set_statusBtn{
    margin-top: 6px !important;
}
.deleteNotiBtn {
	margin: 10px 20px 0px 15px !important;
	width: 13px;
	height: 13px;
}

.zm_title5{
    font-weight: 500;
    font-size: 13px !important;
}
.zm_subTitle{
    margin-top: 10px;
}
.zm_notiMsg{
    display: flex;
    margin
    : 0px 0 40px 0;
}
.zm_noti_title{
    width: 80px;
}


.addRankingList{
    margin: 20px 0 10px 0px;
}

</style>
   
            
           