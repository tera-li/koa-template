const { createUser } = require("../../service/user/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");

class UserController {
  async login(ctx, next) {
    const { user_name } = ctx.request.body;
    // 获取用户信息
    const { password, ...info } = ctx.provide.dataValues;
    // 生成token
    const token = jwt.sign(info, JWT_SECRET, { expiresIn: "1d" });
    ctx.body = {
      code: "0",
      message: "登陆成功",
      result: { token },
    };
  }
  async createUser(ctx, next) {
    const { user_name, password } = ctx.request.body;
    const result = await createUser(user_name, password);
    ctx.body = result;
  }
}

module.exports = new UserController();
