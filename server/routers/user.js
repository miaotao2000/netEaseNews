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
  let test = await userModel.findUserByUser(user)
  if (test.length) {
    ctx.body = {
      msg: '已存在此账号!',
      register: false,
      test
    }
    return
  }
  await userModel.insertUser([user, md5(pass)])
  let userInfo = await userModel.findUserByUser(user)
  console.log(userInfo)
  ctx.body = {
    msg: '注册成功!',
    user: {
      id: userInfo[0].id,
      nickName: userInfo[0].nickName,
      token: res[0].pass
    },
    register: true
  }
})
router.post('/user/login', async (ctx, next) => {
  let { user, pass } = ctx.request.body
  let res = await userModel.findUserByUser(user)

  if (!res.length) {
    ctx.body = {
      login: false,
      msg: '没有该用户'
    }
    return
  }

  if (md5(pass) != res[0].pass) {
    ctx.body = {
      login: false,
      msg: '密码错误',
    }
    return
  }
  ctx.body = {
    login: true,
    msg: '登录成功',
    user: {
      id: res[0].id,
      nickName:res[0].nickName,
      token: res[0].pass
    }
  }
})

router.post('/user/login/test', async (ctx, next) => {
  let { token, user } = ctx.request.body
  let res = await userModel.findUserById(user)
  if (res.length && res[0].pass === token) {
    ctx.body = {
      user: {
        id: res[0].id,
        nickName: res[0].nickName
      }
    }
  }
})

module.exports = router