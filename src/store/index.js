import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    main: main
  }
})

export default Store
