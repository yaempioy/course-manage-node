import Koa from 'koa'
import KoaCors from 'kcors'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import logger from 'koa-logger'
import mongoose from 'mongoose'
import session from 'koa-generic-session'
import passport from 'koa-passport'

import config from '../config'
import { errorMiddleware } from '../src/middleware'

const app = new Koa()
const cors = KoaCors({
  allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  maxAge: 3600 * 5
})
app.keys = [config.session]

mongoose.Promise = global.Promise
mongoose.connect(config.database)

app.use(cors)
app.use(convert(logger()))
app.use(bodyParser())
app.use(session())
app.use(errorMiddleware())

require('../config/passport')
app.use(passport.initialize())
app.use(passport.session())

const modules = require('../src/modules')
modules(app)

app.listen(config.port, () => {
  console.log(`Server started on ${config.port}`)
})

export default app
