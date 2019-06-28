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
    avatar VARCHAR(100) NULL,
    nickName VARCHAR(100) DEFAULT '火星网友',
    message VARCHAR(100)  NULL,
    follow VARCHAR(100)  NULL,
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
 *  flonumber 跟帖数
 */

const articles =
   `create table if not exists articles(
    id INT NOT NULL AUTO_INCREMENT,
    title TEXT(0) NOT NULL,
    md TEXT(0) NOT NULL,
    userId VARCHAR(40) NOT NULL,
    updateTime VARCHAR(100) NOT NULL,
    flonumber VARCHAR(40) NOT NULL DEFAULT '0',
    PRIMARY KEY ( id )
    );`

/**
 *  评论表
 *    id  评论id
 *    content 评论内容
 *    createTime  发布时间
 *    articleId 文章id
 *    userId  发布者id
 *    encourage 点赞
 */

const articlesFollows =
    `create table if not exists articlesFollows(
      id INT NOT NULL AUTO_INCREMENT,
      content TEXT(0) NOT NULL,
      createTime VARCHAR(40) NOT NULL,
      articleId VARCHAR(40) NOT NULL,
      userID VARCHAR(40) NOT NULL,
      encourage VARCHAR(40) NOT NULL DEFAULT '0',
      PRIMARY KEY ( id )
      );`

/**
 *  评论评论表
 *    id  评论id
 *    content 评论内容
 *    createTime  发布时间
 *    articleId 文章id
 *    userId  发布者id
 *    floId 跟帖对象id
 *    encourage 点赞
 */

const otherFollows =
   `create table if not exists otherFollows(
    id INT NOT NULL AUTO_INCREMENT,
    content TEXT(0) NOT NULL,
    createTime VARCHAR(40) NOT NULL,
    articleId VARCHAR(40) NOT NULL,
    userID VARCHAR(40) NOT NULL,
    floId VARCHAR(100) NOT NULL DEFAULT '0',
    encourage VARCHAR(40) NOT NULL DEFAULT '0',
    PRIMARY KEY ( id )
    );`

module.exports = {
  users,
  articles,
  articlesFollows,
  otherFollows
}