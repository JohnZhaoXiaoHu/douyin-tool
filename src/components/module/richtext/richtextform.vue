<template>
  <div class="component-form">
    <div class="component-5">
      <VueUeditor ref="ueditor" :ueditorPath="path" :resourceconfig="resourceconfig" :no="no" :content="content"></VueUeditor>
    </div>
    <resourcemodal :config="resourceconfig"></resourcemodal>
  </div>

</template>

<script>
  export default {
    props: ["content", "no"],
    created() {
      let self = this;
      this.$emptyvue.$on("ueready", function(instance) {
        self.instance = instance;
      })
    },
    mounted() {

    },
    data() {
      let self = this;
      return {
        resourceconfig: {
          visible: false,
          index: -1,
          ensureResource: function(url, index) {
            self.instance.execCommand("insertimage", [{src: url}])
            self.resourceconfig.visible = false;
          }
        },
        path: "/static/ueditor/",
        instance: null
      }
    }
  }
</script>

<style  scoped>
 @import url("../../../assets/css/base.css");
</style>
