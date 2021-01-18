<template>
  <el-dialog title="我的资源" :visible.sync="config.visible" center>
    <div class="dialog-body-flex">
      <div class="resource-tree-wrapper">
        <div class="resource-tree">
          <el-tree :load="loadNode" node-key="id" :props="defaultProps" highlight-current lazy @node-click="nodeChange"></el-tree>
        </div>
      </div>
      <div class="resource-list">
        <div class="resource-list-box">
          <div v-for="(item, index) in resources.items" :data-url="item.path" :key="index" v-on:click="selectResource" class="resource-list-image">
            <el-image :src="item.path" class="resource-list-image-item" :class="resources.active == item.path ? 'active' : ''"></el-image>
          </div>
        </div>
        <div class="resource-list-pagination">
          <el-pagination @prev-click="loadResource" @next-click="loadResource" @current-change="loadResource" :current-page="resources.pagination.page" layout="prev, pager, next" :total="resources.pagination.total" :page-size="resources.pagination.limit"></el-pagination>
        </div>
      </div>
    </div>
    <div slot="footer" class="dialog-foot">
      <el-button type="primary" v-on:click="config.ensureResource(resources.active, config.index)">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import UTIL from "../../../utils/utils";
  export default {
    name: "resourcemodal",
    props: ["config"],
    created() {

    },
    updated() {

    },
    data() {
      return {
        treenodes: [],
        defaultProps: {
          children: "children",
          label: "label",
          id: "id"
        },
        resources: {
          active: "",
          pagination: {
            page: 1,
            limit: 2,
            total: 0,
            group: 0
          },
          items: []
        }
      }
    },
    methods: {
      loadNode(node, resolve) {
        let self = this;
        if(node.level == 0) {
          UTIL.vueRequestApi(self, "/shop/resource/group/admin/list", "post", "json", self.$qs.stringify({}), "application/x-www-form-urlencoded", function(data) {
            let nodes = [];
            for(let i in data.list) {
              let obj = {};
              obj.id = data.list[i].id;
              obj.label = data.list[i].name;
              obj.children = [];
              nodes.push(obj);
            }
            resolve(nodes);
          }, undefined, undefined, "api");
        }
        else if(node.level > 0) {
          UTIL.vueRequestApi(self, "/shop/resource/group/admin/list", "post", "json", self.$qs.stringify({pid: node.key}), "application/x-www-form-urlencoded", function(data) {
            let nodes = [];
            for(let i in data.list) {
              let obj = {};
              obj.id = data.list[i].id;
              obj.label = data.list[i].name;
              obj.children = [];
              nodes.push(obj);
            }
            resolve(nodes);
          }, undefined, undefined, "api");
        }
      },
      nodeChange(obj, node, target) {
        this.resources.pagination.group = obj.id;
        this.resources.pagination.page = 1;
        this.resources.active = "";
        this.loadResource(this.resources.pagination.page)
      },
      loadResource(current) {
        let self = this;
        UTIL.vueRequestApi(self, "/shop/resource/admin/list", "post", "json", self.$qs.stringify({type: 1, groupId: self.resources.pagination.group, page: current, limit: self.resources.pagination.limit}), "application/x-www-form-urlencoded", function(data) {
          self.resources.items = data.list;
          self.resources.pagination.page = current;
          self.resources.pagination.total = data.totalCount;
        }, undefined, undefined, "api");
      },
      selectResource(event) {
        let self = this;
        let url = event.currentTarget.dataset.url;
        if(self.resources.active != url) {
          self.resources.active = url;
        }
      }
    }
  }
</script>

<style  scoped>
 @import url("../../../assets/css/base.css");

</style>
