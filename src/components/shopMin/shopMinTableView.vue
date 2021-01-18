<template>
  <div>
    <template>
      <el-table :data="tableData" :listType="listType" border style="width: 100%"
        ref="multipleTable">
        
        <el-table-column width="40px" label="排序" align="center">
          <template slot-scope="scope">{{scope.$index}}</template>
        </el-table-column>
        <el-table-column prop="id" label="店铺ID" width="60px" align="center"></el-table-column>
        <el-table-column prop="shopName" label="店铺名称" width="100px" align="center"></el-table-column>
        <!-- 店长昵称:  手机号-->
        <el-table-column  label="        申请人" width="180px">
          <template slot-scope="scope" align="left">
            <div class="psProductInfo">
              <img :src="scope.row.userHeadurl" class="psProductImg" />
              <div class="mh-seven-div-parent">
                <div class="mh-seven-div-span">
                  <div class="zm_item">
                    <p class="line_limit_length">{{scope.row.userName}}</p>
                 </div>
                </div>
                <div class="mh-seven-div-span">
                  <span class="psProductPrice">{{scope.row.userPhone}}</span>
                </div>
              </div>
            </div>
          </template>
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column width="70px" label="销售额" align="center">
          <template slot-scope="scope">{{scope.row.saleMoney/100}}</template>
        </el-table-column>
        <el-table-column prop="orderNum" width="70px" label="订单数" align="center"></el-table-column>
        <el-table-column prop="itemNum" label="商品数" width="85px" align="center"></el-table-column>
        <el-table-column prop="userNum" label="用户数" width="85px" align="center"></el-table-column>

        <el-table-column prop="name" label="申请资料" width="70px" align="center">
           <template slot-scope="scope">
          	<el-button size="small" type="text" @click="lookDetail(scope.$index)">查看</el-button><br>
           </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="90px" align="center" :formatter="dateFormat">
        </el-table-column>
        <el-table-column label="状态" width="70px" align="center">
            <template slot-scope="scope">
              <div v-if="scope.row.status==0">已关闭</div>
              <div v-else-if="scope.row.status==1" class="zm_spPanicbuystate">进行中</div>
            </template>
        </el-table-column>

        <el-table-column label="操作" width="80px" align="center">
          <template slot-scope="scope">
              <div v-if="scope.row.status==0">
                  <el-button size="small" class="zm_btn" @click="openOrCloseClick(scope.$index, 1)">开启</el-button><br>
              </div>
              <div v-if="scope.row.status==1">
                  <el-button size="small" class="zm_btn" @click="openOrCloseClick(scope.$index, 0)">关闭</el-button><br>
              </div>
          </template>
        </el-table-column>
        
      </el-table>


      <!-- 弹框：申请资料-->
      <el-dialog title="申请资料查看" :visible.sync="dialogTableVisible" min-width="70%">

        <div :v-model="replyInfo">
          <div class="smt_itemView1">
            <div>申请人：</div>
            <img :src="replyInfo.userHeadurl" alt width="30" height="30" class="headerImg1" />
            <div >
              <div>{{replyInfo.userName}}</div>
              <div>{{replyInfo.userPhone}}</div>
            </div>
          </div>

          <div class="smt_itemView">
            <div>店铺ID：</div>
            <div>{{replyInfo.vshopId}}</div>
          </div>
          <div class="smt_itemView">
            <div>店铺名称：</div>
            <div>{{replyInfo.vshopName}}</div>
          </div>
          <div class="smt_itemView">
            <div>真实姓名：</div>
            <div>{{replyInfo.userRealName}}</div>
          </div>
          <div class="smt_itemView">
            <div>证件号：</div>
            <div>{{replyInfo.idCardNum}}</div>
          </div>
          <div class="smt_itemView6">
            <div>证件：</div>
            <div class="smt_certificateImg" style="display: flex;">
              <img :src="replyInfo.idCardFront" alt width="130" height="80" class="shoporder-tab-img headerImg" />
              <img :src="replyInfo.idCardBack" alt width="130" height="80" class="shoporder-tab-img headerImg" />
            </div>
          </div>

          <div class="">
            <div>备注：</div>
            <div class="smt_certificateImg">
              <el-input class="smt_mark" type="textarea" disabled :rows="2" placeholder="请输入内容" v-model="replyInfo.remark">
              </el-input>
            </div>
          </div>
        </div>

      </el-dialog>

    </template>


<!--分页/翻页-->
			<div id="zm_pageView" style="margin: 20px 20px 30px 20px; background: white; height: 32px;">
				<div id="paginationView" class="" style="background: white; display: inline-flex; float: right;">
          <el-pagination @size-change="handleSizeChange"  @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]" :total="totalCount"
            :page-size="20" layout="total, prev, pager, next, jumper" >
          </el-pagination>
				</div>
			</div>


  </div>
</template>

<script>

import baseapi from '../../utils/api';
import http from '../../utils/http';
import {    
        zm_getList1,
        zm_getList
} from "../../filters/zm_data"
import {    
        zm_jsonToString,
        zm_tipsMsg,
        zm_timestampToDate, zm_formDataToString
} from "../../filters/zm_tools"
import { zm_dateFormat } from '../../filters/zm_dateTime';


 export default {
    data(){
      return{
        msg:'这是一个头部组件',
        mylistType:0,
        isCondition: true,
        dialogTableVisible: false,
        gridData: zm_getList1(),
        replyInfo: '',
        textarea: '',
        selectIndex: 0,
        isTableBgColor: false,
        tuanId: '',
        multipleSelection: [],
        isOneKeyXiaJia: false,
        isOneKeyDelete: false,
      }
    },
    props:{
        tableData: {
            type: Array,//属性类型
            value: "default"
        },
        totalCount:{
            type:Number,
            value: "default"
        },
        listType:{
            type:Number,
            value: "default"
        }
    },
    created(){
        console.log('------created ');
    },
    mounted(){
        //console.log('------mounted ');
        // console.log('---totalCount= '+ this.totalCount);
        // console.log('---listType= '+ this.listType);
        this.mylistType = this.listType;
        //console.log('---mylistType= '+ this.mylistType);
    },
    watch:{
        totalCount: function(val) {
		      // console.log('---watch：totalCount= ' + val)
        },
        listType: function(val) {
          // console.log('---watch：listType= ' + val)
        },
    },
    methods:{
      handleCurrentChange(val) {
        this.$emit('pageMethodSon',val);
        // console.log(`当前页: ${val}`);
      },
      lookDetail(index){
            this.selectIndex = index;
            let item = this.tableData[index];
            let self = this;
            let params = new FormData();       
                params.append('id', item.id); 
            let urlStr = baseapi.TIP + baseapi.sm_findApply;
                urlStr = baseapi.userIP + baseapi.sm_findApply;
            console.log('---查看微店申请params：' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            }).then(function(res){
                console.log('---查看微店申请：response= '+zm_jsonToString(res));
                if(res.status ==200){
                    self.replyInfo = res.data;
                    self.dialogTableVisible = true;
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
      },
      openOrCloseClick(index,status ){
        this.selectIndex = index;
        let item = this.tableData[this.selectIndex];
        let self = this;
        let urlStr = baseapi.TIP + baseapi.sm_closeOropen;
            urlStr = baseapi.userIP + baseapi.sm_closeOropen;
        let params = new FormData();       
            params.append('id', item.id);  
            params.append('userId', this.$cookie.get('userId')); 
            params.append('suserId', this.$cookie.get('suserId')); 
            params.append('status', status);
            
        console.log('---params：' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            this.$http({method: "post",
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            }).then(function(res){
                // console.log('---开启/关闭：response= '+zm_jsonToString(res.data));
                if(res.status ==200){
                    if (status==1) {
                      self.$message.success('开启成功！');
                      item.status = 1;
                    } else {
                      self.$message.success('关闭成功！');
                      item.status = 0;
                    }
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            });

      },
      //Bool处理函数
      BoolFormat(row, column, cellValue, index){
        const daterc = row[column.property];
        console.log('---daterc= '+daterc);
        if(daterc==1){
           return true;
        }else{
          return false;
        }    
      },
      //时间处理函数
      dateFormat(row, column, cellValue, index){
          const daterc = row[column.property];
          // console.log('---daterc= '+daterc);
          return zm_dateFormat(daterc);          
       },
    }
};

</script>

<style>

.zm_bottomOpreteView{
  /* background: yellow; */
  min-width: 350px;
  display: flex;
}
.zm_bottomOpreteExplain{
  margin: 0 0 20px 20px;
  color: #666666;
}

.headerImg1{
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: -10px 10px 0 0;
}
.smt_itemView6{
   margin: 30px 0 20px 0;
}
.smt_certificateImg{
   margin: 10px 0 20px 0;
}
.smt_mark{
  width: 300px;
}

.zm_spPanicbuystate {
  color: #239A04;
}

.smt_itemView1{
  display: flex;
  margin: 0px 0 30px 0;
}
.smt_itemView{
  display: flex;
  margin: 10px 0 10px 0;
}

.psProductInfo{
  display: flex;
}
.psProductImg {
  width: 40px;
	height: 40px;
}
.psProductName{
  margin-left: 10px;
  text-align: left;
}
.zm_item{
	width: 120px;
  margin: 0 10px 0 10px;
}
.line_limit_length {
  /* margin-left: 10px; */
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap; 
}
/*//文本不换行，这样超出一行的部分被截取，显示...*/
.psProductPrice {
  margin-left: 10px;
  /* color: red; */
}

.zm_btn{
  margin: 0px 25px 10px 0px;
}
.infoView{
  display: flex;
}
.condition1 {
  background: #CC3300;
  color: white;
  width: 40px;
  height: 16px;
  line-height: 16px;
  text-align: center;
}
.condition2 {
  background: gray;
  color: white;
  width: 40px;
  height: 16px;
  line-height: 16px;
  text-align: center;
}
</style>
