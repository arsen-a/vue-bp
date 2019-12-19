import Vue from 'vue'
import Vuex from 'vuex'
import { ExampleStore } from './modules/ExampleStoreModule'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        ExampleStore
    }
})

export default store