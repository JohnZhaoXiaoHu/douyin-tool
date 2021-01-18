<template>
	<div class="component-2" :style="{backgroundColor: customStyle.backgroundColor, backgroundImage: customStyle.backgroundImage == '' ? null : 'url(' + customStyle.backgroundImage + ')'}">
		<div :class="'nav-box-' + config.navType" :style="{flexWrap: flexWrap, overflowX: overflowX}">
			<div v-for="(item, index) in datas" :key="index" class="nav-item" :style="{flex: '0 0 ' + itemWidth, width: itemWidth, padding: innerPadding}">
        <div class="nav-item-wrapper">
          <div class="nav-item-thumb-wrapper" v-if="config.navType != 2" :class="config.navType == 1 ? layout : ''">
            <el-image class="nav-item-thumb" v-if="item.thumb != ''" :src="item.thumb"></el-image>
          </div>
          <div class="nav-item-title" :style="{fontSize: fontSize, color: customStyle.textColor}">{{item.title}}</div>
        </div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: "customnav",
		props: {
			config: {
				type: Object,
				default() {
					return {
						navType: 1,
						lineCount: 3,
						layoutType: 1,
						scrollType: 1
					}
				}
			},
			customStyle: {
				type: Object,
				default() {
					return {
						backgroundColor: "#ffffff",
            textSize: 14,
            textColor: "#333333"
					}
				}
			},
			datas: {
				type: [Array, Object],
				value: []
			}
		},
		computed: {
			flexWrap() {
				return this.config.scrollType == 1 ? "wrap" : "nowrap";
			},
			itemWidth() {
				return (100 / this.config.lineCount) + "%";
			},
			overflowX() {
				return this.config.scrollType == 1 ? "hidden" : "auto";
			},
      layout() {
        return this.config.layoutType == 1 ? "fixed" : "auto-fill";
      },
      fontSize() {
        return this.customStyle.textSize + "px";
      },
      innerPadding() {
        return this.customStyle.innerPadding + "px " + this.customStyle.innerPadding + "px " + "0px " + this.customStyle.innerPadding + "px";
      }
		}
	}
</script>

<style scoped>
 @import url("../../../assets/css/base.css");
	.component-2 {
		width: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.component-2 .nav-box-1 {
		display: flex;
		width: 100%;
	}
  .component-2 .nav-box-1 .nav-item .nav-item-wrapper {
    width: 100%;
  }
  .component-2 .nav-box-1 .nav-item .nav-item-wrapper .nav-item-title {
    text-align: center;
    padding: 8px 0;
    width: 100%;
  }
  .nav-item-title {
    white-space: nowrap;
    overflow: hidden;
  }
  .component-2 .nav-box-1 .nav-item .nav-item-wrapper .nav-item-thumb-wrapper {
    width: 100%;
  }
  .component-2 .nav-box-1 .nav-item .nav-item-wrapper .nav-item-thumb-wrapper.fixed {
    height: 0px;
    padding-bottom: 100%;
    position: relative;
  }
  .component-2 .nav-box-1 .nav-item .nav-item-wrapper .nav-item-thumb-wrapper.auto-fill {
    height: auto;
  }
  .component-2 .nav-box-1 .nav-item .nav-item-wrapper .nav-item-thumb-wrapper.auto-fill .nav-item-thumb {
    width: 100%;
  }
  .component-2 .nav-box-1 .nav-item .nav-item-wrapper .nav-item-thumb-wrapper.fixed .nav-item-thumb {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .component-2 .nav-box-2 {
    display: flex;
    width: 100%;
  }
  .component-2 .nav-box-2 .nav-item {
    padding: 16px;
  }
  .component-2 .nav-box-2 .nav-item .nav-item-wrapper {
    width: 100%;
  }
  .component-2 .nav-box-2 .nav-item .nav-item-wrapper .nav-item-title {
    text-align: center;
    width: 100%;
  }
  .component-2 .nav-box-3 {
    display: flex;
    width: 100%;
  }
  .component-2 .nav-box-3 .nav-item {
    padding: 16px;
  }
  .component-2 .nav-box-3 .nav-item .nav-item-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .component-2 .nav-box-3 .nav-item .nav-item-wrapper .nav-item-thumb-wrapper {
    width: 30%;
    height: 0;
    padding-bottom: 30%;
    position: relative;
  }
  .component-2 .nav-box-3 .nav-item .nav-item-wrapper .nav-item-thumb-wrapper .nav-item-thumb {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .component-2 .nav-box-3 .nav-item .nav-item-wrapper .nav-item-title {
    width: 60%;
    text-align: left;
  }
</style>
