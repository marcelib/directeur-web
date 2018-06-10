import {auth} from './auth'
import {departments} from './departments'
import {employees} from './employees'
import {positions} from './positions'
import {statistics} from './statistics'
import {validation} from './validation'

export const apiActions = {
  ...auth,
  ...validation,
  ...departments,
  ...employees,
  ...positions,
  ...statistics,
  ...validation
}

export default apiActions
