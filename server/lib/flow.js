  const { query, createTable } = require('./mysql')

// 插入文章跟帖
const insertFloToArticle = value => {
  let _sql = "insert into articlesFollows set content=?,createTime=?,articleId=?,userId=?;"
  return query(_sql, value)
}

// 更新文章跟帖点赞
const updateEgToArticle = (value, id) => {
  let _sql = `update articlesFollows set encourage=? where id = ${id};`
}

// 通过跟帖id查找文章跟帖
const findArtcleFloById = id => {
  let _sql = `select * from articlesFollows where id="${id}";`
  return query(_sql)
}

// 删除评论
const deleteFlo = id => {
  let _sql = `delete from articlesFollows where id=${id}`
  return query(_sql)
}

// 删除一篇文章所有评论
const deleteAllFlo = articleId => {
  let _sql = `delete from articlesFollows where articleId=${articleId}`
  return query(_sql)
}

// 评论分页
const findAtcFloByPage = (page, articleId) => {
  let _sql = `select * from articlesFollows where articleId=${articleId} order by id desc limit ${(page - 1) * 5},5;`
  return query(_sql)
}

module.exports = {
  insertFloToArticle,
  updateEgToArticle,
  findArtcleFloById,
  deleteFlo,
  deleteAllFlo,
  findAtcFloByPage
}