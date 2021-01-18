<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">

            <secnavbar></secnavbar>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                   <div class="goods-card_body">
                    <div>

                        <el-tabs type="border-card">
                            <el-tab-pane label="商品助手">
                                <div class="shop_dialog">
                                    <span class="shop_dialog_tit">可用次数</span>
                                    <div>
                                         <p class="shop-into-p"><span class="shop-into-num">0</span><span class="shop-into-ci">次</span></p>
                                        <button data-v-bc0dbadc="" type="button" class="el-button el-button--primary el-button--small"><span>立即充值</span></button>
                                    </div>
                                </div>
                                <div style="display: flex">
                                    <span class="shop_dialog_tit">商品链接</span>
                                    <div style="width: 60%">
                                        <div class="el-input el-input--small" style="width: 100%;display: flex;align-items: center;margin-bottom: 10px">
                                            <input type="text" autocomplete="off" class="el-input__inner" placeholder="https://" style="margin-right: 8px">
                                            <i class="el-icon-plus"></i>
                                        </div>
                                        <p style="margin-bottom: 20px"><span  class="shop-into-tips">仅支持淘宝商品链接导入</span></p>
                                        <div>
                                            <button  type="button" class="el-button el-button--primary el-button--small"><span>确 定</span></button>
                                            <button  type="button" class="el-button el-button--default el-button--small"><span>取 消</span></button>
                                        </div>
                                    </div>
                                </div>

                            </el-tab-pane>

                            <el-tab-pane label="文件导入">
                                <div style="display: flex">
                                    <span class="shop_dialog_tit">导入文件</span>
                                    <div>
                                        <button type="button" class="el-button el-button--primary el-button--mini" style="margin-bottom: 4px"><span>点击上传</span></button>
                                        <div    class="el-upload__tip good-init-xls">仅支持xls, xlsx, csv文件，且不超过20MB(该数据文件来源淘宝助理5.0以上版本导出内容)</div>
                                        <button type="button" class="el-button el-button--text el-button--small good-init-jin"><span>模版下载</span></button>
                                        <div>
                                            <button  type="button" class="el-button el-button--primary el-button--small"><span>保存</span></button>
                                        </div>
                                    </div>
                                </div>

                            </el-tab-pane>

                            <el-tab-pane label="导入充值">
                                <div class="shop-into_price">
                                    <div class="shop-into_price-info">
                                        <h5>剩余次数</h5><p>0</p>
                                    </div>
                                </div>

                              <div>
                                  <ul class="shop-into-ul"><li class="shop-into-ul_li"><p >100次</p><div  class="price"><p ><span>￥</span>
                                      10.00
                                  </p></div><button  type="button" class="el-button el-button--primary el-button--small" style="margin: 12px;"><span>立即充值</span></button></li><li  class="shop-into-ul_li"><p>500次</p><div class="price"><p><span>￥</span>
                                      50.00
                                  </p></div><button  type="button" class="el-button el-button--primary el-button--small" style="margin: 12px;"><span>立即充值</span></button></li><li class="shop-into-ul_li"><p>1000次</p><div class="price"><p><span>￥</span>
                                      100.00
                                  </p></div><button  type="button" class="el-button el-button--primary el-button--small" style="margin: 12px;"><span>立即充值</span></button></li><li class="shop-into-ul_li"><p>2000次</p><div class="price"><p><span>￥</span>
                                      200.00
                                  </p></div><button type="button" class="el-button el-button--primary el-button--small" style="margin: 12px;"><span>立即充值</span></button></li>
                                  </ul>
                              </div>
                                <div>
                                    <p class="goods-init-p">充值记录</p>

                                  <div class="goods-init-tabs">
                                      <el-table
                                              :data="tableData"
                                              border
                                              style="width: 100%">
                                          <el-table-column
                                                  prop="date"
                                                  label="充值时间"
                                                  width="180">
                                          </el-table-column>
                                          <el-table-column
                                                  prop="name"
                                                  label="充值数"
                                                  width="180">
                                          </el-table-column>
                                          <el-table-column
                                                  prop="address"
                                                  label="充值金额(元)">
                                          </el-table-column>
                                          <el-table-column
                                                  prop="address"
                                                  label="充值后可用数">
                                          </el-table-column>
                                          <el-table-column
                                                  prop="address"
                                                  label="充值前剩余数">
                                          </el-table-column>
                                      </el-table>
                                  </div>

                                    <div>
                                        <el-pagination
                                                @size-change="handleSizeChange"
                                                @current-change="handleCurrentChange"
                                                :current-page="currentPage4"
                                                :page-sizes="[100, 200, 300, 400]"
                                                :page-size="100"
                                                layout="total, prev, pager, next, jumper"
                                                style="text-align: right"
                                                :total="400">
                                        </el-pagination>
                                    </div>

                                </div>

                            </el-tab-pane>

                        </el-tabs>

                    </div>
                </div>
                <!-- 商品中心over-->
            </div>
        </div>

        <!--        -->
    </div>
    <!--主体 over-->
    </div>
</template>
<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import secnavbar from './secnavbar';
export default {
      data() {
        return {
             radio: '1', // 假的单选框
            currentPage4: 4, //分页
            tableData: [{
                goodsid: 1,
                goods: "20",
                pv: '200',
                stock:'2019-10-29 11:18:13',
                total:2000,
                creatime:'2016-05-02',
                person:'蒋金泽',
                sort:1,
                handle:'ds ',
                state: '禁用'

            }],
            dialogFormVisible: false,//添加一级
            value1: true,
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        };
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    },
    components:{
        navbar,sidebar,secnavbar    
    }
}
</script>
<style>
.shop-into-tips{
    font-size: 12px;
    color: #666;
}
.shop-into-num{
    font-size: 15px;
    color: red;
    margin: 0 2px;
}
.shop-into-p{
    display: inline-block;
    margin-right: 20px;
}
.shop-into-ci{
    color: #303133;
}

.good-init-jin{
    margin-bottom: 12px!important;
}
.good-init-xls{
    margin-bottom: 15px;
}
/*导入充值*/
.shop-into_price{
    margin-top: 15px;
    display: flex;
    padding:15px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-sizing: border-box;
    height: 99px;
    margin-bottom:20px;
}
.shop-into_price-info h5{
    font-size: 14px;
    margin-bottom: 6px;
}
.shop-into_price-info p{
    color: #333;
    font-family: PingFang SC;
    font-size: 26px;

}

.shop-into-ul{
    display: flex;
}
.shop-into-ul li{
    height: 150px;
    width: 150px;
    text-align: center;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    padding: 8px 11px 0;
    margin-right: 15px!important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 15px;
    line-height: 1;
    overflow: hidden;
}
.shop-into-ul_li{
    font-size: 14px;
    color: #333;
    line-height: 20px;

}
.shop-into-ul_li>p{
    font-size: 14px;
    color: #333;
    line-height: 20px;
}
.shop-into-ul_li .price p{
    font-size: 22px;
    color: #38f;
    line-height: 23px;
}
.shop-into-ul_li .price{
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px dotted #e5e5e5;
    height: 47px;
    padding-top: 9px;
    padding-bottom: 6px;
}
.goods-init-p{
    font-weight: 800; font-size: 14px; padding-left: 10px; margin-bottom: 20px;
}
.goods-init-p:before{
    content: "";
    display: inline-block;
    width: 3px;
    height: 12px;
    position: relative;
    top: 1px;
    background: #f60;
    margin-right: 5px;
}
.goods-init-tabs{
    margin-bottom: 10px
}
</style>