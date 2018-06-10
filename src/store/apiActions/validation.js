import {MODAL_TYPES} from '../../shared/constants'
import * as types from '../mutation-types'

export const validation = {
  validateResponse ({commit}, response) {
    const wrongHttpStatus = response.status !== 200 || response.data.status === 'ERROR'
    if (wrongHttpStatus) {
      validation.showErrorModal(commit, `ERR_${response.status}`)
    }
  },
  showErrorModal ({commit}, errorCode, errorMessage) {
    commit(types.SHOW_MODAL,
      {
        type: MODAL_TYPES.error,
        show: true,
        text: errorMessage,
        title: errorCode,
      })
  }
}
