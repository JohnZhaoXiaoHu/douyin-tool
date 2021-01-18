
<template>
<!-- 提现设置 模板 -->
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <settingnav></settingnav>
         

            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div class="goods-card_body" >
                    <!-- 面包屑 -->
                    <div class="mh-roleadd-top">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                                 <el-breadcrumb-item :to="{ path: '/mhset/permission/2' }">权限角色</el-breadcrumb-item>
                                 <el-breadcrumb-item :to="{ path: '/mhset/payment/roleadd' }">新建角色</el-breadcrumb-item>
                              
                        </el-breadcrumb>     
                    </div>
                    <!-- 面包屑over -->
                    <!--选项卡组件-->
                  
                    <el-form ref="form" :model="form" class="mihuan-roleadd">
                        <el-form-item label="角色名称 :">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                        <el-form-item label="角色权限 :">
                            <div class="el-form-item__content">
                                <!-- :default-expanded-keys="[8,19,115,18,6,12,68,97,1,192]"  默认展开节点-->
                                <!-- :render-content="renderContent" 横向渲染 -->
                                 <!--  empty-text="false"  -->
                                <div class="el-form-item__content_trre">
                                    <el-tree
                                     ref="tree"
                                     :data="data"
                                     default-expand-all
                                     show-checkbox 
                                    node-key="id"
                                    :default-checked-keys="expandedKeys"
                                    empty-text="正在加载..."
                
                                    :props="defaultProps"
                                     @check-change="handleCheckChange"
                                  
                                    indent="22"
                                    >
                                     <span class="custom-tree-node" slot-scope="{ node }">
                                        <span>{{ node.label }}</span>
                                   
                                    </span>
                                    </el-tree>

                                </div>
                            </div>
                        </el-form-item>
                    </el-form>
                    <div class="footer-bar fix" style="position: absolute; z-index: 100;">
                        <button  @click="allSelect" type="button" class="el-button el-button--default el-button--small" >
                             <span>全选</span>
                        </button>

                        <button  @click="clearSelect" type="button" class="el-button el-button--default el-button--small" >
                             <span>清空</span>
                        </button>

                        <button @click="subMit" type="button" class="el-button el-button--primary el-button--small">
                             <span>保存</span>
                        </button>
                         <button  @click="unFoldAll" type="button" class="el-button el-button--default el-button--small" >
                             <span>展开</span>
                        </button>

                        <button  @click="collapseAll" type="button" class="el-button el-button--default el-button--small" >
                             <span>收起</span>
                        </button>
                   </div>
                     
                    <!--选项卡组件 over-->
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
import navbar from '../../navbar';
import sidebar from '../../sidebar';
import settingnav from '../settingnav';
import API from '../../../utils/api';
export default {
    data() {
        return {
            expandedKeys:[],//回显数组
            form: {
                name: '',
            },
            data:[],
            defaultProps: {
                children: 'children',
                label: 'label'
             }
        };
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.getadpp();
            } else {
                next('/login');
            }
        })
    },
    mounted(){
      
       console.log(this.$route.params);
      
    },
    methods:{
        // 全部展开
        unFoldAll () {
            let self = this;
            // 将没有转换成树的原数据
            let treeList = this.data;
            for (let i = 0; i < treeList.length; i++) {
                // 将没有转换成树的原数据设置key为... 的展开
                self.$refs.tree.store.nodesMap[treeList[i].id].expanded = true
            }
        },
        // 全部折叠
        collapseAll () {
            let self = this;
            let treeList = this.data;
            for (let i = 0; i < treeList.length; i++) {
                self.$refs.tree.store.nodesMap[treeList[i].id].expanded = false
            }
        },
        //全选
        allSelect(){
            this.$refs.tree.setCheckedKeys([8,19,115,18,6,12,68,97,1,192]);
        },
        //清空
        clearSelect(){
            this.$refs.tree.setCheckedKeys([]);
        },
        //提交
        subMit(){
            let that  = this; 
            let newArr =  this.$refs.tree.getCheckedNodes();
            let setStr = '';
        
            let shaiArr = newArr.filter(item => item.isFunction ==1 );//去掉不是功能项

            shaiArr.forEach(function(item){
                setStr += item.menuPath+','
            })

            let param = new URLSearchParams()
            param.append('roleName', this.form.name)
            param.append('paths', setStr.substring(0, setStr.length - 1)); 
            this.$http({
                method: "post",
                url:API.PIP+'/miniprogram/saas/user/role/add.do?openId='+that.$cookie.get('openId')+'&path=page/component/index',
                data: param,
                headers: { "Content-Type": "application/x-www-form-urlencoded", Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 200){
                    let list = res.data.data.list;
                    that.admindata = list;
                    that.$message.success(res.data.message);
                    that.$router.push({ path: '/mhset/permission/2'})//跳转传参数
                }else{
                    that.$message.error('状态:'+res.data.status + ' ,错误信息: '+res.data.message);
                }
            })
        },
        subMitEdit(){
            let that  = this; 
            let newArr =  this.$refs.tree.getCheckedNodes();
            let setStr = '';
            newArr.forEach(function(item){
                setStr += item.menuPath+','
            })

            let param = new URLSearchParams()
            param.append('roleId',this.editId);
            param.append('roleName', this.form.name)
            param.append('paths', setStr.substring(0, setStr.length - 1)) 
            this.$http({
                method: "post",
                url:API.PIP+'/miniprogram/saas/function/put.do??openId='+that.$cookie.get('openId')+'&path=page/component/index',
                data: param,
                headers: { "Content-Type": "application/x-www-form-urlencoded", Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 200){
                    let list = res.data.data.list;
                    that.admindata = list;
                   
                }else{
                    that.$message.error('状态:'+res.data.status + ' ,错误信息: '+res.data.message);
                }
            })
        },
        // 内容区渲染后执行 判断底层 赋 class
        renderContent(h, { node, data, store }) {
            let classname = ''
            // console.log(node);
            if (node.level == 3) {
                // classname = 'levelname'
            }
            // 由于项目中有二级菜单也有三级菜单，就要在此做出判断
       
            if (node.level == 2 && node.childNodes.length == 0) {
                //   classname = 'levelname'
            }
            return (
                <span class={classname}>
                    {node.label}
                </span>);
        },
        //样式渲染区域
        changeCss() {
            var levelName = document.getElementsByClassName('levelname') // levelname是上面的最底层节点的名字
            // console.log(levelName);
            for (var i = 0; i < levelName.length; i++) {
                // cssFloat 兼容 ie6-8  styleFloat 兼容ie9及标准浏览器
                levelName[i].parentNode.style.cssFloat = 'left' // 最底层的节点，包括多选框和名字都让他左浮动
                levelName[i].parentNode.style.styleFloat = 'left'
             
            }
        },
        //节点选中状态回调
        handleCheckChange(a,b,c){

        },
        arrayToTree(list, parentId = 0) {
            console.log(list);
            return list.filter(item => item.functionMenu.parentId === parentId).map(item => ({
                ...item,
                children: arrayToTree(list, item.functionMenu.id),
            }));
            //   console.log(arrayToTree(data));
        },
        setName(datas){ //遍历树  获取id数组
            for(var i in datas){
                if(datas[i].selected == 1){
                 this.expandedKeys.push(datas[i].id)
                }
               
                if(datas[i].children){
                   this.setName(datas[i].children);
                }
            }
        },

        // 调用
        getadpp(){
            let that  = this; 
            let data = new FormData();          
            this.$http({
                method: "get",
                url:API.PIP+'/miniprogram/saas/function/get.do?&openId='+that.$cookie.get('openId')+'&path=page/component/index&roleId=',
                data: data,
                headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                console.log(res.data.data);
                if(res.data.status == 301){
                    that.$router.push({
                        path: '/'
                    });
                    that.$message.warning('检测到登录过期,请重新登录');
                    return false;
                }
                if(res.data.status ==200){
                    let list = res.data.data;
                    let jsonArrTree = that.MapTojsonArray(list,[]);//树结构处理
                        that.data = jsonArrTree;
                        console.log(jsonArrTree);
                        let datas = [] //是一个树结构的数据
                        that.setName(jsonArrTree); //筛选默认选中的文件
                                    
                        // that.$nextTick(()=>{   //设置横向展示样式
                        //         that.changeCss();
                        // })
                }else{
                    that.$message.error('状态:'+res.data.status + ' ,错误信息: '+res.data.message);
                }

                 
            }).catch(function(res){
              console.log(res);
            }) ;  
        },
        MapTojsonArray(data, list) {
			for(let key in data) {
				let obj = {};
				obj.label = data[key].functionMenu.menuText;
				obj.id = data[key].functionMenu.id;
				obj.menuSymbol = data[key].functionMenu.menuSymbol;
				obj.menuText = data[key].functionMenu.menuText;
				obj.menuPath = data[key].functionMenu.menuPath;
				obj.menuLevel = data[key].functionMenu.menuLevel;
				obj.parentId = data[key].functionMenu.parentId;
				obj.selected = data[key].functionMenu.selected;
				obj.isFunction = data[key].functionMenu.isFunction;

				if(data[key].functionMenuTreeMap && Object.keys(data[key].functionMenuTreeMap).length > 0) {
					let temp = [];
					obj.children = this.MapTojsonArray(data[key].functionMenuTreeMap, temp);
				}
				list.push(obj)
			}
			return list;
		}

    },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>
<style>
    .mihuan-roleadd .el-form-item__label{
        line-height: 40px;
        position: relative;
        font-size: 14px !important ;
    }
    .el-form-item__content_trre{
        position: relative;
        margin-top: 40px;
        border: 1px solid #f2f2f2;
        padding: 15px;
        border-radius: 5px;
    }
    .levelname{
        width: 126px;
        float: left;
    }
    .mh-roleadd-top{
        font-size: 14px !important;
        height: 30px;
        border-bottom: 1px solid #eee;
        margin-bottom: 5px;
    }
    .mihuan-roleadd .el-form-item{
        margin-bottom: 6px;
    }
</style>