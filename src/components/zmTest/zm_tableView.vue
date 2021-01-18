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
              </div>-->
              <!-- 面包屑over -->

              <div class="topBlank" style="height: 20px;">bbTest</div>
              <el-button @click="testClick">测试按钮</el-button>

            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="150">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="name" label="金额" width="120">
                      <template slot-scope="scope" >
                          <div>{{scope.row.zip/100}}</div>
                      </template>
                </el-table-column>
                <el-table-column label="配送信息">
                    
                    <el-table-column label="地址">
                        <el-table-column label="省份" prop="province"  width="120"> </el-table-column>
                        <el-table-column label="市区" prop="city" width="120"> </el-table-column>
                        <el-table-column label="地址" prop="address" width="300"> </el-table-column>
                        <el-table-column label="邮编" prop="zip" width="120"> </el-table-column>
                    </el-table-column>
                </el-table-column>
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
import navbar from "../navbar";
import sidebar from "../sidebar";
import zmTestNav from "./zmTestNav";
import baseapi from "../../utils/api";
import http from "../../utils/http.js";
import VueCookie from "vue-cookie";

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
import { zm_dateStringToTimestamp,zm_dateFormat } from "../../filters/zm_dateTime";
import { zm_twitterList } from "../../filters/zm_data";

export default {
  data() {
    return {
        userID: "",
        userIphone: "",
        userWX: "",
        getItemData:'',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    };
  },
  created() {
    console.log("--------created 模板渲染前");
    //获取页面传递数据：把字符串转为--> 对象
    this.getItemData =  eval('(' + this.$route.query.itemData + ')');
    console.log('--->编辑活动页: getItemData= '+zm_jsonToString(this.getItemData));

  },
  mounted() {
    console.log("--------mounted 安装初始化成功：模板渲染后");
    console.log('--->suserId '+this.$cookie.get('suserId'));
 
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (
        vm.$cookie.get("userId") != null &&
        vm.$cookie.get("userId") != "" &&
        vm.$cookie.get("userId") != undefined
      ) {
        console.log("--->beforeRouteEnter ");
      } else {
        next("/login");
      }
    });
  },
  watch: {
    selectDate: function (val) {
      //console.log('selectDate: ' + val)
      if (val) {
        this.starTime = zm_standardDateToFormatDate(val[0], 1);
        this.endTime = zm_standardDateToFormatDate(val[1], 1);
        console.log("---startTime= " + this.starTime + "、endTime= " + this.endTime);
      }
    },
  },
  methods: {
    testClick() {
        console.log('---testClick');
        this.$router.go(-1);
        //this.$router.push('/marketing/qiangGou/qiang_gou');
    },
    //时间处理函数
    dateFormat(row, column, cellValue, index) {
      const daterc = row[column.property];
      return zm_dateFormat(daterc);
    },
  },
  components: {
    navbar,
    zmTestNav,
    sidebar,
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

</style>



   
            
           