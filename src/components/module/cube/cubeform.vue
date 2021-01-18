<template>
  <div class="component-form">
    <div class="component-form-list">
      <div class="component-form-line">
        <div class="form-label">选择模板:</div>
        <div class="form-input type-list">
          <div class="type-item" data-value="1" :class="config.cubeType == 1 ? 'active' : ''" v-on:click="moduleChange">
          	<div class="type-item-box">
          		<div class="type-item-thumb">
          			<div class="type-item-thumb-wrapper">
          				<img src="../../../../static/images/icon/cube-type-1.png"/>
          			</div>
          			<div class="type-item-text"><span>一行2个</span></div>
          		</div>
          	</div>
          </div>
          <div class="type-item" data-value="2" :class="config.cubeType == 2 ? 'active' : ''" v-on:click="moduleChange">
          	<div class="type-item-box">
          		<div class="type-item-thumb">
          			<div class="type-item-thumb-wrapper">
          				<img src="../../../../static/images/icon/cube-type-2.png"/>
          			</div>
          			<div class="type-item-text"><span>一行3个</span></div>
          		</div>
          	</div>
          </div>
          <div class="type-item" data-value="3" :class="config.cubeType == 3 ? 'active' : ''" v-on:click="moduleChange">
          	<div class="type-item-box">
          		<div class="type-item-thumb">
          			<div class="type-item-thumb-wrapper">
          				<img src="../../../../static/images/icon/cube-type-3.png"/>
          			</div>
          			<div class="type-item-text"><span>一行4个</span></div>
          		</div>
          	</div>
          </div>
          <div class="type-item" data-value="4" :class="config.cubeType == 4 ? 'active' : ''" v-on:click="moduleChange">
          	<div class="type-item-box">
          		<div class="type-item-thumb">
          			<div class="type-item-thumb-wrapper">
          				<img src="../../../../static/images/icon/cube-type-4.png"/>
          			</div>
          			<div class="type-item-text"><span>2左2右</span></div>
          		</div>
          	</div>
          </div>
          <div class="type-item" data-value="5" :class="config.cubeType == 5 ? 'active' : ''" v-on:click="moduleChange">
          	<div class="type-item-box">
          		<div class="type-item-thumb">
          			<div class="type-item-thumb-wrapper">
          				<img src="../../../../static/images/icon/cube-type-5.png"/>
          			</div>
          			<div class="type-item-text"><span>1左2右</span></div>
          		</div>
          	</div>
          </div>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">图片布局:</div>
        <div class="form-input">
          <el-radio-group v-model="config.layoutType">
            <el-radio :label="1">自适应</el-radio>
            <el-radio :label="2">固定大小</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">背景色:</div>
        <div class="form-input">
          <el-color-picker color-format="hex" v-model="customStyle.backgroundColor"></el-color-picker>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">左右留白:</div>
        <div class="form-input">
          <el-slider v-model="customStyle.padding" show-input :min="0" :max="50"></el-slider>
        </div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">内边距:</div>
        <div class="form-input">
          <el-slider v-model="customStyle.innerPadding" show-input :min="0" :max="50"></el-slider>
        </div>
      </div>
      <div class="component-form-line">
        <div class="form-label">图片布局:</div>
        <div class="form-input">
          <div v-if="config.cubeType == 1" :class="'c9-cube-box c9-cube-box-' + config.cubeType">
            <div class="c9-cube-item" :class="active == 0 ? 'active' : ''" data-index="0" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[0] || !datas[0].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[0].src"></el-image>
                </div>
              </div>
            </div>
            <div class="c9-cube-item" :class="active == 1 ? 'active' : ''" data-index="1" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[1] || !datas[1].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[1].src"></el-image>
                </div>
              </div>
            </div>
          </div>
          <div v-if="config.cubeType == 2" :class="'c9-cube-box c9-cube-box-' + config.cubeType">
            <div class="c9-cube-item" :class="active == 0 ? 'active' : ''" data-index="0" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[0] || !datas[0].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[0].src"></el-image>
                </div>
              </div>
            </div>
            <div class="c9-cube-item" :class="active == 1 ? 'active' : ''" data-index="1" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[1] || !datas[1].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[1].src"></el-image>
                </div>
              </div>
            </div>
            <div class="c9-cube-item" :class="active == 2 ? 'active' : ''" data-index="2" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[2] || !datas[2].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[2].src"></el-image>
                </div>
              </div>
            </div>
          </div>
          <div v-if="config.cubeType == 3" :class="'c9-cube-box c9-cube-box-' + config.cubeType">
            <div class="c9-cube-item" :class="active == 0 ? 'active' : ''" data-index="0" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[0] || !datas[0].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[0].src"></el-image>
                </div>
              </div>
            </div>
            <div class="c9-cube-item" :class="active == 1 ? 'active' : ''" data-index="1" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[1] || !datas[1].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[1].src"></el-image>
                </div>
              </div>
            </div>
            <div class="c9-cube-item" :class="active == 2 ? 'active' : ''" data-index="2" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[2] || !datas[2].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[2].src"></el-image>
                </div>
              </div>
            </div>
            <div class="c9-cube-item" :class="active == 3 ? 'active' : ''" data-index="3" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[3] || !datas[3].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[3].src"></el-image>
                </div>
              </div>
            </div>
          </div>
          <div v-if="config.cubeType == 4" :class="'c9-cube-box c9-cube-box-' + config.cubeType">
            <div class="c9-cube-item" :class="active == 0 ? 'active' : ''" data-index="0" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[0] || !datas[0].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[0].src"></el-image>
                </div>
              </div>
            </div>
            <div class="c9-cube-item" :class="active == 1 ? 'active' : ''" data-index="1" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[1] || !datas[1].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[1].src"></el-image>
                </div>
              </div>
            </div>
            <div class="c9-cube-item" :class="active == 2 ? 'active' : ''" data-index="2" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[2] || !datas[2].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[2].src"></el-image>
                </div>
              </div>
            </div>
            <div class="c9-cube-item" :class="active == 3 ? 'active' : ''" data-index="3" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[3] || !datas[3].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[3].src"></el-image>
                </div>
              </div>
            </div>
          </div>
          <div v-if="config.cubeType == 5" :class="'c9-cube-box c9-cube-box-' + config.cubeType">
            <div class="c9-cube-item" :class="active == 0 ? 'active' : ''" data-index="0" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[0] || !datas[0].src">X*2X像素</pre>
                  <el-image v-else fit="fill" :src="datas[0].src"></el-image>
                </div>
              </div>
            </div>
            <div class="c9-cube-item" :class="active == 1 ? 'active' : ''" data-index="1" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[1] || !datas[1].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[1].src"></el-image>
                </div>
              </div>
            </div>
            <div class="c9-cube-item" :class="active == 2 ? 'active' : ''" data-index="2" v-on:click="bindData">
              <div class="c9-cube-item-wrapper">
                <div class="c9-cube-item-image">
                  <pre v-if="!datas[2] || !datas[2].src">X*X像素</pre>
                  <el-image v-else fit="fill" :src="datas[2].src"></el-image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="component-data">
      <div class="component-data-box">
        <div class="component-data-detail">
          <div class="component-data-thumb">
            <div class="component-data-thumb-wrapper">
              <el-image :src="datas[active].src" class="component-data-thumb-style">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div class="component-data-thumb-change" v-on:click="openResourceModal">{{(datas[active].src != '') ? '更改图片' : '添加图片'}}</div>
          </div>
          <div class="component-data-content">
            <el-form label-width="60px">
              <el-form-item label="标题">
                <el-input v-model="datas[active].title"></el-input>
              </el-form-item>
              <el-form-item label="链接">
                <el-cascader @change="getModulePath" v-model="datas[active].value" :options="modules" clearable></el-cascader>
              </el-form-item>
            </el-form>
          </div>
        </div>
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
    mounted() {
      console.log(this)
    },
    data() {
      let self = this;
      return {
        active: 0,
        modules: self.$global.modules,
        resourceconfig: {
          visible: false,
          index: 0,
          ensureResource: function(url, index) {
            console.log(self.datas);
            console.log(self.active);
            self.datas[self.active].src = url;
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
              self.datas[parameters[2]].openType = parameters[3];
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
            self.datas[parameters[2]].openType = ""
            self.goodgroupconfig.visible = false;
          }
        }
      }
    },
    methods: {
      moduleChange(event) {
        this.config.cubeType = event.currentTarget.dataset.value;
      },
      bindData(event) {
        this.active = parseInt(event.currentTarget.dataset.index);
      },
      getModulePath(value) {
        let index = this.active;
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
      openResourceModal() {
        this.resourceconfig.visible = true;
      }
    }
  }
</script>

<style scoped>

  @import url("../common/common.css");
  @import url("../../../assets/css/base.css");
  .c9-cube-box {
    width: 100%;
    position: relative;
  }
  .c9-cube-box-1 {
    display: flex;
  }
  .c9-cube-box-2 {
    display: flex;
  }
  .c9-cube-box-3 {
    display: flex;
  }
  .c9-cube-box-4 {
    position: relative;
    width: 100%;
    height: 0px;
    padding-bottom: 100%;
  }
  .c9-cube-box-5 {
    position: relative;
    width: 100%;
    height: 0px;
    padding-bottom: 100%;
  }
  .c9-cube-box-5 .c9-cube-item[data-index="0"]{
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .c9-cube-box-5 .c9-cube-item[data-index="1"]{
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 0;
  }
  .c9-cube-box-5 .c9-cube-item[data-index="2"]{
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
  }
  .c9-cube-box-4 .c9-cube-item[data-index="0"] {
    position: absolute;
    width: 50%;
    height: 50%;
    left: 0;
    top: 0;
  }
  .c9-cube-box-4 .c9-cube-item[data-index="1"] {
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 0;
  }
  .c9-cube-box-4 .c9-cube-item[data-index="2"] {
    position: absolute;
    width: 50%;
    height: 50%;
    left: 0;
    top: 50%;
  }
  .c9-cube-box-4 .c9-cube-item[data-index="3"] {
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
  }
  .c9-cube-item {
    cursor: pointer;
    background-color: #e8f7fd;
    border: 1px solid #bdf;
    color: #88c4dc;
    text-align: center;
  }
  .c9-cube-item.active {
    border: 1px solid #38f !important;
  }
  .c9-cube-box-2 .c9-cube-item {
    width: 33.33333333333%;
    flex: 0 0 33.33333333333%;
  }
  .c9-cube-box-3 .c9-cube-item {
    width: 25%;
    flex: 0 0 25%;
  }
  .c9-cube-box-1 .c9-cube-item {
    width: 50%;
    flex: 0 0 50%;

  }
  .c9-cube-box-1 .c9-cube-item .c9-cube-item-wrapper,.c9-cube-box-2 .c9-cube-item .c9-cube-item-wrapper,.c9-cube-box-3 .c9-cube-item .c9-cube-item-wrapper {
    width: 100%;
    position: relative;
    height: 0;
    padding-bottom: 100%;
  }
  .c9-cube-box-1 .c9-cube-item .c9-cube-item-wrapper .c9-cube-item-image,.c9-cube-box-2 .c9-cube-item .c9-cube-item-wrapper .c9-cube-item-image,.c9-cube-box-3 .c9-cube-item .c9-cube-item-wrapper .c9-cube-item-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .c9-cube-item-wrapper {
    width: 100%;
    height: 100%;
  }
  .c9-cube-item-image {
    width: 100%;
    height: 100%;
  }
  .el-image {
    width: 100%;
    height: 100%;
  }
</style>
