const bcrypt = require("bcryptjs");
const { getUserInfo } = require("../../service/user");
module.exports = {
  // 校验用户名或密码为空
  validatorUserAndPassword: async (ctx, next) => {
    const { user_name, password } = ctx.request.body;
    if (!user_name || !password) {
      ctx.body = {
        code: "1",
        message: "用户名或密码为空",
      };
      return;
    }
    await next();
  },
  // 对密码进行加密存储
  encryptPassword: async (ctx, next) => {
    const { password } = ctx.request.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    ctx.request.body.password = hash;
    await next();
  },
  // 查询用户是否存在
  existUserInfo: async (ctx, next) => {
    const { user_name } = ctx.request.body;
    const res = await getUserInfo(user_name);
    if (res) {
      ctx.body = {
        code: "1",
        message: "用户名已存在",
      };
      return;
    }
    await next();
  },
  // 查询用户名，验证密码是否正确
  verifyPassword: async (ctx, next) => {
    const { user_name, password } = ctx.request.body;
    const res = await getUserInfo(user_name);
    if (!res) {
      ctx.body = {
        code: "1",
        message: "用户名不存在",
      };
      return;
    }
    // 注入用户信息
    ctx.provide = res;
    const verify = bcrypt.compareSync(password, res.dataValues.password); // true
    if (!verify) {
      ctx.body = {
        code: "1",
        message: "密码错误",
      };
      return;
    }
    await next();
  },
};
