<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <datanav></datanav>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <!-- TOP1 -->
                <div class="mhdata-divfu">
                    <div class="mhdata-div">
                        <h5 class="mhdata-div_h5">商品整体概况</h5>
                        <div class="mhdata-div_div">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <div class="mhdata-div_span">2020-04-06至2020-04-13</div>
                        </div>
                    </div>
                    <div class="mhdata-div_header-div">
                        <dl class="mhdata-div_header-divdl mhdata-divdl">
                            <dt class="mhdata-div_header-dt">
                                <p>在架商品数 </p>
                                <el-popover
                                    placement="top"                 
                                    trigger="hover"
                                    popper-class="mhdata-header_tip"
                                    content="上架的商品数量,不包括已告罄的商品">
                                    <i  slot="reference"   class="el-tooltip el-icon-question mhdata-header_tipi" aria-describedby="el-tooltip-1440" tabindex="0" style="margin-left: 2px; font-size: 14px;"></i>
                                </el-popover> 
                            </dt>
                            <dd class="mhdata-div_header-dd">11</dd>
                        </dl>

                        <dl class="mhdata-div_header-divdlTwo mhdata-divdl">
                            <dt class="mhdata-div_header-dt">
                                <p>被访问商品数 </p>
                                 <el-popover
                                    placement="top"                 
                                    trigger="hover"
                                    popper-class="mhdata-header_tip"
                                    content="商品详情页浏览次数大于0的商品数">
                                    <i  slot="reference"   class="el-tooltip el-icon-question mhdata-header_tipi" aria-describedby="el-tooltip-1440" tabindex="0" style="margin-left: 2px; font-size: 14px;"></i>
                                </el-popover> 
                            </dt>
                            <dd class="mhdata-div_header-dd">11</dd>
                        </dl>

                        <dl class="mhdata-div_header-divdlthree mhdata-divdl">
                            <dt class="mhdata-div_header-dt">
                                <p>商品浏览量 </p>
                                 <el-popover
                                    placement="top"                 
                                    trigger="hover"
                                    popper-class="mhdata-header_tip"
                                    content="商品详情页被访问的次数，一个人访问多次记为多次">
                                    <i  slot="reference"   class="el-tooltip el-icon-question mhdata-header_tipi" aria-describedby="el-tooltip-1440" tabindex="0" style="margin-left: 2px; font-size: 14px;"></i>
                                </el-popover> 
                            </dt>
                            <dd class="mhdata-div_header-dd">11</dd>
                        </dl>

                        <dl class="mhdata-div_header-divdlfour mhdata-divdl">
                            <dt class="mhdata-div_header-dt">
                                <p>商品访客数 </p>
                                <el-popover
                                    placement="top"                 
                                    trigger="hover"
                                    popper-class="mhdata-header_tip"
                                    content="商品详情页被访问的人数，一个人访问多次记为一次">
                                    <i  slot="reference"   class="el-tooltip el-icon-question mhdata-header_tipi" aria-describedby="el-tooltip-1440" tabindex="0" style="margin-left: 2px; font-size: 14px;"></i>
                                </el-popover> 
                            </dt>
                            <dd class="mhdata-div_header-dd">11</dd>
                        </dl>

                        <dl class="mhdata-div_header-divdlfive mhdata-divdl">
                            <dt class="mhdata-div_header-dt">
                                <p>下单件数  </p>
                                 <el-popover
                                    placement="top"                 
                                    trigger="hover"
                                    popper-class="mhdata-header_tip"
                                    content="成功下单的商品件数之和，包含退款订单">
                                    <i  slot="reference"   class="el-tooltip el-icon-question mhdata-header_tipi" aria-describedby="el-tooltip-1440" tabindex="0" style="margin-left: 2px; font-size: 14px;"></i>
                                </el-popover> 
                            </dt>
                            <dd class="mhdata-div_header-dd">11</dd>
                        </dl>

                        <dl class="mhdata-div_header-divdlsex mhdata-divdl">
                            <dt class="mhdata-div_header-dt">
                                <p>支付件数 </p>
                                <el-popover
                                    placement="top"                 
                                    trigger="hover"
                                    popper-class="mhdata-header_tip"
                                    content="成功付款的商品件数之和，包含退款订单">
                                    <i  slot="reference"   class="el-tooltip el-icon-question mhdata-header_tipi" aria-describedby="el-tooltip-1440" tabindex="0" style="margin-left: 2px; font-size: 14px;"></i>
                                </el-popover> 
                            </dt>
                            <dd class="mhdata-div_header-dd">11</dd>
                        </dl>


                    </div>
                </div>

                <!-- TOP2 -->
                <div class="mhdata-divfu">
                    <div class="mhdata-div">
                        <h5 class="mhdata-div_h5">商品趋势分析</h5>
                        <div class="mhdata-div_div">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <div class="mhdata-div_span">2020-04-06至2020-04-13</div>
                        </div>
                    </div>
                    <div>
                        <div id="myCanvasTwo" :style="{width: '100%', height: '400px'}"></div>
                    </div>
                </div>


                 <!-- TOP3 -->
                <div class="mhdata-divfu">
                    <div class="mhdata-div">
                        <h5 class="mhdata-div_h5">商品排行榜</h5>
                        <div class="mhdata-div_div">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <div class="mhdata-div_span">2020-04-06至2020-04-13</div>
                        </div>
                    </div>
                    <div class="mhdat-topthere-div">
                       <div class="mhdat-topthere-div_div"> 
                            <h5 class="mhdat-topthere-div_h5">付款金额TOP10</h5>
                            <div>
                                <el-table
                                :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                                :data="tableData"
                                style="width: 100%">
                                <el-table-column
                                    prop="num"
                                    label="TOP"
                                    >
                                </el-table-column>
                                <el-table-column
                                    prop="goodsid"
                                    label="商品id"
                                    >
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="商品名称">
                                </el-table-column>
                                <el-table-column
                                    prop="img"
                                    label="商品图片">
                                </el-table-column>
                                <el-table-column
                                    prop="ordernum"
                                    label="下单人数">
                                </el-table-column>
                                 <el-table-column
                                    prop="ordernum"
                                    label="销售数量">
                                  </el-table-column>
                                <el-table-column
                                    prop="price"
                                      width="100px"
                                    label="销售金额(元)">
                                </el-table-column>
                                 <el-table-column
                                    prop="bai"
                                    width="100px"
                                    label="单品转化率(%)">
                                </el-table-column>
                              
                                </el-table>
                            </div>
                       </div>
                        <div class="mhdat-topthere-divright-two">
                            <h5 class="mhdat-topthere-div_h5">商品库存TOP10</h5>
                                    <div>
                                <el-table
                                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                                :data="tableData"
                                style="width: 100%">
                                <el-table-column
                                    prop="num"
                                    label="TOP"
                                    >
                                </el-table-column>
                                <el-table-column
                                    prop="goodsid"
                                    label="商品id"
                                    >
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="商品名称">
                                </el-table-column>
                                <el-table-column
                                    prop="img"
                                    label="商品图片">
                                </el-table-column>
                                <el-table-column
                                    prop="ordernum"
                                    label="总库存">
                                </el-table-column>
                                 <el-table-column
                                    prop="ordernum"
                                    label="剩余库存">
                                 </el-table-column>
                              
                       
                              
                                </el-table>
                            </div>
                       </div>
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
import datanav from './datanav';
import baseapi from '../../utils/api';

export default {
    data() {
        return {
              tableData: [{
            num:'1',
            goodsid:'125',
            name:'爱朵仕精华液',
            img:'',
            ordernum:'2',
            xiaoling:'2',
            price:'11',
            bai:'11%',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
            options: [{
            value: '选项1',
            label: '近7天'
            }, {
            value: '选项2',
            label: '近30天'
            }, {
            value: '选项2',
            label: '自然日'
            }, {
            value: '选项2',
            label: '自然月'
            }
            
            ],
            value: ''
        }
    },
    mounted(){
            let myCanvasTwo = echarts.init(document.getElementById('myCanvasTwo'));
            myCanvasTwo.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['在货商品数', '被访问商品数', '商品浏览量','商品浏览量','商品访客数']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap:false,
                        data: ['20200406', '20200407', '20200408', '20200409', '20200410', '20200411', '20200412']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '在货商品数',
                            type: 'line',
                              smooth:true,
                            // step: 'start',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '被访问商品数',
                            type: 'line',
                              smooth:true,
                            // step: 'middle',
                            data: [220, 282, 201, 234, 290, 430, 410]
                        },
                        {
                            name: '商品浏览量',
                            type: 'line',
                              smooth:true,
                            // step: 'end',
                            data: [450, 432, 401, 454, 590, 530, 510]
                        },
                        {
                            name: '商品访客数',
                            type: 'line',
                              smooth:true,
                            // step: 'end',
                            data: [0, 100, 200, 300, 590, 530, 510]
                        }
                    ]
            })
    },
    methods:{


      
    },
    components:{
        navbar,sidebar ,datanav   
    }
}
</script>