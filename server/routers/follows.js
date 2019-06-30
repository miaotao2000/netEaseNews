const Router = require('koa-router')
const moment = require('moment')
const flowModel = require('../lib/flow')
const router = new Router()

router.get('/follow', async (ctx, next) => {
  let { id, page } = ctx.query 
  let result = await flowModel.findAtcFloByPage(page, id)
  ctx.body = result.map(info => {
    return {
      content: info.content,
      encourage: info.encourage,
      nickName: info.nickName,
      createTime: info.createTime,
      userId: info.id
    }
  })
})

router.post('/follow', async (ctx, next) => {
  let { content, articleId, userId } = ctx.request.body
  let createTime = moment().format('YYYY-MM-DD')
  await flowModel.insertFloToArticle([
    content,
    createTime,
    articleId,
    userId,
    0
  ])
  ctx.body = {
    msg: '跟帖成功',
    newflo: {
      content,
      createTime,
      articleId,
      userId,
      encourage: 0
    }
  }
})

module.exports = router