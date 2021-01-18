<template>
    <div class="mh-guibody">
        <el-form  @submit.native.prevent class="mh-manyguiform">
            <div style="color: #606266;">
                规格值 :
            </div>
            <el-form-item >
                <div  class="introCon" style="dis">
                <ul>
                    <li v-for="(tab, indexs) in specArr" :key="indexs">
                        <span>{{tab.name}}</span>
                        <span class="delete" @click="clearSpe(indexs)">×</span>
                    </li>
                    <li>
                          <el-select
                            v-model="specName"
                            
                            filterable
                            allow-create
                            default-first-option
                            @change="createdSpecifi"
                            placeholder="请选择规格名">
                            <el-option
                            v-for="item in guigezhilist"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select>





                        <!-- <el-select v-model="specName" placeholder="请选择规格名" @change="createdSpecifi">
                            <el-option
                            v-for="item in guigezhilist"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select> -->
                    </li>
                </ul>
                </div>
               
            </el-form-item>
            <div style="color: #606266;margin-bottom:10px">属性值 :</div>
            <el-form-item>
                <div class="introTitle" v-for="(tab, indexs) in specArr" :key="indexs">
                    <span class="fontWidth">{{tab.name}}</span>
                    <span class="delete clear" @click="clearSpe(indexs)">×</span>
                    <div class="introCon">
                        <ul>
                            <li v-for="(val, index) in tab.conName" :key="index">
                                <span>{{val}}</span>
                                <span class="delete" @click="clearSpecif(indexs, index)">×</span>
                            </li>
                            <li>
                                <el-select
                                    v-model="tab.addField"
                                    
                                    filterable
                                    allow-create
                                    default-first-option
                                    @change="clickSpecVal(indexs, tab.addField)"
                                    placeholder="请选择规格值">
                                    <el-option
                                        v-for="item in tab.shuXarr"
                                        :key="item.id"
                                        :label="item.text"
                                        :value="item.text">
                                    </el-option>
                                </el-select>`
                            <!-- <el-select v-model="tab.addField" placeholder="请选择规格值" @change="clickSpecVal(indexs, tab.addField)">
                              
                              <el-option
                                v-for="shuitem in tab.shuXarr"
                                :key="shuitem.id"
                                :label="shuitem.text"
                                :value="shuitem.text">
                              </el-option>

                            </el-select> -->
                            </li>
                        </ul>
                    </div>
                </div>
            </el-form-item>
           
            <el-form-item label="规格明细 :" v-if="tableData.length > 0">
                <el-table :data="tableData" border>
                    <!-- <el-table-column prop="name" label="名称" align="center"/> -->
                    <el-table-column v-for="(item, index) in specArr" :key="index" :label="item.name" align="center">
                        <template slot-scope="scope">
                            <span>{{ scope.row.specs[index] }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="price" label="单价" align="center">
                        <template slot-scope="scope">
                            <el-input onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" v-model="scope.row.price"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column prop="stock" label="库存" align="center">
                        <template slot-scope="scope">
                            <el-input onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" v-model="scope.row.stock"></el-input>
                        </template>
                    </el-table-column>
                 
                    <el-table-column prop="code" label="规格编码" align="center">
                        <template slot-scope="scope">
                            <el-input onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" v-model="scope.row.code"></el-input>
                        </template>
                    </el-table-column>

                     <el-table-column prop="gprice" label="供货价" align="center">
                        <template slot-scope="scope">
                            <el-input v-if="isSupplierGoods" disabled onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" v-model="scope.row.gprice"></el-input>
                            <el-input v-else onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" v-model="scope.row.gprice"></el-input>
                        </template>
                    </el-table-column>

                    <el-table-column prop="qprice" label="成本价" align="center">
                        <template slot-scope="scope">
                            <el-input onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" v-model="scope.row.qprice"></el-input>
                        </template>
                    </el-table-column>

                    <el-table-column prop="pPrice" label="分销价" align="center">
                        <template slot-scope="scope">
                            <el-input onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" v-model="scope.row.pPrice"></el-input>
                        </template>
                    </el-table-column>

                      <el-table-column prop="code" label="销量" align="center">
                        <template>
                         <el-input  placeholder="" v-model="xNum" :disabled="true"></el-input>
                        </template>
                    </el-table-column>

                    <el-table-column prop="code" label="会员价格" align="center">
                 
                        <template slot-scope="scope">
                             <el-button type="mini" round @click="skuspriceMethod(scope.$index)">添加价格</el-button>
                        </template>
                    </el-table-column>


                    <el-table-column v-if="mhqdaoflag" prop="code" label="渠道商价格" align="center" >
                        <template slot-scope="scope" >
                             <el-button type="mini" round @click="skuqudaopriceMehod(scope.$index)">添加价格</el-button>
                        </template>
                    </el-table-column>

                    <!-- <el-table-column prop="spu" label="spu" align="center">
                        <template slot-scope="scope">
                            <el-input onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" v-model="scope.row.spu"></el-input>
                        </template>
                    </el-table-column> -->

                    <el-table-column prop="img" label="图片" align="center">
                        <template slot-scope="scope">
                            
                            <div  v-if="scope.row.img != ''"  class="mh-sontab_div" >
                                <img  @click="imgBing(scope.row.img)"  :src="scope.row.img" alt="" srcset="" width="25" height="25" class="mh-test_img">
                                <span class="imgdelete" @click="delectimg(scope.$index)">×</span>
                            </div>
                            <el-button v-if="scope.row.img == ''" type="mini" round @click="getsonshuimg(scope.$index)"  v-model="scope.row.img">添加图片</el-button>
                            
                        </template>
                    </el-table-column>

                    <!-- <el-table-column prop="picture" label="图片" align="center"/> -->
                </el-table>
            </el-form-item>
             <el-form-item label="批量设置 :" style="margin-bottom: 20px" v-if="tableData.length > 0">
                <el-input  onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" size="medium" placeholder="请输入单价" v-model="setPrice" style="width: 210px;margin-right: 6px"
                          @keyup.native="proving(2)">
                    <template slot="prepend">单价</template>
                    <el-button slot="append" @click="clicksSet(2)">设置</el-button>
                </el-input>
                <el-input onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" size="medium" placeholder="请输入库存" v-model="setStock" style="width: 210px;margin-right: 6px"
                          @keyup.native="proving(1)">
                    <template slot="prepend">库存</template>
                    <el-button slot="append" @click="clicksSet(1)">设置</el-button>
                </el-input>
           
                <el-input onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" size="medium" placeholder="请输入编码" v-model="setCode" style="width: 210px;margin-right: 6px"
                          @keyup.native="proving(3)">
                    <template slot="prepend">编码</template>
                    <el-button slot="append" @click="clicksSet(3)">设置</el-button>
                </el-input>
                <el-input v-if="isSupplierGoods==false" onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" size="medium" placeholder="请输入供货价" v-model="setGprice" style="width: 210px;margin-right: 6px"
                          @keyup.native="proving(4)">
                    <template slot="prepend">供货价</template>
                    <el-button slot="append" @click="clicksSet(4)">设置</el-button>
                </el-input>

                <el-input onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" size="medium" placeholder="请输入成本价" v-model="setQprice" style="width: 210px;"
                          @keyup.native="proving(5)">
                    <template slot="prepend">成本价</template>
                    <el-button slot="append" @click="clicksSet(5)">设置</el-button>
                </el-input>
                <el-input onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" size="medium" placeholder="请输入成本价" v-model="setpPrice" style="width: 210px;"
                          @keyup.native="proving(6)">
                    <template slot="prepend">分销价</template>
                    <el-button slot="append" @click="clicksSet(6)">设置</el-button>
                </el-input>

            </el-form-item>


            <div class="mh-guige-style" @click="delectGuikeid">
                <i class="el-icon-error"></i>
            </div>
          

              <!-- <p>{{allData}}</p> 
             <p>{{specArr}}</p>
             <p>{{tableData}}</p>    -->
        </el-form>

        <el-dialog :visible.sync="dialogVisible" @close="closeguan" custom-class="mh-testdiay_loging">
                <img width="100%" style="margin-top:10px" :src="dialogImageUrl" alt="">
        </el-dialog>

               <!-- sku会员价格 -->
        <el-dialog title="会员价格" :visible.sync="vippricedialogFormVisible" width="35%">
                  <div class="mh-resoure-grounp mh-goodsfabutan mh-sontankaun"   v-for="(vipitem,vipitemindex) of skusvipdengjiid" :key="vipitemindex">
                      <span class="mh-resoure-grounp_onespan mh-goodsfabutan_span" >{{vipitem.name}}:</span>
                      <div class="block" style="margin:0 15px">
                            <el-input v-model="vipitem.skupriceindex" placeholder="" type="number" @input="change($event)"></el-input>                                       
                      </div>
                      <span class="mh-resoure-grounp_onespan">元</span>
                 </div>
                  <span slot="footer" class="dialog-footer">
                      <el-button @click="vippricedialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="okskuprice">确 定</el-button>
                  </span>
        </el-dialog>

        <el-dialog title="渠道商价格" :visible.sync="shpricedialogFormVisible" width="35%">
            
                   <div class="mh-resoure-grounp mh-goodsfabutan mh-sontankaun"  v-for="(item,index) in skuqudaoprice" :key="index" data-id="item.grade">      
                        <span class="mh-resoure-grounp_onespan mh-goodsfabutan_span"  >{{item.nickName}}</span>
                        <div class="block" style="margin:0 15px">
                            <el-input  v-model="item.thisqdaoskuid" placeholder="" type="number" @input="change($event)"></el-input>                     
                        </div>
                        <span class="mh-resoure-grounp_onespan">元</span>
                  </div>

             
                   <span slot="footer" class="dialog-footer">
                        <el-button @click="shpricedialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="okskuqudaoMethod">确 定</el-button>
                    </span>
        </el-dialog>

    
    </div>
</template>

<script>
   
import descartes from '../../utils/descartes';
import baseapi from '../../utils/api';
import {    
        zm_jsonToString,
        zm_formDataToString,
    } from "../../filters/zm_tools"

    const defaultTable = {
        specs: [],
        // name: "奶粉",
        stock: "",
        img:'',
        picture: "",
        // sku: "",
        // spu: "",
        code:'',
        price: "",
        gprice:'',
        qprice:'',
        pPrice:''
    };
   export default {
    props: {
        mhqdaoflag: {
            type: Boolean,
            default: true
        },
        isSupplierGoods: {
            type: Boolean,
            default: true
        },
        prospecArr: {
            type: Array,//属性类型
            value: "default"
        },
        protableData: {
            type: Array,//属性类型
            value: "default"
        },
        proallData:{
            type: Array,//属性类型
            value: "default"
        },
    },
    data() {
        return {
            vippricedialogFormVisible:false,
            dialogVisible:false,
            xNum:0,
            specName: "",
            specContent: {},
            changeTableData: [],
            specArr: this.prospecArr,
            tableData: this.protableData,
            allData: this.proallData,
            setStock:'',
            setQprice:'',
            setpPrice:'',
            setGprice:'',
            setCode:'',
            setPrice:'',
            setImg:'',
    
            pId:'',
            skupriceindex:0,
 
            //shuju 
            guigezhilist:[],
            shuXarr:[],
            shenheimg:'',
            dialogImageUrl:'',

            skusvipdengjiid:[], //会员属性
            thisskuid:'',

            shpricedialogFormVisible:false,//渠道
            thisqdaoskuid:0,
            service:{}
        };
    },
    created() {
      
    },
    mounted(){
        let service = this.$http.create({
            baseURL: 'http://api.mihuanshop.com', 
            timeout: 20000,                      
                headers: {
                "Content-Type": "multipart/form-data",
                "suserId": 	this.$cookie.get('userId'),
                "roleId" : 	this.$cookie.get('roleId'),     
                "adminId" : this.$cookie.get('adminId')	
            }
         });
        this.service = service;
        this.selectspeclifi();
        this.reqvipdengjilist();
        this.selectqudo();
        console.log('---isSupplierGoods= '+this.isSupplierGoods);
        
    },
     watch:{
         mhqdaoflag(val, oldVal){
             if(val){
                 this.mhqdaoflag = true;
             }else{
                this.mhqdaoflag = false;
             }
         },
         deep:true //true 深度监听
    },
    methods:{
        descartes,
        //修改图片
        change(){
            this.$forceUpdate()
        },
        delectimg(index){
            this.tableData[index].img = '';
        },
         closeguan(){
                this.dialogVisible = false;
            },
            imgBing(shenheimg){
                this.dialogImageUrl = shenheimg;
                this.dialogVisible = true;
            },
            //会员价格
            skuspriceMethod(index){
             
                this.$nextTick(() => {
                    if(this.tableData[index].priceMember != undefined || this.tableData[index].priceMember  != null){
                    let newarr = [];
                    this.tableData[index].priceMember.forEach((item)=>{
                            newarr.push(item);
                        })     
                        
                        this.skusvipdengjiid.forEach((sonitem,index)=>{
                            sonitem.skupriceindex = newarr[index].money/100;
                        })
                    }else{
                        this.skusvipdengjiid.forEach((sonitem,index)=>{
                            sonitem.skupriceindex ='';
                        })
                    }
              
                    this.thisskuid = index;
                    this.vippricedialogFormVisible  = true;
                    // this.$parent.vippricedialogFormVisible = true;         
                })
            },
            //渠道商
            skuqudaopriceMehod(index){
                this.$nextTick(() => {
                    if(this.tableData[index].chmoney != undefined || this.tableData[index].chmoney != null){
                    let newarr = [];
                    this.tableData[index].chmoney.forEach((item)=>{
                            newarr.push(item);
                        })     
                        
                        this.skuqudaoprice.forEach((sonitem,index)=>{
                            sonitem.thisqdaoskuid = newarr[index].money/100;
                        })
                    }else{
                        this.skuqudaoprice.forEach((sonitem,index)=>{
                            sonitem.thisqdaoskuid ='';
                        })
                    }
                    this.thisqdaoskuid = index;
                    this.shpricedialogFormVisible = true;         
                })
            },
            //获取图片
            getsonshuimg(index){
                this.$parent.$parent.$parent.suinde =index;  
                this.$parent.$parent.$parent.$refs.imgsrc.imgdialogFormVisible = true;
                this.$parent.$parent.$parent.$refs.imgsrc.pid = 2;
            },
         
            //属性值列表
            selectspeclifi(id){
                let data = new FormData();    
                data.append('propertyId',id);   
                this.http.post( baseapi.goodsshuixng,data,this.service).then(res=>{
                    this.guigezhilist  = res.data.list;
                })     
            },
            //属性值列表
            shuXingZhi(id){
                let that = this; 
                let data = new FormData();    
                data.append('propertyId',id);  
                
                 this.http.post( baseapi.goodsguige,data,this.service).then(res=>{
                    let newarr =  that.specArr;
                    newarr.forEach(function(item){
                        if(item.pId == id ){
                            item.shuXarr = res.data.list;
                        }
                    })
                    that.specArr = null;
                    that.specArr =  newarr
                })        
            },

            // 点击添加规格组
            createdSpecifi() {
                let that = this;
                let guigeid = '';
                

                if(typeof(this.specName) != 'string'){
                     this.shuXingZhi(this.specName);
                }
              
                // 自定义规格值  和共有规格值不能重复
                let thisFlog =   this.specArr.some((item)=>{
                    return item.pId == this.specName  ||   item.name == this.specName
                })

            if(!thisFlog){
                
                console.log(this.guigezhilist);
                console.log(that.specName);

  
                if( that.myIsNaN(that.specName)){
                    this.guigezhilist.forEach(function(item){
                        if(item.id == that.specName){
                            that.pId = item.id;
                            that.specName =  item.name;        
                        }

                    })  
                }else{
                    that.pId = null;
                    // that.specName = null;     
                }

                
                if (this.specName) {
                    const data = {
                        name: "",
                        pId: "",
                        conName: [],
                        addField: ''
                    };

                    console.log(data);

                    //处理自定义规格
                
                    if(that.specName.length == 1){
                        //处理number单位为数组 join 方法
                        that.specName =   new Array(that.specName).join(',');
                    }

                    this.specContent = Object.assign({}, data);
                    this.specContent.name = this.specName;
                    console.log(this.pId);
                    this.specContent.pId = this.pId;
                    this.specContent.conName = [];
                    this.specArr.push(this.specContent);
                    let obj = {};
                    this.specArr = this.specArr.reduce((cur, next) => {
                        obj[next.name] ? "" : (obj[next.name] = true && cur.push(next));
                        return cur;
                    }, []);
                    this.specName = "";
                    // this.$store.dispatch("getSpecArr", this.specArr);
                }
            }else{
                  that.$message.warning('该规格已存在');
            }
            
               
            },
            // 点击添加规格值
            clickSpecVal(indexs, name) {
                //自定义规格值名称
                if(typeof(name) == 'object'){
                    name =  name.join(',')
                }
              

                let that = this;
                this.specArr.forEach(function(item){
                    item.conName.forEach(function(sonitem){
                        if(sonitem == name) {
                            that.$message.warning('该属性值已存在');
                            return false
                        }
                    })
                });

 
                if (name) {
                    this.specArr[indexs].conName.push(name);
                    this.specArr[indexs].conName = [
                        ...new Set(this.specArr[indexs].conName)
                    ];
                    // console.log(this.specArr);
                    for(let val in this.specArr) {
                        // console.log(this.specArr[val]);
                        if(this.specArr[val].conName.length === 0) {
                            this.changeTableData[val] = ['']
                        } else {
                            this.changeTableData[val] = this.specArr[val].conName
                        }
                    }
                    this.changeDataTable(this.changeTableData, this.specArr);
                    console.log('添加规格值事件');
                    this.specArr[indexs].addField = "";
                }
            },
            // 删除规格组
            clearSpe(indexs) {
                this.specArr.splice(indexs, 1);
                this.changeTableData = [];
                for (const item of this.specArr) {
                    this.changeTableData.push(item.conName);
                }
                console.log('删除规格组事件');
                this.changeDataTable(this.changeTableData, this.specArr);
            },
            // 删除规格值
            clearSpecif(indexs, index) {
                this.specArr[indexs].conName.splice(index, 1);
                this.changeTableData[indexs] = this.specArr[indexs].conName;
                for (const item in this.changeTableData) {
                    if (this.changeTableData[item].length === 0) {
                        this.changeTableData.splice(item, 1);
                    }
                }
                console.log('删除规格值事件');
                this.changeDataTable(this.changeTableData, this.specArr);
            },
            // 整理数据
            changeDataTable(m, n) {
                console.log(m);
                console.log(n); 
                this.tableData = [];
                // this.tableData.splice(0,this.tableData.length);
                this.allData = descartes(m);
                if (n.length > 1) {
                    for (const i in this.allData) {
                        const dataArr = Object.assign({}, defaultTable);
                        if (typeof this.allData[i] === "string") {
                            dataArr.specs[i] = this.allData[i];
                        } else {
                            dataArr.specs = this.allData[i];
                        }
                        this.tableData.push(dataArr);
                    }
                } else {
                    
                    for (const i in this.allData) {
                        const dataArr = Object.assign({}, defaultTable);
                        dataArr.specs = [this.allData[i]];
                        // console.log(dataArr);
                        this.tableData.push(dataArr);
                    }
                } 
                console.log(this.tableData);    
                //  this.tableData = this.tableData;
                // allData
                // this.allData = m;
                // this.tableData = this.tableData;
            },
            clicksSet(name) {
                console.log(name);
                for (const item of this.tableData) {
                    if (name === 1 && this.setStock != '') {
                        item.stock = this.setStock;
                    } else if (name === 2 && this.setPrice != '') {
                        item.price = this.setPrice;
                    } else if (name === 3 && this.setCode != ''){
                        item.code = this.setCode;
                    }else if (name === 4 && this.setGprice != ''){
                        item.gprice = this.setGprice;
                    }else if (name === 5 && this.setQprice != ''){
                        item.qprice = this.setQprice;
                    }
                    else if (name === 6 && this.setpPrice != ''){
                        item.pPrice = this.setpPrice;
                    }
                    
                    // else if (name === 6 && this.setImg != ''){
                    //     item.img = this.setImg;
                    // }

                    // 
                }
            },
            proving(num) {
                if (num === 1) {
                    this.setStock = this.setStock.replace(/[^\.\d]/g, "");
                    // this.setStock = this.setStock.replace(".", "");
                } else if (num === 2) {
                    this.setPrice = this.setPrice.replace(/[^\.\d]/g, "");
                    // this.setPrice = this.setPrice.replace(".", "");
                } else if (num === 3) {
                    this.setCode = this.setCode.replace(/[^\.\d]/g, "");
                    // this.setCode = this.setCode.replace(".", "");
                }  else if (num === 4) {
                    this.setGprice = this.setGprice.replace(/[^\.\d]/g, "");
                    // this.setGprice = this.setGprice.replace(".", "");
                }  else if (num === 5) {
                    this.setQprice = this.setQprice.replace(/[^\.\d]/g, "");
                    // this.setQprice = this.setQprice.replace(".", "");
                }  else if (num === 6) {
                    this.setImg= this.setImg.replace(/[^\.\d]/g, "");
                    // this.setImg = this.setImg.replace(".", "");
                }
            },
            reqvipdengjilist(){  //会员价确定事件
                let data = new FormData();
                data.append('page',1);
                data.append('limit',10);    
                this.http.post( baseapi.vipdengji,data,this.service).then(res=>{
                    this.skusvipdengjiid = res.data.list;
                })            
            },
          
            okskuprice(){
                let newArr = [];
                this.skusvipdengjiid.forEach(function(item,index){    
                    newArr.push({"gradeid":item.id,"money":parseFloat(item.skupriceindex*100)},)
                });
                    this.$set( this.tableData[this.thisskuid],'priceMember',newArr);
                    this.vippricedialogFormVisible= false;
                },

             //渠道商确认事件
            okskuqudaoMethod(){
                let newArr = [];
                this.skuqudaoprice.forEach(function(item,index){    
                    newArr.push({"gradeid":item.grade,"money":parseFloat(item.thisqdaoskuid*100)},)
                });
                    this.$set( this.tableData[this.thisqdaoskuid],'chmoney',newArr);
                    this.shpricedialogFormVisible= false;
            },
            //查询渠道商数据
            selectqudo(){
                let data = new FormData();
                this.https.post( baseapi.qudaogoods,data,this.service).then(res=>{
                    this.skuqudaoprice = res.data.list;
                }) 
            },
            myIsNaN(value) {
                return typeof value === 'number' && !isNaN(value);
            },
            delectGuikeid(){
              

                this.$parent.$parent.$parent.xuanzeshuxi   = false ;//价格

                this.$parent.$parent.$parent.addgoodsisshow = true; 
             
                this.$parent.$parent.$parent.isshowgglist   = false ;

                this.$parent.$parent.$parent.isgoodsdengji  = true;//会员价格

                // this.specArr = [];
                // this.tableData = [];
                // this.allData = [];
              
                
                //渠道商价格
                if(this.$parent.$parent.$parent.obj.flogthree == true){
                     this.$parent.$parent.$parent.jinebiliefanyong =false;
                }else{
                    this.$parent.$parent.$parent.jinebiliefanyong =true;
                }

                
            } 
    },
    components:{
     
    }
}
</script>
<style scoped>
    html,
    body,
    div,
    span,
    p,
    i,
    ul,
    li {
        margin: 0;
        padding: 0;
    }

    .el-row {
        margin-bottom: 20px;
    }

    .el-col {
        border-radius: 4px;
    }

    .introTitle {
        border: 1px solid rgb(238, 238, 238);
        padding-left: 10px;
        padding-top: 10px;
        line-height: 30px;
        margin-bottom: 10px;
    }

    .fontWidth {
        font-weight: 500;
        font-size: 16px;
        display: inline-block;
        padding: 0 10px;
        vertical-align: middle;
    }

    .introTitle i {
        cursor: pointer;
    }

    .introCon ul {
        list-style: none;
        padding: 5px 0 10px 0;
    }

    .introCon ul li {
        display: inline-block;
        margin: 5px 10px;
        background-color: rgb(238, 238, 238);
        line-height: 30px;
    }

    .introCon ul li:last-child {
        background-color: #ffffff;
        width: 300px;
    }

    .introCon ul li span:nth-child(1) {
        display: inline-block;
        padding: 0 10px;
        text-align: center;
    }

    .introCon ul li span:nth-child(2) {
        display: inline-block;
        width: 30px;
        background-color: rgb(211, 207, 208);
        text-align: center;
    }

    .delete {
        color: #ffffff;
        cursor: pointer;
    }
    .imgdelete{
        background-color: rgb(238, 238, 238);
        display: inline-block;
        width: 15px;
        line-height: 15px;
        height: 15px;
        vertical-align: middle;
        border-radius: 50%;
        text-align: center;
        position: absolute;
        top: 2px;
        cursor: pointer;
    }
    .mh-sontab_div{
        position: relative;
    }

    .clear {
        background-color: rgb(238, 238, 238);
        display: inline-block;
        width: 15px;
        line-height: 15px;
        height: 15px;
        vertical-align: middle;
        border-radius: 50%;
        text-align: center;
    }

    .mh-guibody{
        border: 1px dotted #eee;
        box-sizing: border-box;
        padding: 20px 20px 0;
        position: relative;
    }
   .el-select-dropdown__item{
           padding: 0 20px;
    }
    .mh-sontankaun{
        margin-bottom: 20px !important;
    }
    .mh-goodsfabutan_span{
        text-align: right;
    }
    .mh-test_img{
        cursor: pointer;
        position: relative;
         bottom: -7px;
    }
 
</style>
