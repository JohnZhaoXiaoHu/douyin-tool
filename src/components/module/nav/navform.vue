 <template>
	<div class="component-form">
		<div class="component-form-list">
			<div class="component-form-line" data-symbol="navType">
				<div class="form-label">选择模板:</div>
				<div class="form-input type-list">
					<div class="type-item" data-value="1" :class="config.navType == 1 ? 'active' : ''" v-on:click="moduleChange">
						<div class="type-item-box">
							<div class="type-item-thumb">
								<div class="type-item-thumb-wrapper">
									<img src="../../../../static/images/icon/nav-type-1.png"/>
								</div>
								<div class="type-item-text"><span>图片导航</span></div>
							</div>
						</div>
					</div>
					<div class="type-item"  data-value="2" :class="config.navType == 2 ? 'active' : ''" v-on:click="moduleChange">
						<div class="type-item-box">
							<div class="type-item-thumb">
								<div class="type-item-thumb-wrapper">
									<img src="../../../../static/images/icon/nav-type-2.png"/>
								</div>
								<div class="type-item-text"><span>文字导航</span></div>
							</div>
						</div>
					</div>
					<div class="type-item" data-value="3" :class="config.navType == 3 ? 'active' : ''" v-on:click="moduleChange">
						<div class="type-item-box">
							<div class="type-item-thumb">
								<div class="type-item-thumb-wrapper">
									<img mode="widthFix" src="../../../../static/images/icon/nav-type-2.png"/>
								</div>
								<div class="type-item-text"><span>图标导航</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="component-form-line" v-if="config.navType == 1">
				<div class="form-label">布局方式:</div>
				<div class="form-input">
          <el-radio-group v-model="config.layoutType" data-symbol="layoutType" @change="configChange">
            <el-radio :label="1">固定大小</el-radio>
            <el-radio :label="2">根据图片自适应</el-radio>
          </el-radio-group>
				</div>
			</div>
			<div class="component-form-line">
				<div class="form-label">滑动设置:</div>
				<div class="form-input">
          <el-radio-group v-model="config.scrollType" data-symbol="scrollType" @change="configChange">
            <el-radio :label="1">固定</el-radio>
            <el-radio :label="2">横向滑动</el-radio>
          </el-radio-group>
				</div>
			</div>
			<div class="component-form-line">
				<div class="form-label">导航数量:</div>
				<div class="form-input">
          <el-radio-group v-model="config.lineCount" data-symbol="lineCount" @change="configChange">
            <el-radio :label="3">一行三个</el-radio>
            <el-radio :label="4">一行四个</el-radio>
            <el-radio :label="5">一行五个</el-radio>
          </el-radio-group>
				</div>
			</div>
			<div class="component-form-line" data-symbol="backgroundColor">
				<div class="form-label">背景颜色:</div>
				<div class="form-input">
          <el-color-picker v-model="customStyle.backgroundColor" color-format="hex"></el-color-picker>
				</div>
			</div>
			<div class="component-form-line flex-center">
				<div class="form-label">背景图片:</div>
				<div class="form-input">
          <div class="c2-background-image" v-on:click="openBackgroundImageResourceConfig">
            <div class="c2-background-image-remove" v-on:click.stop="removeBackgroundImage"><i class="el-icon-circle-close"></i></div>
            <el-image fit="fill" class="c2-background-image-src" :src="customStyle.backgroundImage" v-if="customStyle.backgroundImage!= null && customStyle.backgroundImage != ''"></el-image>
          </div>
				</div>
			</div>
      <div class="component-form-line" data-symbol="backgroundColor">
      	<div class="form-label">字体颜色:</div>
      	<div class="form-input">
          <el-color-picker v-model="customStyle.textColor" color-format="hex"></el-color-picker>
      	</div>
      </div>
      <div class="component-form-line" data-symbol="backgroundColor">
      	<div class="form-label">字体大小:</div>
      	<div class="form-input">
          <el-input-number :min="min" :max="max" v-model="customStyle.textSize"></el-input-number>
      	</div>
      </div>
      <div class="component-form-line flex-center">
        <div class="form-label">内边距:</div>
      	<div class="form-input">
          <el-slider v-model="customStyle.innerPadding" show-input :min="0" :max="36"></el-slider>
      	</div>
      </div>
		</div>
    <div class="component-data">
      <div v-for="(item, index) in datas" :key="index" class="component-data-box">
        <div class="remove-data" :data-index="index" v-on:click.stop="removeData"><i class="el-icon-circle-close"></i></div>
        <div class="component-data-detail">
          <div v-if="config.navType != 2" class="component-data-thumb">
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
        <i class="el-icon-plus"></i>添加一个图文导航
      </div>
    </div>
    <resourcemodal :config="resourceconfig" key="navitem"></resourcemodal>
    <resourcemodal :config="backgroundImageResourceConfig" key="backgroundImage"></resourcemodal>
    <goodmodal :config="goodconfig"></goodmodal>
    <goodgroupmodal :config="goodgroupconfig"></goodgroupmodal>
    <categorymodal :config="categoryconfig"></categorymodal>
  </div>
</template>

<script>
  export default {
    name: "cutomnavform",
    props: ["config", "customStyle", "datas"],
    mounted() {
      console.log(this.customStyle);
    },
    updated() {
      console.log(this.datas);
    },
    watch: {
      config(v1, v2) {

      }
    },
    computed: {

    },
    data() {
      let self = this;
      return {
        max: 64,
        min: 8,
        modules: self.$global.modules,
        resourceconfig: {
          visible: false,
          index: -1,
          ensureResource: function(url, index) {
            self.datas[index].thumb = url;
            self.resourceconfig.visible = false;
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
        backgroundImageResourceConfig: {
          visible: false,
          index: 0,
          ensureResource: function(url, index) {
            self.customStyle.backgroundImage = url;
            self.backgroundImageResourceConfig.visible = false;
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
      configChange(event) {

      },
      openBackgroundImageResourceConfig(event) {
        this.backgroundImageResourceConfig.visible = true;
      },
      removeBackgroundImage(event) {
        this.customStyle.backgroundImage = "";
      },
      moduleChange(event) {
        let navType = event.currentTarget.dataset.value;
        this.config.navType = navType;
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
      openResource(event) {
        let index = event.currentTarget.dataset.index;
        this.resourceconfig.visible = true;
        this.resourceconfig.index = index;
      },
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
      }
    }
  }
</script>

<style scoped>
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
  .c2-background-image {
    width: 60px;
    height: 60px;
    border: 1px dotted #FFFFFF;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    cursor: pointer;
  }
  .c2-background-image .c2-background-image-remove {
    position: absolute;
    width: 10px;
    height: 10px;
    top: -5px;
    right: -5px;
  }
  .c2-background-image .c2-background-image-src {
    width: 100%;
    height: 100%;
  }
</style>
