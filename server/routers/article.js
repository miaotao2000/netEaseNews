const Router = require('koa-router')
const articleModel = require('../lib/articles')
const userModel = require('../lib/user')
const MarkDown = require('markdown-it')
const moment = require('moment')
const router = new Router()
const mdit = new MarkDown()

router.post('/articles', async (ctx, next) => {
  let { md, title } = ctx.request.body
  let userId = 5
  // await articleModel.insertArticle([title,md,userId,moment().format('YYYY-MM-DD HH:mm:ss'),4185])
  await userModel.userAllin(['No.5', '123456', '青橙爱娱乐'])
  ctx.body = mdit.render(md)
})

router.get('/articles', async (ctx, next) => {
  let result = await articleModel.findArticleAndUser(1)
  let news = result.map(info => {
    return {
      text: info.title,
      img: info.md.match(/\!\[\]\(.*\)/g).map(img => img.replace(/\!\[\]\(/g, '').replace(/\)/, '')),
      src: info.nickName,
      avatar: info.avatar,
      follow: info.flonumber,
      html: mdit.render(info.md),
      userId: info.userId,
    }
  })
  ctx.body = {
    news
  }
})
module.exports = router