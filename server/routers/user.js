const Router = require('koa-router')
const moment = require('moment')
const userModel = require('../lib/user')
const md5 = require('md5')
const router = new Router()

router.get('/user', async (ctx, next) => {
  let { id } = ctx.query
  let userInfo = await userModel.findUserById(id)
  ctx.body = userInfo
})

router.post('/user/register', async (ctx, next) => {
  let { user, pass } = ctx.request.body
  await userModel.insertUser([user, md5(pass)])
  ctx.body = '注册成功!'
})
router.post('/user/login', async (ctx, next) => {
  let { user, pass } = ctx.request.body
  await userModel.insertUser([user, pass])
})

module.exports = router