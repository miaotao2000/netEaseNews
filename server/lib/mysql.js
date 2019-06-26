const mysql = require('mysql')
const config = require('../config')

const pool  = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE
})

const query = ( sql, values) => {
  return new Promise((rsv,rjt) => {
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
 * 用户表
 *  id  用户id
 *  user  用户账号
 *  pass  用户密码
 *  avatar 用户头像
 *  nickName 用户昵称
 *  message 用户消息
 *  follow 用户关注
 */

const users = 
   `create table if not exists users(
    id INT NOT NULL AUTO_INCREMENT,
    user VARCHAR(100) NOT NULL,
    pass VARCHAR(100) NOT NULL,
    avatar VARCHAR(100) NOT NULL,
    nickName VARCHAR(100) NOT NULL,
    message VARCHAR(100) NOT NULL,
    follow VARCHAR(100) NOT NULL,
    PRIMARY KEY ( id )
    );`

/**
 * 文章表
 *  id  文章id
 *  title 文章标题
 *  content 文章内容
 *  md  markdown语法
 *  userId  作者id
 *  updateTime  更新时间
 *  comments  评论
 *  flonumber 跟帖
 */

const articles = 
   `create table if not exists posts(
    id INT NOT NULL AUTO_INCREMENT,
    title TEXT(0) NOT NULL,
    content TEXT(0) NOT NULL,
    md TEXT(0) NOT NULL,
    userId VARCHAR(40) NOT NULL,
    updateTime VARCHAR(100) NOT NULL,
    comments VARCHAR(200) NOT NULL DEFAULT '0',
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
 */

const comments =
   `create table if not exists comment(
    id INT NOT NULL AUTO_INCREMENT,
    content TEXT(0) NOT NULL,
    createTime VARCHAR(40) NOT NULL,
    articleId VARCHAR(40) NOT NULL,
    userID VARCHAR(40) NOT NULL,
    PRIMARY KEY ( id )
    );`

const createTable = (sql) => {
  return query(sql, [])
}

// 创建表
createTable(users)
createTable(articles)
createTable(comments)

// 注册用户
const insertUser = (value) => {
  let _sql = `insert into users user=?,pass=?,avatar=?,nickName=?,message=?,follow=?;`
  return query(_sql, value)
}

// 删除用户
const deleteUser = (user) => {
  let _sql = `delete from users where user="${user}"`
  return query(_sql)
}

// 查找用户
const findUser = (user) => {
  let _sql = `select * from users where user="${user}"`
  return query(_sql)
}

const insertArticle = function( value ) {
  let _sql = "insert into articles set title=?,content=?,md=?,userId=?,updateTime=?,comments=?,flonumbers=?;"
  return query( _sql, value )
}
// 更新文章评论数
let updateArticleComment = function( value ) {
  let _sql = "update articles set comments=? where id=?"
  return query( _sql, value )
}

// 更新浏览数
let updatePostPv = function( value ) {
  let _sql = "update posts set pv=? where id=?"
  return query( _sql, value )
}

// 发表评论
let insertComment = function( value ) {
  let _sql = "insert into comment set name=?,content=?,moment=?,postid=?,avator=?;"
  return query( _sql, value )
}
// 通过名字查找用户
let findDataByName = function ( name ) {
  let _sql = `select * from users where name="${name}";`
  return query( _sql)
}
// 通过文章的名字查找用户
let findDataByUser = function ( name ) {
  let _sql = `select * from posts where name="${name}";`
  return query( _sql)
}
// 通过文章id查找
let findDataById = function ( id ) {
  let _sql = `select * from posts where id="${id}";`
  return query( _sql)
}
// 通过评论id查找
let findCommentById = function ( id ) {
  let _sql = `select * FROM comment where postid="${id}";`
  return query( _sql)
}

// 查询所有文章
let findAllPost = function () {
  let _sql = ` select * FROM posts;`
  return query( _sql)
}
// 查询分页文章
let findPostByPage = function (page) {
  let _sql = ` select * FROM posts limit ${(page-1)*10},10;`
  return query( _sql)
}
// 查询个人分页文章
let findPostByUserPage = function (name,page) {
  let _sql = ` select * FROM posts where name="${name}" order by id desc limit ${(page-1)*10},10 ;`
  return query( _sql)
}
// 更新修改文章
let updatePost = function(values){
  let _sql = `update posts set  title=?,content=?,md=? where id=?`
  return query(_sql,values)
}
// 删除文章
let deletePost = function(id){
  let _sql = `delete from posts where id = ${id}`
  return query(_sql)
}
// 删除评论
let deleteComment = function(id){
  let _sql = `delete from comment where id=${id}`
  return query(_sql)
}
// 删除所有评论
let deleteAllPostComment = function(id){
  let _sql = `delete from comment where postid=${id}`
  return query(_sql)
}
// 查找评论数
let findCommentLength = function(id){
  let _sql = `select content from comment where postid in (select id from posts where id=${id})`
  return query(_sql)
}

// 滚动无限加载数据
let findPageById = function(page){
  let _sql = `select * from posts limit ${(page-1)*5},5;`
  return query(_sql)
}
// 评论分页
let findCommentByPage = function(page,postId){
  let _sql = `select * from comment where postid=${postId} order by id desc limit ${(page-1)*10},10;`
  return query(_sql)
}
