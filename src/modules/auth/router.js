import * as auth from './controller'
import { ensureUser } from '../../middleware/validators'

export const baseUrl = '/auth'

export default [
  {
    method: 'POST',
    route: '/',
    handlers: [
      auth.authUser
    ]
  },
  {
    method: 'GET',
    route: '/profile',
    handlers: [
      ensureUser,
      auth.getProfile
    ]
  }
]
