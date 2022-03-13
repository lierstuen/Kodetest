import MainPage from './MainPage.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/review-notes',
            name: 'MainPage',
            component: MainPage
        }
    ]
})