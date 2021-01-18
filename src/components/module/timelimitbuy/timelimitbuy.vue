<template>
  <div class="component-10">
    <div class="marketing-box" :style="{backgroundColor: customStyle.backgroundColor}">
      <div class="marketing-tab-list" :style="{background: 'linear-gradient(to right, ' + customStyle.dateBackgroundColorBegin + ' 0%, ' + customStyle.dateBackgroundColorEnd + ' 100%)'}">
        <div v-for="(item, index) in tabItems" :key="index" class="marketing-tab-item" :style="{width: tabWidth}">
          <div class="marketing-tab-item-date" :style="{color: item.mark == current ? customStyle.selectedColor : customStyle.defaultColor}">
            {{item.nowText}}
          </div>
          <div class="marketing-tab-item-text" :style="{color: item.mark == current ? customStyle.selectedColor : customStyle.defaultColor}">
            {{item.text}}
          </div>
        </div>
      </div>
      <div class="marketing-good-list" :class="'good-box-' + config.listType">
        <div v-for="(item, index) in items" :key="index" class="good-item-wrapper">
          <div class="good-item">
            <div class="good-item-image showPercent-2">
              <div class="my-image fillType-2">
                <img :src="item.imageUrl"/>
                <div class="marketing-content" :style="{background: 'linear-gradient(to right, ' + customStyle.marketingBackgroundColorBegin + ' 0%, ' + customStyle.marketingBackgroundColorEnd + ' 100%)'}">
                  <div v-if="config.listType == 1" class="marketing-content-price">¥{{formatMoney(item.sku.price / 100)}}<span>已售xx件</span></div>
                  <div class="marketing-content-over">距结束<span>xx</span>:<span>xx</span>:<span>xx</span></div>
                </div>
              </div>
            </div>
            <div class="marketing-good-content">
              <div class="marketing-good-name">{{item.name}}</div>
              <div v-if="config.listType != 1" class="marketing-good-price">¥{{formatMoney(item.sku.price / 100)}}<span>已售xx件</span></div>
              <div v-if="config.listType == 4" class="marketing-good-sales">
                <el-progress class="marketing-good-sales-silder" :text-inside="true" :stroke-width="15" percentage="66" status="exception" :format="inventoryFormat"></el-progress>
                <div class="marketing-good-sales-percentage">60%</div>
              </div>
              <div class="marketing-good-buy">
                <div :class="'buy-type-' + config.buttonType.type" v-if="config.buttonType.type == 1"><i class="el-icon-shopping-cart-2"></i></div>
                <div :class="'buy-type-' + config.buttonType.type" v-if="config.buttonType.type == 2"><i class="el-icon-plus"></i></div>
                <div :class="'buy-type-' + config.buttonType.type" v-if="config.buttonType.type == 3">{{config.buttonType.text}}</div>
                <div :class="'buy-type-' + config.buttonType.type" v-if="config.buttonType.type == 4">{{config.buttonType.text}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UTIL from "../../../utils/utils";
  export default {
    props: ["config", "customStyle", "datas"],
    mounted() {
      this.$nextTick(() => {
        this.loadTabs();
        this.loadGoods();
      })
    },
    data() {
      let self = this;
      return {
        items: [],
        tabItems: [],
        current: 0
      }
    },
    watch: {
      datas(v1, v2) {
        this.loadGoods();
      },
      "config.hasBegin": {
        handler(v1, v2) {
          if(v1 <= 2 && v1 >= 1) {
            this.loadTabs();
          }
        }
      },
      "config.willBegin": {
        handler(v1, v2) {
          if(v1 <= 2 && v1 >= 1) {
            this.loadTabs();
          }
        }
      }
    },
    computed: {
      tabWidth() {
        let prevSize = this.config.hasBegin;
        if(this.config.hasBegin > 2 || this.config.hasBegin < 1) {
          prevSize = 2;
        }
        let nextSize = this.config.willBegin;
        if(this.config.willBegin > 2 || this.config.willBegin < 1) {
          nextSize = 2;
        }
        return (100 / (prevSize + 1 + nextSize)) + "%";
      }
    },
    methods: {
      inventoryFormat(value) {
        return "还剩" + value + "件";
      },
      loadTabs() {
        this.tabItems.splice(0, this.tabItems.length);
        let nowDate = new Date()
        let now = UTIL.formatDate(nowDate, "/", true) + " " + "00:00:00";
        let timestamp = new Date(now).getTime();
        let nowText = UTIL.formateDateChinese(nowDate);
        let text = "正在疯抢";
        let tab = {
          nowText: nowText,
          mark: timestamp,
          text: text
        }
        this.tabItems.push(tab);
        let size = this.config.hasBegin;
        if(this.config.hasBegin > 2 || this.config.hasBegin < 1) {
          size = 2;
        }
        for(let i = 0; i < size; i ++) {
          let prev = timestamp - (i + 1) * 24 * 60 * 60 * 1000;
          let prevText = UTIL.formateDateChinese(new Date(prev));
          this.tabItems.unshift({
            nowText: prevText,
            mark: prev,
            text: "已开抢"
          })
        }
        let nextSize = this.config.willBegin;
        if(this.config.willBegin > 2 || this.config.willBegin < 1) {
          nextSize = 2;
        }
        for(let i = 0; i < nextSize; i ++) {
          let next = timestamp + (i + 1) * 24 * 60 * 60 * 1000;
          let nextText = UTIL.formateDateChinese(new Date(next));
          this.tabItems.push({
            nowText: nextText,
            mark: next,
            text: "即将开抢"
          })
        }
        this.current = timestamp;
      },
      loadGoods() {
        let self = this;
        self.items.splice(0, self.items.length);
        if(self.datas.length > 0) {
          UTIL.vueRequestApi(self, "/shop/item/xsgList", "post", "json", self.$qs.stringify({page: 1, limit: self.datas.length, itemIds: self.datas.join(","), time: self.current}), "application/x-www-form-urlencoded", function(data) {
            let list = data.list;
            for(let i in list) {
              self.items.push(list[i]);
            }
          }, undefined, undefined, "api")
        }
      },
      formatMoney(value) {
        let a = parseFloat(value);
        return a.toFixed(2);
      }
    }
  }
</script>

<style scoped>
@import url("../../../assets/css/base.css");
  .marketing-box {
    width: 100%;
  }
  .marketing-tab-list {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px 0;
  }
  .marketing-tab-item > div {
    text-align: center;
    font-size: 12px;
  }
  .marketing-tab-item .marketing-tab-item-text {
    margin-top: 8px;
  }
  .marketing-good-list {
    margin-top: 16px;
  }

  /** good-box-4 start **/
  .marketing-good-list.good-box-4 {
    width: 100%;
  }
  .marketing-good-list.good-box-4 .good-item-wrapper {
    width: 100%;
    padding: 0 0 8px 0;
  }
  .marketing-good-list.good-box-4 .good-item-wrapper .good-item {
    display: flex;
  }
  .marketing-good-list.good-box-4 .good-item-wrapper .good-item .good-item-image {
    width: 40% !important;
    height: 0px;
    padding-bottom: 40%;
    position: relative;
    flex: 0 0 40%;
  }
  .marketing-good-list.good-box-4 .good-item-wrapper .good-item .good-item-image .my-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  /** good-box-4 end **/

  .my-image {
    position: relative;
  }
  .my-image .marketing-content {
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 6%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .my-image .marketing-content .marketing-content-price {
    color: white;
    font-size: 18px;
  }
  .my-image .marketing-content .marketing-content-price span {
    font-size: 12px;
    color: #DDDDDD;
    margin-left: 4px;
  }
  .my-image .marketing-content .marketing-content-over {
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .my-image .marketing-content .marketing-content-over span {
    padding: 4px 2px;
    background-color: white;
    margin: 0 4px;
    color: #B94A48;
  }
  .marketing-good-content {
    width: 100%;
    padding: 8px 4% 40px 4%;
    background-color: white;
    position: relative;
  }
  .marketing-good-content .marketing-good-buy {
    position: absolute;
    bottom: 6px;
    right: 6px;
  }
  .marketing-good-content .marketing-good-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .marketing-good-content .marketing-good-price {
    color: #DD0000;
    margin-top: 4px;
  }
  .marketing-good-content .marketing-good-price span {
    font-size: 8px;
    color: ;
    color: #DDDDDD;
    margin-left: 4px;
  }
  .marketing-good-content .marketing-good-sales {
    margin-top: 4px;
    display: flex;
    align-items: center;
  }
  .marketing-good-content .marketing-good-sales .marketing-good-sales-silder {
    width: 80%;
  }
  .marketing-good-content .marketing-good-sales .marketing-good-sales-percentage {
    flex: 1;
    text-align: right;
    color: #DD0000;
  }
  .buy-type-1,.buy-type-2 {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #DD524D;
    color: white;
    font-size: 16px;
  }
  .buy-type-3 {
    color: white;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #F56C6C;
  }
  .buy-type-4 {
    color: #F56C6C;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #F56C6C;
  }
</style>
