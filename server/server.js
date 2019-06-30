const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const config = require('./config/default.js')
const router = require('koa-router')
const static = require('koa-static-cache')

const app = new Koa()


// 结构上传对象
app.use(bodyParser())


// 配置静态资源加载中间件
app.use(static(path.join(__dirname,'./public'), {
  maxAge: 1 * 24 * 60 * 60
}))

// 3000端口启动服务
app.listen(3000, () =>{
  console.log('server runing successfully!')
})

// 启用路由
app.use(require('./routers/register.js').routes())
app.use(require('./routers/article.js').routes())
app.use(require('./routers/follows.js').routes())
app.use(require('./routers/user.js').routes())