import * as types from '../mutation-types'

import {HTTP} from '../../services/http-common'
import router from '../../router/index'

export const auth = {
  fetchUserData ({commit, state, dispatch}, loginPage) {
    if (!state.userData || !state.userData.email) {
      HTTP.get('api/users/current')
        .then(response => {
          commit(types.SET_USER_DATA, response.data)
          dispatch('initialDataFetch')
        }).catch(e => {
          commit(types.SET_USER_DATA, {})
          router.push('/auth/login')
        })
    } else if (loginPage) {
      router.push('/')
    }
  },
}

