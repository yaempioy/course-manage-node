import User from '../../models/users'
import Course from '../../models/courses'
import {ObjectID} from 'mongodb'

export async function createCourse (ctx) {
  const data = ctx.request.body.course
  const course = new Course(Object.assign(data, {instructor: ObjectID(data.instructor)}))
  try {
    await course.save()
  } catch (err) {
    ctx.throw(422, err.message)
  }
  ctx.body = {
    course
  }
}

export async function getCourses (ctx) {
  const {date} = ctx.request.query
  let where = {}
  if (date) where.date = date
  const courses = await Course.find(where).populate('instructor')
  ctx.body = { courses }
}
