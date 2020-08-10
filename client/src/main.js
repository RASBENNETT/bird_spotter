import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

delete L.Icon.Default.prototype._getIconUrl  
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({  
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
  iconUrl: require('leaflet/dist/images/marker-icon.png'),  
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')  
})