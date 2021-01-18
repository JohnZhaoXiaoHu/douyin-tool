<template>
  <el-dialog title="商品分类" :show-close="showClose" :visible.sync="config.visible" center @open="openCheckHandler">
    <div class="dialog-table-box">
      <el-table ref="categorytable" :data="categories.items" row-key="id" highlight-current-row @current-change="currentChangeHandler">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="创建时间" prop="createTime" :formatter="timeFormat"></el-table-column>
      </el-table>
    </div>
<!--    <div class="dialog-table-pagination">
      <el-pagination @prev-click="loadGroups" @next-click="loadGroups" @current-change="loadGroups" :current-page="groups.pagination.page" layout="prev, pager, next" :total="groups.pagination.total" :page-size="groups.pagination.limit"></el-pagination>
    </div> -->
    <div slot="footer" class="dialog-foot">
      <el-button type="primary" v-on:click="subCategory">确定</el-button>
      <el-button type="info" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import UTIL from "../../../utils/utils";
  export default {
    mounted() {
    },
    props: ["config"],
    data() {
      return {
        showClose: false,
        active: null,
        categories: {
          pagination: {
            page: 1,
            limit: 20,
            total: 0
          },
          items: []
        }
      }
    },
    methods: {
      loadCategories(current) {
        let self = this;
        let items = self.categories.items;
        items.splice(0, items.length);
        UTIL.vueRequestApi(this, "/shop/category/admin/list", "post", "json", this.$qs.stringify({page: current, limit: this.categories.pagination.limit}), "application/x-www-form-urlencoded", function(data) {
          self.categories.pagination.total = data.totalCount;
          self.categories.pagination.page = current;
          items.push.apply(self.categories.items, data.list)
        }, undefined, undefined, "api");
      },
      subCategory() {
        if(this.active == null) {
          this.$message("没有选择分类");
        }
        else {
          this.config.ensureCategory(this.active, this.config.parameters);
        }
      },
      openCheckHandler() {
        if(this.active != null) {
          this.$refs.categorytable.setCurrentRow();
        }
        this.active = null;
        this.loadCategories(1);
      },
      currentChangeHandler(current) {
        this.active = current;
      },
      timeFormat(row, column, value, index) {
        let formatDate = new Date(value);
        return UTIL.formatDate(formatDate);
      },
      close() {
        this.config.closeCheckHandler(this.config.parameters);
      }
    }
  }
</script>

<style>

</style>
