const mysql = require('mysql')
const config = require('../config/default')
const { users, articles, articlesFollows, otherFollows } = require('./tables/tables')

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

const createTable = (sql) => {
  return query(sql, [])
}

// 创建表
createTable(users)
createTable(articles)
createTable(otherFollows)
createTable(articlesFollows)

module.exports = {
  query
}
