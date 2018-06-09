import * as types from '../mutation-types'

import {HTTP} from '../../services/http-common'

export const departments = {
  fetchDepartments ({commit, state, dispatch}) {
    HTTP.get('api/departments')
      .then(response => {
        commit(types.SET_DEPARTMENTS_DATA, response.data)
      }).catch(e => {
      })
  }
}

