<template>
  <div class="component-form">
    <div class="component-form-list">
      <div class="component-form-line">
        <div class="form-label">选择模板:</div>
        <div class="form-input">
          <el-radio-group v-model="config.groupType" data-symbol="groupType">
            <el-radio :label="1">顶部菜单</el-radio>
            <el-radio :label="2">左侧菜单</el-radio>
          </el-radio-group>
        </div>
      </div>
    <div class="component-data">
      <div v-for="(item, index) in datas" :key="index" class="component-data-box">
        <div class="remove-data" :data-index="index" v-on:click.stop="removeData"><i class="el-icon-circle-close"></i></div>
        <div class="component-data-detail">
          <div class="component-data-content">
            <el-form label-width="60px">
              <el-form-item label="分组名称">
                <el-input :data-index="index" :disabled="true" v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="显示数量">
                <el-input-number v-model="item.count" controls-position="right" size="mini" :min="1" :max="10" label="显示数量"></el-input-number>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="append-data" v-on:click="append">
        <i class="el-icon-plus"></i>添加一个商品分组
      </div>
    </div>
      <div class="component-form-line" v-if="config.groupType == 1">
        <div class="form-label">头部风格:</div>
        <div class="form-input">
          <el-radio-group v-model="config.groupHeaderType" data-symbol="groupHeaderType">
            <el-radio :label="1">传统风</el-radio>
            <el-radio :label="2">个性风</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line" v-if="config.groupType == 1 && config.groupHeaderType == 1">
        <div class="form-label">顶部菜单:</div>
        <div class="form-input">
          <el-radio-group v-model="config.groupScrollType" data-symbol="groupScrollType">
            <el-radio :label="1">正常模式</el-radio>
            <el-radio :label="2">自动置顶顶部</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line"  v-if="config.groupType == 1">
        <div class="form-label">列表样式:</div>
        <div class="form-input">
          <el-radio-group v-model="config.listType" data-symbol="listType" @change="listTypeChange">
            <el-radio :label="1">大图</el-radio>
            <el-radio :label="2">小图</el-radio>
            <el-radio :label="3">一大两小</el-radio>
            <el-radio :label="4">详细列表</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line"  v-if="config.groupType == 1">
        <div class="form-label">填充样式:</div>
        <div class="form-input">
          <el-radio-group v-model="config.fillType" data-symbol="fillType">
            <el-radio :label="1">留白</el-radio>
            <el-radio :label="2">填充</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line"  v-if="config.groupType == 1">
        <div class="form-label">显示比例:</div>
        <div class="form-input">
          <el-radio-group v-model="config.showPercent" data-symbol="showPercent">
            <el-radio v-if="config.listType == 1" :label="1">3:2</el-radio>
            <el-radio :label="2">1:1</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line"  v-if="config.groupType == 1">
        <div class="form-label">显示样式:</div>
        <div class="form-input">
          <el-radio-group v-model="config.showType" data-symbol="showType">
            <el-radio v-if="config.listType != 4" :label="1">极简</el-radio>
            <el-radio :label="2">卡片</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line"  v-if="config.groupType == 1">
        <div class="form-label">显示内容:</div>
        <div class="form-input">
          <div class="check-box-wrapper">
            <el-checkbox class="checkbox-style" v-model="config.showContent.name">商品名称</el-checkbox>
          </div>
          <div class="check-box-wrapper">
            <el-checkbox class="checkbox-style" v-model="config.showContent.buypoint">商品简介</el-checkbox>
          </div>
          <div class="check-box-wrapper">
            <el-checkbox class="checkbox-style" v-model="config.showContent.price">商品价格</el-checkbox>
          </div>
          <div class="check-box-wrapper">
            <el-checkbox class="checkbox-style" v-model="config.showContent.sales">商品销量</el-checkbox>
          </div>
          <div class="check-box-wrapper">
            <el-checkbox class="checkbox-style" v-model="config.showContent.badge.visible">商品角标</el-checkbox>
            <div class="badge-list" v-if="config.showContent.badge.visible == true" style="margin-top: 8px;">
              <el-radio-group v-model="config.showContent.badge.type">
                <el-radio :label="1">新品</el-radio>
                <el-radio :label="2">热卖</el-radio>
                <el-radio :label="3">NEW</el-radio>
                <el-radio :label="4">HOT</el-radio>
              </el-radio-group>
            </div>
          </div>
          <div class="check-box-wrapper">
            <el-checkbox class="checkbox-style" v-model="config.showContent.more">查看更多</el-checkbox>
          </div>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">背景颜色:</div>
        <div class="form-input">
          <el-color-picker v-model="customStyle.backgroundColor" color-format="hex"></el-color-picker>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">左右边距:</div>
        <div class="form-input">
          <el-slider v-model="customStyle.padding" show-input :min="0" :max="36"></el-slider>
        </div>
      </div>
    </div>
    <goodgroupmodal :config="groupconfig"></goodgroupmodal>
  </div>
</template>

<script>
  export default {
    props: ["config", "customStyle", "datas"],
    data() {
      let self = this;
      return {
        groupconfig: {
          visible: false,
          parameters: [],
          ensureGroup(active, parameters) {
            let obj = {};
            obj.id = active.id;
            obj.name = active.name;
            obj.count = 4;
            self.datas.push(obj);
            self.groupconfig.visible = false;
          },
          closeCheckHandler(parameters) {
            self.groupconfig.visible = false;
          }
        }
      }
    },
    methods: {
      append() {
        let self = this;
        self.groupconfig.visible = true;
      },
      listTypeChange(value) {
        if(value != 1) {
          this.config.showPercent = 2
        }
        if(value == 4) {
          this.config.showType = 2
        }
      },
      removeData(event) {
        let index = event.currentTarget.dataset.index;
        this.datas.splice(index, 1);
      }
    }
  }
</script>

<style  scoped>
 @import url("../../../assets/css/base.css");
</style>