const Router = require('koa-router')
const moment = require('moment')
const flowModel = require('../lib/flow')
const otherModel = require('../lib/otherflo')
const router = new Router()

router.get('/follow', async (ctx, next) => {
  let { id, page, way } = ctx.query 
  if (way === 'new') {
    let result = await flowModel.findAtcFloByPageTime(page, id)
    let otherRes = await otherModel.findAllotherFlo(id)

    otherRes.forEach(other => {
      let index = result.findIndex(res => res.userID == other.floId)
      if (index != -1) {
        if (!result[index].hasOwnProperty('other')) {
          result[index].other = []
        }
        result[index].other.push(other)
      }
    })

    ctx.body = result.map(info => {
      return {
        content: info.content,
        encourage: info.encourage,
        nickName: info.nickName,
        createTime: info.createTime,
        userId: info.id,
        other: info.other
      }
    })
    return
  }
  let result = await flowModel.findAtcFloByPageEg(page, id)
  let otherRes = await otherModel.findAllotherFlo(id)
  otherRes.forEach(other => {
    let index = result.findIndex(res => res.userID == other.floId)
    if (index != -1) {
      if (!result[index].hasOwnProperty('other')) {
        result[index].other = []
      }
      result[index].other.push(other)
    }
  })
  ctx.body = result.map(info => {
    return {
      content: info.content,
      encourage: info.encourage,
      nickName: info.nickName,
      createTime: info.createTime,
      userId: info.id,
      other: info.other
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