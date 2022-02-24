const { createUser } = require("../../service/user/index");

class UserController {
  // 登陆
  async login(ctx, next) {
    const { user_name } = ctx.request.body;
    // 获取用户信息token
    const { token } = ctx.provide;
    ctx.body = {
      code: "0",
      message: "登陆成功",
      data: { token },
    };
  }
  // 创建用户
  async createUser(ctx, next) {
    const { user_name, password } = ctx.request.body;
    const result = await createUser(user_name, password);
    ctx.body = {
      code: "0",
      message: "创建成功",
      data: result,
    };
  }
  // 修改密码
  async editPassword(ctx, next) {
    ctx.body = {
      code: "0",
      message: "修改密码",
      data: {},
    };
  }
}

module.exports = new UserController();
