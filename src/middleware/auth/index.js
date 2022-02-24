const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");

module.exports = {
  authEncrypt: async (ctx, next) => {
    // 获取用户信息
    const { password, ...info } = ctx.provide.dataValues;
    // 生成token
    const token = jwt.sign(info, JWT_SECRET, { expiresIn: "1d" });
    ctx.provide.token = token;
    await next();
  },
  authDecrypt: async (ctx, next) => {
    try {
      // 获取用户信息
      const { authorization } = ctx.request.header;
      // 生成token
      const token = authorization.replace("Bearer ", "");
      const user = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      console.log(error);
      // if (error.name === '')
      ctx.body = {
        code: "1",
        message: "token验证失败",
      };
      return;
    }
    await next();
  },
};
