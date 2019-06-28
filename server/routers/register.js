const Router = require('koa-router')
const userModel = require('../lib/mysql.js');
const router = new Router();


router.get('/register', async(ctx, next) => {
  // ctx.body = '注册'

  // let user = {
  //   user: 'z943001704',
  //   pass: 'colday123'
  // }
  // await userModel.insertUser([user.user, user.pass])
  // .then(res => {
  //   console.log('注册成功', res)
  //   ctx.body = '注册成功!'
  // })
})

router.post('/register', async(ctx, next) => {
  // let { user, pass } = ctx.request.body;
  // console.log(user, pass)
})
module.exports = router