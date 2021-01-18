<template>
  <div class="component-form">
    <div class="component-form-list">
      <div class="component-form-line">
        <div class="form-label">选择活动</div>
        <div class="form-input">
          <div class="originType-1">
            <div v-for="(item, index) in items" :key="index" class="good-item">
              <div class="good-item-wrapper">
                <div class="remove-good" :data-index="index" v-on:click="removeGood">
                  <i class="el-icon-circle-close"></i>
                </div>
                <el-image class="good-item-image" :src="item.imageUrl"></el-image>
              </div>
            </div>
            <div class="add-goods">
              <div class="add-goods-wrapper" v-on:click="openMarketingModal">
                <i class="el-icon-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">已开抢:</div>
        <div class="form-input">
          <el-input-number class="limit-days" v-model="config.hasBegin" :min="1" :max="2" controls-position="right"></el-input-number>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">即将开抢:</div>
        <div class="form-input">
          <el-input-number class="limit-days" v-model="config.willBegin" :min="1" :max="2" controls-position="right"></el-input-number>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">日期背景色:</div>
        <div class="form-input flex-box">
          <el-color-picker v-model="customStyle.dateBackgroundColorBegin" color-format="hex"></el-color-picker> <i style="margin: 0 8px;" class="el-icon-minus"></i>
          <el-color-picker v-model="customStyle.dateBackgroundColorEnd" color-format="hex"></el-color-picker>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">文字颜色:</div>
        <div class="form-input">
          <el-color-picker v-model="customStyle.selectedColor" color-format="hex"></el-color-picker>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">默认颜色:</div>
        <div class="form-input">
          <el-color-picker v-model="customStyle.defaultColor" color-format="hex"></el-color-picker>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">列表样式:</div>
        <div class="form-input">
          <el-radio-group v-model="config.listType" data-symbol="listType">
            <el-radio :label="1">大图</el-radio>
            <el-radio :label="2">小图</el-radio>
            <el-radio :label="4">详细列表</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">移动遮罩:</div>
        <div class="form-input flex-box">
          <el-color-picker v-model="customStyle.marketingBackgroundColorBegin" color-format="hex"></el-color-picker> <i style="margin: 0 8px;" class="el-icon-minus"></i>
          <el-color-picker v-model="customStyle.marketingBackgroundColorEnd" color-format="hex"></el-color-picker>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">购买按钮:</div>
        <div class="form-input">
          <div class="button-types">
            <el-radio-group v-model="config.buttonType.type" data-symbol="listType">
              <el-radio :label="1">样式一</el-radio>
              <el-radio :label="2">样式二</el-radio>
              <el-radio :label="3">样式三</el-radio>
              <el-radio :label="4">样式四</el-radio>
            </el-radio-group>
          </div>
          <div class="button-text" v-if="config.buttonType.type == 3 || config.buttonType.type == 4">
            <el-input v-model="config.buttonType.text"></el-input>
          </div>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">背景色:</div>
        <div class="form-input">
          <el-color-picker v-model="customStyle.backgroundColor" color-format="hex"></el-color-picker>
        </div>
      </div>
    </div>
    <marketingmodal title="限时购列表" :config="marketingconfig"></marketingmodal>
  </div>
</template>

<script>
  import UTIL from "../../../utils/utils";
  export default {
    props: ["config", "customStyle", "datas"],
    mounted() {
      this.loadGoods();
    },
    data() {
      let self = this;
      return {
        items: [],
        marketingconfig: {
          visible: false,
          ensureGood(active) {
            self.datas.push(active.id);
            self.marketingconfig.visible = false;
          }
        }
      }
    },
    watch: {
      datas(v1, v2) {
        this.loadGoods();
      }
    },
    methods: {
      loadGoods() {
        let self = this;
        self.items.splice(0, self.items.length);
        if(self.datas.length > 0) {
          UTIL.vueRequestApi(self, "/shop/item/infos", "post", "json", self.$qs.stringify({itemIds: self.datas.join(",")}), "application/x-www-form-urlencoded", function(data) {
            let list = data.list;
            for(let i in self.datas) {
              if(data.data[self.datas[i]]) {
                self.items.push(data.data[self.datas[i]]);
              }
            }
          }, undefined, undefined, "api")
        }
      },
      openMarketingModal() {
        this.marketingconfig.visible = true;
      },
      removeGood(event) {
        let index = event.currentTarget.dataset.index;
        this.datas.splice(index, 1);
      }
    }
  }
</script>

<style scoped>
@import url("../../../assets/css/base.css");
  .originType-1 {
    background-color: white;
    display: flex;
    flex-wrap: wrap;
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
  .limit-days {
    width: 30%;
  }
  .button-text {
    margin-top: 8px;
  }
</style>
