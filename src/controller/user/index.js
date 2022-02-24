const { createUser, updateUser } = require("../../service/user/index");
const { encrypt } = require("../../units");

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
  // 修改用户信息
  async editPassword(ctx, next) {
    const { id, user_name, confirmPassword } = ctx.request.body;
    if (!id) {
      ctx.body = {
        code: "1",
        message: "用户id不能为空",
        data: null,
      };
      return;
    }

    const password = encrypt(confirmPassword);
    await updateUser({ id, user_name, password });

    ctx.body = {
      code: "0",
      message: "修改用户信息成功",
      data: null,
    };
  }
}

module.exports = new UserController();
