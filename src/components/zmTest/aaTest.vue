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
              <div class="topBlank" style="height: 20px;">aaTest</div>
              <div id="line1"></div>
              <el-button @click="testClick(0)">下一页按钮</el-button>
   

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
import { zm_dateStringToTimestamp } from "../../filters/zm_dateTime";
import { zm_twitterList } from "../../filters/zm_data";

export default {
  data() {
    return {
      userID: "",
      userIphone: "",
      userWX: "",
      tableData:[],
    };
  },
  created() {
    console.log("--------created 模板渲染前");
    this.tableData = zm_twitterList();
  },
  mounted() {
    console.log("--------mounted 安装初始化成功：模板渲染后");
    console.log('--->suserId '+this.$cookie.get('suserId'));
        // suserId = userId
        this.userData = {
            suserId:this.$cookie.get('suserId'),
            userId: this.$cookie.get('userId'),
            openId: this.$cookie.get('openId'),
            adminId:this.$cookie.get('adminId'),
            roleId: this.$cookie.get('roleId'),
            token:  this.$cookie.get('token'),
            Authorization: "Bearer " + this.$cookie.get('token'),
            nickName: this.$cookie.get('nickName'),
        }
        console.log('--->userData= '+zm_jsonToString(this.userData));
    
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
        console.log("---startTime= " + this.starTime + "、endTime= " + this.endTime );
      }
    },
  },
  methods: {
    testClick(index) {
      console.log('---查看详情= testClick: '+index);
      //this.$router.push('/marketing/qiangGou/qiang_gou');
      //src/components/zmTest/bbTest.vue

      let item = this.tableData[index];
      this.$router.push({
          path:'/zmTest/bbTest',
          query:{
            itemData:JSON.stringify(item),
        }
      })
    },
    //时间处理函数
    dateFormat(row, column, cellValue, index) {
      const daterc = row[column.property];
      // console.log('---daterc= '+daterc);
      if (daterc != null) {
        // const dateMat= new Date(parseInt(daterc.replace("/Date(", "").replace(")/", ""), 10));
        // const dateMat= new Date(daterc.time);
        const dateMat = new Date(daterc);
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
    getzf(num) {
      if (parseInt(num) < 10) {
        num = "0" + num;
      }
      return num;
    },
    //询问弹框 （ success /info /warning /error ）
    zm_messageBox(message,title,confirmText,cancelText, infoType,thingType ) {
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
          } else if (thingType == 2) {
          }
      }).catch(() => {
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

#line1{
	display: flex;
	display: -webkit-flex;
	width: 100%;
	border-bottom: 1.0px solid lightgray;
  margin: 10px 0 10px 0;
}

</style>



   
            
           