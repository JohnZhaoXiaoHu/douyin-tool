<template>
  <div>
    <template>
      <el-table :data="tableData" :listType="listType" border style="width: 100%"
        ref="multipleTable" @selection-change="handleSelectionChange" >
        
        <el-table-column width="45px" label="排序" align="center">
          <template slot-scope="scope">{{scope.$index}}</template>
        </el-table-column>
        <el-table-column prop="id" label="ID" width="70px" align="center"></el-table-column>
        <el-table-column prop="name" label="供应商名称" width="100px" align="center"></el-table-column>
        <el-table-column width="70px" label="销售额" align="center">
          <template slot-scope="scope">{{scope.row.orderMoneyTotal/100}}</template>
        </el-table-column>
        <el-table-column prop="orderNum" label="订单数" width="70px" align="center"></el-table-column>
        <el-table-column prop="account" label="登录名" width="100px" align="center"></el-table-column>
        <!-- <el-table-column prop="spSpuname" label="登录密码" width="85px" align="center"></el-table-column> -->

        <el-table-column prop="createTime" label="创建时间" width="135px" align="center" :formatter="dateFormat">
        </el-table-column>
        <el-table-column prop="createAccount" label="创建人" width="85px" align="center"></el-table-column>

        <el-table-column label="操作" width="160px" align="center">
          <template slot-scope="scope">
              <div style="display: flex;">
                <el-button size="small" class="sp_btn" @click="edit(scope.$index)">编辑</el-button><br>
                <el-button size="small" class="sp_btn" @click="deleteClick(scope.$index)">删除</el-button>
              </div>
          </template>
        </el-table-column>
      </el-table>

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
      <!-- <div class="zm_bottomOpreteExplain">
        一键下架：选择的活动，全部下架
        <br>
        一键删除：选择的活动，全部删除
      </div> -->

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
        selectIndex: 0,
        isTableBgColor: false,
        displayTableBgColor1: 'displayTableBgColor1',
        displayTableBgColor2: 'displayTableBgColor2',
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
        this.mylistType = this.listType;
    },
    watch:{
        totalCount: function(val) {
		      // console.log('---watch：totalCount= ' + val)
        },
    },
    methods:{
      toggleSelection(rows) {
        if (rows) {
          // 索引选择（包含全选）
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          // 取消选择
          this.$refs.multipleTable.clearSelection();
        }
        // console.log('---multipleSelection= ', zm_jsonToString(this.multipleSelection), rows);
        console.log('---toggleSelection= '+ this.multipleSelection.length);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log('---handleSelectionChange= '+ this.multipleSelection.length);
      },
      saveCilck(rowItem){
            console.log('---保存编辑：saveCilck');
            let self = this;
            let urlStr = baseapi.TIP + baseapi.qg_update;
            // let urlStr = baseapi.TFIP + "/panicbuy/createPanicbuy";
            //console.log('---params：' + zm_jsonToString(rowItem), 'urlStr= ', urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: rowItem,
                'Content-Type':'Application/json'
            })
            .then(function(res){
                //console.log('---编辑活动：response= '+zm_jsonToString(res));
                if(res.status ==200){
                    self.$message.success("保存成功！");
                } else {
                    self.$message.error(res.data.message);
                    // 还原
                    if (item.spZdsc== "1") {
                      rowItem.spZdsc = 0;            
                    } else {
                      rowItem.spZdsc = 1;
                    }
                }
            })
      },
      changeSwitch(index, rowItem) {
					//var item = this.tableData[index];
          console.log('---changeSwitch 选择了: index_' + index + '、spZdsc= ' + rowItem.spZdsc);
          this.saveCilck(rowItem);
			},
      handleCurrentChange(val) {
        this.$emit('pageMethodSon',val);
        // console.log(`当前页: ${val}`);
      },
      edit(index){
        //console.log('---编辑_'+index);
        let itemData = this.tableData[index];
        this.$router.push({
          path:'/supplier/supplierCreate',
          query:{
            itemData:JSON.stringify(itemData),
            isEdit: true,
          }
        });
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
        let urlStr = baseapi.TIP + baseapi.sp_update;
            urlStr = baseapi.userIP + baseapi.sp_update;
        let params = new FormData();       
            params.append('id', item.id);  
            params.append('isDelete', 1);
            console.log('---params：' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            this.$http({method: "post",
                url: urlStr,
                data: params,
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),			
                }
            }).then(function(res){
                console.log('---删除供应商：response= '+zm_jsonToString(res));
                if(res.data.status ==200){
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
          // console.log('---daterc= '+daterc);
          return zm_dateFormat(daterc.time);          
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

.headerImg{
  margin-top: 10px;
}

.zm_spPanicbuystate {
  color: #239A04;
}
.gq_zmtuanId {
  margin: 0 0 10px 0px;
  font-size: 16px !important;
  font-weight: 500 !important;
  color: #333 !important;

}

/****************** view4：显示/隐藏 ******************/
.displayTableBgColor1 {
	background: #000;
}
.displayTableBgColor2 {
	background: yellow;
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
  color: red;
}

.mh_price {
  color: red;
}
.sp_btn{
  margin: 0px 10px 10px 0px;
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
