const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const config = require('./config/default.js')
const router = require('koa-router')
const static = require('koa-static')

const app = new Koa()

// session储存数据库配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

// 配置静态资源加载中间件
app.use(static(path.join(__dirname,'./public')))

// 3000端口启动服务
app.listen(3000, () =>{
  console.log('server runing successfully!')
})

// 启用路由
app.use(require('./routers/register.js').routes())