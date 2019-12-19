import Vue from 'vue'
import Vuex from 'vuex'
import { ExampleStore } from './modules/ExampleStoreModule'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ExampleStore
    }
})