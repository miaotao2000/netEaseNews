const { query, createTable} = require('./mysql')

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
    nickName VARCHAR(100) NULL,
    message VARCHAR(100)  NULL,
    follow VARCHAR(100)  NULL,
    PRIMARY KEY ( id )
    );`

// 创建表
createTable(users)

// 管理员的任性
const userAllin = value => {
  let _sql = `insert into users set user=?,pass=?,nickName=?;`
  return query(_sql, value)
}

// 注册用户
const insertUser = value => {
  let _sql = `insert into users set user=?,pass=?;`
  return query(_sql, value)
}

// 删除用户
const deleteUser = id => {
  let _sql = `delete from users where id=${id};`
  return query(_sql)
}

// 更新头像
const updateUserAvatar = (avatar, id) => {
  let _sql = `update users set avatar=? where id=${id}?;`
  return query(_sql)
}

// 更新昵称
const updateUserName = (nickName, id) => {
  let _sql = `update users set nickName=? where id=${id}?;`
  return query(_sql)
}

// 更新关注
const updateUserFlo = (follow, id) => {
  let _sql = `update users set follow=? where id=${id}?;`
  return query(_sql)
}

// 通过Id查找用户
const findUserById = (id) => {
  let _sql = `select from users where id=${id};`
}

// 通过名字查找用户
const findUserByName = nickName => {
  let _sql = `select * from users where nickName=${nickName};`
  return query(_sql)
}

module.exports = {
  userAllin,
  insertUser,
  deleteUser,
  updateUserAvatar,
  updateUserName,
  updateUserFlo,
  findUserById,
  findUserByName
}