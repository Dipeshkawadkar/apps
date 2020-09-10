import Vue from 'vue'
import App from './App.vue'

Vue.filter("uppercase", function (value) {
  if (!value) return "";
  value = value.toString();
  return value.toUpperCase();
});

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')






