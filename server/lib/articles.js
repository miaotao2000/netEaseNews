const { query } = require('./mysql')

// 插入文章
const insertArticle = value => {
  let _sql = "insert into articles set title=?,md=?,userId=?,updateTime=?,flonumber=?;"
  return query(_sql, value)
}

// 更新跟帖数
const updateFlo = values => {
  let _sql = `update articles set flonumber=?;`
  return query(_sql, values)
}

// 通过文章的标题查找文章
const findUserByUser = title => {
  let _sql = `select * from articles where title=${title};`
  return query(_sql)
}

// 通过文章id查找文章
const findUserById = id => {
  let _sql = `select * from articles where id=${id};`
  return query(_sql)
}

// 查询所有文章
const findAllPost = () => {
  let _sql = ` select * from articles;`
  return query(_sql)
}

// 查询分页文章
const findArticlesByPage = page => {
  let _sql = ` select * from articles limit ${(page - 1) * 5},5;`
  return query(_sql)
}

// 查询个人分页文章
const findArticlesByUserPage = (userId, page) => {
  let _sql = ` select * from articles where userId="${userId}" order by id desc limit ${(page - 1) * 5},5;`
  return query(_sql)
}

// 更新修改文章
const updateArticles = values => {
  let _sql = `update articles set  title=?,md=?;`
  return query(_sql, values)
}
// 删除文章
const deleteArticle = id => {
  let _sql = `delete from articles where id = ${id}`
  return query(_sql)
}
// 返回文章和作者信息
const findArticleAndUser = page => {
  let _sql = `select * from users,articles where users.id = articles.userId limit ${(page - 1) * 5},5;`
  return query(_sql)
}
module.exports = {
  insertArticle,
  findUserByUser,
  findUserById,
  findAllPost,
  findArticlesByPage,
  findArticlesByUserPage,
  updateArticles,
  deleteArticle,
  updateFlo,
  findArticleAndUser
}