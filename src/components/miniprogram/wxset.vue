<template>
  <!-- 小程序设置 -->
  <div class="main wxset">
    <sidebar></sidebar>
    <!--主体 start-->
    <div class="main-right">
      <navbar></navbar>
      <!--二级导航栏 -->
      <div class="main-goods">
        <wxnavbar></wxnavbar>
        <div class="main-goods-right">
          <!-- 商品中心内容 -->
          <div class="goods-card_body" v-loading="loading">
            <!--选项卡组件-->
            <template v-if="pageFlog">
              <div class="wxpath-line1">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <!-- <el-breadcrumb-item :to="{ path: '/' }">营销概况</el-breadcrumb-item> -->
                  <el-breadcrumb-item>小程序设置</el-breadcrumb-item>
                </el-breadcrumb>
              </div>

              <div class="wxset-xin">
                <div class="wxset-xin-left">
                  <dl>
                    <dt>小程序昵称:&nbsp;</dt>
                    <dd>{{ nickname }}</dd>
                  </dl>
                  <dl>
                    <dt>功能介绍信息:&nbsp;</dt>
                    <dd>
                      {{ signature }}
                    </dd>
                    <dd>
                      <!-- <el-button type="success" size="mini" class="wxset-shouquan">授权</el-button> -->
                    </dd>
                  </dl>
                  <dl>
                    <dt>授权状态:&nbsp;</dt>
                    <dd>
                      <span>已授权</span>
                      <div>
                        <!-- <button type="button" class="el-button el-button--info el-button--small is-plain el-popover__reference" aria-describedby="el-popover-862" tabindex="0" style="margin-left: 10px;"><span>查看授权权限</span></button> -->
                        <!-- <button @click="setGuanapp"  type="button" class="el-button el-button--info el-button--small is-plain" slot="reference" style="margin-left: 10px;"><span>设置关联小程序</span></button> -->
                      </div>
                    </dd>
                  </dl>
                  <p class="u-tips">
                    你的店铺已获得该小程序的所有接口权限，可以正常对接小程序如果使用中发现接口有异常，请点此
                    <button
                      type="button"
                      class="el-button el-button--text"
                      @click="shouquanEv"
                    >
                      <span>重新授权</span></button
                    >试试
                  </p>
                </div>
                <img
                  :src="mhqrcode"
                  alt="小程序太阳码"
                  class="wxset-xin-right"
                />
              </div>

              <!--  -->
              <div class="wxpath-main">
                <div class="wxpath-main-div">
                  <img
                    src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/min_step_tpl1.c496125b.png"
                    alt=""
                    v-if="erweimaFloag"
                  />
                  <img
                    v-if="!erweimaFloag"
                    class="wximgTu"
                    :src="yusrcImg"
                    alt=""
                  />
                  <p class="txt">
                    发布前请先预览界面，体验完成没问题再立即发布
                  </p>
                  <div>
                    <button
                      @mouseenter="seeErma"
                      @mouseleave="leaveErma"
                      type="button"
                      class="el-button el-button--primary el-button--small"
                    >
                      <span>预览体验</span>
                    </button>
                    <button
                      type="button"
                      class="el-button el-button--default el-button--small is-plain"
                      style="
                        border-color: rgb(64, 158, 255);
                        color: rgb(64, 158, 255);
                        margin-left: 10px;
                      "
                      @click="bangdingEv"
                    >
                      <span>绑定体验者</span>
                    </button>
                    <button
                      type="button"
                      class="el-button el-button--default el-button--small is-plain"
                      style="
                        border-color: rgb(205, 81, 0);
                        color: rgb(205, 81, 0);
                      "
                      @click="jiebang"
                    >
                      <span>解绑体验者</span>
                    </button>
                  </div>
                </div>

                <div class="wxpath-main-div wxpath-main-divtwo">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAADZCAYAAAAKYyONAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGRURDRDQzRUI2OTExRTdCMEUyRTY3NTA3NjlBOUFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGRURDRDQ0RUI2OTExRTdCMEUyRTY3NTA3NjlBOUFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkZFRENENDFFQjY5MTFFN0IwRTJFNjc1MDc2OUE5QUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkZFRENENDJFQjY5MTFFN0IwRTJFNjc1MDc2OUE5QUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5rRL4eAAALSElEQVR42uyd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"
                    alt=""
                  />
                  <p class="txt">
                    发布提交后将在数个工作日审核，具体以微信官方为准。成功后将会有微信消息通知。
                  </p>
                  <div>
                    <button
                      type="button"
                      class="el-button el-button--primary el-button--small"
                      @click="publicEV"
                    >
                      <span>立即发布</span>
                    </button>
                  </div>
                </div>
              </div>
              <!--  -->
              <div>
                <el-table :data="uploadData" border style="width: 100%">
                  <el-table-column
                    prop="submitTime"
                    :formatter="dateFormat"
                    label="提交时间"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="createTime"
                    label="审核时间"
                    :formatter="dateFormat"
                  >
                  </el-table-column>
                  <el-table-column prop="isSuccess" label="状态">
                  </el-table-column>
                  <!-- <el-table-column
                        prop="num"
                        label="版本号"
                        >
                        </el-table-column> -->
                  <el-table-column prop="feedBack" label="备注">
                  </el-table-column>
                </el-table>
                <div class="mhset_permissinon_page">
                  <!-- small sizes-->
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="10"
                    layout="total, prev, pager, next, jumper"
                    :total="roleCount"
                  >
                  </el-pagination>
                </div>
              </div>

              <!-- <div style="display:flex">
                        <div class="wx-set-fb1">
                            <div class="wx-set-fb_t1">审核小程序</div>
                            <el-input v-model="input" placeholder="请填写版本号"></el-input>
                            <div class="wx-set-fb_t2" @click="examine">审核小程序</div>
                           
                        </div>

                        <div class="wx-set-fb">
                            <div class="wx-set-fb_t1">发布小程序</div>
                            <div class="wx-set-fb_t2" @click="release">发布小程序</div>
                        </div>
                    </div> -->
            </template>

            <template v-if="!pageFlog">
              <div style="margin-bottom: 20px">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>当前账号未授权</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <button
                @click="isShouquanEv"
                type="button"
                class="el-button el-button--info el-button--small is-plain el-popover__reference"
                aria-describedby="el-popover-862"
                tabindex="0"
                style="margin-left: 10px"
              >
                <span> 一键授权 </span>
              </button>
            </template>
            <!--选项卡组件 over-->
          </div>

          <!-- 商品中心over-->
        </div>
      </div>

      <!--本页弹框-->
      <!--推广链接-->
      <el-dialog
        title="绑定体验者"
        :visible.sync="dialogFormVisible1"
        width="40%"
      >
        <div>
          <div>
            <form class="el-form">
              <div class="el-form-item is-required">
                <label
                  for="name"
                  class="el-form-item__label"
                  style="width: 150px"
                  >微信号</label
                >
                <div class="el-form-item__content" style="margin-left: 150px">
                  <div class="el-input el-input--small" style="width: 200px">
                    <input
                      type="text"
                      v-model="valueInput1"
                      autocomplete="off"
                      class="el-input__inner"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="el-dialog__footer">
            <div class="dialog-footer">
              <button
                @click="dialogFormVisible1 = false"
                type="button"
                class="el-button el-button--default el-button--small"
              >
                <span>取 消</span>
              </button>
              <button
                @click="bangZhe"
                type="button"
                class="el-button el-button--primary el-button--small"
              >
                <span>确 定</span>
              </button>
            </div>
          </div>
        </div>
      </el-dialog>

      <el-dialog
        title="解绑体验者"
        :visible.sync="dialogFormVisible2"
        width="40%"
      >
        <div>
          <div>
            <form class="el-form">
              <div class="el-form-item is-required">
                <label
                  for="name"
                  class="el-form-item__label"
                  style="width: 150px"
                  >微信号</label
                >
                <div class="el-form-item__content" style="margin-left: 150px">
                  <div class="el-input el-input--small" style="width: 200px">
                    <input
                      type="text"
                      v-model="valueInput2"
                      autocomplete="off"
                      class="el-input__inner"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="el-dialog__footer">
            <div class="dialog-footer">
              <button
                @click="dialogFormVisible2 = false"
                type="button"
                class="el-button el-button--default el-button--small"
              >
                <span>取 消</span>
              </button>
              <button
                @click="jiebangbangZhe"
                type="button"
                class="el-button el-button--primary el-button--small"
              >
                <span>确 定</span>
              </button>
            </div>
          </div>
        </div>
      </el-dialog>

      <el-dialog title="提示" :visible.sync="dialogFormVisible3" width="40%">
        <div>
          <div>
            <div class="wxset-note">
              <p class="title-word">小程序发布注意事项：</p>
              <p class="word">1、上架中的商品在营业范围内；</p>
              <p data-v-9a3f202c="" class="word">
                2、审核期间请关闭会员中心的 充值、社区按钮；
              </p>
              <p class="word">
                3、商城底部菜单、商城主页的产品 可正常点击打开。
              </p>
            </div>
          </div>
          <div class="el-dialog__footer">
            <div class="dialog-footer">
              <button
                @click="dialogFormVisible3 = false"
                type="button"
                class="el-button el-button--default el-button--small"
              >
                <span>取 消</span>
              </button>
              <button
                @click="okFaBu"
                type="button"
                class="el-button el-button--primary el-button--small"
              >
                <span>确 定</span>
              </button>
            </div>
          </div>
        </div>
      </el-dialog>

      <el-dialog title="提示" :visible.sync="dialogFormVisible5" width="40%">
        <div>
          <p style="font-size: 18px !important; font-weight: bold">注意：</p>
          <div style="padding: 0 0 0 20px">
            <ul>
              <li
                style="
                  color: rgb(255, 68, 68);
                  list-style: inherit;
                  list-style-type: disc;
                "
              >
                必须使用当前绑定的小程序进行授权，否则将可能导致某些重要数据丢失或其他异常情况
              </li>
              <li
                style="
                  color: rgb(255, 68, 68);
                  list-style: inherit;
                  list-style-type: disc;
                "
              >
                为保证您在微客到平台功能的正常使用，授权时请保持默认选择，把权限统一授权给我们。
              </li>
            </ul>
          </div>
          <div class="el-dialog__footer">
            <div class="dialog-footer">
              <button
                @click="dialogFormVisible5 = false"
                type="button"
                class="el-button el-button--default el-button--small"
              >
                <span>取 消</span>
              </button>
              <button
                @click="isShouquanEv"
                type="button"
                class="el-button el-button--primary el-button--small"
              >
                <span>确 定</span>
              </button>
            </div>
          </div>
        </div>
      </el-dialog>

      <el-dialog
        title="设置关联小程序"
        :visible.sync="dialogFormVisible6"
        width="60%"
      >
        <div>
          <div class="el-form-item">
            <label class="el-form-item__label" style="width: 70px"
              >小程序</label
            >
            <div class="el-form-item__content" style="margin-left: 70px">
              <div class="el-input el-input--small" style="width: 135px">
                <input
                  type="text"
                  autocomplete="off"
                  placeholder="请输入小程序名称"
                  class="el-input__inner"
                />
              </div>
              <div
                class="el-input el-input--small"
                style="width: 170px; margin-left: 10px"
              >
                <input
                  type="text"
                  autocomplete="off"
                  placeholder="请输入小程序appid"
                  class="el-input__inner"
                />
              </div>
              <div
                class="el-input el-input--small"
                style="width: 160px; margin-left: 10px"
              >
                <input
                  type="text"
                  autocomplete="off"
                  placeholder="请输入小程序的原始id "
                  class="el-input__inner"
                />
              </div>
              <button
                type="button"
                class="el-button el-tooltip item el-button--text el-button--mini"
                aria-describedby="el-tooltip-2592"
                tabindex="0"
              >
                <span><i class="el-icon-plus"></i></span>
              </button>
              <button
                type="button"
                class="el-button el-tooltip item el-button--text el-button--mini"
                aria-describedby="el-tooltip-5372"
                tabindex="0"
                style="display: none"
              >
                <span><i class="el-icon-delete"></i></span>
              </button>
            </div>
          </div>
          <div class="el-dialog__footer">
            <div class="dialog-footer">
              <button
                @click="dialogFormVisible6 = false"
                type="button"
                class="el-button el-button--default el-button--small"
              >
                <span>取 消</span>
              </button>
              <button
                type="button"
                class="el-button el-button--primary el-button--small"
              >
                <span>确 定</span>
              </button>
            </div>
          </div>
        </div>
      </el-dialog>

      <!--  -->
    </div>
    <!--主体 over-->
  </div>
</template>
<script>
import navbar from "../navbar";
import sidebar from "../sidebar";
import wxnavbar from "./wxnavbar";
import IP from "../../utils/api";
export default {
  data() {
    return {
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      dialogFormVisible3: false,
      dialogFormVisible4: false,
      dialogFormVisible5: false,
      dialogFormVisible6: false,

      pageFlog: false,
      erweimaFloag: true,
      roleCount: 0,
      loading: true,
      yusrcImg: "",

      valueInput1: "",
      valueInput2: "",
      mhqrcode: "",
      nickname: "--",
      input: "",
      signature: "未认证",
      uploadData: [
        {
          uptime: "2020-04-10 15:48:02",
          status: "成功",
          num: "v3.6.3",
          remake: "审核成功时间:2020-04-10 18:08:15",
        },
      ],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (
        vm.$cookie.get("userId") != null &&
        vm.$cookie.get("userId") != "" &&
        vm.$cookie.get("userId") != undefined
      ) {
        next();
      } else {
        next("/login");
      }
    });
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.authorization().then(
        () => {
          this.getQrCode();//店铺码
          this.tiYanUrl(); //体验码
          this.shenHejiLu();
        },
        (err) => {
          that.$message.error(err);
        }
      );
    },
    handleCurrentChange(val) {
      this.shenHejiLu(val);
    },
    seeErma() {
      this.erweimaFloag = false;
    },
    leaveErma() {
      this.erweimaFloag = true;
    },
    isShouquanEv() {
      let url = IP.PIP + "/miniprogram/wx/authorizer/pre.xhtml?_token="+this.$cookie.get('_token')+'&openId='+this.$cookie.get('openId');
      window.open(url, "_blank");
    },
    shenHejiLu(page = 1) {
      let that = this;
      this.$http({
        method: "POST",
        url:
          IP.PIP +
          "/miniprogram/wx/mini/getaudithistory.do?openId=" +
          that.$cookie.get("openId") +
          "&page=" +
          page +
          "&size=" +
          "10",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${that.$cookie.get("token")}`,
        },
      }).then(function (res) {
        console.log(res.data.data);
        if (res.data.status == 200) {
          let datalist = res.data.data.list;
          datalist.forEach((item) => {
            item.isSuccess =
              item.isSuccess == 0
                ? "通过"
                : item.isSuccess == 1
                ? "拒绝"
                : item.isSuccess == 4
                ? "延迟"
                : "";
          });

          that.uploadData = datalist;
          that.roleCount = res.data.data.total;
        } else {
          that.$message.error(res.data.message);
        }
      });
    },
    //绑定体验者
    bangZhe() {
      let that = this;
      this.$http({
        method: "POST",
        url:
          IP.PIP +
          "/miniprogram/wx/mini/bindtester.do?openId=" +
          that.$cookie.get("openId") +
          "&wechatid=" +
          that.valueInput1,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${that.$cookie.get("token")}`,
        },
      }).then(function (res) {
        if (res.data.status == 200) {
          that.$message.success("绑定体验者成功");
          that.dialogFormVisible1 = false;
        } else {
          that.$message.error(res.data.message);
        }
      });
    },
    //绑定体验者
    jiebangbangZhe() {
      let that = this;
      this.$http({
        method: "POST",
        url:
          IP.PIP +
          "/miniprogram/wx/mini/unbindtester.do?openId=" +
          that.$cookie.get("openId") +
          "&userstr=" +
          that.valueInput2,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${that.$cookie.get("token")}`,
        },
      }).then(function (res) {
        if (res.data.status == 200) {
          that.$message.success("解绑体验者成功");
          that.dialogFormVisible2 = false;
        } else {
          that.$message.error(res.data.message);
        }
      });
    },
    //发布
    okFaBu() {
      let that = this;
      this.$http({
        method: "POST",
        url:
          IP.PIP +
          "/miniprogram/wx/mini/release.do?openId=" +
          that.$cookie.get("openId"),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${that.$cookie.get("token")}`,
        },
      }).then(function (res) {
        if (res.data.status == 200) {
          that.$message.success("发布成功");
          that.dialogFormVisible3 = false;
        } else {
          that.$message.error(res.data.message);
        }
      });
    },
    /**
     * 设置关联小程序
     */
    setGuanapp() {
      this.dialogFormVisible6 = true;
    },
    shouquanEv() {
      this.dialogFormVisible5 = true;
    },
    publicEV() {
      this.dialogFormVisible3 = true;
    },
    bangdingEv() {
      this.dialogFormVisible1 = true;
    },
    jiebang() {
      this.dialogFormVisible2 = true;
    },
    //审核
    examine() {
      let that = this;
      let data = {
        version: this.input,
      };
      this.$http({
        method: "POST",
        url:
          IP.PIP +
          "/miniprogram/wx/mini/audit.do?openId=" +
          that.$cookie.get("openId"),
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${that.$cookie.get("token")}`,
        },
      }).then(function (res) {
        console.log(res);
        if (res.data.status == 200) {
          that.$message.success("提交审核成功");
        } else {
          that.$message.error(res.data.message);
        }
      });
    },
    //发布
    release() {
      let that = this;
      this.$http({
        method: "POST",
        url:
          IP.PIP +
          "/miniprogram/wx/mini/release.do?openId=" +
          that.$cookie.get("openId"),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${that.$cookie.get("token")}`,
        },
      }).then(function (res) {
        console.log(res);
        if (res.data.status == 200) {
          that.$message.success("提交审核成功");
        } else {
          that.$message.error(res.data.message);
        }
      });
    },
    async authorization() {
      let that = this;
      let data = new FormData();
      await this.$http({
        method: "get",
        url:
          IP.PIP +
          "/miniprogram/wx/authorizer/get.do?openId=" +
          that.$cookie.get("openId"),
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${that.$cookie.get("token")}`,
        },
      }).then(function (res) {
        console.log("授权数据", res);
        if(res.data.status == 403){
           return false;
        }
        if (res.data.status == 200) {
           that.nickname = res.data.data.nickName;
           that.signature = res.data.data.signature;
           // that.getQrCode();
           that.pageFlog = true;
           that.loading = false;
        } else {
           that.$message.error(res.data.message);
           that.pageFlog = false;
        }
      });
    },
    // /wx/mini/qrcode/get.do
    //请求二维码接口
    getQrCode() {
      let that = this;
      let data = new FormData();
      let path = encodeURIComponent("pages/index/index");
      this.$http({
        method: "get",
        url:
          IP.PIP +
          "/miniprogram/wx/mini/qrcode/page/get.do?path=" +
          path +
          "&openId=" +
          that.$cookie.get("openId"),
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${that.$cookie.get("token")}`,
        },
      }).then(function (res) {
        console.log(res.data);

        if (res.data.status == 500) {
          that.$message.warning(res.data.message);
          return false;
        }
        that.mhqrcode = res.data.data;
      });
    },
    tiYanUrl() {
      let that = this;
      let data = new FormData();
      let path = encodeURIComponent("pages/index/index");
      this.$http({
        method: "get",
        url:
          IP.PIP +
          "/miniprogram/wx/mini/qrcode/get.do?path=" +
          path +
          "&openId=" +
          that.$cookie.get("openId"),
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${that.$cookie.get("token")}`,
        },
      }).then(function (res) {
        console.log(res.data);
        if (res.status == 200) {
          that.yusrcImg = res.data.data;
        } else {
          that.$message.warning(res.data.message);
        }
        //  if(res.data.status == 500){
        //
        //  }
        //   that.mhqrcode = res.data.data;
      });
    },
    dateFormat(row, column, cellValue, index) {
      if (row[column.property]) {
        const daterc = row[column.property] * 1000;
        if (daterc != null) {
          const dateMat = new Date(daterc);
          //const dateMat= new Date(parseInt(daterc.replace("/Date(", "").replace(")/", ""), 10));
          const year = dateMat.getFullYear();
          const month = dateMat.getMonth() + 1;
          const day = dateMat.getDate();
          const hh = dateMat.getHours();
          const mm = dateMat.getMinutes();
          const ss = dateMat.getSeconds();
          const timeFormat =
            this.getzf(year) +
            "-" +
            this.getzf(month) +
            "-" +
            this.getzf(day) +
            " " +
            this.getzf(hh) +
            ":" +
            this.getzf(mm) +
            ":" +
            this.getzf(ss);
          return timeFormat;
        }
      } else {
        return "";
      }
    },
    //补0操作
    getzf(num) {
      if (parseInt(num) < 10) {
        num = "0" + num;
      }
      return num;
    },
  },
  components: {
    navbar,
    sidebar,
    wxnavbar,
  },
};
</script>
<style>
.wxset .el-dialog__body {
  padding: 10px 20px !important;
}

.wxset-note .title-word {
  color: #f44;
  line-height: 25px;
}

.wxset-note .word {
  color: #f44;
  line-height: 25px;
}

.wxpath-line1 {
  width: 100%;
  /* height: 50px; */
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
  padding-bottom: 20px;
  margin-bottom: 10px;
}

.wxpath-main {
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #eee;
  display: flex;
}

.wxpath-main-div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #eee;
  padding: 60px 0 30px;
  position: relative;
}

.wximgTu {
  width: 240px;
  height: 220px;
}

.wxpath-main-div::before {
  content: "";
  width: 123px;
  height: 36px;
  position: absolute;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAkCAYAAACpH0VdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYjE0ODYwYS1kZDljLTExZTctODRiOC1hNDE0MzIxMWNjYjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUM4QThGRkRFQTE3MTFFN0I1MkI4MkQ4RUEwRjM5RjIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUM4QThGRkNFQTE3MTFFN0I1MkI4MkQ4RUEwRjM5RjIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjAyZDE5N2Qt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)
    50% no-repeat;
  background-size: 100% auto;
  left: 0;
  top: 20px;
}

.wxpath-main-divtwo::before {
  background: url(https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/min_step2.32939792.png)
    50% no-repeat;
}

.wxpath-main-div .txt {
  height: 60px;
}
.wxpath-main-div > img {
  margin-bottom: 45px;
}
.wx-set-fb1 {
  width: 300px;

  height: 132px;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  background: url(https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/jinze/design_btn_bg.png);
  margin-right: 40px;
}

.wx-set-fb {
  width: 300px;
  height: 132px;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  background: url(https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/jinze/release_btn_bg.png);
}

.wx-set-fb_t1 {
  font-family: 微软雅黑, "microsoft yahei", 宋体, 新宋体, sans-serif;
  font-size: 20px !important;
  color: #ffffff;
  margin-bottom: 4px;
}
.wx-set-fb1 .wx-set-fb_t2 {
  width: 123px;
  height: 32px;
  margin-top: 8px;
  font-size: 13px;
  border: 1px solid #fff;
  border-radius: 16px;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
}
.wx-set-fb .wx-set-fb_t2 {
  width: 123px;
  height: 32px;
  margin-top: 44px;
  font-size: 13px;
  border: 1px solid #fff;
  border-radius: 16px;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
}

.wxset-xin {
  display: flex;
  /* align-items:center; */
  justify-content: space-between;
}
.wxset-xin-left {
  font-size: 12px;
}
.wxset-xin-left dl {
  display: flex;
  margin-bottom: 15px;
}
.wxset-xin-left dl dt {
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.wxset-xin-left dl dd {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.65);
}
.wxset-xin-right {
  width: 160px;
  height: 160px;
}
.wxset-shouquan {
  margin-left: 15px;
}
.mhset_permissinon_page {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 0 0;
}
</style>

