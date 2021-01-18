<template>
        <ul class="sidebar" id="sidebar_disabled">
      
        <li>
            <img class="g-logo miHuanLogo" :src="mhLogo" alt="蜜獾分销">
            <div class="miHuanName">{{miHuanName}}</div>
        </li>
       
        <router-link tag="li" v-for="(item,i) in aside" 
        :key="item.text" 
        :to="item.path" 
        class="mh-sideimg" 
        active-class="mh-side">     
            <img :src="aside[i].path === $route.path ? aside[i].selected : aside[i].normal">
            <span>{{item.text}}</span>  
        </router-link>
    </ul >
</template>
<script>
export default {
    data() {
        return {
            aside: [        
                { path: '/home', text: '首页', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E9%A6%96%E9%A1%B5.png' , selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E9%A6%96%E9%A1%B5-.png' },        
                // { path: '/wxstore', text: '店铺', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E5%BA%97%E9%93%BA-.png', selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E5%BA%97%E9%93%BA.png'},        
                { path: '/goodslist', text: '商品', normal: 'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E5%95%86%E5%93%81.png', selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E5%95%86%E5%93%81-.png' },        
                { path: '/order', text: '订单', normal: 'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E8%AE%A2%E5%8D%95-.png', selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E8%AE%A2%E5%8D%95.png' },
                // { path: '/shopMin', text: '微店', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E5%BE%AE%E5%BA%97.png', selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E5%BE%AE%E5%BA%97-.png' },
                // { path: '/supplier', text: '供应商', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E4%BE%9B%E5%BA%94%E5%95%86.png', selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E4%BE%9B%E5%BA%94%E5%95%86-.png' },
                // { path: '/memberlist', text: '会员', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E4%BC%9A%E5%91%98-.png', selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E4%BC%9A%E5%91%98.png' },
                // { path: '/twitter', text: '推客', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E6%8E%A8%E5%AE%A2.png' , selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E6%8E%A8%E5%AE%A2-.png' },
                // { path: '/channel', text: '渠道商', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E6%B8%A0%E9%81%93%E5%95%86.png' , selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E6%B8%A0%E9%81%93%E5%95%86-.png' },
                // { path: '/ChannelBusiness', text: '渠道商', 
                //       normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E6%B8%A0%E9%81%93%E5%95%86.png' , 
                //     selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E6%B8%A0%E9%81%93%E5%95%86-.png' },
                // { path: '/Finance/finance_member', text: '财务', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E8%B4%A2%E5%8A%A1-.png' , selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E8%B4%A2%E5%8A%A1.png'},
                // { path: '/marketing', text: '营销', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E8%90%A5%E9%94%80.png' , selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E8%90%A5%E9%94%80-.png' },
                { path: '/wxset', text: '批量发货', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E5%B0%8F%E7%A8%8B%E5%BA%8F.png', selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E5%B0%8F%E7%A8%8B%E5%BA%8F-.png' },                       
                { path: '/mhset', text: '设置', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E8%AE%BE%E7%BD%AE-.png', selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E8%AE%BE%E7%BD%AE.png'},
                // { path: '/wxset', text: '小程序', normal:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E5%B0%8F%E7%A8%8B%E5%BA%8F.png', selected:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/bar/%E5%B0%8F%E7%A8%8B%E5%BA%8F-.png' }                       
            ],
            mhLogo: "https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/vip/mihuan.png",
            miHuanName: '蜜獾',
            supplierImg: "../../static/images/icon/select_supplier.png",
        };
    },
    mounted(){
        // if (this.$cookie.get('miHuanLogo')) {
        //     this.mhLogo = this.$cookie.get('miHuanLogo');
        // }
        // if (this.$cookie.get('miHuanName')) {
        //     this.miHuanName = this.$cookie.get('miHuanName');
        // }

        let miHuanLogo = this.$cookie.get('miHuanLogo');
        let miHuanName = this.$cookie.get('miHuanName');
        if ( miHuanLogo != undefined &&  miHuanLogo != null && miHuanLogo != 'undefined') {
            console.log('---Logo 有');
            this.mhLogo = this.$cookie.get('miHuanLogo');
        }
        if ( miHuanName != undefined &&  miHuanName != null && miHuanName != 'undefined') {
            console.log('---Name 有');
            this.miHuanName = this.$cookie.get('miHuanName');
        }
    },
    methods:{
      
    },
    computed:{
    }

}
</script>
<style>
.miHuanName{
    text-overflow:ellipsis;
    white-space:nowrap;
}
.selectImgView{
    margin-top: 3px !important;
}
.selectImg{
    width:  13px;
    height: 13px;
}
</style>