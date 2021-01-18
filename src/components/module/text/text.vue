<template>
  <div class="component-3" :style="{paddingLeft: padding, paddingRight: padding, backgroundColor: customStyle.backgroundColor}">
    <div :class="'text-box text-box-' + config.textType">
      <span class="text-content" :style="{fontSize: fontSize, textAlign: config.showAlign}">
        <a :href="datas.href" :style="{color: customStyle.textColor}">{{datas.text}}</a>
      </span>
      <span class="text-arrow"><i class="el-icon-arrow-right"></i></span>
    </div>
    <el-divider v-if="config.showUnderline"></el-divider>
  </div>
</template>

<script>
  export default {
    props: ["config", "customStyle", "datas"],
    computed: {
      fontSize() {
        return this.config.fontSize + "px";
      },
      padding() {
        return this.customStyle.padding + "px";
      }
    }
  }
</script>

<style scoped>

 @import url("../../../assets/css/base.css");
  .text-box {
    display: flex;
    align-items: center;
    padding: 8px 0px;
  }
  .text-box span.text-arrow {
    margin-left: 8px;
    flex: 1;
    text-align: right;
  }
  .text-box span.text-content {
    width: 85%;
    flex: 0 0 85%;
    padding: 4px 12px;
  }
  .text-box span.text-content a {
    text-decoration: none;
    word-break: break-all;
  }
  .text-box.text-box-2 span.text-content {
    position: relative;
  }
  .text-box.text-box-2 span.text-content {
    border-left: 4px #333333 solid;
  }
</style>
