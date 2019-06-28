const { query } = require('./mysql')

// 插入跟帖的跟帖
const insertFloToFlo = value => {
  let _sql = "insert into otherFollows set content=?,createTime=?,articleId=?,userId=?,floId=?;"
  return query(_sql, value)
}
// 更新跟帖的跟帖点赞
const updateEgToFlo = (value, id) => {
  let _sql = `update otherFollows set encourage=? where id = ${id};`
  return query(_sql, value)
}
// 通过跟帖的跟帖id查找文章跟帖
const findotherFloById = id => {
  let _sql = `select * from otherFollows where id=${id};`
  return query(_sql)
}

// 删除一篇文章所有评论的跟评论
const deleteAllOtherFlo = articleId => {
  let _sql = `delete from otherFollows where articleId=${articleId}`
  return query(_sql)
}

// 删除一个跟帖的所有跟帖
const deleteOtherFloFromFLo = floId => {
  let _sql = `delete from otherFollows where floId=${floId}`
  return query(_sql)
}

// 滚动无限加载数据
const findByPage = page => {
  let _sql = `select * from articles limit ${(page - 1) * 5},5;`
  return query(_sql)
}

module.exports = {
  insertFloToFlo,
  updateEgToFlo,
  findotherFloById,
  deleteAllOtherFlo,
  findByPage,
  deleteOtherFloFromFLo
}