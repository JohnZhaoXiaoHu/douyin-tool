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
              
                    </div>

                    <br><br>
                    <!-- 多选：多checkbox -->
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用" disabled></el-checkbox>
                        <el-checkbox label="选中且禁用" disabled></el-checkbox>
                    </el-checkbox-group>

                    <br><br>
                    <!-- 多选：多checkbox -->
                    <el-checkbox-group v-model="checkList2">
                        <el-checkbox label="aa" value="1">aa</el-checkbox>
                        <el-checkbox label="bb" value="2">bb</el-checkbox>
                        <el-checkbox label="cc" value="3">cc</el-checkbox>
                    </el-checkbox-group>


                    <br><br>
                    <!-- 多选：单列表 -->
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange1">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>


                    <br><br>
                    <!-- 多选：map列表 -->
                    <el-checkbox-group v-model="checkedCitieList2" @change="handleCheckedCitiesChange2">
                        <el-checkbox v-for="city in citieList2" :label="city.id" :key="city.id">{{city.name}}</el-checkbox>
                    </el-checkbox-group>


                    <br><br>
                    <!-- 单选：map列表 -->
                    <el-checkbox-group v-model="checkedCitieList3" @change="handleCheckedCitiesChange3">
                        <el-checkbox v-for="city in citieList3" :label="city.id" :key="city.id">{{city.name}}</el-checkbox>
                    </el-checkbox-group>


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
    zm_timestampToDate,
} from "../../filters/zm_tools";
import {
    zm_errorStringToEmptyString
} from "../../filters/zm_object_string";


export default {
    data() {
        return {
            checkList: ['选中且禁用','复选框 A'],
            checkList2: ['aa'],
            checkedCities: ['上海', '北京'],
            cities: [],

            citieList2: [],
            checkedCitieList2: [0, 2, 3],

            citieList3: [],
            checkedCitieList3: [2],
           
        };
    },
    watch:{
        checkedCitieList2: function(val) {
			console.log("---checkedCitieList2= "+ val);
        },
        checkedCitieList3: function(val) {
            console.log("---checkedCitieList3= "+ val);
           
        },
     },
    mounted(){
        const cityOptions = ['上海', '北京', '广州', '深圳'];
        this.cities = cityOptions;


        const cityOptionList = [{
            name: '上海',
            id: 0
        }, {
            name: '北京',
            id: 1
        },{
            name: '广州',
            id: 2
        },{
            name: '深圳',
            id: 3
        },{
            name: '安徽',
            id: 4
        },{
            name: '湖北',
            id: 5
        }];
        this.citieList2 = cityOptionList;
        this.citieList3 = cityOptionList;

    },
    methods:{
        qiangGou(){
            // this.$router.push('/marketing/qiangGou/shangxiajia');
        },
        handleCheckedCitiesChange1(value) {
            console.log("---handleCheckedCitiesChange1= "+ value);
        },
        handleCheckedCitiesChange2(value) {
            console.log("---handleCheckedCitiesChange2= "+ value);
        },
        handleCheckedCitiesChange3(value) {
            console.log("---handleCheckedCitiesChange3= "+ value);
            if (this.checkedCitieList3.length>1) {
                this.checkedCitieList3.splice(0,1);
            }
        },
    },
    components:{
        navbar,zmTestNav,sidebar 
    }
}
</script>
<style>
/* .marketing_div{
    display: flex;
} */


</style>



   
            
           