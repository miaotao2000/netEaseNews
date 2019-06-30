const Router = require('koa-router')
const articleModel = require('../lib/articles')
const userModel = require('../lib/user')
const MarkDown = require('markdown-it')
const moment = require('moment')
const router = new Router()
const mdit = new MarkDown()

router.post('/articles', async (ctx, next) => {
  let { md, title } = ctx.request.body
  await articleModel.insertArticle([title,md,userId,moment().format('YYYY-MM-DD HH:mm:ss'),''])
  
  ctx.body = mdit.render(md)
})

router.get('/articles', async (ctx, next) => {
  let { page } = ctx.query
  page = + page + 1
  let result = await articleModel.findArticleAndUser(page)

  let news = result.map(info => {
    return {
      text: info.title,
      img: info.md.match(/\!\[\]\(.*\)/g).map(img => img.replace(/\!\[\]\(/g, '').replace(/\)/, ''))
      .map(img => img.replace(/localhost/g, '192.168.1.104')),
      src: info.nickName,
      avatar: info.avatar,
      follow: info.flonumber,
      html: mdit.render(info.md.replace(/localhost/g, '192.168.1.104')),
      id: info.id,
      userId: info.userId,
      time: info.updateTime
    }
  })
  ctx.body = {
    news
  }
})
module.exports = router