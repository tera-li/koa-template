const { getUserInfo } = require("../../service/user");
const { encrypt, decrypt } = require("../../units");

module.exports = {
  // 校验用户名或密码为空
  validatorUserAndPassword: async (ctx, next) => {
    const { user_name, password } = ctx.request.body;
    if (!user_name || !password) {
      return ctx.app.emit("err", { message: "用户名或密码为空", ctx });
    }
    await next();
  },
  // 对密码进行加密存储
  encryptPassword: async (ctx, next) => {
    const { password } = ctx.request.body;
    const hash = encrypt(password);
    ctx.request.body.password = hash;
    await next();
  },
  // 查询用户是否存在
  existUserInfo: async (ctx, next) => {
    const { user_name } = ctx.request.body;
    const res = await getUserInfo(user_name);
    if (res && ctx.request.url === "/users/create-user") {
      return ctx.app.emit("err", { message: "用户名已存在", ctx });
    }
    if (!res && ctx.request.url !== "/users/create-user") {
      return ctx.app.emit("err", { message: "用户名不存在", ctx });
    }
    // 注入用户信息
    ctx.provide = res;
    await next();
  },
  // 查询用户名，验证密码是否正确
  verifyPassword: async (ctx, next) => {
    const { password } = ctx.request.body;
    const res = ctx.provide;
    const verify = decrypt(password, res.password);
    if (!verify) {
      return ctx.app.emit("err", { message: "密码错误", ctx });
    }
    await next();
  },
};
