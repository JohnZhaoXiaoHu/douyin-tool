<template>
  <div class="hm_basicInfoView">
    <!-- aaa -->
    <!-- <template> -->

       

      <div class="hm_basicView" :model="basicInfo" :listType="listType" @click="hm_basicInfoClick">

        <!-- <div class=""> -->

        <div class="hm_infoView1">
            <div class="hm_infoView1_title">{{basicInfo.title}}</div>
            <div class="hm_line"></div>
            <div class="hm_infoView1_day">今日</div>
        </div>

        <div class="hm_infoView2">
            <div class="hm_infoView2_num">{{basicInfo.num}}</div>
            <div class="hm_infoView2_unit">{{basicInfo.numUnit}}</div>
        </div>

        <div class="hm_infoView3">
            <div class="hm_infoView3_left">
                <div>环比</div>
                <img class="hm_infoView3_upOrDown" v-if="basicInfo.percent1>=0" :src="hm_upOrDown1" alt="" sizes="" srcset="">
                <img class="hm_infoView3_upOrDown" v-else-if="basicInfo.percent1<0" :src="hm_upOrDown2" alt="" sizes="" srcset="">
                <!-- <div class="hm_infoView3_percent1">{{basicInfo.percent1}}%</div> -->
                <div v-bind:class="[basicInfo.percent1>=0 ? hm_infoView3_percent1 : hm_infoView3_percent2]">{{basicInfo.percent1}}%</div>

                <div>同比</div>
                <img class="hm_infoView3_upOrDown" v-if="basicInfo.percent2>=0" :src="hm_upOrDown1" alt="" sizes="" srcset="">
                <img class="hm_infoView3_upOrDown" v-else-if="basicInfo.percent2<0" :src="hm_upOrDown2" alt="" sizes="" srcset="">
                <div v-bind:class="[basicInfo.percent2>=0 ? hm_infoView3_percent1 : hm_infoView3_percent2]">{{basicInfo.percent2}}%</div>
            </div>
            <div class="hm_infoView3_all"> 累计:{{basicInfo.allNum}}{{basicInfo.allUnit}} </div>
        </div>

        <!-- </div> -->

      </div>


    <!-- </template> -->



  </div>
</template>

<script>

// import baseapi from '../../utils/api';
// import http from '../../utils/http';
import {    
        zm_jsonToString,
        zm_tipsMsg,
        zm_timestampToDate
} from "../../filters/zm_tools" 

 export default {
    data(){
      return{
        msg:'这是一个头部组件',
        mylistType:0,
        basicInfo: '',
        hm_upOrDown1: '../../../static/images/icon/hm_up.png',
        hm_upOrDown2: '../../../static/images/icon/hm_down.png',
        hm_infoView3_percent1: 'hm_infoView3_percent1',
        hm_infoView3_percent2: 'hm_infoView3_percent2'
      }
    },
    props:{
        basicInfo: {
            type: Object,//属性类型
            value: "default"
        },
        listType:{
            type:Number,
            value: "default"
        }
    },
    created(){
        // console.log('------created ');
    },
    mounted(){
        //console.log('------mounted ');
        this.mylistType = this.listType;
        //console.log('---mylistType= '+ this.mylistType);
    },
    watch:{
        listType: function(val) {
          console.log('---watch：listType= ' + val)
        },
    },
    methods:{
      hm_basicInfoClick(val) {
        console.log('---hm_basicInfoClick: basicInfo= '+ zm_jsonToString(this.basicInfo));
      },
      saveCilck(rowItem){
            console.log('---保存编辑：saveCilck');
            let self = this;
            
      },
    }
};

</script>

<style>

.hm_basicInfoView{
  display: flex;
  width: 100%;
}
.hm_basicView{
  flex-direction: column;
  display: flex;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 0px 3px 1px #eeeeee;
  border: 1px solid #f0f7ff;
  width: 100%;
}

.hm_infoView1, .hm_infoView2 {
   display: flex;
}
.hm_infoView1{
  margin: 25px 0 0 10px;
}
.hm_infoView1_title {
  font-size: 13px !important;
  font-weight: 500;
  color: #333333;
}
.hm_line {
  border-left:solid 2px #7B8088;
  height: 10px;
  margin: 5px 10px 0 10px;
}
.hm_infoView1_day {
  font-size: 14px !important;
  font-weight: 500;
  color: #7B8088;
}

/************* hm_infoView2 *************/ 
.hm_infoView2{
  margin: 10px 0 0 10px;
}
.hm_infoView2_num {
  font-size: 22px !important;
  font-weight: 500;
  color: #4B5769;
}
.hm_infoView2_unit{
  color: #4B5769;
  margin-top: 8px;
}

/************* hm_infoView3 *************/ 
.hm_infoView3{
  margin: 3px 0 10px 0px;
}
.hm_infoView3_left{
  color: #7B8088;
  display: inline-flex; 
  -webkit-text-size-adjust: none; 
  -webkit-transform: scale(0.833);
  text-size-adjust: none;
  transform: scale(0.833);
}
.hm_infoView3_all{
  color: #7B8088;
  float: right;
  margin: 0 10px 0 0px;
  -webkit-transform: scale(0.95);
  transform: scale(0.95);
}
.hm_infoView3_upOrDown{
  width: 15px;
  height: 15px;
}
.hm_infoView3_percent1{
  color:#FF2600;
  margin-right: 10px;
  /* font-size: 10px !important; */
}
.hm_infoView3_percent2{
  color:#239A05;
  /* font-size: 12px !important; */
}


</style>
