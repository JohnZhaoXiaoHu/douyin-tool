<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <membersecnavbar></membersecnavbar>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                 <div class="goods-card_body">
                     <!--  -->
                    <div style="margin-bottom:20px;padding-bottom: 12px;border-bottom: 1px dashed #eee;">
                         <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/memberlist' }">会员列表</el-breadcrumb-item>
                            <el-breadcrumb-item>设置上级</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div style="background-color: #f4f4f5;color: #909399;padding: 8px 16px;border-radius:10px;margin-bottom:18px">
                        <div style="color: #909399;font-weight:700;margin-bottom:8px">昵称/手机号:</div>
                        <div>{{ mhWxname }} -- {{mhPhone}}</div>
                    </div>
                    <!--选项卡组件-->
                    <div class="shuaixuan vip-alllist vip-xxxx">
                        

                        <div class="m-search-box el-row el-row-my-div">
                            <div class="sx-input">
                                <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员编号：</label>
                                <el-input v-model="vipbianhao" placeholder="" ></el-input>
                            </div>

                            <div>
                                <label class="el-form-item__label" style="width: 130px;">手机号码：</label>
                                <el-input v-model="vipphone" placeholder=""></el-input>
                            </div>

                            <div>
                                <label class="el-form-item__label" style="width: 130px;">微信昵称：</label>
                                <el-input v-model="wxname" placeholder=""></el-input>
                            </div>
                        </div>
                        <!--  一行   -->
                        <div class="m-search-box el-row el-row-my-div">
                            <div>
                                <label class="el-form-item__label" style="width: 190px;min-width: 128px">购买次数：</label>
                                <el-select v-model="shopvalue1" placeholder="请选择购买次数">
                                    <el-option
                                            v-for="item in shopnum"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div>
                                <label class="el-form-item__label" style="width: 130px;">会员等级：</label>
                                <el-select v-model="shopvalue2" placeholder="请选择会员等级">
                                    <el-option
                                            v-for="item in vipdengji "
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <div>
                                <label class="el-form-item__label" style="width: 130px;">地域：</label>
                                <el-select v-model="shopvalue3" placeholder="请选择地域">
                                     <el-option
                                            v-for="item in vipaddress"
                                            :key="item[0]"
                                            :label="item[1]"
                                            :value="item[0]">
                                    </el-option>
                                </el-select>
                            </div>

                        </div>
                        <!--                       两行-->
                        <!--  一行   -->
                        <div class="m-search-box el-row el-row-my-div" v-if="false">
                            <div>
                                <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员状态：</label>
                                <el-select v-model="shopvalue4" placeholder="请选择会员状态">
                                    <el-option
                                            v-for="item in vipstatus"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div>
                                <label class="el-form-item__label" style="width: 130px;">推客等级：</label>
                                <el-select v-model="shopvalue5" placeholder="请选择推客等级">
                                    <el-option
                                            v-for="item in tuikedengji"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <div>
                                <label class="el-form-item__label" style="width: 130px;">渠道商等级：</label>
                                <el-select v-model="shopvalue6" placeholder="请选择渠道商等级">
                                    <el-option
                                            v-for="item in qudaoshang"
                                            :key="item.grade"
                                            :label="item.nickName"
                                            :value="item.grade">
                                    </el-option>
                                </el-select>
                            </div>

                        </div>
                        <!--                       两行-->
                        <div class="m-search-box el-row el-row-my-div" v-if="false">
                            <div>
                                <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员来源：</label>
                                <el-select v-model="shopvalue7" placeholder="请选择会员来源">
                                    <el-option
                                            v-for="item in nulldata"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="vip-item-list_time">
                                <label class="el-form-item__label" style="width: 130px;">创建时间：</label>
                                <el-date-picker 
                                        v-model="shopvalue8"
                                         value-format="timestamp"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        style="width: 100%"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </div>


                        </div>



                        <div class="goods-sx-btn">
                            <button  type="button" class="el-button el-button--primary el-button--small"><!----><!----><span @click="vipshuaixuan">筛选</span></button>
                            <button  type="button" class="el-button el-button--text"><!----><!----><span @click="cleartiaojian">清空筛选条件</span></button>
                        </div>

                    </div>


                    <!-- table-->
                    <div class="goods_table-all">
                        <el-table
                                ref="multipleTable"
                                :data="tableData"
                                tooltip-effect="dark"
                                border
                                style="width: 100%"
                                :default-sort = "{prop: 'date', order: 'descending'}"
                                @selection-change="handleSelectionChange">
                            <el-table-column
                                    type="selection"
                                    >
                            </el-table-column>
                            <!--<el-table-column-->
                                    <!--prop="goodsid"-->
                                    <!--label="商品ID"-->
                                    <!--sortable-->
                                    <!--width="90">-->
                                <!--&lt;!&ndash;                            <template slot-scope="scope">{{ scope.row.date }}</template>&ndash;&gt;-->
                            <!--</el-table-column>-->
                            <el-table-column
                                    prop="goods"
                                    label="会员"
                                    width="200"
                                    >
                                <!-- <template slot-scope="scope">
                                      <div class="goods-table">
                                          <img :src=" scope.row.userHeadportrait == null ?scope.row.wxHeadportrait:scope.row.userHeadportrait" onerror="javascript:this.src='https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/websyt/index/default-boy.png';" alt=""  width="60" height="60" style="border-radius:10px;margin-right: 6px;"><ul class="good_table-ul"><li style="width:100%">
                                              </li><li style="display:flex;width:100%"><span>昵称:</span><span style="width:55%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ scope.row.userName == null ? scope.row.wxNickName : scope.row.userName}}</span></li><li><span>ID:</span><span>{{scope.row.userId}}</span></li><li style="display:flex"><span>上级:</span><span style="width: 70%;text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">{{scope.row.puserName}}</span>
                                          </li>
                                          </ul></div>
                                </template> -->
                                 <template slot-scope="scope">
                                    <div class="goods-table">
                                        <img :src=" scope.row.userHeadportrait == null ?scope.row.wxHeadportrait:scope.row.userHeadportrait" onerror="javascript:this.src='https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/websyt/index/default-boy.png';" alt=""  width="60" height="60" style="border-radius:10px;margin-right: 6px;">
                                        <ul class="good_table-ul">
                                            <li style="display:flex;width: 125px;" v-if="scope.row.wxNickName != null || scope.row.userName != null"><span class="memberlist-table">昵称:</span>
                                            <span style="width:55%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1">{{ scope.row.userName == null ? scope.row.wxNickName : scope.row.userName}}</span></li>
                                            <li><span>ID:</span><span style="min-width:70px">{{scope.row.userId}}</span></li>
                                            <li style="display:flex" v-if="scope.row.puserName != undefined || scope.row.puserName != null"><span>上级:</span><span style="width: 70%;text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">{{scope.row.puserName}}</span></li>
                                            <li style="display:flex" v-if="scope.row.puserId != undefined || scope.row.puserId != null"><span style="width: 55px !important;">上级ID:</span><span style="width: 70%;text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">{{scope.row.puserId}}</span></li>
                                        </ul>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="userPhone"
                                    label="手机号"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="balance"
                                    label="余额"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="userCreateTime"
                                    label="注册时间"
                                     width="150"
                                    :formatter="dateFormat"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="orderNum"
                                    label="购买次数"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="gradeName"
                                    label="会员等级"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="integral"
                                    label="积分"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="handle"
                                    label="操作"
                                  >
                                show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div>
                                      
                                         <el-button type="text" size="small" @click="setqudaoshang(scope.row.userId)">设为上级</el-button>
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                  
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <!-- 弹窗 -->
                <el-dialog title="设置等级" :visible.sync="dialogFormVisible">
                  <div class="mh-resoure-grounp" style="display:flex;">
                        <span class="mh-resoure-grounp_onespan" style="width:120px;margin-bottom:22px;display:inline-block">会员名:</span>
                        <div class="block" >
                             <span>{{tanvipName}}</span>
                        </div>
                  </div>

                  <div class="mh-resoure-grounp">
                      <span class="mh-resoure-grounp_onespan" style="width:99px;display:inline-block">会员等级:</span>
                        <el-select v-model="vipdengjivalue" placeholder="请选择">
                                <el-option
                                v-for="item in vipdengji"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                                </el-option>
                        </el-select>
                      
                  </div>
                   <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="setvipdengji">确 定</el-button>
                        </span>
                </el-dialog>    








                    <!--  -->

                    <div class="el-row goods_list_dibu">
                        <div class="goods_list_dibu-onediv">
                            <!-- <button type="button" class="el-button el-button--default el-button--small"><span>全选</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>取消全选</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>删除</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>改分类</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>发放优惠卷</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>设置上级</span></button> -->
                        </div>
                        <div class="goods_list_dibu-twodiv">
                            <!-- small sizes-->
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[100, 200, 300, 400]"
                                    :page-size="20"
                                    layout="total, prev, pager, next, jumper"
                                    :total="totalCount">
                            </el-pagination>
                        </div>
                    </div>
                    <!-- table over-->


                    <!--              底部组件  -->
                    <div  class="goods-footer"><p  class="copyright">Copyright 蜜獾出品</p></div>
                    <!--              底部组件      -->
                    <div>
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
import navbar from '../navbar';
import sidebar from '../sidebar';
import membersecnavbar from './membersecnavbar';
import baseapi from '../../utils/api';

export default {
      data() {
        return {
            thispageindex:1,
            totalCount:0,    
            vipdengjivalue:'', //会员等级id
            shopvalue1:'',
            shopvalue2:'',
            shopvalue3:'',
            shopvalue4:'',
            shopvalue5:'',
            shopvalue6:'',
            shopvalue7:'',
            shopvalue8:'',

            //筛选数据
            vipbianhao:'', // 会员编号
            vipphone:'',   //会员手机号
            wxname:'',     //微信昵称
            shopnum:[   // 购买次数
            {
                value: '1',
                label: '全部',  
            },{
                value: '2',
                label: '1+',  
            },{
                value: '3',
                label: '2+',  
            }
            ],
            vipaddress:[ 
            {
                value: '1',
                label: '上海',  
            }],

            vipstatus:[
                {
                 value: '1',
                 label: '正常', 
                },{
                 value: '2',
                 label: '已关注', 
                }              
            ],
            nulldata:[
            ],
            qudaoshang:[],

            dialogVisible: false,
            dialogFormVisible:false,  
            visible: false,
            activeName: 'first',
            options: [{
                value: '1',
                label: '设为渠道商'
            }, {
                value: '2',
                label: '设为推客'
            }],

             vipdengji:[{
                value: '1',
                label: '一级分类'
            } ],
            tuikedengji:[{
                value: '1',
                label: '一级分类'
            } ],
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            tableData: [{
                goodsid: 1,
                goods: "http://thirdwx.qlogo.cn/mmopen/PiajxSqBRaELWDEIO8X8iaiaX2lrtGsN7u8fmfuxzMS1ES8DU8EbaWN9ibzccr93I0hhiatYy6ndGkVKslMPgWoQ22w/132",
                pv: '200',
                stock:'200',
                total:2000,
                creatime:'2016-05-02',
                person:'蒋金泽',
                sort:1,
                handle:'ds '
            }],
            multipleSelection: [],
            dialogFormFUgou:false,
            shop_lisk_input:'http://47.tecqm.com/#/pages/goods/detail/ShopDetail?secondId=5733',
            radio: '1', // 假的单选框
            currentPage4: 1, //分页
            //设置会员等级信息
            tanvipName:'',
            setdengjiUserId:'',
            bsetuserId:0,
            mhWxname:'',
            mhPhone:''
        };
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.getdata(1);
            } else {
                next('/login');
            }
		})
	},
    mounted(){
        let mhPhone = '';
        this.selectvipdenhgji(); //推客等级
        this.getviplist();
        this.selectqudo();
        this.reqaddress(); // 请求地区
        this.bsetuserId = this.$route.params.id;
        this.mhWxname =  sessionStorage.getItem('wxname');

        mhPhone =  sessionStorage.getItem('phone');
        mhPhone == null || mhPhone == undefined || mhPhone =='' ? '' : mhPhone;
    },

    methods: {
        reqaddress(){
            let that = this;
            let data = new FormData();
            this.$http({
                method: "post",
                url: baseapi.reqaddress,
                data: data
            })
            .then(function(res){
              if(res.data.status ==200){
                 that.vipaddress = res.data.list;
              }
              if(res.data.status != 200){
                  that.$message.error(res.data.message)
              }   
            })
        },
         dateFormat(row, column, cellValue, index){
                   const daterc = row[column.property];
                   if(daterc!=null){
                   const dateMat= new Date(daterc.time);
                    const year = dateMat.getFullYear();
                    const month = dateMat.getMonth() + 1;
                    const day = dateMat.getDate();
                    const hh = dateMat.getHours();
                    const mm = dateMat.getMinutes();
                    const ss = dateMat.getSeconds();
                    const timeFormat= this.getzf(year) + "-" + this.getzf(month)  + "-" + this.getzf(day) + " " + this.getzf(hh)  + ":" + this.getzf(mm) + ":" + this.getzf(ss);
                    return timeFormat;
                 }          
            },
        //补0操作  
        getzf(num){  
            if(parseInt(num) < 10){  
                num = '0'+num;  
            }  
            return num;  
        },
      
        //会员等级列表
         getviplist(){
            let that = this; 
            let data = new FormData();
            data.append('page',1);
            data.append('limit',20);              
            this.$http({
                method: "post",
                url: baseapi.vipdengji,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') }
            })
            .then(function(res){
                 console.log(res);
                 that.vipdengji = res.data.list;  
            });     
        },


        vipshuaixuan(){
            let that = this; 
            let data = new FormData();
            this.vipbianhao == '' ? '' :  data.append('sid',this.vipbianhao); 
            this.vipphone == '' ? '' :  data.append('sphone',this.vipphone); 
            this.wxname == '' ? '' :  data.append('swxnickname',this.wxname); 
            this.shopvalue1 == '' ? '' :  data.append('naswxnicknameme',this.shopvalue1); //购买次数
            this.shopvalue2 == '' ? '' :  data.append('sgrade',this.shopvalue2);   //等级
            this.shopvalue3 == '' ? '' :  data.append('sregionid',this.shopvalue3); //地域
            this.shopvalue4 == '' ? '' :  data.append('sstatus',this.shopvalue4); //状态商

            if(this.shopvalue8 != ''){   
               data.append('screatetimestart', this.shopvalue8[0]);
               data.append('screatetimeend', this.shopvalue8[1]);
            }
            // this.shopvalue8 == '' ? '' :  data.append('name',this.vipbianhao);     

              
            data.append('page',1);
            data.append('limit',20);              
            this.$http({
                method: "post",
                url: baseapi.vipList,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') }
            })
            .then(function(res){
                console.log(res);
                if(res.data.status ==200){
                    that.$message.success('筛选成功');
                    if( res.data.list.length == 0){
                        that.totalCount = 0;
                        that.tableData = [];
                        return false;
                    }
                    that.totalCount = res.data.totalCount;
                    let newArr = res.data.list;    
                    newArr.forEach(function(item,index){
                        item.balance = parseFloat(item.balance/100);
                        item.integral = 0;
                    })
                    //设置佣金             
                    that.tableData = newArr;  
                }else{
                      that.$message(res.data.message);
                }
            
            });  


        },

        cleartiaojian(){
            this.vipbianhao = '';
            this.vipphone = '';
            this.wxname = ''  ;
            this.shopvalue1 = '';
            this.shopvalue2 = '';
            this.shopvalue3 = '';
            this.shopvalue4 = '';
            this.shopvalue5 = '';
            this.shopvalue6 = '';
            this.shopvalue7 = '';
            this.shopvalue8 = '';
            this.$message.success('已清空筛选条件');
        },

        tanchudengji(parems,userId){
            this.dialogFormVisible = true;
            this.tanvipName = parems;
            this.setdengjiUserId = userId;
        },
        setshangji(papams){
            alert(papams);

        },
        //设置会员等级
         setvipdengji(){
             this.dialogFormVisible = false
             let that = this;
             let data = new FormData();
                data.append("grade",this.vipdengjivalue ); 
                this.$http({
                    method: "post",
                    url: baseapi.setzhevipdengji,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') ,"userId":that.setdengjiUserId}
                })
                .then(function(res){
                   console.log( res);
                   if(res.data.status == 200){
                       that.$message.success('设置成功');
                       that.getdata(1);
                   }else{
                       that.$message('设置失败');
                   }
                //    that.tuikedengji.push(res.data.bsCms1Name,res.data.bsCms2Name,res.data.bsCms3Name);
                //    that.options = metrodates.map((date,i) => ({date, data: figures[i]}));
                //console.log(that.vipdengji);
                }); 
         } ,  
     //查询会员等级
         selectvipdenhgji(){
               let that = this;
               let data = new FormData();
              data.append("status","1" );  //1启用  0  警用
              data.append("page","1" );
              data.append("limit","20");
                this.$http({
                    method: "post",
                    url: baseapi.tuikedengji,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') ,"userId": that.$cookie.get('userId')}
                })
                .then(function(res){
                  that.tuikedengji = res.data.list;
                //    that.tuikedengji.push(res.data.bsCms1Name,res.data.bsCms2Name,res.data.bsCms3Name);
                //    that.options = metrodates.map((date,i) => ({date, data: figures[i]}));
                //console.log(that.vipdengji);
                }); 
         } ,   
        //查询渠道商 
        selectqudo(){
               let that = this;
               let data = new FormData();
        
                this.$http({
                    method: "post",
                    url: baseapi.qudaogoods,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') ,"userId": that.$cookie.get('userId')}
                })
                .then(function(res){
                  that.qudaoshang = res.data.list;
                }); 
         } ,  



      
      
      
      
      
      //设置渠道商
      //userId  里面取得
      // userId  设置上级的id
        setqudaoshang(param){
        let that = this; 
        let data = new FormData();  
            data.append('tid',param);        
            this.$http({
                method: "post",
                url: baseapi.setUpren,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') ,"userId":that.bsetuserId}
            })
            .then(function(res){
                console.log(res);
                    if(res.data.status  == 200){
                            that.$message.success('操作成功');
                            that.$router.push({
                            path: `/memberlist`
                        })
                            that.getdata(that.thispageindex);
                        }else{
                            that.$message(res.data.message);
                        }
            }); 
                //点击确定的操作(调用接口)           
        },
        getdata(pageindex){
        let that = this; 
            let data = new FormData();
            data.append('page',pageindex);
            data.append('limit',20);              
            this.$http({
                method: "post",
                url: baseapi.vipList,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') }
            })
            .then(function(res){
                console.log(res);
                that.totalCount = res.data.totalCount;
                let newArr = res.data.list;    
                newArr.forEach(function(item,index){
                    item.balance = parseFloat(item.balance/100);
                    item.integral = 0;
                })
                //设置佣金             
                that.tableData = newArr; 

            });     
       },












            handleClick(tab, event) {
                console.log(tab, event);
            },
            //表格
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.getdata(val);
                this.thispageindex = val;
                console.log(`当前页: ${val}`);
            }
        },
    components:{
        navbar,sidebar,membersecnavbar    
    }
}
</script>

<style>
.goods_list_dibu-twodiv .el-input__inner{
    height: 28px!important;
}
.vip-alllist .el-input__inner{
    height: 32px;
    line-height: 32px;
}

.vip-alllist .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;

}
.vip-alllist .el-icon-arrow-down {
    font-size: 12px;
}
 .el-dropdown{
     font-size: 12px;
     color: #409EFF;
     cursor: pointer;
     width: 50px;
     height: 32px;
     margin-left: 10px;
}
 .el-dropdown-link{
     font-size: 12px;
}

.vip-item-list_time .el-input__icon{
    display: flex;
    align-items: center;
}

.vip-item-list_time .el-range-separator{
    display: flex;
    align-items: center;
}


.vip-xxxx .el-input__icon {
    line-height: 32px;
}
</style>