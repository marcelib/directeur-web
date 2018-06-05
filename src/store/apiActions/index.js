import {auth} from './auth'
import * as validation from './validation'

export const apiActions = {
  ...auth,
  ...validation,
}

export default apiActions
