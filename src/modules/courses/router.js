import { ensureUser } from '../../middleware/validators'
import * as course from './controller'

export const baseUrl = '/courses'

export default [
  {
    method: 'POST',
    route: '/',
    handlers: [
      ensureUser,
      course.createCourse
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      ensureUser,
      course.getCourses
    ]
  }
]
