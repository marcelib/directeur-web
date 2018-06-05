import * as types from '../mutation-types'

export const validateResponse = function (commit, response) {
  const wrongHttpStatus = response.status !== 200 || response.data.status === 'ERROR'
  const wrongResponseStatus = response.data.responseStatus === 'ERROR'
  if (wrongHttpStatus) {
    showErrorModal(commit, `ERR_${response.status}`)
  }
  if (wrongResponseStatus) {
    const message = response.data.errMessage ? response.data.errMessage : response.data.errorMessage
    const code = response.data.errCode ? response.data.errCode : response.data.errorCode
    showErrorModal(commit, code, message)
  }
  return !(wrongHttpStatus || wrongResponseStatus)
}

export const showErrorModal = function (commit, errorCode, errorMessage) {
  commit(types.SHOW_MODAL,
    {
      // type: MODAL_TYPES.error,
      show: true,
      text: errorMessage,
      title: errorCode,
    })
}

