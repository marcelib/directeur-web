import * as types from '../mutation-types'

import {HTTP} from '../../services/http-common'

export const employees = {
  fetchEmployees ({commit, state, dispatch}) {
    HTTP.get('api/employees')
      .then(response => {
        commit(types.SET_EMPLOYEES_DATA, response.data)
      }).catch(e => {
      })
  }
}

