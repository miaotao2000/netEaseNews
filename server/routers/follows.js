const Router = require('koa-router')
const moment = require('moment')
const flowModel = require('../lib/flow')
const router = new Router()

router.get('/follow', async (ctx, next) => {
  let { id, page } = ctx.query 
  let result = await flowModel.findAtcFloByPage(page, id)
  ctx.body = result
})

router.post('/follow', async (ctx, next) => {
  let { content, articleId, userId } = ctx.request.body
  // await flowModel.insertFloToArticle([
  //   content,
  //   moment().format('YYYY-MM-DD'),
  //   articleId,
  //   userId,
  //   0
  // ])
  ctx.body = 'success!'
})

module.exports = router