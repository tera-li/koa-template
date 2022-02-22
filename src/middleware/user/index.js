const bcrypt = require('bcryptjs')
module.exports = {
    validatorCreateUser: async (ctx, next) => {
        const { user_name, password } = ctx.request.body
        if (!user_name || !password) {
            ctx.body = {
                code: '1',
                message: '用户名或密码为空'
            }
            return
        }
        await next()
    },
    encryptPassword: async (ctx, next) => {
        const { password } = ctx.request.body
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        ctx.request.body.password = hash
        await next()
    },
}