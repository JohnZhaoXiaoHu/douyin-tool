<template>
  <div>
      <!-- 列表 border-->
      <el-table :data="tableData" class="ft_TableView" :show-header="false"
       @selection-change="handleSelectionChange" 
       @select="handleSelect" 
       :select-on-indeterminate="false" 
       :reserve-selection="false" ref="multipleTable">

        <!-- 模式0：默认 -->
        <!-- 模式1：按件数 -->
        <!-- 模式2：按重量 -->
        <el-table-column type="selection" width="50"> </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <div class="ft_tableHeaderView">
              <div class="ft_tableTitle1">{{scope.row.tShopFreightTemplate.sftTemplateName}}</div>
              <div class="ft_opreateView1">
              </div>
            </div>
            <div class="ft_tableContentView1">
              <div class="ft_tableTitle">配送区域</div>
              <div class="ft_opreateView">
                <div class="ft_subTitle">首件（个）</div>
                <div class="ft_subTitle">运费</div>
                <div class="ft_subTitle">续件（个）</div>
                <div class="ft_subTitle">续费</div>
              </div>
            </div>
            <!-- class="ft_tableContentView2" -->
            <div v-bind:class="[ (scope.row.tShopFreightTemplateContents.length>0 || scope.row.tShopFreightTemplateFrees.length>0) ? ft_tableContentView2 : ft_tableContentView1]">
              <div class="ft_tableTitle">无指定区域</div>
              <div class="ft_opreateView">
                <div class="ft_subContent">{{scope.row.tShopFreightTemplate.sftTemplateFirst}}</div>
                <div
                  class="ft_subContent"
                >{{scope.row.tShopFreightTemplate.sftTemplateFirstprice/100}}</div>
                <div class="ft_subContent">{{scope.row.tShopFreightTemplate.sftTemplateNext}}</div>
                <div
                  class="ft_subContent"
                >{{scope.row.tShopFreightTemplate.sftTemplateNextprice/100}}</div>
              </div>
            </div>

            <el-table :data="scope.row.tShopFreightTemplateContents" v-if="scope.row.tShopFreightTemplateContents.length>0"
              border  class="ft_TableView1" :show-header="false" >
              <el-table-column label="配送区域" width="135">
                <template slot-scope="scope1">
                  <div>{{scope1.row.sftcTemplateArea}}</div>
                </template>
              </el-table-column>
              <el-table-column label="首件（个）"  v-if="scope.row.tShopFreightTemplate.sftTemplateType==1" width="100" align="center" >
                <template slot-scope="scope1">
                  <div>{{scope1.row.sftcTemplateFirst}}</div>
                </template>
              </el-table-column>
              <el-table-column label="首重（kg）" v-else-if="scope.row.tShopFreightTemplate.sftTemplateType==2"width="100" align="center"  >
                <template slot-scope="scope1">
                  <div>{{scope1.row.sftcTemplateFirst}}</div>
                </template>
              </el-table-column>

              <el-table-column label="运费" width="100" align="center">
                <template slot-scope="scope1">
                  <div>{{scope1.row.sftcTemplateFirstprice/100}}</div>
                </template>
              </el-table-column>
              <el-table-column label="续件（个）" v-if="scope.row.tShopFreightTemplate.sftTemplateType==1"
                width="100" align="center"  >
                <template slot-scope="scope1">
                  <div>{{scope1.row.sftcTemplateNext}}</div>
                </template>
              </el-table-column>
              <el-table-column label="续重（kg）" v-if="scope.row.tShopFreightTemplate.sftTemplateType==2"
                width="100" align="center" >
                <template slot-scope="scope1">
                  <div>{{scope1.row.sftcTemplateNext}}</div>
                </template>
              </el-table-column>

              <el-table-column label="续费" width="100" align="center">
                <template slot-scope="scope1">
                  <div>{{scope1.row.sftcTemplateNextprice/100}}</div>
                </template>
              </el-table-column>
            </el-table>

            <el-table :data="scope.row.tShopFreightTemplateFrees" v-if="scope.row.tShopFreightTemplateFrees.length>0"
              border class="ft_TableView2" :show-header="false" >
              <el-table-column width="165">
                <template slot-scope="scope2">
                  <div class="sftfTemplateAreaView">{{scope2.row.sftfTemplateArea}}</div>
                </template>
              </el-table-column>
              <el-table-column width="100" >
                <div class="sftfTemplateAreaView1">包邮</div>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
      </el-table>

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
        zm_timestampToDate
} from "../../filters/zm_tools"

 export default {
    data(){
      return{
          msg:'这是一个头部组件',
          ft_tableContentView: true,
          ft_tableContentView1: 'ft_tableContentView1',
          ft_tableContentView2: 'ft_tableContentView2',
          // 添加礼包
          // dialogGiftpackVisible: false,
          // giftPackList:[],
          // selectIndex: 0,
          multipleSelection:[],
          selectFTemplate: '',
          selectFTemplateList:[],
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
    },
    created(){
        console.log('------created ');
    },
    mounted(){
        // console.log('------mounted ');
    },
    watch:{
        totalCount: function(val) {
		      // console.log('---watch：totalCount= ' + val)
        }
    },
    methods:{
       handleSelectionChange(val) {
            console.log('---handleSelectionChange= '+ zm_jsonToString(val));
            this.multipleSelection = val;
            //取消选择（老的）
            if (this.multipleSelection.length>1) {
                this.$refs.multipleTable.toggleRowSelection(this.multipleSelection[0], false);
            }
            console.log('handleSelectionChange:.length= '+ this.multipleSelection.length);
        },
        handleSelect(selection, row){
            console.log('---handleSelect: row= '+ zm_jsonToString(row));
            console.log('---multipleSelection.length= '+ this.multipleSelection.length);
            //选择新的
            this.selectFTemplate = row;
        },
      son_sconfirmCilck(obj){
          console.log('---子组件获取响应= '+obj);
          //子组件 传递数据到 父组件
          this.$emit('ftl_ToFatherSelect', this.selectFTemplate);
      },
      handleCurrentChange(val) {
        this.$emit('pageMethodSon',val);
        // console.log(`当前页: ${val}`);
      },
    }
};

</script>

<style scoped>

/***************** 列表 *****************/
/* .sftfTemplateAreaView{
  background: yellowgreen;
}
.sftfTemplateAreaView1{
  background: yellow;
} */

.ft_TableView{
    color: #333;
}
/* .ft_TableView1{
    background: #ffffff;
} */
.ft_TableView2{
    margin-bottom: 30px;
    border-bottom:solid 1px #dddddd;
}


.ft_TableView >>> tr:hover>td{
    background-color: #ffffff !important;
}
.ft_TableView >>> .el-table__row>td{
    /* 去除中间分割线 */
	border: none;
}
 /* 去除最上边分割线 */
/* .ft_TableView >>> th.is-leaf {
    border: none;
} */
.el-table::before {
     /* 去除最下边分割线 */
	height: 0px !important;
}

.ft_tableHeaderView{
    /* background: yellow;  */
    height: 35px;
    border: 1px solid #dddddd;
}
.ft_tableContentView1{
    display: flex;
    height: 35px;
    border-bottom: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
}
.ft_tableContentView2{
    display: flex;
    height: 35px;
    /* border-bottom: 1px solid #dddddd; */
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
}

.ft_tableTitle1{
    float: left;
    margin-top: 5px;
    margin: 5px 0 0 10px;
    color: #222222 !important;
    font-size: 13px !important;
    font-weight: 500 !important;
}
.ft_opreateView1 {
    display: inline-flex; 
    float: right;
    margin-right: 10px;
}

.ft_tableTitle{
    width: 352px;
    margin-top: 5px;
    margin: 5px 0 0 10px;
}
.ft_opreateView {
    display: inline-flex; 
    margin-right: 10px;
}

.ft_subTitle, .ft_subContent{
    width: 100px;
    /* background: lightcyan; */
    align-content: center;
    margin-top: 5px;
    /* padding-left: 5px; */
}


</style>
