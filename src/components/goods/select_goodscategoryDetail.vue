<template>
<!-- 缺少数据接口  单个分类树 -->
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
                <div class="mh-goodscategory-treemain">
                    <!--选项卡组件-->
                    <div class="mh-goodscategory-treDiv">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/goodslist/goodscategory' }">商品分类</el-breadcrumb-item>
                        <el-breadcrumb-item>分类详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>   
                    <div class="mh-goodscategory-bottom">
                        <div class="mh-goodscategory-tree" style="background-color:#fff">
                            <el-tree
                                :data="data"
                                highlight-current
                                node-key="id"
                                default-expand-all
                                :props="defaultProps"
                                :expand-on-click-node="false"
                                @node-click="handleNodeClick"
                                ref="tree"                                            
                            >
                            <!-- draggable  -->
                            <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span class="newnode">{{ data.name }}</span>
                            <span >
                                    <!-- v-if=" data.$treeNodeId <= 2"     -->
                                    <!-- v-if=" data.id != undefined " -->
                                <el-button         
                                type="text"
                                size="mini"
                                v-if=" data.layer != undefined ||  data.layer  != null "   
                                @click.stop="() => append(data)">
                                    <el-tooltip class="item" effect="dark" content="添加子分类" placement="top">
                                        <i class="el-icon-plus"></i>
                                    </el-tooltip>
                                </el-button>

                                <el-button
                                v-if=" data.pid != 0 "
                                type="text"
                                size="mini"
                                @click.stop="() => remove(node, data)">
                                <el-tooltip class="item" effect="dark" content="删除分类" placement="top">
                                    <i class="el-icon-delete"></i>
                                </el-tooltip>
                                </el-button>
                            </span>
                            </span>
                            </el-tree>
                        </div>

                        <div>
                            <div class="mh-goodscategory-div">
                                <span class="mh-goodscategory-span">分类名称:</span>
                                <el-input v-model="catename" placeholder="分类名称"></el-input>
                            </div>   
                            <div class="mh-goodscategory-div">
                                <span class="mh-goodscategory-span">分类图片:</span>
                                <div class="el-input">
                                    <div style="position: relative;">
                                        <img :src="goodscategoryimgOne" alt="" width="60" height="60" style="border:1px dotted #eee" >
                                        <img v-if="goodscategoryimgOne != ''"  @click="delectImgCate" src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/jinze/tool/delete.png" alt="" srcset="" style=" position: absolute; width: 15px; top: -8px;left: 58px;cursor: pointer;">
                                    </div>
                                    <button @click="getsonimg" type="button" class="el-button el-button--text"><span>上传图片(只能选取一张)</span></button>
                                </div>
                            </div>  

                            <div class="mh-goodscategory-div">
                                <span class="mh-goodscategory-span">分类排序:</span>
                                <el-input v-model="cateserial" placeholder="分类排序"></el-input>
                            </div> 

                            <div class="mh-goodscategory-div">
                                <span class="mh-goodscategory-span">链接地址:</span>
                                <el-input v-model="cateurl" placeholder="分类名称"></el-input>
                            </div>  

                            <div style="padding-left: 28%;">
                                <el-button v-if="newaddFlogone" type="primary" size="mini" @click="editgoodscate">确定</el-button>
                                <el-button v-if="newaddFlogtwo" type="primary" size="mini" @click="newaddgoodscate">新增</el-button>
                            </div>
                        </div>   
                    </div>          
                    <!--选项卡组件 over-->
                </div>
                <imgsrc ref="imgsrc"> </imgsrc>
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
import imgsrc from "../resource/imgsrc";

import baseapi from '../../utils/api';
 let id = 1000;

 var n = 1;
export default {
    data() {
        return {
            goodscategorypid:0,
            newaddFlogone:true,
            newaddFlogtwo:false,
            upparentId:0,
            treeNodeid:0,
            categoryid:0,
            fujiid:0,
            data:[],
            goodscategoryimgOne:'',
            cateserial:'',
            catename:'',
            cateurl:'',
            defaultProps: {
              children: 'childlist',
              label: 'name'
          },
        };
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.fujiid = vm.$route.params.id;
                vm.categoryDan();
                vm.reqCateGoryDetail();
            } else {
                next('/login');
            }
		})
	},
    mounted(){ 
      
      
    },
    methods:{  
        delectApi(id){ 
            this.$confirm('确定将该分类删除, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                 }).then(() => {
                    let data = new FormData();
                    if(id == undefined){
                        return false;
                    }
                    data.append('id',id);
                    this.http.post( baseapi.delectcategory,data).then(res=>{
                        this.$message.success('删除成功');
                        this.categoryDan();
                        this.reqCateGoryDetail();
                }) ;
            })  
        },
        //删除图片
        delectImgCate(){
            this.goodscategoryimgOne = '';
        },
        //单分类全部分类
        categoryDan(){ 
            let data = new FormData();
            data.append('id',this.fujiid);
            this.http.post( baseapi.goodsAllcategory,data).then(res=>{
            this.data =  res.data.list
            })  
        },
        //初始化渲染
        reqCateGoryDetail(){ 
            let data = new FormData();
            data.append('id',this.fujiid);
            this.http.post( baseapi.chaGoodsCategoryDetail,data).then(res=>{
                console.log(res);
                let listData = res.data.data;
                this.goodscategoryimgOne = listData.img;
                this.catename = listData.name;
                this.cateserial =  listData.serial
                this.cateurl = listData.redirect
            })  
        },
        caoGoryDetail(pid){ 
            let data = new FormData();
            data.append('id',pid);
            this.http.post( baseapi.chaGoodsCategoryDetail,data).then(res=>{
                console.log(res);
                let listData = res.data.data;
                this.goodscategoryimgOne = listData.img;
                this.catename = listData.name;
                this.cateserial =  listData.serial
                this.cateurl = listData.redirect
            })  
        },
        //修改分类editcategory
        editgoodscate(){
            let data = new FormData();
            if(this.categoryid == 0){
                 data.append('id',this.data[0].id);
            }else{
                 data.append('id',this.categoryid)
            }    
            data.append('pid',this.goodscategorypid)
            data.append('name',this.catename);
            data.append('serial',this.cateserial);
            data.append('imgs',this.goodscategoryimgOne);
            data.append('redirect',this.cateurl);
            this.http.post( baseapi.editcategory,data).then(res=>{
                this.$message.success('修改成功');
                this.categoryDan();
                             
            })  
        },

        // 新增分类
        newaddgoodscate(){
            let data = new FormData();
            if(this.upparentId != 0 && this.upparentId != 2 && this.upparentId != 3){
                data.append('pid',this.upparentId); //上级id     
            }
            if(this.upparentId == undefined){
                   this.$message.error('请先保存上一级分类');
                   return false;
            }
            data.append('name',this.catename);
            data.append('serial',this.cateserial);
            data.append('imgs',this.goodscategoryimgOne);
            data.append('redirect',this.cateurl);
            this.http.post( baseapi.addcategory,data).then(res=>{
                  this.$message.success('新增成功');
                  this.categoryDan();
            })  
        },


        handleNodeClick(data) {
            if (data.pid != undefined || data.pid != null) {
                this.caoGoryDetail(data.id);
                this.goodscategorypid =  data.pid;
                this.categoryid = data.id;
                this.newaddFlogone = true;
                this.newaddFlogtwo = false;     
            } else {
                this.newaddFlogone = false;
                this.newaddFlogtwo = true;
                this.catename = data.name;
                this.goodscategoryimgOne = '';
                this.cateserial =  '';
                this.cateurl = '';
            }
        },
        getsonimg(){
          this.$refs.imgsrc.imgdialogFormVisible = true;
          this.$refs.imgsrc.pid = 9;
         },  
        append(data) {      
            if(data.id != undefined){
                this.upparentId = data.id;
            }
            const newChild = { name: '新增分类', childlist: [],delect:2};
            if (!data.childlist) {
                this.$set(data, 'childlist', []);
            }
            data.childlist.push(newChild) 
        },
        remove(node, data) {
            if(data.id == undefined){
               const parent = node.parent;
                const children = parent.data.childlist || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);      
            }else{
                this.delectApi(data.id);
            }
           
        },
        allowDrop(draggingNode, dropNode, type) {
            if (dropNode.data.label === '二级 3-1') {
            return type !== 'inner';
            } else {
            return true;
            }
        },
        allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
        },
    },
    components:{
        navbar,sidebar,secnavbar,imgsrc    
    }
}
</script>

<style>
    .mh-goodscategory-bottom{
        display: flex;
    }
    .mh-goodscategory-treemain{
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        padding: 20px;
        box-sizing:  border-box;
    }
    .mh-goodscategory-tree{
        width: 300px;
        height: 300px;
        margin-right: 30px;
    }

    .mh-goodscategory-div{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .mh-goodscategory-span{
        font-size: 14px;
        color: #606266;
        width: 96px;
    }
    .mh-goodscategory-treDiv{
        margin-bottom: 20px;
    }

    .mh-goodscategory-tree .el-tree-node__content{
        background-color: #ffffff;
    }
    .mh-goodscategory-tree .custom-tree-node{
         width: 90%;
         display: flex;
         justify-content: space-between;
     }
    .mh-goodscategory-tree .custom-tree-node .newnode{
        display: inline-block;
        height:28px;
        line-height:28px;
    }
</style>
