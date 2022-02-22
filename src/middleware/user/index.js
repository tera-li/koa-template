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
    }
}