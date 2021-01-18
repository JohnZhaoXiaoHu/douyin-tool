<template>
  <div class="component-1" :style="{backgroundColor: customStyle.backgroundColor, padding: padding}">
    <div :class="'swiper-box-' + config.swiperType" :style="{height: height}">
      <el-carousel v-if="datas.length > 0" :type="swiperType" indicator-position="none" :height="height">
        <el-carousel-item v-for="(item, index) in datas" :key="index">
          <div class="swiper-item">
            <el-image class="swiper-item-thumb" :src="item.thumb"></el-image>
            <div class="swiper-item-title" v-if="item.title != ''">{{item.title}}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["config", "customStyle", "datas"],
    data() {
      let self = this;
      return {

      }
    },
    mounted() {

    },
    updated() {

    },
    watch: {

    },
    computed: {
      padding() {
        return this.customStyle.padding + "px";
      },
      height() {
        return this.customStyle.height + "px";
      },
      swiperType() {
        return this.config.swiperType == 2 ? "card" : "";
      }
    },
    methods: {

    }
  }
</script>

<style  scoped>
 @import url("../../../assets/css/base.css");
  .component-1 {
    width: 100%;
  }
  .component-1 .swiper-box-1 {
    width: 100%;
  }
  .component-1 .swiper-box-2 {
    width: 100%;
  }
/*  .component-1 .swiper-box-1  .swiper-box-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  } */
  .swiper-item {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .swiper-item .swiper-item-thumb {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .swiper-item .swiper-item-title {
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 4px 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
</style>
