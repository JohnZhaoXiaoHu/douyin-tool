const GlobalConfig = {
  saas: window.g.PIP,
  api: window.g.baseURL
}

export default {
  install: function(Vue) {
    Vue.prototype.$global = GlobalConfig;
  }
}
