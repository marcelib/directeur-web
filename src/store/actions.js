import * as types from './mutation-types'
import apiActions from './apiActions'

export const actions = {
  ...apiActions,
  hideModal ({commit, state}) {
    const previousModal = Object.assign({}, state.modal)
    previousModal.show = false
    commit(types.SHOW_MODAL, previousModal)
  },
  showModal ({commit}, props) {
    commit(types.SHOW_MODAL, props)
  },
  closeMenu ({ commit }) {
    commit(types.CLOSE_MENU)
  },
  toggleSidebar ({ commit }, opened) {
    commit(types.TOGGLE_SIDEBAR, opened)
  },
  isToggleWithoutAnimation ({ commit }, value) {
    commit(types.TOGGLE_WITHOUT_ANIMATION, value)
  },
  initialDataFetch ({commit, dispatch}) {
    dispatch('fetchDepartments')
    dispatch('fetchPositions')
    dispatch('fetchEmployees')
    dispatch('fetchDepartmentStatistics')
  }
}

export default actions

