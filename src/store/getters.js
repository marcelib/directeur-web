import utils from '../services/utils'

const menuItems = state => state.menu.items
const sidebarOpened = state => state.app.sidebar.opened
const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const userData = state => state.app.userData
const employees = state => state.app.employees
const departments = state => state.app.departments
const departmentStatistics = state => state.app.departmentStatistics
const positions = state => state.app.positions


const modal = state => state.app.modal
const showModal = state => state.app.modal.show
const onModalConfirm = state => state.app.modal.onConfirm
const departmentId = state => state.app.modal.departmentId

const breadcrumbs = state => {
  return (keyword) => utils.findInNestedByName(state.menu.items, keyword)
}

export {
  menuItems,
  toggleWithoutAnimation,
  sidebarOpened,
  config,
  palette,
  isLoading,
  breadcrumbs,
  userData,
  employees,
  departments,
  positions,
  departmentStatistics,
  modal,
  showModal,
  onModalConfirm,
  departmentId
}
