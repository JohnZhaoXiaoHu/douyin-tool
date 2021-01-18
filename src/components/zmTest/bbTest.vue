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
          <!-- 中心内容 -->
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

              <div class="topBlank" style="height: 20px;">bbTest</div>
              <el-button @click="testClick">测试按钮</el-button>

            </div>

            <!--选项卡组件 over-->
          </div>
          <!-- 中心内容 over-->
        </div>
      </div>
      <!-- 二级导航栏 over-->
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

// import { zm_fundsSetup, zm_getList1, zm_getList } from "../../filters/zm_data";
import {
  zm_jsonToString,
  zm_formDataToString,
  zm_tipsMsg,
  zm_timestampToDate,
  zm_getCurrenDate,
  zm_getCurrenTimestamp,
  zm_standardDateToFormatDate,
} from "../../filters/zm_tools";
// import {
//   zm_dateStringToTimestamp,
//   zm_dateFormat,
// } from "../../filters/zm_dateTime";
// import { zm_twitterList } from "../../filters/zm_data";

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
    console.log("--->编辑活动页: getItemData= " + zm_jsonToString(this.getItemData));
  },
  mounted() {
    console.log("--------mounted 模板渲染后");
    console.log("--->suserId " + this.$cookie.get("suserId"));
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.$cookie.get("userId") != null &&
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
        console.log("---startTime= " + this.starTime + "、endTime= " + this.endTime );
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
</style>



   
            
           