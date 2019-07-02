const Router = require('koa-router')
const moment = require('moment')
const otherflowModel = require('../lib/otherflo')
const router = new Router()

router.post('/otherflo', async(ctx, next) => {
  let { content, userId, articleId, floId } = ctx.request.body
  await otherflowModel.insertFloToFlo([content, moment().format('YYYY-MM-DD'), articleId, userId, floId])
  ctx.body = {
    msg: '回复成功!'
  }
})

module.exports = router