const Router = require('koa-router')
const userModel = require('../lib/mysql.js')
const MarkDown = require('markdown-it')
const moment = require('moment')
const router = new Router()
const mdit = new MarkDown()

router.post('/articles', async(ctx, next) => {
  let { md, title } = ctx.request.body
  let userId = 2
  await userModel.insertArticle([title,md,userId,moment().format('YYYY-MM-DD HH:mm:ss'),339])
  ctx.body = mdit.render(md)
})

module.exports = router