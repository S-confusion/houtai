const { createUser } = require('../service/user.service')

class userController {
    async register(ctx, next) {
        const { userName, password } = ctx.request.body
        const res = await createUser({ userName, password })
        console.log(res, 'res');
        ctx.body = ctx.request.body
    }
    async login(ctx, next) {
        ctx.body = ctx.request.body
    }
    async selfFunc(ctx, next) {
        ctx.body = ctx.request.body
    }
}

module.exports = new userController()