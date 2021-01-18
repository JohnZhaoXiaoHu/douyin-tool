<template>
  <el-dialog title="7人拼团商品列表" :show-close="showClose" :visible.sync="config.visible" center @open="openCheckHandler">
    <div class="dialog-body-table">
      <div class="dialog-table-search">
        <el-input @keyup.enter.native="search" class="search-input" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="keyword"></el-input>
      </div>
      <el-divider></el-divider>
      <div class="dialog-table-box">
        <el-table ref="goodtable" :data="goods.items" row-key="id" :highlight-current-row="!config.multiSelect" @selection-change="selectChangeHandler" @current-change="currentChangeHandler">
          <el-table-column :type="config.multiSelect == true ? 'selection' : 'index'" width="50"></el-table-column>
          <el-table-column label="名称" prop="name"></el-table-column>
          <el-table-column label="缩略图" prop="imageUrl" width="400">
            <template slot-scope="scope">
              <el-image :src="scope.row.imageUrl" style="width: 60px; height: 60px;"></el-image>
            </template>
          </el-table-column>
          <el-table-column label="创建时间" width="200" prop="createtime" :formatter="createTimeFormatter"></el-table-column>
        </el-table>
      </div>
      <div class="dialog-table-pagination">
        <el-pagination @prev-click="loadGoods" @next-click="loadGoods" @current-change="loadGoods" :current-page="goods.pagination.page" layout="prev, pager, next" :total="goods.pagination.total" :page-size="goods.pagination.limit"></el-pagination>
      </div>
    </div>
    <div slot="footer" class="dialog-foot">
      <el-button type="primary" v-on:click="subGood">确定</el-button>
      <el-button type="info" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import UTIL from "../../../utils/utils";
  export default {
    props: ["config"],
    mounted() {
      // this.loadGoods(this.goods.pagination.page);
    },
    data() {
      return {
        showClose: false,
        active: null,
        keyword: "",
        goods: {
          pagination: {
            page: 1,
            limit: 10,
            total: 0
          },
          items: []
        }
      }
    },
    methods: {
      loadGoods(current) {
        //直接查询出售中的商品
        let self = this;
        UTIL.vueRequestApi(this, "/shop/item/list", "post", "json", this.$qs.stringify({page: current, limit: this.goods.pagination.limit, stype: 3, platformType: 0}), "application/x-www-form-urlencoded", function(data) {
          self.goods.items = data.list;
          self.goods.pagination.total = data.totalCount;
          self.goods.pagination.page = current;
        }, undefined, undefined, "api");
      },
      createTimeFormatter(row, column, value, index) {
        let formatDate = new Date(value);
        return UTIL.formatDate(formatDate);
      },
      search() {
        this.loadGoods(1)
      },
      selectChangeHandler(selections) {
        this.active = selections;
      },
      currentChangeHandler(current) {
        this.active = current;
      },
      subGood(event) {
        if(this.config.multiSelect == true) {
          if(this.active != null && this.active instanceof Array && this.active.length > 0) {
            //不为空 且为数组
            this.config.ensureGood(this.active, this.config.parameters, "array");
          }
          else {
            this.$message("没有选择商品")
          }
        }
        if(this.config.multiSelect == false) {
          if(this.active != null && this.active instanceof Object) {
            //不为空 且为数组
            this.config.ensureGood(this.active, this.config.parameters, "object");
          }
          else {
            this.$message("没有选择商品")
          }
        }
      },
      openCheckHandler() {
        let self = this;
        self.$nextTick(function() {
          if(self.config.multiSelect == true) {
            self.$refs.goodtable.clearSelection();
          }
          else {
            if(self.active != null) {
              self.$refs.goodtable.setCurrentRow();
            }
          }
          self.active = null;
          self.keyword = "";
          self.loadGoods(1);
        })
      },
      close() {
        // this.config.visible = false;
        this.config.closeCheckHandler(this.config.parameters);
      }
    }
  }
</script>

<style scoped="scoped">
  @import url("../../../assets/css/base.css");
   .dialog-table-search {
     width: 100%;
     display: flex;
     justify-content: flex-end;
   }
   .dialog-table-search .search-input {
     width: 30%;
   }
   .dialog-table-box {
     height: 450px;
     overflow-y: auto;
   }
   .dialog-table-pagination {
     padding: 8px 0;
     display: flex;
     align-items: center;
     justify-content: space-around;
   }
</style>
