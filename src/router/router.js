import Vue from 'vue'
import Router from 'vue-router'
import ExampleComponent from '../components/ExampleComponent.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/new-route' },
        { path: '/new-route', component: ExampleComponent }
    ]
})