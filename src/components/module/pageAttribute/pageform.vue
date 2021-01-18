<template>
  <div class="component-form">
    <div class="component-form-list">
      <div class="component-form-line flex-center">
        <div class="form-label">标题:</div>
        <div class="form-input">
          <el-input v-model="pageCustomAttribute.pageTitle" placeholder="请输入页面标题"></el-input>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">背景色:</div>
        <div class="form-input">
          <el-color-picker v-model="pageCustomAttribute.backgroundColor" color-format="hex"></el-color-picker>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">背景图:</div>
        <div class="form-input">
          <div class="page-background-image" v-on:click="openPageBackgroundImageResourceConfig">
            <div class="page-background-image-remove" v-on:click.stop="removePageBackgroundImage"><i class="el-icon-circle-close"></i></div>
            <el-image fit="fill" class="page-background-image-src" :src="pageCustomAttribute.backgroundImage" v-if="pageCustomAttribute.backgroundImage!= null && pageCustomAttribute.backgroundImage != ''"></el-image>
          </div>
        </div>
      </div>
    </div>
    <resourcemodal :config="pageBackgroundImageResourceConfig"></resourcemodal>
  </div>
</template>

<script>
  export default {
    props: ["pageCustomAttribute"],
    mounted() {
      
    },
    data() {
      let self = this;
      return {
        pageBackgroundImageResourceConfig: {
          visible: false,
          index: 0,
          ensureResource: function(url, index) {
            self.pageCustomAttribute.backgroundImage = url;
            self.pageBackgroundImageResourceConfig.visible = false;
          }
        },
      }
    },
    methods: {
      openPageBackgroundImageResourceConfig(event) {
        this.pageBackgroundImageResourceConfig.visible = true;
      },
      removePageBackgroundImage(event) {
        this.pageCustomAttribute.backgroundImage = "";
      },
    }
  }
</script>

<style  scoped>
 @import url("../../../assets/css/base.css");
  .page-background-image {
    width: 60px;
    height: 60px;
    border: 1px dotted #FFFFFF;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    cursor: pointer;
  }
  .page-background-image .page-background-image-remove {
    position: absolute;
    width: 10px;
    height: 10px;
    top: -5px;
    right: -5px;
  }
  .page-background-image .page-background-image-src {
    width: 100%;
    height: 100%;
  }
</style>
