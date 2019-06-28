const mysql = require('mysql')
const config = require('../config/default')

const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
})

const query = (sql, values) => {
  return new Promise((rsv, rjt) => {
    pool.getConnection((err, connection) => {
      if (err) {
        rjt(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            rjt(err)
          } else {
            rsv(rows)
          }
          connection.release()
        })
      }
    })
  })
}

/**
 * 文章表
 *  id  文章id
 *  title 文章标题
 *  content 文章内容
 *  md  markdown语法
 *  userId  作者id
 *  updateTime  更新时间
 *  flonumber 跟帖
 */

const articles =
  `create table if not exists articles(
    id INT NOT NULL AUTO_INCREMENT,
    title TEXT(0) NOT NULL,
    md TEXT(0) NOT NULL,
    userId VARCHAR(40) NOT NULL,
    updateTime VARCHAR(100) NOT NULL,
    flonumbers VARCHAR(40) NOT NULL DEFAULT '0',
    PRIMARY KEY ( id )
    );`

/**
 *  评论表
 *    id  评论id
 *    content 评论内容
 *    createTime  发布时间
 *    articleId 文章id
 *    userId  发布者id
 *    otherFlowIdArr 别人的跟帖id列表
 *    encourage 点赞
 */

const articlesFollows =
  `create table if not exists articlesFollows(
    id INT NOT NULL AUTO_INCREMENT,
    content TEXT(0) NOT NULL,
    createTime VARCHAR(40) NOT NULL,
    articleId VARCHAR(40) NOT NULL,
    userID VARCHAR(40) NOT NULL,
    otherFlowIdArr VARCHAR(100) NOT NULL DEFAULT '0',
    encourage VARCHAR(40) NOT NULL DEFAULT '0',
    PRIMARY KEY ( id )
    );`

/**
 *  评论评论表
 *    id  评论id
 *    content 评论内容
 *    createTime  发布时间
 *    followId 文章id
 *    userId  发布者id
 *    otherFlowIdArr 别人的跟帖id数组
 *    encourage 点赞
 */
const otherFollows =
  `create table if not exists otherFollows(
    id INT NOT NULL AUTO_INCREMENT,
    content TEXT(0) NOT NULL,
    createTime VARCHAR(40) NOT NULL,
    articleId VARCHAR(40) NOT NULL,
    userID VARCHAR(40) NOT NULL,
    otherFlowIdArr VARCHAR(100) NOT NULL DEFAULT '0',
    encourage VARCHAR(40) NOT NULL DEFAULT '0',
    PRIMARY KEY ( id )
    );`

const createTable = (sql) => {
  return query(sql, [])
}

createTable(articles)
createTable(articlesFollows)
createTable(otherFollows)




// 插入文章
const insertArticle = value => {
  let _sql = "insert into articles set title=?,md=?,userId=?,updateTime=?,flonumbers=?;"
  return query(_sql, value)
}
// 更新文章跟帖数
let updateArticleFlo = value => {
  let _sql = "update articles set flonumbers=? where id=?"
  return query(_sql, value)
}
// 插入文章跟帖
const insertFloToArticle = value => {
  let _sql = "insert into articlesFollows set content=?,createTime=?,articleId=?,userId=?;"
  return query(_sql, value)
}
// 更新跟帖的跟帖
const updateOtherFloinFlo = (value, id) => {
  let _sql = `update articlesFollow set otherFlowIdArr=? where id=${id}`
}
// 更新文章跟帖点赞
const updateEgToArticle = (value, id) => {
  let _sql = `update articlesFollows set encourage=? where id = ${id};`
}
// 插入跟帖的跟帖
const insertFloToArticle = value => {
  let _sql = "insert into otherFollows set content=?,createTime=?,followId=?,userId=?;"
  return query(_sql, value)
}
// 更新跟帖的跟帖点赞
const updateEgToFlo = (value, id) => {
  let _sql = `update otherFollows set encourage=? where id = ${id};`
}

// 通过文章的标题查找文章
const findUserByUser = title => {
  let _sql = `select * from articles where title="${title}";`
  return query(_sql)
}
// 通过文章id查找文章
const findUserById = id => {
  let _sql = `select * from articles where id="${id}";`
  return query(_sql)
}
// 通过跟帖id查找文章跟帖
const findArtcleFloById = id => {
  let _sql = `select * from articlesFollows where id="${id}";`
  return query(_sql)
}
// 通过跟帖的跟帖id查找文章跟帖
const findotherFloById = id => {
  let _sql = `select * from otherFollows where id="${id}";`
  return query(_sql)
}

// 查询所有文章
const findAllPost = () => {
  let _sql = ` select * from articles;`
  return query(_sql)
}
// 查询分页文章
const findArticlesByPage = page => {
  let _sql = ` select * FROM articles limit ${(page - 1) * 5},5;`
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
// 删除一篇文章所有评论的跟评论
const deleteAllOtherFlo = articleId => {
  let _sql = `delete from otherFollows where articleId=${articleId}`
  return query(_sql)
}
// 查找文章数
const findCommentLength = id => {
  let _sql = `select content from articlesFollows where articleId in (select id from articles where id=${id})`
  return query(_sql)
}

// 滚动无限加载数据
const findByPage = page => {
  let _sql = `select * from articles limit ${(page - 1) * 5},5;`
  return query(_sql)
}
// 评论分页
const findAtcFloByPage = (page, articleId) => {
  let _sql = `select * from articlesFollows where articleId=${articleId} order by id desc limit ${(page - 1) * 5},5;`
  return query(_sql)
}

module.exports = {
  query,
  createTable
}