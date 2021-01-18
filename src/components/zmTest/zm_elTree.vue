<template>
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <zmTestNav></zmTestNav>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <!--选项卡组件内容-->
                <div class="goods-card_body marketing">
                    <!-- <h1 class="marketing_h1">抢购</h1> -->
                    <div class="marketing_div">   
                        推客申请：pgApply 


                        <el-tree :data="treeData" show-checkbox node-key="id"
                        :default-expanded-keys="[2, 3]"
                        :default-checked-keys="[5]"
                        :props="defaultProps"
                        @node-click="tree_nodeClick()"
                        @node-contextmenu="tree_nodeContextmenuk()"
                        @check-change="tree_checkChange"
                        @check="tree_check"
                        @node-expand="tree_nodeExpand"
                        @node-collapse="tree_nodeCollapse()">

                        <!-- <el-button type="text" size="mini" @click="() => append(data)"> 
                            Append
                        </el-button> -->

                        </el-tree>

                    </div>
                </div>    
                <!--选项卡组件 over-->
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
import zmTestNav from './zmTestNav';
import baseapi from '../../utils/api';
import {
  zm_jsonToString,
  zm_formDataToString,
  zm_tipsMsg,
  zm_timestampToDate,
  zm_getCurrenDate,
  zm_getCurrenTimestamp,
  zm_standardDateToFormatDate,
} from "../../filters/zm_tools";


export default {
    data() {
        return {
            treeData: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                    id: 9,
                    label: '三级 1-1-1'
                    }, {
                    id: 10,
                    label: '三级 1-1-2'
                    }]
                }]
                }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
                }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }

        };
    },
    mounted(){

    },
    methods:{
        tree_nodeExpand(data, node, ele){
            // 节点被展开时触发的事件
            console.log('---打开：tree_nodeExpand= '+zm_jsonToString(data));
            console.log('---打开：tree_nodeExpand= '+node.expanded);
            console.log('---打开：tree_nodeExpand= '+ele +'\n');

            //添加结点
            const newChild1 = { 
                id: '340100', 
                label: '合肥', 
                children: [] 
            };
            const newChild2 = { 
                id: '341200', 
                label: '阜阳', 
                children: [] 
            };
            if (!data.children) {
                this.$set(data, 'children', []);
            }
            data.children.push(newChild1);
            data.children.push(newChild2);
        },
        tree_nodeCollapse(){
            // 节点被关闭时触发的事件
            console.log('---关闭：tree_nodeCollapse');
        },
        tree_nodeClick(){
            console.log('---tree_nodeClick');
        },
        tree_nodeContextmenuk(){
            console.log('---tree_nodeContextmenuk');
        },
        tree_checkChange(data, checked, childrenChecked){
            // 节点选中状态发生变化时的回调
            console.log('---选中状态：tree_checkChange= '+zm_jsonToString(data));
            console.log('---选中状态：tree_checkChange= '+checked +'、'+childrenChecked+'\n');
        },
        tree_check(data, status){
            // 当复选框被点击的时候触发
            console.log('---tree_check= '+status);
        },
        tree_currentChange(){
            // 当前选中节点变化时触发的事件
            console.log('---tree_currentChange');
        },
        qiangGou(){
            // this.$router.push('/marketing/qiangGou/shangxiajia');
        },
    },
    components:{
        navbar,zmTestNav,sidebar 
    }
}
</script>
<style>
.marketing_div{
    display: flex;
}


</style>



   
            
           