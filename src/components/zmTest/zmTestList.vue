<template>
    <div class="main">
    <sidebar></sidebar>
    <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <zmTestNav></zmTestNav>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div v-loading="loading">
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing">
                    <!-- 面包屑 -->
                    <!-- <div class="mh-coupon-divtop">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/marketing/qiangGouing' }">营销抢购</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/marketing/qiangGou/qiang_gou' }">上下架</el-breadcrumb-item>
                        </el-breadcrumb>     
                    </div> -->
                    <!-- 面包屑over -->

                    <div class="topBlank" style="height: 20px;">
                    </div>
                    <!--<div id="line1"></div>-->
                    <div class="searchInfoView">
                        <div id="inputTopView">
                            <div id="info1" class="info">
                                <div id="searchTitle">会员ID: &nbsp;&nbsp;</div>
                                <input type="number" class="infoText" value="" placeholder=" 请输入会员ID" v-model="userID" />
                            </div>
                            <div id="info2" class="info">
                                <div id="searchTitle">手机号码: &nbsp;&nbsp;</div>
                                <input type="number" class="infoText" value="" placeholder=" 请输入手机号" v-model="userIphone" />
                            </div>
                            <div id="info3" class="info">
                                <div id="searchTitle">微信昵称: &nbsp;&nbsp;</div>
                                <input type="text" class="infoText" value="" placeholder=" 请输入微信昵称" v-model="userWX" />
                            </div>
                            <div id="info4" class="info">
                                <div id="searchTitle">推客等级: &nbsp;&nbsp;</div>
                                <el-select size='small' v-model="pgSelected" placeholder="请选择" style="width: 140px; font-size: 13px;">
                                    <el-option style="font-size: 13px;" v-for="item in pgDataList" :key="item.id" :label="item.name" :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div id="inputBottomView">
                            <div id="info21" class="info">
                                <div id="searchTitle">地域: &nbsp;&nbsp;</div>
                                <el-select size='small' v-model="addressIndex" placeholder="请选择地区" style="width: 140px; font-size: 13px;" v-bind:class="addressClassSelect">
                                    <el-option style="font-size: 13px;" v-for="(item, index) in cityList" :key="index" :label="item" :value="index">
                                    </el-option>
                                </el-select>
                            </div>
                            <!--infoDate 请选择日期：--开始时间-- --结束时间-- -->
                            <div style="margin-left: 10px;">
                                <el-date-picker class="" size="small" v-model="selectDate" type="daterange" 
                                 start-placeholder="开始日期" range-separator="至" end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                            <div id="info23" class="" style="margin-left: 20px;">
                                <el-button type="primary" size="mini" @click="searchClick">查询</el-button>
                                <el-button type="text" size="mini" @click="clearClick">清空查询条件</el-button>
                                <!-- <input type="button" class="btn" id="clearBtn" value="清空查询条件" v-on:click="clearClick" onmousedown="this.style.opacity='1.0' " onMouseOut="this.style.opacity='1.0' " onMouseOver="this.style.opacity='0.8' " /> -->
                                <!--<input type="button" class="btn" id="exportBtn" value="导出" v-on:click="exportClick" onmousedown="this.style.opacity='1.0' " onMouseOut="this.style.opacity='1.0' " onMouseOver="this.style.opacity='0.8' " />&nbsp;&nbsp;&nbsp;-->
                            </div>
                        </div>
                    </div>
                    <div id="line2"></div>

                    <!----------------------推客列表：dataList---------------------->
                    <!-- <div id="zmTableView" style=" padding: 20px; "> -->
                        <el-table id='out_table' ref="multipleTable" :data="tableData" tooltip-effect="dark" 
                            border style="margin-top:30px; width: 100%" 
                            :row-class-name="tableRowClassName" 
                            @selection-change="handleSelectionChange">
                            <el-table-column type="selection" align="center" width="55" style="background: yellow;"> </el-table-column>
                            <el-table-column label="用户信息" >
                                <template slot-scope="scope" style="background: lavender;">
                                    <div id="td_pushGuest1" v-if="scope.row.user">
                                        <img id="pushGuest1_headerImg" :src="scope.row.user.headportrait" />
                                        <div id="pushGuest1_info">
                                            <div id="userNickName">昵称：{{scope.row.user.nickName}}</div>
                                            <div id="">ID：{{scope.row.id}} </div>
                                            <div id="userMoney">佣金：{{scope.row.ugs.commissionTotal/100}}</div>
                                            <div id="userTopLevel" v-if="scope.row.nickName">上级：{{scope.row.nickName}} </div>
                                            <div id="userTopLevel" v-else> </div>
                                        </div>
                                    </div>
                                    <div id="td_pushGuest1" v-else>aaa</div>
                                </template>
                            </el-table-column>
                            <el-table-column align="center" prop="user.phone" label="手机号" width='100'> </el-table-column>
                            <el-table-column align="center" prop="gradeName" label="推客等级" width='80'> </el-table-column>
                            <el-table-column align="center" prop="ugs.bargainNum" label="累积成交笔数" width="100px"> </el-table-column>
                            <el-table-column align="center" label="累积成交金额" width="100px">
                                <template slot-scope="scope" >
                                  <div v-if="scope.row.ugs">{{scope.row.ugs.bargainMoney/100}}</div>
                                  <div v-else></div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="passTime" label="加入时间间" width="135px" align="center" :formatter="dateFormat">
                            </el-table-column>
                            <el-table-column align="center" label="操作" width="180px" >
                                <template slot-scope="scope">
                                    <div class="" style="display: flex;">
                                        <div class="" style="">
                                            <el-button id='btnStyle3' size="small" type="text" @click="lookDetailClick(scope.$index)">查看详情</el-button><br>
                                            <el-button id='btnStyle3' size="small" type="text" @click="table_setLevelClick(scope.$index)">设置等级</el-button><br>
                                            <el-button id='btnStyle3' size="small" type="text" @click="lookNextLevelClick(scope.$index)">查看下级</el-button>
                                        </div>
                                        <div class="" style="">
                                            <el-button id='btnStyle3' size="small" type="text" @click="cancelPushGuestlClick(scope.$index)">取消推客</el-button><br>
                                            <el-button id='btnStyle3' size="small" type="text" @click="setMoneyClick(scope.$index)">设置佣金</el-button><br>
                                            <el-button id='btnStyle3' size="small" type="text" @click="moneyTableClick(scope.$index)">财务报表</el-button>
                                        </div>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>

                        <!------- 列表：翻页（带背景色-background 例如：100条，每页20条，共5页） ------->
                        <div id="pageDealView" class="">
                            <div id="pageView" class="" style="background: white; display: inline-flex; float: right;">
                                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="perPageCount" :total="totalCount" background layout="total, prev, pager, next, jumper">
                                </el-pagination>
                            </div>
                            <div id="SelectBtnView">
                                <el-button id="allSelectBtn" @click="toggleSelection(tableData)">全选</el-button>
                                <el-button id="noAllSelectBtn" @click="toggleSelection()">取消选择</el-button>
                                <el-button id="cancelBtn" @click="cancelClick()">取消推客</el-button>
                                <el-button id="setLevelBtn" @click="setLevelClick()">设置等级</el-button>
                            </div>
                        </div>
                    <!-- </div> -->
                    <!------------------弹框：设置等级------------------>
                    <el-dialog center title="设置等级" :visible.sync="dialogFormVisible">
                        <el-form :model="pgForm">
                            <el-form-item label="推客昵称:" :label-width="formLabelWidth">
                                <div>{{pgForm.name}} </div>
                            </el-form-item>
                            <el-form-item label="推客等级:" :label-width="formLabelWidth">
                                <el-select size='small' v-model="pgForm.pgId" placeholder="请选择">
                                    <el-option v-for="item in pgForm.options" :key="item.weight" :label="item.name" :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="settingPG_confirm()">确 定</el-button>
                        </div>
                    </el-dialog>
                    <!------------------弹框：调整佣金------------------>
                    <el-dialog center title="调整佣金" :visible.sync="dialogFormVisible2">
                        <el-form :model="pgForm2">
                            <el-form-item label="用户佣金:" :label-width="formLabelWidth">
                                <div id="" style="font-size: 12px;">{{pgForm2.commissionTotal}}</div>
                            </el-form-item>
                            <el-form-item label="佣金金额:" :label-width="formLabelWidth">
                                <el-input size='small' v-model="pgForm2.money" type="number" autocomplete="off"></el-input>
                                <div id="" style="font-size: 12px;"> 正数增加佣金，负数减少佣金。</div>
                            </el-form-item>
                            <el-form-item label="备注:" :label-width="formLabelWidth">
                                <el-input size='small' v-model="pgForm2.remark" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                            <el-button type="primary" @click="settingMoney_confirm()">确 定</el-button>
                        </div>
                    </el-dialog>


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

import navbar from "../navbar";
import sidebar from "../sidebar";
import zmTestNav from "./zmTestNav";
import baseapi from "../../utils/api";
import http from '../../utils/http.js';
import VueCookie from 'vue-cookie';

import { zm_fundsSetup, zm_getList1, zm_getList } from "../../filters/zm_data";
import {
    zm_jsonToString,
    zm_formDataToString,
    zm_tipsMsg,
    zm_timestampToDate,
    zm_getCurrenDate,
    zm_getCurrenTimestamp,
    zm_standardDateToFormatDate,
    } from "../../filters/zm_tools";
import {
  zm_dateStringToTimestamp, 
  zm_dateFormat
} from "../../filters/zm_dateTime";
import {
  zm_twitterList, 
} from "../../filters/zm_data";



export default {
  data() {
    return {
      userID: "",
      userIphone: "",
      userWX: "",
      pgSelected: "",
      //省市
      addressSelected: "",
      addressIndex: "",
      index: 0,
      regionList: [],
      cityList: [],
      provinceList: [],
      provinceNumList: [],
      //时间
      starTime: "",
      endTime: "",
      pickerOptions: {
        shortcuts: [],
      },
      selectDate: "",
      //
      pgDataList: [],
      pgl_selected: "",
      rcmLevel: "",
      pgIndex: 0,
      sregionid: "",
      //列表分页
      tableData: [],
      multipleSelection: [],
      checkboxArr: [],
      currentPage: 1,
      totalCount: 0,
      perPageCount: 20,
      //推客选择（对话框 setLevelType：0单个、1多个）
      dialogFormVisible: false,
      formLabelWidth: "120px",
      setLevelType: 0,
      pgForm: {
        name: "",
        pgId: "",
        weight: "",
        options: [],
      },
      tableIndex: "",
      //调整佣金
      dialogFormVisible2: false,
      pgForm2: {
        commissionTotal: "",
        money: "",
        remark: "",
      },
    };
  },
  created() {
    console.log("--------created 模板渲染前");
  },
  mounted() {
    console.log("--------mounted 安装初始化成功：模板渲染后");
    // this.request_cityList();
    // this.request_pushGuest();
    // this.request_pushGuestLevel()
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.$cookie.get("userId") != null &&
          vm.$cookie.get("userId") != "" &&
          vm.$cookie.get("userId") != undefined ) {
        console.log("--->beforeRouteEnter ");
      } else {
        next("/login");
      }
    });
  },
  watch: {
    selectDate: function(val) {
		//console.log('selectDate: ' + val)
      if(val) {
        this.starTime = zm_standardDateToFormatDate(val[0], 1);
        this.endTime = zm_standardDateToFormatDate(val[1], 1);
        console.log("---startTime= "+ this.starTime+ "、endTime= "+this.endTime)
      }
	}
  },
  methods: {
    qiangGou() {
      //this.$router.push('/marketing/qiangGou/qiang_gou');
    },
    //时间处理函数
    dateFormat(row, column, cellValue, index){
      const daterc = row[column.property];
      // console.log('---daterc= '+daterc);
      // const dateMat= new Date(daterc.time);
      return zm_dateFormat(daterc);            
    },
    searchClick: function (event) {
      console.log("搜索-按钮点击了");
      // this.request_pushGuest();
    },
    clearClick: function (event) {
      console.log("清除-按钮点击了");
      this.userID = "";
      this.userIphone = "";
      this.userWX = "";
      //this.selected = 0;
      this.pgSelected = "";
      this.addressSelected = "";
      this.starTime = "";
      this.endTime = "";
      this.selectDate = "";
      this.sregionid = "";
      this.addressIndex = "";
    },
    exportClick: function (event) {
      console.log("导出-按钮点击了");
    },
    lookDetailClick(index, row) {
      console.log("---查看详情：lookDetailClick_" + index);
      let item = this.tableData[index];
      this.$router.push({
          path:'/twitter/pgDetail',
          query:{
            itemData:JSON.stringify(item),
        }
      })
    },
    table_setLevelClick(index, row) {
      //1-2、设置等级（单个）
      this.tableIndex = index;
      var item = this.tableData[index];
      console.log("---单个设置等级= ",index,"nickName= " + item.user.nickName,item.weight);
      this.setLevelType = 0;
      this.dialogFormVisible = true;
      this.pgForm.name = item.user.nickName;
      this.pgForm.pgId = item.grade;
    },
    settingPG_confirm() {
      this.dialogFormVisible = false;
      console.log("---选择等级确认 pgId：" + this.pgForm.pgId);
      if (this.setLevelType == 0) {
        var item = this.tableData[this.tableIndex];
        this.request_settingLevel(this.tableIndex, item.id, this.pgForm, 1);
      } else {
        this.checkboxArr = [];
        for (var i = 0; i < this.multipleSelection.length; i++) {
          var item = this.multipleSelection[i];
          this.checkboxArr.push(item.id);
        }
        //批量设置
        var userIds = this.checkboxArr.toString();
        console.log("userIds2= " + userIds);
        this.request_settingLevel("", userIds, this.pgForm, 2);
      }
    },
    lookNextLevelClick(index, row) {
      console.log("---查看下级= ", index, row); //此处拼接内容
      let item = this.tableData[index];
      this.$router.push({
          path:'/twitter/pgNextLevel',
          query:{
            itemData:JSON.stringify(item),
        }
      })
    },
    cancelPushGuestlClick(index) {
      //console.log("---取消推客1= ", index);
      this.index = index;
      this.zm_messageBox("是否取消推客，取消后将不能恢复?", '取消推客', "确定", "取消", 1);
    },
    settingMoney_confirm(index) {
      console.log("---设置佣金= ", zm_jsonToString(this.pgForm2));
      this.request_settingCommission(
        this.index,
        this.pgForm2.money,
        this.pgForm2.remark
      );
    },
    setMoneyClick(index) {
      console.log("---设置佣金= ", index);
      this.index = index;
      var item = this.tableData[index];
      this.dialogFormVisible2 = true;
      this.pgForm2.commissionTotal = item.ugs.commissionTotal / 100;
      this.pgForm2.money = 0;
      this.pgForm2.remark = item.remark;
    },
    moneyTableClick(index) {
      console.log("---财务报表3= ", index);//对象转为字符串
      let item = this.tableData[index];
      this.$router.push({
          path:'/twitter/pgMoneyTable',
          query:{
            itemData:JSON.stringify(item),
        }
      })
    },
    handleSizeChange: function (size) {
      // 每页下拉显示数据（size-change：perPageCount 改变时会触发每页条数size）
      this.perPageCount = size;
      console.log("---每页 perPageCount= ", this.perPageCount, "条");
    },
    handleCurrentChange: function (currentPage) {
      // 点击第几页：请求分页数据（currentPage 改变时会触发，当前页currentPage）
      console.log("---当前页 currentPage= ", currentPage);
      this.currentPage = currentPage;
       // 请求数据
      this.request_pushGuest(1);
    },
    toggleSelection(tableData) {
      if (tableData) {
        //索引选择（包含全选）
        tableData.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        //取消选择
        this.$refs.multipleTable.clearSelection();
      }
      console.log("---multipleSelection= ",zm_jsonToString(this.multipleSelection), tableData);
    },
    handleSelectionChange(val) {
      //全选、取消全选
      this.multipleSelection = val;
      console.log("---全选、取消全选 multipleSelection= ", zm_jsonToString(this.multipleSelection));
    },
    // 添加索引
    tableRowClassName(row, index) {
      // 给每条数据添加一个索引
      row.row.index = row.rowIndex;
    },
    cancelClick: function (event) {
        if (this.multipleSelection.length == 0) {
            this.$message.warning('请选择推客！');
            return;
				} else {
            return;
        }
        this.checkboxArr = [];
        for (var i = 0; i < this.multipleSelection.length; i++) {
            var item = this.multipleSelection[i];
            this.checkboxArr.push(item.id);
        }
        //取消推客
        this.request_cancelPushGuest(null, 2);
    },
    setLevelClick: function (event) {
      console.log("---设置等级 multipleSelection= ",zm_jsonToString(this.multipleSelection));
      //this.checkboxArr
      if (this.multipleSelection.length == 0) {
        this.$message.warning('请选择推客！');
        return;
      }
      this.setLevelType = 1;
      this.dialogFormVisible = true;
      this.pgForm.name = "批量设置";
    },
    //请求：推客列表 sregionid
	  request_pushGuest() {
      let self = this;
			var starTime = zm_dateStringToTimestamp(this.starTime, 1);
			var endTime = zm_dateStringToTimestamp(this.endTime, 1);
      var sgrade = this.pgSelected;
      
			let params =  new FormData();
			params.set('page',this.currentPage);
			params.set('limit',this.perPageCount);
			params.set('suid',this.userID);
			params.set('sphone',this.userIphone);
			params.set('swxname', this.userWX);
			params.set('sgrade',sgrade);
			params.set('sregionid',this.sregionid);
			params.set('sptimestart', starTime);
      params.set('sptimeend', endTime);
      // params.set('suserId',suserId);
			// params.set('openId',openId);
      // params.set('accessToekn',token);
      var urlStr = baseapi.userIP  +'/user' + "/rcm/admin/list"; //主平台端
      // var urlStr = baseapi.userIP  +'/user' + "/rcm/supplier/list";//供应商端


      //console.log('---pgSelected sgrade：' + this.pgSelected);
      console.log('---推客列表 params：' + zm_formDataToString(params), 'urlStr= ', urlStr);
      	this.$http({
          method: "post",
          url: urlStr,
          data: params,
          headers:{
            'Content-Type':'application/json',
            'suserId': this.$cookie.get('suserId'),
            // 'supplierId': 28,
          }
      }).then(function(res) {
            console.log('---推客列表: res= '+zm_jsonToString(res.data));
            if(res.data.status == '200') {
              self.tableData = zm_twitterList(); //测试数据
              if(res.data.list.length > 0) {
                self.tableData = res.data.list;
                self.totalCount = res.data.totalCount;
              }
            } 
        },function(res){
            self.$message.error(res.data.message);
      })	
    },
  //请求：9、推客更新接口（设置等级 type：1单个设置、2批量设置）
	request_settingLevel(index, userId, rcmLevel, type) {
			//console.log('-----设置等级 index：' + index, 'userId：' + userId, 'rcmLevel：' + rcmLevel.pgId, 'type：' + type);
      let self = this;
      let params = new FormData();     
      params.append('id',userId);
      params.append('grade',rcmLevel.pgId);
			var urlStr = baseapi.userIP +'/user' + "/rcm/admin/update";
			console.log('---设置等级 params= ' + zm_formDataToString(params), 'urlStr= ', urlStr);
    	this.$http({
          method: "post",
          url: urlStr,
          data: params,
          headers:{
            'Content-Type':'application/json',
            'suserId': this.$cookie.get('suserId'),
          }
      }).then(function(response) {
        	console.log('---设置等级：请求成功 body' + zm_jsonToString(response))
					if(response.data.status == '200') {
						if(type == 1) {
							//单个设置
							var item = self.tableData[index];
							item.grade = rcmLevel.pgId;
							for(var i = 0; i < self.pgDataList.length; i++) {
								var levelItem = self.pgDataList[i];
								if(levelItem.id == rcmLevel.pgId) {
									item.gradeName = levelItem.name;
								}
							}
						} else {
							//批量设置
							for(var i = 0; i < self.multipleSelection.length; i++) {
								var selectItem = self.multipleSelection[i];
								var item = self.tableData[selectItem.index];
								//var item = self.multipleSelection[i];
								for(var i = 0; i < self.pgDataList.length; i++) {
									var levelItem = self.pgDataList[i];
									if(levelItem.id == rcmLevel.pgId) {
										item.gradeName = levelItem.name;
									}
								}
								item.grade = rcmLevel.pgId;
							}
						}
            self.$message.success('等级设置成功！');
					} else {
            self.$message.error(response.data.message);
					}
				}
			);
    },
  //请求：16-1、调整佣金接口
	request_settingCommission(index, money, remark) {
      let self = this;
			var item = this.tableData[this.index];
      let params = new FormData();     
      params.append('remark',remark);
      params.append('money',money * 100);
			var urlStr = baseapi.financeIP + "/balance/log/admin/add";
			console.log('---params：' + zm_jsonToString(params), 'urlStr= ' + urlStr)
      this.$http({
          method: "post",
          url: urlStr,
          data: params,
          headers:{
            'Content-Type':'application/json',
            'suserId': this.$cookie.get('suserId'),
            'userId': (item.id+""),
          }
      }).then(function(response) {
          console.log('---调整佣金：请求成功= ' + zm_jsonToString(response.data))
					if(response.data.status == '200') {
						item.ugs.commissionTotal = item.ugs.commissionTotal + money * 100;
            self.$message.success('佣金修改成功！');
						self.dialogFormVisible2 = false;
					} else {
            self.$message.error(response.data.message);
					}
				}
			);
  },
  //请求：取消推客
	request_cancelPushGuest(index, type) {
      let self = this;
			var tkID = "";
			var tkID_array = [];
			if(type == 1) {
				var item = this.tableData[index];
				tkID = item.id
			} else {
				tkID = this.checkboxArr.toString()
			}
			var params = {
				id: tkID
			};
			var urlStr = baseapi.userIP+'/user' + "/rcm/admin/cancel";
			//console.log('---params：' + zm_jsonToString(params) + 'urlStr= ' + urlStr)
      this.$http.post(urlStr, params, {emulateJSON:true}).then(function(response){
					if(response.body.status == '200') {
						//console.log('-----取消推客 body：' + zm_jsonToString(response.body))
						if(type == 1) {
							self.tableData.splice(index, 1);
            }
            self.$message.success('取消成功！');
					} else {
						self.$message.error(response.data.message);
					}
				}
			);
  },
  //请求：10、推客等级列表（指定推客等级）
	request_pushGuestLevel() {
        let self = this;
        let params = new FormData();       
            params.append('page', 1);  
            params.append('limit',20);
            params.append('status',1);
        var urlStr = baseapi.userIP +'/user' + "/rcm/grade/admin/list";
        // https://saas.mihuanshop.com/user/user/grade/admin/list

        this.$http.post(urlStr, params, {emulateJSON:true}).then(function(response){
            //console.log('---推客等级列表: res= '+zm_jsonToString(response.data));
            if(response.data.status == '200') {
              if(response.data.list.length > 0) {
                self.pgDataList = response.data.list;
                self.pgForm.options = response.data.list;
              }
            } else {
                self.$message.error(res.data.message);
            }
        },function(res){
          self.$message.error(res.data.message);
        })	
	},
  // 请求地区		
	request_cityList() {
    let self = this;
    var urlStr = baseapi.userIP  +'/user' + "/region/list";
    this.$http({
      method: "post",
      url: urlStr,
    }).then(function(res){
      //console.log('---地区: res= '+zm_jsonToString(res.data));
      self.regionList = res.data.list;
      for(var i = 0; i < self.regionList.length; i++) {
            var region = self.regionList[i];
            self.provinceList.push(region[1])
            self.provinceNumList.push(region[0])
          }
      self.cityList = self.provinceList;
			//console.log('---provinceList：' + self.provinceList, '\n---provinceNumList：' + self.provinceNumList);
    },function(res){
        self.$message.error(res.data.message);
    })			
	},
  //询问弹框 （ success /info /warning /error ）
    zm_messageBox( message,title,confirmText, cancelText,infoType,thingType) {
      var tipType = "warning";
      if (infoType) {
        tipType = infoType;
      }
      let self = this;
      this.$confirm(message, title, {
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
        type: tipType,
        center: true,
      }).then(() => {
          // console.log('---确定：thingType= '+thingType);
          if (thingType == 1) {
            this.request_cancelPushGuest(this.index, 1);
          } else if (thingType == 2) {
          }
      }).catch(() => {
        //取消
      });
    },
  },
  components: {
    navbar, zmTestNav, sidebar,
  },
};

</script>


<style>

.marketing_div {
  display: flex;
}
/* 
body {
  padding: 0px;
  margin: 0px;
  min-width: 960px;
  background: white;
} */

#line1,
#line2 {
  display: flex;
  display: -webkit-flex;
  width: 100%;
  border-bottom: 1px solid lightgray;
}
/*----------------------搜索信息----------------------*/

.searchInfoView {
  height: 140px;
  color: #555;
  padding: 10px;
}

.info {
  display: -webkit-flex;
  display: flex;
  font-size: 14px;
  width: 25%;
}

#info23 {
  display: -webkit-flex;
  display: flex;
}

#searchTitle {
  width: 85px;
  font-size: 14px;
  text-align: right;
}

#searchTitle::before {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}

.infoText {
  background: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 28px;
  width: 110px;
  padding-left: 10px;
  padding-right: 10px;
  color: #666;
  font-size: 13px;
}

.infoText:focus {
  outline: none;
  border-color: dodgerblue;
}

#pushGuestLevel,
#address {
  width: 130px;
  height: 30px;
}

.btn {
  border: 0px solid white;
  border-radius: 5px;
}

.btn,
#operateBtn:focus {
  outline: none;
}

#searchBtn {
  height: 25px;
  width: 50px;
  color: white;
  background: royalblue;
  font-size: 0.8em;
}

#exportBtn {
  height: 25px;
  color: white;
  background: orange;
  font-size: 0.8em;
}

#clearBtn {
  color: royalblue;
  background: white;
  margin: 3px;
  font-size: 12px;
}

#inputTopView {
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
}

#inputBottomView {
  display: -webkit-flex;
  display: flex;
  align-items: center;
  height: 50%;
}
#pageDealView {
  height: 50px;
  width: 100%;
  padding: 20px 20px 20px 0;
}

#allSelectBtn,
#noAllSelectBtn,
#cancelBtn,
#setLevelBtn {
  border: 1px solid #dfe6e8;
  border-radius: 5px;
  height: 32px;
  font-size: 13px;
  padding: 5px 0 5px 0;
}

#allSelectBtn {
  width: 80px;
}

#noAllSelectBtn.onMouseOver {
  background: #1e90ff;
}

#noAllSelectBtn,
#cancelBtn,
#setLevelBtn {
  width: 100px;
}

#pageView {
  display: inline-flex;
  float: right;
}

#td_pushGuest1 {
  align-items: center;
  border: 0.03px solid #eeeeee;
  display: flex;
}

#pushGuest1_headerImg {
  width: 70px;
  height: 70px;
}

#pushGuest1_info {
  padding-left: 10px;
}

#userNickName,
#userID,
#userMoney,
#userTopLevel {
  padding: 1.5px;
  line-height: 15px;
}
#userNickName{
  min-width: 100px;
}

#operateBtn {
  border: 0px;
  color: #3388ff;
}

#btnStyle3 {
  margin: 1px;
  padding: 2px 10px 2px 10px;
  font-weight: 400;
}

#out_table {
  font-size: 12px;
}


</style>



   
            
           