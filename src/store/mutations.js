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
  [types.SET_DEPARTMENTS_DATA] (state, value) {
    state.departments = value.departments
  },
  [types.SET_EMPLOYEES_DATA] (state, value) {
    state.employees = value.employees
  },
  [types.SET_POSITIONS_DATA] (state, value) {
    state.positions = value.positions
  },
  [types.SET_DEPARTMENT_STATISTICS] (state, value) {
    state.departmentStatistics = value.departmentStatistics
  },
  [types.SHOW_ERROR_MODAL] (state, value) {
    state.showErrorModal = value
  },
  [types.SHOW_MODAL] (state, value) {
    state.modal = value
  },
  setLoading (state, isLoading) {
    state.isLoading = isLoading
  }
}

export default mutations
