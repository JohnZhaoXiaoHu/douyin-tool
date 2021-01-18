<template>
  <div class="component-form">
    <div class="component-form-list">
      <div class="component-form-line">
        <div class="form-label">选择模板:</div>
        <div class="form-input type-list">
					<div class="type-item" data-value="1" :class="config.swiperType == 1 ? 'active' : ''" v-on:click="moduleChange">
						<div class="type-item-box">
							<div class="type-item-thumb">
								<div class="type-item-thumb-wrapper">
									<img src="../../../../static/images/icon/swiper-type-1.png"/>
								</div>
								<div class="type-item-text"><span>轮播海报</span></div>
							</div>
						</div>
					</div>
					<div class="type-item" data-value="2" :class="config.swiperType == 2 ? 'active' : ''" v-on:click="moduleChange">
						<div class="type-item-box">
							<div class="type-item-thumb">
								<div class="type-item-thumb-wrapper">
									<img src="../../../../static/images/icon/swiper-type-2.jpeg"/>
								</div>
								<div class="type-item-text"><span>3D轮播(暂不支持小程序)</span></div>
							</div>
						</div>
					</div>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">背景色:</div>
				<div class="form-input">
          <el-color-picker v-model="customStyle.backgroundColor" color-format="hex"></el-color-picker>
				</div>
      </div>
      <div class="component-form-line">
        <div class="form-label">边距:</div>
				<div class="form-input">
          <el-slider v-model="customStyle.padding" show-input :min="0" :max="36"></el-slider>
				</div>
      </div>
      <div class="component-form-line">
        <div class="form-label">高度:</div>
				<div class="form-input">
          <el-slider v-model="customStyle.height" show-input :min="0" :max="240"></el-slider>
				</div>
      </div>
    </div>
    <div class="component-data">
      <div v-for="(item, index) in datas" :key="index" class="component-data-box">
        <div class="remove-data" :data-index="index" v-on:click.stop="removeData"><i class="el-icon-circle-close"></i></div>
        <div class="component-data-detail">
          <div class="component-data-thumb">
            <div class="component-data-thumb-wrapper">
              <el-image :src="item.thumb" class="component-data-thumb-style">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div class="component-data-thumb-change" v-on:click="openResource" :data-index="index">{{item.thumb == '' ? '添加图片' : '更改图片'}}</div>
          </div>
          <div class="component-data-content">
            <el-form label-width="60px">
              <el-form-item label="标题">
                <el-input :data-index="index" v-model="item.title"></el-input>
              </el-form-item>
              <el-form-item label="链接">
                <el-cascader @change="(value) => getModulePath(value, index)" v-model="item.value" :options="modules" clearable></el-cascader>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="append-data" v-on:click="append">
        <i class="el-icon-plus"></i>添加一个图片广告
      </div>
    </div>
    <resourcemodal :config="resourceconfig"></resourcemodal>
    <goodmodal :config="goodconfig"></goodmodal>
    <goodgroupmodal :config="goodgroupconfig"></goodgroupmodal>
    <categorymodal :config="categoryconfig"></categorymodal>
  </div>
</template>

<script>
  export default {
    props: ["config", "customStyle", "datas"],
    data() {
      let self = this;
      return {
        modules: self.$global.modules,
        resourceconfig: {
          visible: false,
          index: -1,
          ensureResource: function(url, index) {
            self.datas[index].thumb = url;
            self.resourceconfig.visible = false;
          }
        },
        goodconfig: {
          visible: false,
          multiSelect: false,
          parameters: [],
          ensureGood(active, parameters, flag) {
            if("object" == flag) {
              self.datas[parameters[2]].href = parameters[0] + "?" + parameters[1] + "=" + active.id;
              self.datas[parameters[2]].openType = parameters[3]
              self.goodconfig.visible = false;
            }
          },
          closeCheckHandler(parameters) {
             self.datas[parameters[2]].value = "";
             self.datas[parameters[2]].href = "";
             self.datas[parameters[2]].openType = "";
             self.goodconfig.visible = false;
          }
        },
        categoryconfig : {
          visible: false,
          parameters: [],
          ensureCategory(active, parameters) {
             self.datas[parameters[2]].href = parameters[0] + "?" + parameters[1] + "=" + active.id;
             self.datas[parameters[2]].openType = parameters[3];
             self.categoryconfig.visible = false;
          },
          closeCheckHandler(parameters) {
            self.datas[parameters[2]].value = "";
            self.datas[parameters[2]].href = "";
            self.datas[parameters[2]].openType = ""
            self.categoryconfig.visible = false;
          }
        },
        goodgroupconfig: {
          visible: false,
          parameters: [],
          ensureGroup(active, parameters) {
              self.datas[parameters[2]].href = parameters[0] + "?" + parameters[1] + "=" + active.id;
              self.datas[parameters[2]].openType = parameters[3];
              self.goodgroupconfig.visible = false;
          },
          closeCheckHandler(parameters) {
            self.datas[parameters[2]].value = "";
            self.datas[parameters[2]].href = "";
            self.datas[parameters[2]].openType = "";
            self.goodgroupconfig.visible = false;
          }
        }
      }
    },
    methods: {
      getModulePath(value, index) {
        if(value.length > 0) {
          let obj = JSON.parse(value[value.length - 1]);
          let path = obj.path;
          let type = obj.type;
          let key = obj.key;
          let openType = obj.openType;
          if(type == 0) {
            this.datas[index].href = path;
            this.datas[index].openType = openType;
          }
          else if(type == 1) {
            //商品加参数
            this.goodconfig.parameters.splice(0, this.goodconfig.parameters.length);
            this.goodconfig.parameters.push(path, key, index, openType);
            this.goodconfig.visible = true;
          }
          else if(type == 2) {
            this.categoryconfig.parameters.splice(0, this.categoryconfig.parameters.length);
            this.categoryconfig.parameters.push(path, key, index, openType);
            this.categoryconfig.visible = true;
          }
          else if(type == 3) {
            this.goodgroupconfig.parameters.splice(0, this.goodgroupconfig.parameters.length);
            this.goodgroupconfig.parameters.push(path, key, index, openType);
            this.goodgroupconfig.visible = true;
          }
        }
        else {
          this.datas[index].href = "";
          this.datas[index].openType = "";
        }
      },
      removeData(event) {
        let index = event.currentTarget.dataset.index;
        this.datas.splice(index, 1);
      },
      openResource(event) {
        let index = event.currentTarget.dataset.index;
        this.resourceconfig.visible = true;
        this.resourceconfig.index = index;
      },
      append() {
        this.$set(this.datas, this.datas.length, {
          title: "",
          thumb: "",
          href: "",
          value: [],
          openType: ""
        })
      },
      moduleChange(event) {
        let swiperType = event.currentTarget.dataset.value;
        this.config.swiperType = swiperType;
      }
    }
  }
</script>

<style  scoped>
 @import url("../../../assets/css/base.css");
  .type-list {
  	display: flex;
  	flex-wrap: wrap;
  }
  .type-list .type-item {
  	width: 25%;
  	padding: 0 8px 8px 0px;
  	cursor: pointer;
  }
  .type-list .type-item.active .type-item-box {
  	border: 1px solid #409EFF;
  }
  .type-list .type-item .type-item-box {
  	background: #FFFFFF;
  	box-shadow: 0 0 3px #EEEEEE;
  }
  .type-list .type-item .type-item-box .type-item-thumb {
  	width: 100%;
  	height: 0;
  	padding-bottom: 100%;
  	position: relative;
  }
  .type-list .type-item .type-item-box .type-item-thumb .type-item-thumb-wrapper {
  	width: 100%;
  	position: absolute;
  	left: 0;
  	top: 0;
  	height: 70%;
  	display: flex;
  	align-items: center;
  	justify-content: space-around;
  }
  .type-list .type-item .type-item-box .type-item-thumb .type-item-thumb-wrapper img {
  	width: 90%;
  }
  .type-list .type-item .type-item-box .type-item-text {
  	position: absolute;
  	top: 70%;
  	left: 0;
  	font-size: 12px;
  	height: 30%;
  	width: 100%;
  	display: flex;
  	align-items: center;
  	justify-content: space-around;
  }
</style>
