<template>
           <header id="header_disabled">
           <div>
               <i class="collapse-btn iconfont icon-yousuojin hd-i_first"></i>
           </div>

            <div  class="mh-header-inic">
                <img  v-if="mhHeaderFlag" @click="fullScreen"  title="全屏模式"  class="mh-header-inic-img" src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/vip/all1.png" alt="" srcset="" width="12" height="12">
                <img  v-else @click="exitScreen"  title="关闭全屏模式"   class="mh-header-inic-img" src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/vip/all1.png" alt="" srcset="" width="12" height="12">
                <el-popover placement="top-start" title="" width="130" trigger="hover" content= ul>
                    
                       <li class="hd-li" @click="layout">
                            <i class="iconfont icon-tuichudenglu"></i>
                            <span> 退出登录</span>
                        </li>

                    <!--<el-button slot="reference">hover 激活</el-button>-->
                    <dl class="hd-dl" slot="reference">
                        <dt>
                            <!-- <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/vip/mihuan.png" alt="抖音工具" class="g-logo" width="35" height="35"> -->
                            <img :src="mhLogo" alt="抖音工具" class="g-logo navMhLogo" width="35" height="35">
                        </dt>
                        <dd>
                            <span>平台版+小程序</span>
                            <i class="el-icon-arrow-down hd-down" ></i>
                        </dd>
                    </dl>
                </el-popover>
            </div>
        </header>
</template>


<script>

export default {
    data() {
        return {
            mhHeaderFlag:true,
            mhLogo: "https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/vip/mihuan.png",
        };
    },
    beforeRouteLeave (to, from, next) {
        console.log(111);
		// next(vm => {
        //     console.log(vm.$cookie)
		// })
  	},
    mounted(){
        // console.log('---navbar: miHuanLogo= '+this.$cookie.get('miHuanLogo'));
        // if (this.$cookie.get('miHuanLogo')) {
        //     this.mhLogo = this.$cookie.get('miHuanLogo');
        // }

        let miHuanLogo = this.$cookie.get('miHuanLogo');
        if ( miHuanLogo != undefined &&  miHuanLogo != null && miHuanLogo != 'undefined') {
            console.log('---Logo 有');
            this.mhLogo = this.$cookie.get('miHuanLogo');
        }
        this.mhLogo = "../../static/images/icon/douYinImg.png"

        

    },
    methods:{
         layout(){
            //删除所有cookie信息
            this.$cookie.delete('openId');
            this.$cookie.delete('token');
            this.$cookie.delete('adminId');
            this.$cookie.delete('nickName');
            this.$router.push('/login');
    },
            //全屏
     fullScreen(){
         this.mhHeaderFlag = false;
        var el = document.documentElement;
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if(typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        };
        return;
    },
    //退出全屏
     exitScreen(){
        this.mhHeaderFlag = true;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        if(typeof cfs != "undefined" && cfs) {
            cfs.call(el);
        }
    }
    },
    components:{
       
    }
}
</script>