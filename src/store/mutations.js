import * as types from './mutation-types'

const mutations = {
  [types.CLOSE_MENU] (state) {
    if (document.documentElement.clientWidth < 992) {
      state.sidebar.opened = false
    }
  },
  [types.TOGGLE_SIDEBAR] (state, opened) {
    state.sidebar.opened = opened
  },
  [types.TOGGLE_WITHOUT_ANIMATION] (state, value) {
    state.sidebar.withoutAnimation = value
  },
  [types.SET_USER_DATA] (state, value) {
    state.userData = value
  },
  setLoading (state, isLoading) {
    state.isLoading = isLoading
  }
}

export default mutations
