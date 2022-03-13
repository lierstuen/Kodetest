import App from './App.vue'
import router from './Router'
import vuetify from './plugins/vuetify'
import Vue from 'vue'

new Vue({
    router,
    vuetify,
    components: { App },
    template: '<App/>',
    render: h => h(App)
}).$mount('#app')