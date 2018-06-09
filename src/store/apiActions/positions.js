import * as types from '../mutation-types'

import {HTTP} from '../../services/http-common'

export const positions = {
  fetchPositions ({commit, state, dispatch}) {
    HTTP.get('api/positions')
      .then(response => {
        commit(types.SET_POSITIONS_DATA, response.data)
      }).catch(e => {
      })
  }
}

