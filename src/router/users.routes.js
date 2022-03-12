const Router = require('koa-Router')
// const gRouter = new Router({ prefix: '/users' })
const gRouter = new Router()
const { register, login, selfFunc } = require('../contrroller/user.controller')
gRouter.post('/register', register)
gRouter.get('/login', login)
gRouter.get('/', selfFunc)
module.exports = gRouter 