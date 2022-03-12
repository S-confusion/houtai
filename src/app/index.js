const Koa = require('koa')
const app = new Koa()
const koaBody=require('koa-body')
const userRouter = require('../router/users.routes')
app.use(koaBody())
app.use(userRouter.routes())

module.exports =app