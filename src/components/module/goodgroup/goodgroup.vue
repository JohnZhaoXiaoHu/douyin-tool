<template>
  <div class="component-8" :style="{backgroundColor: customStyle.backgroundColor, paddingLeft: padding, paddingRight: padding}">
    <div :class="'goodgroup-box-' + config.groupType">
      <div class="goodgroup-tab" :class="'groupheader-type-' + config.groupHeaderType">
        <div v-for="(item, index) in datas" :key="index" :class="index == current ? 'active' : ''" class="goodgroup-tab-item" :style="{width: width}">
          {{item.name}}
        </div>
      </div>
      <div class="goodgroup-list">
        <div :class="'good-box-' + (config.groupType == 1 ? config.listType : '4')">
          <div v-for="(item, index) in items" :key="index" class="good-item-wrapper">
            <div class="good-item" style="border-radius: 8px;">
              <div class="good-item-image" :class="'showPercent-' + (config.groupType == 1 ? config.showPercent : '2')" style="border-top-left-radius: 8px; border-top-right-radius: 8px;">
                <div class="my-image" :class="'fillType-' + (config.groupType == 1 ? config.fillType : '2')">
                  <img :src="item.imageUrl" style="border-radius: 8px;"/>
                </div>
              </div>
              <div class="good-item-content">
                <div v-if="config.showContent.name == true" class="good-item-name">{{item.name}}</div>
                <div v-if="config.showContent.buypoint == true || config.groupType == 2" class="good-item-buypoint">{{item.buyingPoint ? item.buyingPoint : ''}}</div>
                <div v-if="config.showContent.price == true" class="good-item-price">¥{{formatMoney(item.skuList[0].price / 100)}}</div>
              </div>
              <div class="good-badge" style="border-radius: 8px;" v-if="config.showContent.badge.visible == true">
                <span v-if="config.showContent.badge.type == 1">新品</span>
                <span v-if="config.showContent.badge.type == 2">热卖</span>
                <span v-if="config.showContent.badge.type == 3">NEW</span>
                <span v-if="config.showContent.badge.type == 4">HOT</span>
              </div>
              <div v-if="config.showType == 2 || config.groupType == 2" class="show-type">
                <i class="fa fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="good-box-more" v-if="config.showContent.more == true && config.groupType == 1">
        <span>查看更多<i class="el-icon-caret-right"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
  import UTIL from "../../../utils/utils";
  export default {
    props: ["config", "customStyle", "datas"],
    mounted() {
      let self = this;
      if(self.datas.length > 0) {
        let id = self.datas[0].id;
        let count = self.datas[0].count;
        UTIL.vueRequestApi(self, "/shop/item/list", "post", "json", self.$qs.stringify({page: 1, limit: count, sgroupId: id}), "application/x-www-form-urlencoded", function(data) {
          let list = data.list;
          for(let i in list) {
            let obj = {}
            obj.id = list[i].id
            obj.name = list[i].name;
            obj.imageUrl = list[i].imageUrl;
            obj.buyingPoint = list[i].buyingPoint ? list[i].buyingPoint : "";
            let skuList = [];
            let sku = {};
            sku.price = list[i].sku.price;
            sku.id = list[i].sku.id;
            skuList.push(sku);
            obj.skuList = skuList;
            self.items.push(obj);
          }
        }, undefined, undefined, "api")
      }
    },
    data() {
      let self = this;
      return {
        current: 0,
        items: []
      }
    },
    watch: {
      datas: {
        handler(v1, v2) {
          this.items.splice(0, this.items.length);
          if(v1.length > 0) {
            let id = v1[0].id;
            let count = v1[0].count;
            let self = this;
            UTIL.vueRequestApi(this, "/shop/item/list", "post", "json", this.$qs.stringify({page: 1, limit: count, sgroupId: id}), "application/x-www-form-urlencoded", function(data) {
              let list = data.list;
              for(let i in list) {
                let obj = {}
                obj.id = list[i].id
                obj.name = list[i].name;
                obj.imageUrl = list[i].imageUrl;
                obj.buyingPoint = list[i].buyingPoint ? list[i].buyingPoint : "";
                let skuList = [];
                let sku = {};
                sku.price = list[i].sku.price;
                sku.id = list[i].sku.id;
                skuList.push(sku);
                obj.skuList = skuList;
                self.items.push(obj);
              }
            }, undefined, undefined, "api")
          }
        },
        deep: true
      }
    },
    computed: {
      padding() {
        return this.customStyle.padding + "px";
      },
      width() {
        if(this.config.groupType == 2) {
          return "100%";
        }
        else {
          if(this.config.groupHeaderType == 1) {
            return (100 / this.datas.length) + "%";
          }
          else {
            return ((100 / this.datas.length) - 1) + "%";
          }
        }
      }
    },
    methods: {
      formatMoney(value) {
        let a = parseFloat(value);
        return a.toFixed(2);
      }
    }
  }
</script>

<style  scoped>
 @import url("../../../assets/css/base.css");
  .component-8 {
    width: 100%;
  }
  .goodgroup-box-1 {
    width: 100%;
  }
  .goodgroup-box-1 .goodgroup-tab {
    display: flex;
    align-items: center;
  }
  .goodgroup-box-1 .goodgroup-tab.groupheader-type-1 {
    background-color: white;
  }
  .goodgroup-box-1 .goodgroup-tab .goodgroup-tab-item {
    padding: 12px 0;
    text-align: center;
    font-size: 12px;
  }
  .goodgroup-box-1 .goodgroup-tab.groupheader-type-1 .goodgroup-tab-item.active {
    border-bottom: 1px solid #DD524D;
    color: #DD524D;
  }
  .goodgroup-box-1 .goodgroup-tab.groupheader-type-2 {
    background: transparent;
    justify-content: space-between;
    border-bottom: 1px solid #DD524D;
  }
  .goodgroup-box-1 .goodgroup-tab.groupheader-type-2 .goodgroup-tab-item{
    background-color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .goodgroup-box-1 .goodgroup-tab.groupheader-type-2 .goodgroup-tab-item.active {
    background-color: #DD524D;
    color: white;
  }
  .goodgroup-box-1 .goodgroup-list {
    margin-top: 16px;
    width: 100%;
    display: flex;
  }
  .goodgroup-list .good-box-1,.goodgroup-list .good-box-2,.goodgroup-list .good-box-3,.goodgroup-list .good-box-4 {
    width: 100%;
  }
  .goodgroup-box-2 {
    display: flex;
    align-items: flex-start;
    background-color: #EEEEEE;
  }
  .goodgroup-box-2 .goodgroup-tab {
    width: 20%;
    font-size: 12px;
    height: 100%;
    background-color: #EEEEEE;
  }
  .goodgroup-box-2 .goodgroup-tab .goodgroup-tab-item:nth-of-type(n+2) {
    border-top: 1px solid #DDDDDD;
  }
  .goodgroup-box-2 .goodgroup-tab .goodgroup-tab-item {
    text-align: center;
    padding: 8px 0;
  }
  .goodgroup-box-2 .goodgroup-tab .goodgroup-tab-item.active {
    background-color: white;
  }
  .goodgroup-box-2 .goodgroup-list {
    flex: 1;
    background-color: white;
    padding-top: 8px;
    min-height: 300px;
  }
  .goodgroup-box-2 .goodgroup-list .good-box-4 .good-item-image.showPercent-2{
    width: 30%;
    padding-bottom: 30%;
  }
  .goodgroup-box-2 .good-item-wrapper:nth-of-type(n+2) {
    border-top: 1px solid #DDDDDD;
  }
  .goodgroup-box-2 .good-item-name {
    font-size: 10px !important;
    padding: 4px 4% !important;;
  }
  .goodgroup-box-2 .good-item-price {
    font-size: 10px !important;;
    padding: 4px 4% !important;;
  }
  .goodgroup-box-2 .show-type {
    width: 30px !important;;
    height: 30px !important;;
  }
  .goodgroup-box-2 .show-type i {
    font-size: 16px !important;;
  }
</style>
