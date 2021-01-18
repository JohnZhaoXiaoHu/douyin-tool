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
              <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
              <div id="main" style="width: 600px;height:400px;"></div>
              
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
import {
  zm_dateStringToTimestamp,
  zm_dateFormat,
} from "../../filters/zm_dateTime";
import { zm_twitterList } from "../../filters/zm_data";

export default {
  data() {
    return {
      userID: "",
      userIphone: "",
      userWX: "",
      getItemData: "",
    };
  },
  created() {
    console.log("--------created 模板渲染前");
    //获取页面传递数据：把字符串转为--> 对象
    this.getItemData = eval("(" + this.$route.query.itemData + ")");
    console.log(
      "--->编辑活动页: getItemData= " + zm_jsonToString(this.getItemData)
    );
  },
  mounted() {
    console.log("--------mounted 安装初始化成功：模板渲染后");
    console.log("--->suserId " + this.$cookie.get("suserId"));


    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "第一个 ECharts 实例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
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
        console.log(
          "---startTime= " + this.starTime + "、endTime= " + this.endTime
        );
      }
    },
  },
  methods: {
    testClick() {
      console.log("---testClick");
      this.$router.go(-1);
      //this.$router.push('/marketing/qiangGou/qiang_gou');
    },
    //时间处理函数
    dateFormat(row, column, cellValue, index) {
      const daterc = row[column.property];
      // console.log('---daterc= '+daterc);
      return zm_dateFormat(daterc);
    },
    //询问弹框 （ success /info /warning /error ）
    zm_messageBox(
      message,
      title,
      confirmText,
      cancelText,
      infoType,
      thingType
    ) {
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
      })
        .then(() => {
          // console.log('---确定：thingType= '+thingType);
          if (thingType == 1) {
          } else if (thingType == 2) {
          }
        })
        .catch(() => {
          //取消
        });
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



   
            
           