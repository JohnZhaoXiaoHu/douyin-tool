<template>
  <div class="component-9" :style="{backgroundColor: customStyle.backgroundColor, paddingLeft: padding, paddingRight: padding}">
    <div v-if="config.cubeType == 1" class="c9s-cube-box" :class="'c9s-cube-box-' + config.cubeType">
      <div class="c9s-cube-item" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[0].src"></el-image>
        </div>
      </div>
      <div class="c9s-cube-item" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[1].src"></el-image>
        </div>
      </div>
    </div>
    <div v-if="config.cubeType == 2" class="c9s-cube-box" :class="'c9s-cube-box-' + config.cubeType">
      <div class="c9s-cube-item" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[0].src"></el-image>
        </div>
      </div>
      <div class="c9s-cube-item" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[1].src"></el-image>
        </div>
      </div>
      <div class="c9s-cube-item" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[2].src"></el-image>
        </div>
      </div>
    </div>
    <div v-if="config.cubeType == 3" class="c9s-cube-box" :class="'c9s-cube-box-' + config.cubeType">
      <div class="c9s-cube-item" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[0].src"></el-image>
        </div>
      </div>
      <div class="c9s-cube-item" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[1].src"></el-image>
        </div>
      </div>
      <div class="c9s-cube-item" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[2].src"></el-image>
        </div>
      </div>
      <div class="c9s-cube-item" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[3].src"></el-image>
        </div>
      </div>
    </div>
    <div v-if="config.cubeType == 4" class="c9s-cube-box" :class="'c9s-cube-box-' + config.cubeType">
      <div class="c9s-cube-item" data-index="0" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[0].src"></el-image>
        </div>
      </div>
      <div class="c9s-cube-item" data-index="1" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[1].src"></el-image>
        </div>
      </div>
      <div class="c9s-cube-item" data-index="2" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[2].src"></el-image>
        </div>
      </div>
      <div class="c9s-cube-item" data-index="3" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[3].src"></el-image>
        </div>
      </div>
    </div>
    <div v-if="config.cubeType == 5" class="c9s-cube-box" :class="'c9s-cube-box-' + config.cubeType">
      <div class="c9s-cube-item" data-index="0" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[0].src"></el-image>
        </div>
      </div>
      <div class="c9s-cube-item" data-index="1" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[1].src"></el-image>
        </div>
      </div>
      <div class="c9s-cube-item" data-index="2" :style="{padding: innerPadding}">
        <div class="c9s-cube-item-wrapper" :class="'layoutType-' + config.layoutType">
          <el-image fit="fill" class="c9s-cube-item-image" :src="datas[2].src"></el-image>
        </div>
      </div>
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
    computed: {
      padding() {
        return this.customStyle.padding + "px";
      },
      innerPadding() {
        return this.customStyle.innerPadding + "px";
      }
    },
    methods: {

    }
  }
</script>

<style  scoped>

  @import url("../../../assets/css/base.css");
  .c9s-cube-box {
    width: 100%;
    position: relative;
  }
  .c9s-cube-box-4,.c9s-cube-box-5 {
    height: 0;
    padding-bottom: 100%;
  }
  .c9s-cube-box-1,.c9s-cube-box-2,.c9s-cube-box-3 {
    display: flex;
    align-items: flex-start;
  }
  .c9s-cube-box-1 .c9s-cube-item {
    width: 50%;
  }
  .c9s-cube-box-2 .c9s-cube-item {
    width: 33.3333333%;
  }
  .c9s-cube-box-3 .c9s-cube-item {
    width: 25%;
  }
  .c9s-cube-box-1 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-2,
  .c9s-cube-box-2 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-2,
  .c9s-cube-box-3 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-2 {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
  }

  .c9s-cube-box-1 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-1,
  .c9s-cube-box-2 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-1,
  .c9s-cube-box-3 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-1 {
    width: 100%;
  }

  .c9s-cube-box-1 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-2 .c9s-cube-item-image,
  .c9s-cube-box-2 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-2 .c9s-cube-item-image,
  .c9s-cube-box-3 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-2 .c9s-cube-item-image {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .c9s-cube-box-1 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-1 .c9s-cube-item-image,
  .c9s-cube-box-2 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-1 .c9s-cube-item-image,
  .c9s-cube-box-3 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-1 .c9s-cube-item-image {
    width: 100%;
    height: auto;
  }

  .c9s-cube-box-4 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-2,
  .c9s-cube-box-5 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-2 {
    width: 100%;
    height: 100%;
  }
  .c9s-cube-box-4 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-2 .c9s-cube-item-image,
  .c9s-cube-box-5 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-2 .c9s-cube-item-image {
    width: 100%;
    height: 100%;
  }

 .c9s-cube-box-4 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-1,
 .c9s-cube-box-5 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-1 {
   width: 100%;
 }
 .c9s-cube-box-4 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-1 .c9s-cube-item-image,
 .c9s-cube-box-5 .c9s-cube-item .c9s-cube-item-wrapper.layoutType-1 .c9s-cube-item-image {
   width: 100%;
 }

  .c9s-cube-box-4 .c9s-cube-item {
    position: absolute;
    width: 50%;
    height: 50%;
  }
  .c9s-cube-box-4 .c9s-cube-item[data-index="0"] {
    left: 0;
    top: 0;
  }
  .c9s-cube-box-4 .c9s-cube-item[data-index="1"] {
    left: 50%;
    top: 0;
  }
  .c9s-cube-box-4 .c9s-cube-item[data-index="2"] {
    left: 0;
    top: 50%;
  }
  .c9s-cube-box-4 .c9s-cube-item[data-index="3"] {
    left: 50%;
    top: 50%;
  }
  .c9s-cube-box-5 .c9s-cube-item {
    position: absolute;
  }
  .c9s-cube-box-5 .c9s-cube-item[data-index="0"] {
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
  }
  .c9s-cube-box-5 .c9s-cube-item[data-index="1"] {
    left: 50%;
    top: 0;
    width: 50%;
    height: 50%;
  }
  .c9s-cube-box-5 .c9s-cube-item[data-index="2"] {
    left: 50%;
    top: 50%;
    width: 50%;
    height: 50%;
  }
</style>
