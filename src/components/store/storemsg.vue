<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <storesecnavbar></storesecnavbar>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
               <div class="goods-card_body">
                    <!--店铺信息组件-->
                    <div class="mh-storemsg-main">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="店铺信息" name="first">
                                <div class="mh-storemsg-bodyfirst">
                                    <dl>
                                        <dt>店铺名称:</dt>
                                        <dd>平台版 + 小程序</dd>
                                    </dl>

                                    <dl>
                                        <dt>联系人:</dt>
                                        <dd>王</dd>
                                    </dl>
                                     <dl>
                                        <dt>联系电话:</dt>
                                        <dd>138888888888</dd>
                                    </dl>
                                    <dl>
                                        <dt>店铺logo:</dt>
                                        <dd class="mh-storemsg-bodyfirst-img">
                                            <img :src="mhqrcode" alt="" srcset="" >
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>店铺简介:</dt>
                                        <dd>
                                            蜜獾是一家公司以微信开发以及微信营销培训为主的科技型技术公司，作为一家高水平实力派移动应用系统提供商，秉承以“技术为本，服务为先，运营辅助”为核心，为全国中心企业快速阅读打通移动互联网销售渠道，以SAAS云平台为主要服务模式的运营理念，专注于电商软件及工具的研发与创新的全渠道生态服务于全球用户！
                                        </dd>
                                    </dl>
                                     <!-- <el-button type="primary" size="small">编辑</el-button> -->
                                </div>   

                            </el-tab-pane>
                            <el-tab-pane  label="退货/维权设置" name="second">
                                   <div class="mh-storemsg-bodytwo">
                                       <dl>
                                           <dt>售后维权客服电话</dt>
                                           <dd>136</dd>
                                       </dl>  
                                       <div>手机号将用于接收买家维权咨询，维权通知提醒。</div>
                                    
                                      <dl>
                                           <dt>座机</dt>
                                           <dd>123</dd>
                                       </dl>
                                       <div>优先展示座机号码</div>
                                       <div class="mh-storemsgtwo-div">
                                           <el-checkbox v-model="checked">在订单详情中展示，买家可通过“拨打电话”直接联系我们（推荐替换）</el-checkbox>
                                       </div>
                                        <div>
                                            <!-- <el-button type="primary" size="small">编辑退货/维权信息</el-button> -->
                                        </div>
                                   </div>
                            </el-tab-pane>
                            <el-tab-pane  label="商家地址库" name="third">
                                <div class="mh-storemsg-third">
                                    <div class="store-header-zidingyi">      
                                        <el-button type="primary" size="small">新增地址</el-button>
                                    </div>


                                    <div class="store-table">
                                        <el-table
                                                :data="tableData"
                                                stripe
                                                style="width: 100%">
                                            <el-table-column
                                                    prop="date"
                                                    label="联络人"
                                                >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="name"
                                                    label="联系方式(电话/座机)"
                                                >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="address"
                                                    label="地址"
                                                >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="handle"
                                                    label="操作"
                                                >
                                                <template :slot-scope="scope">
                                                    <div>
                                                        <button type="button" class="el-button el-button--default el-button--mini"><span>编辑</span></button>
                                                        <button type="button" class="el-button el-button--danger el-button--mini"><span>删除</span></button>
                                                    </div>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </div>
                                    <div class="store_page">
                                        <!-- small sizes-->
                                        <el-pagination
                                                @size-change="handleSizeChange"
                                                @current-change="handleCurrentChange"
                                                :current-page="currentPage4"
                                                :page-sizes="[100, 200, 300, 400]"
                                                :page-size="100"
                                                layout="total, prev, pager, next, jumper"
                                                :total="0">
                                        </el-pagination>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane   label="在线客服" name="fourth">
                                <div>
                                     <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>QQ客服</h3>
                                            <p>为了更好的服务体验，请认真填写相关信息</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="value1"></el-switch>
                                        </div>
                                    </div>
                                    <div class="mh-storemsg-fourpa">
                                        <dl class="mh-storemsg-four">
                                            <dt>  
                                                 <span>QQ:</span>
                                                 <div>
                                                      <el-input v-model="storemsgvalue" placeholder="请输入QQ客服号"></el-input>
                                                 </div>
                                            </dt>
                                            <dd>
                                              
                                                为了更好的服务体验，请认真填写相关信息
                                            </dd>
                                        </dl>
                                       <div class="mh-storemsg-four-bottom">     <el-button type="primary" size="small">保存</el-button></div>
                                    </div>

                                </div>
                            </el-tab-pane>
                            <el-tab-pane  label="系统设置" name="five">
                                <div>
                                    <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>强制绑定手机号</h3>
                                            <p>启用后，进入会员中心将提示绑定手机号和密码。</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="storemsgset1"></el-switch>
                                        </div>
                                    </div>

                                    <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>短信验证</h3>
                                            <p>启用后，进入会员中心提示绑定手机号时需要获取短信验证码验证手机号。</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="storemsgset2"></el-switch>
                                        </div>
                                    </div>

                                    <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>替换老账号</h3>
                                            <p>启用时，需同步开启强制绑定手机号+短信验证功能。启用后用户首次绑定手机号时会同步原先手机号对应即绑定成功后，原先的会员</p>
                                            <p>openid，会员数据同步到新账号下。该功能主要用于以下情况：</p>
                                            <p>1，商家更换公众号后，仍需同步会员原先的数据； 2，用户原先微信不能继续使用，更换微信后需要同步回原先数据。</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="storemsgset3"></el-switch>
                                        </div>
                                    </div>

                                    <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>底部文字链接</h3>
                                            <p>关闭后，将不显示底部文字链接。</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="storemsgset4"></el-switch>
                                        </div>
                                    </div>

                                    <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>推荐下单后绑定上下级关系</h3>
                                            <p>默认关闭状态，共享永久绑定上下级关系，第一次打开商城打开谁的共享链接就是谁的下级。</p>
                                            <p>启用后，分享临时锁定推荐关系，下单付款后永久锁定推荐关系。</p>
                                            <p>用户第一次下单前如有多人分享推荐，直属上级显示第一个分享人，但下单支付后就会永久变成最新的推荐人。</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="storemsgset5"></el-switch>
                                        </div>
                                    </div>

                                    <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>是否必须填写买家留言</h3>
                                            <p>开启后，购物时必须填写买家留言</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="storemsgset6"></el-switch>
                                        </div>
                                    </div>

                                    <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>商家最新订单提示</h3>
                                            <p>开启后，出现新的订单后会有语音提示</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="storemsgset7"></el-switch>
                                        </div>
                                    </div>

                                    <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>最近下单提示</h3>
                                            <p>开启后，访问店铺会看到会员最近下单的信息</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="storemsgset8"></el-switch>
                                        </div>
                                    </div>

                                    <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>过滤佣金为0的订单</h3>
                                            <p>开启后，推客，渠道商中心团队订单会过滤佣金为0的订单</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="storemsgset9"></el-switch>
                                        </div>
                                    </div>

                                    <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>是否开启自定义活动弹框</h3>
                                            <p>开启后，可以在家里开启活动的弹框</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="storemsgset10"></el-switch>
                                        </div>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane   label="外观设置" name="six">
                                <div>
                                    <div class="edit-item goods-item goods-set">
                                        <div  class="edit-info">
                                            <h3>网站悬浮挂件</h3>
                                            <p>开启后，按特定功能是否可以开启全站显示，既拥有，购物车，一键关注，联系店主，自定义等功能。</p>
                                        </div>
                                        <div class="goods-item-ctn">
                                            <el-switch v-model="storemsgset11"></el-switch>
                                        </div>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane   label="别名设置" name="seven">
                                <div class="mh-storemsg-serven">
                                    <dl>
                                        <dt>积分别名:</dt>
                                        <dd><el-input v-model="alias1" placeholder="请输入内容"></el-input></dd>
                                    </dl>
                                     <dl>
                                        <dt>服务费别名:</dt>
                                        <dd><el-input v-model="alias2" placeholder="请输入内容"></el-input></dd>
                                    </dl>
                                     <dl>
                                        <dt>市场价别名:</dt>
                                        <dd><el-input v-model="alias3" placeholder="请输入内容"></el-input></dd>
                                    </dl>
                                     <dl>
                                        <dt>剩余余额:</dt>
                                        <dd><el-input v-model="alias4" placeholder="请输入内容"></el-input></dd>
                                    </dl>
                                     <dl>
                                        <dt>佣金别名:</dt>
                                        <dd><el-input v-model="alias5" placeholder="请输入内容"></el-input></dd>
                                    </dl>
                                     <dl>
                                        <dt>限时购别名:</dt>
                                        <dd><el-input v-model="alias6" placeholder="请输入内容"></el-input></dd>
                                    </dl>
                                     <dl>
                                        <dt>线下支付别名:</dt>
                                        <dd><el-input v-model="alias7" placeholder="请输入内容"></el-input></dd>
                                    </dl>
                                     <dl>
                                        <dt>积分商城别名:</dt>
                                        <dd><el-input v-model="alias8" placeholder="请输入内容"></el-input></dd>
                                    </dl>
                                     <dl>
                                        <dt>分享预计赚别名:</dt>
                                        <dd><el-input v-model="alias9" placeholder="请输入内容"></el-input></dd>
                                    </dl>
                                    <div class="mh-storemsg-serven-div"><el-button type="primary" size="small">保存</el-button></div>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                    <!--店铺信息over-->
                </div>
                <!-- 商品中心over-->
            </div>
        </div>  <!----> 
    </div>
    <!--主体 over-->
    </div>
</template>
<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import storesecnavbar from './storesecnavbar';
import {
  zm_jsonToString,
  zm_formDataToString
} from "../../filters/zm_tools";

export default {
    data() {
        return {
            activeName: 'first' , // 默认显示第一个
            value1:'1',           // 客服按钮

            // 系统设置
            storemsgset1:'1',
            storemsgset2:'1',
            storemsgset3:'1',
            storemsgset4:'1',
            storemsgset5:'1',
            storemsgset6:'1',
            storemsgset7:'1',
            storemsgset8:'1',
            storemsgset9:'1',
            storemsgset10:'1',
            storemsgset11:'1',

            //别名设置
            alias1:'积分',
            alias2:'服务费',
            alias3:'市场价',
            alias4:'余额',
            alias5:'佣金',
            alias6:'限时购',
            alias7:'线下支付',
            alias8:'积分商城',
            alias9:'分享预计赚',

           mhqrcode :'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/wx/erweima.png'
        };
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.getQrCode();
            } else {
                next('/login');
            }
        })
    },
    mounted(){

    },
    methods: {
       //店铺主页
        //获取小程序二维码和路径
        getQrCode(){
           let that = this; 
            let data = new FormData();      
            // let path = encodeURIComponent("page/index/index"); 
            var path = "pages/index/index"; //"page/component/index";
            // let urlStr = UTIL.PIP + '/miniprogram/wx/mini/qrcode/page/get.do?path=' + path + '&openId='+that.$cookie.get('openId');
            var openId = this.$cookie.get('openId');
            let urlStr = "http://saas.mihuanshop.com/miniprogram/wx/mini/qrcode/page/get.do";
                urlStr = urlStr + "?openId="+openId + "&path="+path;
                   
            this.$http({
                method: "get",
                url: urlStr,
                headers: { 
                    "Content-Type": "multipart/form-data", 
                    Authorization:`Bearer ${that.$cookie.get('token')}`
                }
            }).then(function(res){
                console.log('---获取二维码请求= ' + zm_jsonToString(res.data));
                if(res.data.status == 301){
                    that.$router.push({
                        path: '/'
                    });
                    that.$message.warning('检测到登录过期,请重新登录');
                    return false;
                }
                if(res.data.status == 200) {           
                    that.mhqrcode = res.data.data;
                    that.loading = false;
                }

                if(res.data.status != 200 && res.data.status != 301){
                    that.$message.error(res.data.message);
                }
    
         }); 
       }
    },
    components:{
        navbar,sidebar,storesecnavbar    
    }
}
</script>

<style>
.mh-storemsg-serven-div{
    padding-top: 12px;
    margin-bottom: 12px;
    width: 100%;
    padding-left:150px
}
.mh-storemsg-serven{
    padding-top: 15px;
}
.mh-storemsg-serven>dl{
    display: flex;
    align-items: center;
    font-size:12px;
     margin-bottom: 22px;
}
.mh-storemsg-serven>dl dt{
    width: 150px;
    text-align: right;
    color: #606266;
    margin-right: 18px;
   
}
.mh-storemsg-four-bottom{
    display: flex;
    justify-content: center;
}
.mh-storemsg-fourpa{
    padding: 30px 30px 15px 30px;
    border:1px dashed #eee;
}
.mh-storemsg-four>dt{
    display: flex;
    font-size: 12px;
    align-items: center;  
    margin-bottom: 10px; 
}
.mh-storemsg-four>dd{
    font-size: 12px;
    color: rgb(153, 153, 153);
    margin-bottom: 18px;
}
.mh-storemsg-four>dt span{
    display: inline-block;
    margin-right: 18px;
}
.mh-storemsg-main .el-tabs__item {
    font-size: 12px;
    color: #909399;
    font-weight: 400;
}
.mh-storemsg-third .el-input__inner{
    height: 24px!important;
}
.mh-storemsg-third .el-table{
    font-size: 12px;
}
.mh-storemsgtwo-div .el-checkbox__label{
    font-size: 12px;
}
.mh-storemsg-bodytwo>dl{
    display: flex;
    align-items: center;
    margin-bottom: 4px;
}
.mh-storemsg-bodytwo>div{
    font-size: 12px;
    color: rgba(0,0,0,.65);
    margin-bottom: 18px;
}
.mh-storemsg-bodytwo>dl dt{
    font-size: 12px; 
    margin-right: 15px;
}
.mh-storemsg-bodytwo>dl dd{
    font-size: 12px; 
     color: rgba(0,0,0,.65);
}
.mh-storemsg-bodyfirst dl{
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}
.mh-storemsg-bodyfirst dl dt{
    width: 70px;
    margin-right: 20px;
    font-size: 12px;
}
.mh-storemsg-bodyfirst dl dd{
    color: rgba(0,0,0,.65);
    font-size: 12px;
    flex: 1;
}
.mh-storemsg-bodyfirst-img>img{
    width: 80px;
    height: 80px;
    border-radius: 10px;
}



.store_page{
    width: 100%;
    text-align: right;
}
.store-table{
    margin-bottom: 12px;
}
.store-header-zidingyi{
    padding-bottom: 10px;
    border-bottom: 2px solid #f2f2f2;
}
</style>