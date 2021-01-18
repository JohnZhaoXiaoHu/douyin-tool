<template>
  <el-dialog title="商品分组" :show-close="showClose" :visible.sync="config.visible" center @open="openCheckHandler">
    <div class="dialog-table-box">
      <el-table ref="grouptable" :data="groups.items" row-key="id" highlight-current-row @current-change="currentChangeHandler">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="创建时间" prop="createTime" :formatter="timeFormat"></el-table-column>
      </el-table>
    </div>
<!--    <div class="dialog-table-pagination">
      <el-pagination @prev-click="loadGroups" @next-click="loadGroups" @current-change="loadGroups" :current-page="groups.pagination.page" layout="prev, pager, next" :total="groups.pagination.total" :page-size="groups.pagination.limit"></el-pagination>
    </div> -->
    <div slot="footer" class="dialog-foot">
      <el-button type="primary" v-on:click="subGroup">确定</el-button>
      <el-button type="infor" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import UTIL from "../../../utils/utils";
  export default {
    props: ["config"],
    data() {
      return {
        showClose: false,
        active: null,
        groups: {
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
      loadGroups(current) {
        let self = this;
        UTIL.vueRequestApi(this, "/shop/group/admin/list", "post", "json", this.$qs.stringify({page: current, limit: this.groups.pagination.limit}), "application/x-www-form-urlencoded", function(data) {
          self.groups.items = data.list;
          // self.groups.pagination.total = data.totalCount;
          self.groups.pagination.page = current;
        }, undefined, undefined, "api");
      },
      openCheckHandler() {
        if(this.active != null) {
          this.$refs.grouptable.setCurrentRow();
        }
        this.active = null;
        this.loadGroups(1);
      },
      subGroup() {
        if(this.active == null) {
          this.$message("没有选择分组");
        }
        else {
          this.config.ensureGroup(this.active, this.config.parameters);
        }
      },
      close() {
        this.config.closeCheckHandler(this.config.parameters);
      },
      timeFormat(row, column, value, index) {
        let formatDate = new Date(value.time);
        return UTIL.formatDate(formatDate);
      },
      currentChangeHandler(current) {
        this.active = current;
      }
    }
  }
</script>

<style  scoped>
 @import url("../../../assets/css/base.css");

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
