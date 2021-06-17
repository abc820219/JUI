import Vue from 'vue'
import App from './App.vue'
import JButton from '@/components/button.vue'
import JDialog from '@/components/dialog.vue'
import JInput from '@/components/input.vue'
import '@fortawesome/fontawesome-free/css/all.css'
Vue.config.productionTip = false
Vue.component(JButton.name, JButton)
Vue.component(JDialog.name, JDialog)
Vue.component(JInput.name, JInput)
new Vue({
  render: h => h(App),
}).$mount('#app')
