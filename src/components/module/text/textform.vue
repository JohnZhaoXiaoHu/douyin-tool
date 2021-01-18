<template>
  <div class="component-form">
    <div class="component-form-list">
      <div class="component-form-line">
        <div class="form-label">文本:</div>
        <div class="form-input">
          <el-input type="textarea" :autosize="{minRows: 4, maxRows: 8}" placeholder="请输入文本" v-model="datas.text"></el-input>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">字体大小:</div>
        <div class="form-input">
          <el-radio-group v-model="config.fontSize">
            <el-radio :label="12">小</el-radio>
            <el-radio :label="14">中</el-radio>
            <el-radio :label="16">大</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">显示位置:</div>
        <div class="form-input">
          <el-radio-group v-model="config.showAlign">
            <el-radio :label="'left'">居左</el-radio>
            <el-radio :label="'center'">居中</el-radio>
            <el-radio :label="'right'">居右</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">样式:</div>
        <div class="form-input">
          <el-radio-group v-model="config.textType">
            <el-radio :label="1">无</el-radio>
            <el-radio :label="2">样式一</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">背景颜色:</div>
        <div class="form-input">
          <el-color-picker color-format="hex" v-model="customStyle.backgroundColor"></el-color-picker>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">字体颜色:</div>
        <div class="form-input">
          <el-color-picker color-format="hex" v-model="customStyle.textColor"></el-color-picker>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">更多设置:</div>
        <div class="form-input">
          <el-checkbox class="checkbox-style" v-model="config.showUnderline">显示底部分割线</el-checkbox>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">左右空白:</div>
        <div class="form-input">
          <el-slider v-model="customStyle.padding" show-input :min="0" :max="50"></el-slider>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">链接:</div>
        <div class="form-input">
          <el-cascader @change="(value) => getModulePath(value)" v-model="datas.value" :options="modules" clearable></el-cascader>
        </div>
      </div>
    </div>
    <goodmodal :config="goodconfig"></goodmodal>
    <goodgroupmodal :config="goodgroupconfig"></goodgroupmodal>
    <categorymodal :config="categoryconfig"></categorymodal>
  </div>
</template>

<script>
  export default {
    props: ["config", "customStyle", "datas"],
    created() {

    },
    mounted() {

    },
    data() {
      let self = this;
      return {
        modules: self.$global.modules,
        goodconfig: {
          visible: false,
          multiSelect: false,
          parameters: [],
          ensureGood(active, parameters, flag) {
            if("object" == flag) {
              self.datas.href = parameters[0] + "?" + parameters[1] + "=" + active.id;
              self.datas.openType = parameters[2];
              self.goodconfig.visible = false;
            }
          },
          closeCheckHandler(parameters) {
             self.datas.value = "";
             self.datas.href = "";
             self.datas.openType = "";
             self.goodconfig.visible = false;
          }
        },
        categoryconfig : {
          visible: false,
          parameters: [],
          ensureCategory(active, parameters) {
             self.datas.href = parameters[0] + "?" + parameters[1] + "=" + active.id;
             self.datas.openType = parameters[2];
             self.categoryconfig.visible = false;
          },
          closeCheckHandler(parameters) {
            self.datas.value = "";
            self.datas.href = "";
            self.datas.openType = ""
            self.categoryconfig.visible = false;
          }
        },
        goodgroupconfig: {
          visible: false,
          parameters: [],
          ensureGroup(active, parameters) {
              self.datas.href = parameters[0] + "?" + parameters[1] + "=" + active.id;
              self.datas.openType = parameters[2];
              self.goodgroupconfig.visible = false;
          },
          closeCheckHandler(parameters) {
            self.datas.value = "";
            self.datas.href = "";
            self.datas.openType = ""
            self.goodgroupconfig.visible = false;
          }
        }
      }
    },
    methods: {
      getModulePath(value) {
        if(value.length > 0) {
          let obj = JSON.parse(value[value.length - 1]);
          let path = obj.path;
          let type = obj.type;
          let key = obj.key;
          let openType = obj.openType;
          if(type == 0) {
            this.datas.href = path;
            this.datas.openType = openType;
          }
          else if(type == 1) {
            //商品加参数
            this.goodconfig.parameters.splice(0, this.goodconfig.parameters.length);
            this.goodconfig.parameters.push(path, key, openType);
            this.goodconfig.visible = true;
          }
          else if(type == 2) {
            this.categoryconfig.parameters.splice(0, this.categoryconfig.parameters.length);
            this.categoryconfig.parameters.push(path, key, openType);
            this.categoryconfig.visible = true;
          }
          else if(type == 3) {
            this.goodgroupconfig.parameters.splice(0, this.goodgroupconfig.parameters.length);
            this.goodgroupconfig.parameters.push(path, key, openType);
            this.goodgroupconfig.visible = true;
          }
        }
        else {
          this.datas.href = "";
          this.datas.openType = "";
        }
      }
    }
  }
</script>

<style  scoped>
 @import url("../../../assets/css/base.css");
</style>
