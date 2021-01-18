<template>
  <div class="component-form">
    <div class="component-form-list">
      <div class="component-form-line">
        <div class="form-label">商品来源:</div>
        <div class="form-input">
          <el-radio-group v-model="config.originType" data-symbol="originType">
            <el-radio :label="1">商品</el-radio>
            <el-radio :label="2">商品分组</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">商品:</div>
        <div class="form-input">
          <div v-if="config.originType == 1" class="originType-1">
            <div v-for="(item, index) in items" :key="index" class="good-item">
              <div class="good-item-wrapper">
                <div class="remove-good" :data-index="index" v-on:click="removeGood">
                  <i class="el-icon-circle-close"></i>
                </div>
                <el-image class="good-item-image" :src="item.imageUrl"></el-image>
              </div>
            </div>
            <div class="add-goods">
              <div class="add-goods-wrapper" v-on:click="openGoodModal">
                <i class="el-icon-plus"></i>
              </div>
            </div>
          </div>
          <div v-if="config.originType == 2" class="originType-2">
            <div class="originType-2-field">
              商品分组：
              <el-link v-if="group.id == 0" type="primary" :underline="false" v-on:click="openGroupModal">选择分组</el-link>
              <el-tag v-if="group.id > 0" size="medium" closable type="success" @close="clearGroup">{{group.name}}</el-tag>
            </div>
            <div class="originType-2-field">
              显示数量：
              <el-input-number v-model="group.count" controls-position="right" size="mini" :min="1" :max="10" label="显示数量"></el-input-number>
            </div>
          </div>
        </div>
      </div>
      <div class="component-form-line">
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
      <div class="component-form-line">
        <div class="form-label">填充样式:</div>
        <div class="form-input">
          <el-radio-group v-model="config.fillType" data-symbol="fillType">
            <el-radio :label="1">留白</el-radio>
            <el-radio :label="2">填充</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">显示比例:</div>
        <div class="form-input">
          <el-radio-group v-model="config.showPercent" data-symbol="showPercent">
            <el-radio v-if="config.listType == 1" :label="1">3:2</el-radio>
            <el-radio :label="2">1:1</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">显示样式:</div>
        <div class="form-input">
          <el-radio-group v-model="config.showType" data-symbol="showType">
            <el-radio v-if="config.listType != 4" :label="1">极简</el-radio>
            <el-radio :label="2">卡片</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line">
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
      <div class="component-form-line">
        <div class="form-label">边框颜色:</div>
        <div class="form-input">
          <el-color-picker v-model="customStyle.borderColor" color-format="hex"></el-color-picker>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">圆角:</div>
        <div class="form-input">
          <el-slider v-model="customStyle.borderRadius" show-input :min="min" :max="max"></el-slider>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">左右边距:</div>
        <div class="form-input">
          <el-slider v-model="customStyle.padding" show-input :min="min" :max="max"></el-slider>
        </div>
      </div>
    </div>
    <goodmodal :config="goodconfig"></goodmodal>
    <goodgroupmodal :config="groupconfig"></goodgroupmodal>
  </div>
</template>

<script>
  import UTIL from "../../../utils/utils";
  export default {
    props: ["config", "customStyle", "datas", "group"],
    data() {
      let self = this;
      return {
        min: 0,
        max: 36,
        items: [],
        goodconfig: {
          visible: false,
          multiSelect: true,
          parameters: [],
          ensureGood(active, parameters, flag) {
            if("array" == flag && active instanceof Array && active.length > 0) {
              active.map(function(item) {
                self.datas.push(item.id);
              })
              self.goodconfig.visible = false;
            }
          },
          closeCheckHandler(parameters) {
             self.goodconfig.visible = false;
          }
        },
        groupconfig: {
          visible: false,
          parameters: [],
          ensureGroup(active, parameters) {
            self.group.name = active.name;
            self.group.id = active.id;
            self.groupconfig.visible = false;
          },
          closeCheckHandler(parameters) {
            self.groupconfig.visible = false;
          }
        }
      }
    },
    mounted() {
      this.loadGoods();
    },
    watch: {
      "config.originType": {
        handler(v1, v2) {

        }
      },
      datas(v1, v2) {
        let self = this;
        if(v1 instanceof Array) {
          //为商品数据，直接拉取itemId
          self.loadGoods();
        }
      }
    },
    updated() {

    },
    methods: {
      loadGoods() {
        let self = this;
        if(self.datas.length > 0) {
          let data = {};
          data["itemIds"] = self.datas.join(",");
          let promise = new Promise(function(resolve, reject) {
            UTIL.vueRequestApi(self, "/shop/item/infos", "post", "json", self.$qs.stringify(data), "application/x-www-form-urlencoded", function(data) {
              let items = [];
              for(let i in self.datas) {
                if(data.data[self.datas[i]]) {
                  items.push(data.data[self.datas[i]]);
                }
              }
              resolve(items);
            }, undefined, undefined, "api");
          })
          promise.then(function(items) {
            self.items.splice(0, self.items.length);
            items.map(function(item) {
              self.items.push(item);
            })
          })
        }
        else {
          self.items.splice(0, self.items.length);
        }
      },
      openGoodModal() {
        this.goodconfig.visible = true;
      },
      openGroupModal() {
        this.groupconfig.visible = true;
      },
      clearGroup() {
        this.group.id = 0;
        this.group.name = "";
      },
      listTypeChange(value) {
        if(value != 1) {
          this.config.showPercent = 2
        }
        if(value == 4) {
          this.config.showType = 2
        }
      },
      removeGood(event) {
        let index = event.currentTarget.dataset.index;
        this.datas.splice(index, 1);
      }
    }
  }
</script>

<style  scoped>
  @import url("../../../assets/css/base.css");
  .originType-1{
    display: flex;
    align-items: flex-start;
    background-color: white;
    flex-wrap: wrap;
  }
  .originType-2 {
    background-color: white;
    padding: 8px;
  }
  .originType-2 .originType-2-field {
    display: flex;
    align-items: center;
  }
  .originType-2 .originType-2-field:nth-of-type(n+2) {
    margin-top: 8px;
  }
  .originType-1 > div {
    padding: 8px;
    width: 20%;
    flex: 0 0 20%;
  }
  .originType-1 .add-goods .add-goods-wrapper {
    width: 100%;
    height: 0px;
    padding-bottom: 100%;
    border: 1px dotted #AAAAAA;
    cursor: pointer;
    position: relative;
  }
  .originType-1 .add-goods .add-goods-wrapper i {
    font-size: 36px;
    color: #DDDDDD;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .originType-1 .good-item .good-item-wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
  }
  .originType-1 .good-item .good-item-wrapper .remove-good {
    position: absolute;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    right: -10px;
    top: -10px;
    z-index: 11;
    cursor: pointer;
  }
  .originType-1 .good-item .good-item-wrapper .good-item-image {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .check-box-wrapper:nth-of-type(n+2) {
    margin-top: 16px;
  }
</style>
