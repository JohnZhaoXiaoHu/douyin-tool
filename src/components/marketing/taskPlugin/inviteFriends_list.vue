<template>
  <div>
    <template>
      <el-table :data="tableData" :listType="listType" border style="width: 100%" :row-style="rowStyle"
        ref="multipleTable" >

        <el-table-column prop="founder" label="排序" width="40px" align="center">
            <template slot-scope="scope"> {{scope.$index}}
            </template>
        </el-table-column>
        <el-table-column prop="id" label="任务ID" width="80px" align="center"></el-table-column>        
        <el-table-column prop="name" label="任务名称" width="100px" align="center"></el-table-column>
        <el-table-column prop="prizeKind" label="奖励类型" width="135px" align="center" :formatter="dateFormat"> 
            <template slot-scope="scope"> 
              <div v-if="scope.row.prizeKind==1">抢购优惠券</div>
              <div v-else-if="scope.row.prizeKind==2">积分</div>
              <div v-else-if="scope.row.prizeKind==3">现金红包</div>
              <div v-else-if="scope.row.prizeKind==4">优惠券</div>
              <div v-else-if="scope.row.prizeKind==5">商品</div>
            </template>
        </el-table-column>
        <el-table-column prop="effectTime" label="有效时间" width="80px" align="center"> </el-table-column>
        <el-table-column prop="totalNum" label="数量" width="80px" align="center"> </el-table-column>
        <el-table-column prop="finishNum" label="已完成" width="100px" align="center"> </el-table-column>
        <el-table-column prop="getNum" label="已领" width="100px" align="center"> </el-table-column>
        <el-table-column prop="status" label="领取流水" width="100px" align="center"> 
          <template slot-scope="scope">
              <el-button size="small" type="text" class="ms_btn" @click="lookClick(scope.$index)">查看</el-button>
          </template>
        </el-table-column>
        <!-- spUsername -->
        <el-table-column prop="founder" label="上架" width="100px" align="center">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#DCDFE6" 
								:active-value='1' :inactive-value='0'  @change="changeSwitch(scope.$index, scope.row)">
							</el-switch> 
            </template>
        </el-table-column>
        <el-table-column label="操作"  width="150px"  align="center">
          <template slot-scope="scope">
                <div  class="ms_operate">
                  <el-button size="small" class="ms_btn" @click="edit(scope.$index)">编辑</el-button><br>
                  <el-button size="small" class="" @click="deleteClick(scope.$index)">删除</el-button><br>
                </div>
          </template>
        </el-table-column>
      </el-table>

      <!-- 弹框： 收益明细-->
      <el-dialog title="奖励领取流水明细" :visible.sync="dialogTableVisible" min-width="70%">
        <el-table :data="gridData" border >
          <el-table-column property="id" label="排行" width="50" align="center">
             <template slot-scope="scope">
              {{scope.$index}}
             </template>
          </el-table-column>
          <el-table-column prop="mitName" label="任务名称" align="center">
          </el-table-column>
          <el-table-column label="用户" align="center"> 
              <template slot-scope="scope">
                <div>
                  <div class="infoView">
                    <img :src="scope.row.userHeadurl" alt width="20" height="20" class="shoporder-tab-img headerImg" />
                    <div>
                      <span class="mh-order-note-span">{{scope.row.userName}}</span>
                      <span class="mh-order-note-span">{{scope.row.userPhone}}</span>
                    </div>
                  </div>
                </div>
              </template>
          </el-table-column>
          <el-table-column prop="mitRule" label="规则" align="center"> </el-table-column>
          <el-table-column label="状态" align="center" width="70">领取成功</el-table-column>
        </el-table>
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
				<!-- <div class="zm_bottomOpreteView" style="float: left;">
          <el-button size="mini" @click="toggleSelection(tableData)">全选</el-button>
          <el-button size="mini" @click="toggleSelection()">取消选择</el-button>
          <el-button size="mini" @click="oneKeyXiaJia()">一键下架</el-button>
          <div v-if="listType==1">
            &nbsp;&nbsp; <el-button  size="mini" @click="oneKeyDelete()">一键删除</el-button>
          </div>
        </div> -->
			</div>
  
  </div>
</template>

<script>

import baseapi from '../../../utils/api';
import http from '../../../utils/http';
import {    
        zm_getList1,
        zm_getList
} from "../../../filters/zm_data"
import {    
        zm_jsonToString,
        zm_tipsMsg,
        zm_timestampToDate, zm_formDataToJson, zm_formDataToString
} from "../../../filters/zm_tools"
import { zm_dateFormat } from '../../../filters/zm_dateTime';


 export default {
    data(){
      return{
        msg:'这是一个头部组件',
        dialogTableVisible: false,
        mylistType:0,
        isCondition: true,
        selectIndex: 0,
        isOneKeyDelete: false,
        multipleSelection: [],
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
    mounted(){
        //console.log('------mounted ');
        this.mylistType = this.listType;
    },
    watch:{
        totalCount: function(val) {
		      // console.log('---watch：totalCount= ' + val)
        },
    },
    methods:{
      changeSwitch(index, rowItem) {
					//var item = this.tableData[index];
          console.log('---changeSwitch 选择了: index_' + index + '、usestatus= ' + rowItem.usestatus);
          this.editCilck(rowItem);
			},
      editCilck(rowItem){
            console.log('---上架下架按钮编辑：editCilck');
            let self = this;
            let urlStr = baseapi.marketingIP + baseapi.it_updateStatus;
            let params = new FormData();       
                params.append('id', rowItem.id);  
                params.append('status', rowItem.status);  
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            }).then(function(res){
                if(res.status ==200){
                    self.$message.success("保存成功！");
                } else {
                    self.$message.error(res.data.message);
                    // 还原（保存失败）
                    if (rowItem.status== "1") {
                      rowItem.status = 0;            
                    } else {
                      rowItem.status = 1;
                    }
                }
            })
      },
      handleCurrentChange(val) {
        this.$emit('pageMethodSon',val);
      },
      edit(index){
        let itemData = this.tableData[index];
        // console.log('---邀请任务编辑: itemData= '+zm_jsonToString(itemData));
        this.$router.push({
          path:'/marketing/taskPlugin/itCreate',
          query:{
            itemData: JSON.stringify(itemData),
            isEdit: true,
          }
        })
      },
     lookClick(index){
        console.log('---查看_'+index);
        this.selectIndex = index;
        let item = this.tableData[index];
        let self = this;
        let params = new FormData();       
            params.append('id', item.id); 
        let urlStr = baseapi.marketingIP + baseapi.it_selectRecordById;
        this.$http({
                method: "post",
                url: urlStr,
                data: params
            }).then(function(res){
                console.log('---查看明细：response= '+zm_jsonToString(res.data));
                if(res.data.status ==200){
                  if (res.data.list) {
                    self.gridData = res.data.list;
                    self.dialogTableVisible = true;
                  }else{
                     self.$message.warning("没有数据");
                  }
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
      },
      deleteClick(index){
        // console.log('---删除_'+index);
        this.selectIndex = index; 
        this.isOneKeyDelete = false;
        this.zm_messageBox("您确定要删除该活动吗？", '温馨提示', "确定", "取消",'', 1);
      },
      toDelete(){
        let item = this.tableData[this.selectIndex];
        let self = this;
        let urlStr = baseapi.marketingIP + baseapi.it_delete;
        let params = new FormData();       
            params.append('id', item.id);  
            // console.log('---params：' + zm_jsonToString(params), 'urlStr= ' + urlStr);
            this.$http({method: "post",
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            }).then(function(res){
                // console.log('---删除活动：response= '+zm_jsonToString(res.data));
                if(res.status ==200){
                    self.tableData.splice(self.selectIndex, 1);
                    self.$message.success('删除成功！');
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
        //询问弹框（success / info / warning / error）
	      zm_messageBox(message, title, confirmText, cancelText, infoType, thingType) {
            var tipType = 'warning'; 
            if(infoType){
              tipType = infoType;
            }
            let self = this;
            this.$confirm(message, title, {
              confirmButtonText: confirmText,
              cancelButtonText: cancelText,
              type: tipType,
              center: true
            }).then(() => {
              // console.log('---确定：thingType= '+thingType);
              if(thingType==1){
                self.toDelete();// 删除活动
              }else if(thingType==2){ 
                self.toDown();  // 下架活动
              }else if(thingType==3){ 
                self.toUp();    // 上架活动
              }
            }).catch(() => {
               //console.log('---取消：thingType= '+thingType);
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
          return zm_dateFormat(daterc);          
       },
    }
};

</script>

<style>

.zm_bottomOpreteView{
  min-width: 350px;
  display: flex;
}

/****************** view4：显示/隐藏 ******************/

.ms_btn{
  margin-right: 10px;
}
.ms_operate{
  display: flex;
  justify-content: center;
}

</style>
