<template>
  <!-- 评价模块 -->
  <div class="main">
    <sidebar></sidebar>
    <!--主体 start-->
    <div class="main-right">
      <navbar></navbar>
      <!--二级导航栏 -->
      <div class="main-goods">
        <shopnavbar></shopnavbar>
        <div class="main-goods-right">
          <!-- 商品中心内容 -->
          <div class="goods-card_body">
            <div class="order-pingjia">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部评论" name="first">
                  <el-button type="primary" size="small" class="ping-btn">导入评语</el-button>
                    <el-table
                                ref="multipleTable"
                                :data="tableData"
                                tooltip-effect="dark"
                                
                                style="width: 100%"
                                :default-sort = "{prop: 'date', order: 'descending'}"
                                @selection-change="handleSelectionChange">
                            <!-- <el-table-column
                                    type="selection"
                                    width="55">
                            </el-table-column> -->
                            <el-table-column
                                    prop="goodsid"
                                    label="商品ID"
                                    sortable
                                    width="90">
                                <!--                            <template slot-scope="scope">{{ scope.row.date }}</template>-->
                            </el-table-column>
                            <el-table-column
                                    prop="goods"
                                    label="商品信息"
                                    min-width="145">
                                <template slot-scope="scope">
                                    <div class="goods-table"><img :src="scope.row.goods" alt="" width="40" height="40"><ul class="good_table-ul"><li><span>名称</span><span>进口红酒</span></li><li><span>价格</span><span>$999</span></li><li><span>供应商:</span><span>蒋金泽</span></li></ul></div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="pv"
                                    label="订单号"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="stock"
                                    label="客户信息"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="total"
                                    label="客户评价"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="creatime"
                                    label="图片"
                                    show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div class="goods-table"><img :src="scope.row.spirits" alt="" width="40" height="40"></div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="person"
                                    label="视频"
                                    show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div class="goods-table"><img :src="scope.row.pingimg" alt="" width="40" height="40"></div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="sort"
                                    label="商家回复"
                                    show-overflow-tooltip>
                            </el-table-column>
                               <el-table-column
                                    prop="sort"
                                    label="评价时间"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="sort"
                                    label="评价质量"
                                    show-overflow-tooltip>
                            </el-table-column>                  
                            <el-table-column
                                    prop="handle"
                                    label="操作"
                                    min-width="80"
                                    >
                                    show-overflow-tooltip>
                                <template slot-scope="scope">
                                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">回复</el-button>
                                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                <span class = "chakanzhuiping">查看追评</span>

                                </template>
                            </el-table-column>
                        </el-table>
                </el-tab-pane>
                <el-tab-pane label="好评" name="second">
                    <div class="orderevaluate-list-img">
                      <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/order.png" alt="" srcset="">
                    </div>
                </el-tab-pane>
                <el-tab-pane label="中评" name="third">
                     <div class="orderevaluate-list-img">
                      <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/order.png" alt="" srcset="">
                     </div>
                </el-tab-pane>
                <el-tab-pane label="差评" name="fourth">
                   <div class="orderevaluate-list-img">
                      <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/order.png" alt="" srcset="">
                    </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <!-- 商品中心over-->
        </div>
      </div>

      <!--   over     -->
    </div>
    <!--主体 over-->
  </div>
</template>
<script>
import navbar from "../navbar";
import sidebar from "../sidebar";
import shopnavbar from "./shopnavbar";
export default {
  data() {
    return {
      activeName: "first",
        value: '',
            tableData: [{
                goodsid: 1,
                goods: "https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/jinze/mine.png",
                pingimg:"https://a.msstatic.com/huya/main3/widget/index-game-classify/img/play-icon-980_ebca2.png",
                spirits:"https://cbu01.alicdn.com/img/ibank/2019/917/379/12495973719_1200398445.220x220.jpg?_=2020",
                pv: '200',
                stock:'200',
                total:2000,
                creatime:'2016-05-02',
                person:'蒋金泽',
                sort:1,
                handle:'ds '
            }],

      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
   beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                next();
            } else {
                next('/login');
            }
		})
	},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    navbar,
    sidebar,
    shopnavbar
  }
};
</script>
<style>
.vip-sitting .el-input__inner {
  height: 32px;
  line-height: 32px;
}
.vip-sitting .el-input__suffix .el-input__icon {
  line-height: 32px;
}
.vip-sit_span {
  color: #606266;
  padding: 0 12px 0 0;
  display: inline-block;
  width: 100px;
  font-size: 12px;
  text-align: right;
  
}
.orderping-order_ul{
    display: flex;
    font-size: 12px;
    justify-content: space-between
}
.ping-btn{
    margin-bottom: 16px
}
.chakanzhuiping{
    font-size:12px;
    cursor: pointer;
}
.order-pingjia .el-table .cell{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center


}
.order-pingjia .el-table .cell button{
    margin-bottom: 8px
} 
.order-pingjia .el-button+.el-button{
    margin-left:0 !important
}
.order-pingjia .el-table__body-wrapper{
    font-size: 12px 
}
.order-pingjia .el-table th>.cell {
    text-align: center
}
.orderevaluate-list-img {
  width: 100%;
  display: flex;
  justify-content: center;
}
.orderevaluate-list-img>img{
  width: 165px;
  height: 165px;
  padding: 50px 0 ;
}
</style>