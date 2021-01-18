<template>
  <div class="component-7" :style="{backgroundColor: customStyle.backgroundColor}">
    <div :class="'good-box-' + config.listType" :style="{paddingLeft: padding, paddingRight: padding}">
      <div v-for="(item, index) in items" :key="index" class="good-item-wrapper">
        <div class="good-item" :style="{borderRadius: borderRadius, border: border}">
          <div class="good-item-image" :class="config.showPercent == 1 ? 'showPercent-1' : 'showPercent-2'" :style="{borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius}">
            <div class="my-image" :class="config.fillType == 1 ? 'fillType-1' : 'fillType-2'">
              <img :src="item.imageUrl" :style="{borderRadius: borderRadius}"/>
            </div>
          </div>
          <div class="good-item-content">
            <div v-if="config.showContent.name == true" class="good-item-name">{{item.name}}</div>
            <div v-if="config.showContent.buypoint == true" class="good-item-buypoint">{{item.buyingPoint ? item.buyingPoint : ''}}</div>
            <div v-if="config.showContent.price == true" class="good-item-price">¥{{formatMoney(item.skuList[0].price / 100)}}</div>
          </div>
          <div class="good-badge" :style="{borderRadius: borderRadius}" v-if="config.showContent.badge.visible == true">
            <span v-if="config.showContent.badge.type == 1">新品</span>
            <span v-if="config.showContent.badge.type == 2">热卖</span>
            <span v-if="config.showContent.badge.type == 3">NEW</span>
            <span v-if="config.showContent.badge.type == 4">HOT</span>
          </div>
          <div v-if="config.showType == 2" class="show-type">
            <i class="fa fa-cart-plus"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="good-box-more" v-if="config.showContent.more == true">
      <span>查看更多<i class="el-icon-caret-right"></i></span>
    </div>
  </div>
</template>

<script>
  import UTIL from "../../../utils/utils";
  export default {
    props: ["config", "customStyle", "datas", "group"],
    mounted() {
      if(this.config.originType == 1) {
        this.loadGoodsByIDs();
      }
      else {
        this.loadGoodsByGroup();
      }
    },
    data() {
      let self = this;
      return {
        items: [],
      }
    },
    watch: {
      "config.originType": {
        handler(v1, v2) {
          if(v1 == 1) {
            this.loadGoodsByIDs();
          }
          if(v1 == 2) {
            this.loadGoodsByGroup();
          }
        }
      },
      datas(v1, v2) {
        this.loadGoodsByIDs();
      },
      group: {
        handler(v1, v2) {
          this.loadGoodsByGroup();
        },
        deep: true
      }
    },
    computed: {
      padding() {
        return this.customStyle.padding + "px";
      },
      borderRadius() {
        return this.customStyle.borderRadius + "px";
      },
      border() {
        return (this.customStyle.borderColor == "" || this.customStyle.borderColor == null || !this.customStyle.borderColor) ? "none" : "1px solid" + this.customStyle.borderColor;
      }
    },
    methods: {
      loadGoodsByIDs() {
        this.items.splice(0, this.items.length);
        if(this.datas.length > 0) {
          let self = this;
          UTIL.vueRequestApi(self, "/shop/item/infos", "post", "json", self.$qs.stringify({itemIds : self.datas.join(",")}), "application/x-www-form-urlencoded", function(data) {
            for(let i in self.datas) {
              if(data.data[self.datas[i]]) {
                self.items.push(data.data[self.datas[i]]);
              }
            }
          }, undefined, undefined, "api");
        }
      },
      loadGoodsByGroup() {
        this.items.splice(0, this.items.length);
        if(this.group.id > 0) {
          let self = this;
          UTIL.vueRequestApi(this, "/shop/item/list", "post", "json", this.$qs.stringify({page: 1, limit: this.group.count, sgroupId: this.group.id}), "application/x-www-form-urlencoded", function(data) {
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
      formatMoney(value) {
        let a = parseFloat(value);
        return a.toFixed(2);
      }
    }
  }
</script>

<style  scoped>
  @import url("../../../assets/css/base.css");
  .component-7 {
    padding-top: 8px;
  }
</style>
