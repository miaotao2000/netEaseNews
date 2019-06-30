const { query } = require('./mysql')

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
  return query(_sql, avatar)
}

// 更新昵称
const updateUserName = (nickName, id) => {
  let _sql = `update users set nickName=? where id=${id}?;`
  return query(_sql, nickName)
}

// 更新关注
const updateUserFlo = (follow, id) => {
  let _sql = `update users set follow=? where id=${id}?;`
  return query(_sql, follow)
}

// 通过Id查找用户
const findUserById = (id) => {
  let _sql = `select * from users where id="${id}";`
  return query(_sql)
}

// 通过名字查找用户
const findUserByName = nickName => {
  let _sql = `select * from users where nickName='${nickName}';`
  return query(_sql)
}

// 通过账号查找用户
const findUserByUser = user => {
  let _sql = `select * from users where user='${user}';`
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
  findUserByName,
  findUserByUser
}