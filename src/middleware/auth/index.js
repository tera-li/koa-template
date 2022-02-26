const jwt = require("jsonwebtoken");
const app = require("../../app");
const { JWT_SECRET } = require("../../config");

module.exports = {
  // 生成token
  authEncrypt: async (ctx, next) => {
    // 获取用户信息
    const { password, ...info } = ctx.provide.dataValues;
    // 生成token
    const token = jwt.sign(info, JWT_SECRET, { expiresIn: "1d" });
    ctx.provide.token = token;
    await next();
  },
  // 解密token
  authDecrypt: async (ctx, next) => {
    try {
      // 获取用户信息
      const { authorization } = ctx.request.header;
      // 生成token
      const token = authorization.replace("Bearer ", "");
      const user = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return ctx.app.emit("err", { message: "token验证失败", ctx });
    }
    await next();
  },
};
