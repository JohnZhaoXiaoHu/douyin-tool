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

              <el-upload action="https://api.mihuanshop.com/live/base/file/single/upload " list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :multiple="bgImg_elUpload_multipleImg" 
                :file-list='bgImg_elUpload_imgFileList' 
                :on-change="emc_fileChange" 
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>


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


export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      bgImg_elUpload_multipleImg: true,
			bgImg_elUpload_limitNum: 1,
      bgImg_elUpload_imgFileList: [],
      fileList: [],
    };
  },
  created() {

  },
  mounted() {
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
    dialogImageUrl: function (val) {
      console.log('dialogImageUrl: ' + val)
      
      
    },
  },
  methods: {
      handleRemove(file, fileList) {
         console.log('--文件移除时的钩子: '+ file, fileList);
      },
      emc_fileChange(file, fileList) {
          //console.log('---文件状态改变时的钩子： change：file= ' + file + '、fileList= ' + fileList.length);
          console.log('---fileList= ', zm_jsonToString(fileList));
          console.log('---fileList2= ', zm_jsonToString(this.bgImg_elUpload_imgFileList));
          this.fileList = fileList;
        
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },


    testClick() {
      console.log("---testClick");
      this.$router.go(-1);
      //this.$router.push('/marketing/qiangGou/qiang_gou');
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



   
            
           