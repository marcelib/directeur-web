import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module
import actions from './actions'
import mutations from './mutations'
import state from './state'
import menu from './modules/menu'

import * as getters from './getters'
Vue.use(Vuex)


let app = {
  actions,
  mutations,
  state
}

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    menu
  },
})

Vue.use(VuexI18n.plugin, store)

export default store
