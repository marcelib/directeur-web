import * as types from '../mutation-types'

import {HTTP} from '../../services/http-common'

export const statistics = {
  fetchDepartmentStatistics ({commit, state, dispatch}) {
    HTTP.get('api/statistics/department')
      .then(response => {
        commit(types.SET_DEPARTMENT_STATISTICS, response.data)
      }).catch(e => {
      })
  }
}

