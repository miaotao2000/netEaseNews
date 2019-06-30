const Router = require('koa-router')
const moment = require('moment')
const userModel = require('../lib/user')
const router = new Router()

router.get('/user', async (ctx, next) => {
  let { id } = ctx.query
  let userInfo = await userModel.findUserById(id)
  ctx.body = userInfo
})

router.post('/user', async (ctx, next) => {
  let { user, pass } = ctx.request.body
  await userModel.insertUser([user, pass])
})