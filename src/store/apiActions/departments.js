import * as types from '../mutation-types'

import {HTTP} from '../../services/http-common'

export const departments = {
  fetchDepartments ({commit, state, dispatch}) {
    HTTP.get('api/departments')
      .then(response => {
        commit(types.SET_DEPARTMENTS_DATA, response.data)
      }).catch(error => {
        dispatch('validateResponse', commit, error.response)
      })
  },
  editDepartment ({commit, state, dispatch}, department) {
    const data = {
      id: department.id,
      departmentName: department.departmentName,
      departmentDescription: department.departmentDescription
    }
    HTTP.put('api/departments', data)
      .then(response => {
        dispatch('fetchDepartments')
        dispatch('hideModal')
      }).catch(error => {
        dispatch('validateResponse', commit, error.response)
      })
  },
  saveDepartment ({commit, state, dispatch}, department) {
    console.log(department)
    const data = {
      departmentName: department.departmentName,
      departmentDescription: department.departmentDescription,
      departmentDirector: department.departmentDirector
    }
    console.log(data)
    HTTP.post('api/departments', data)
      .then(response => {
        dispatch('fetchDepartments')
      }).catch(error => {
        dispatch('validateResponse', commit, error.response)
      })
  },
  deleteDepartment ({commit, state, dispatch}, id) {
    HTTP.delete(`api/departments/${id}/`)
      .then(response => {
        dispatch('fetchDepartments')
        dispatch('hideModal')
      }).catch(error => {
        dispatch('validateResponse', commit, error.response)
      })
  }
}

