<template>
  <el-dialog :title="title" :visible.sync="config.visible" center :show-close="false" @open="openCheckHandler">
    <div class="dialog-body-table">
      <div class="dialog-table-search">
        <el-input @keyup.enter.native="search" class="search-input" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="keyword"></el-input>
      </div>
      <el-divider></el-divider>
      <div class="dialog-table-box">
        <el-table ref="marketingtable" :data="items" row-key="id" highlight-current-row @current-change="currentChangeHandler">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column label="名称" prop="name"></el-table-column>
          <el-table-column label="缩略图" prop="imageUrl" width="400">
            <template slot-scope="scope">
              <el-image :src="scope.row.imageUrl" style="width: 60px; height: 60px;"></el-image>
            </template>
          </el-table-column>
          <el-table-column label="创建时间" width="200" prop="createTime" :formatter="createTimeFormatter"></el-table-column>
        </el-table>
      </div>
      <div class="dialog-table-pagination">
        <el-pagination @prev-click="loadGoods" @next-click="loadGoods" @current-change="loadGoods" :current-page="pagination.page" layout="prev, pager, next" :total="pagination.total" :page-size="pagination.limit"></el-pagination>
      </div>
    </div>
    <div slot="footer" class="dialog-foot">
      <el-button type="primary" v-on:click="subGood">确定</el-button>
      <el-button type="infor" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import UTIL from "../../../utils/utils";
  export default {
    props: ["title", "config"],
    data() {
      return {
        active: null,
        keyword: "",
        items: [],
        pagination: {
          page: 1,
          limit: 10,
          total: 0,
          group: 0
        }
      }
    },
    methods: {
      openCheckHandler() {
        let self = this;
        self.$nextTick(function() {
          if(self.active != null) {
            self.$refs.marketingtable.setCurrentRow();
          }
          self.active = null;
          self.loadGoods(1);
        })
      },
      close() {
        this.config.visible = false;
      },
      subGood() {
        if(this.active == null) {
          this.$message("没有选择商品")
        }
        else {
          this.config.ensureGood(this.active)
        }
      },
      search() {
        if(this.active != null) {
          this.$refs.marketingtable.setCurrentRow();
        }
        this.active = null;
        this.loadGoods(1)
      },
      loadGoods(current) {
        let self = this;
        UTIL.vueRequestApi(self, "/shop/item/admin/xsgList", "post", "json", self.$qs.stringify({page: current, limit: self.pagination.limit, sname: self.keyword}), "application/x-www-form-urlencoded", function(data) {
          self.items = data.list;
          self.pagination.total = data.totalCount;
          self.pagination.page = current;
        }, undefined, undefined, "api");
      },
      currentChangeHandler(current) {
        this.active = current;
      },
      createTimeFormatter(row, column, value, index) {
        let formatDate = new Date(value.time);
        return UTIL.formatDate(formatDate);
      }
    }
  }
</script>

<style  scoped>
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
