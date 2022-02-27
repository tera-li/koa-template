const { createUser, updateUser } = require("../../service/user/index");
const { encrypt } = require("../../units");

class UserController {
  // 登陆
  async login(ctx, next) {
    const { user_name } = ctx.request.body;
    // 获取用户信息token
    const token = ctx.state.token;
    return ctx.app.emit("ok", {
      message: "登陆成功",
      data: { token },
      ctx,
    });
  }
  // 创建用户
  async createUser(ctx, next) {
    const { user_name, password } = ctx.request.body;
    const result = await createUser(user_name, password);
    return ctx.app.emit("ok", {
      message: "创建成功",
      data: result,
      ctx,
    });
  }
  // 修改用户信息
  async editPassword(ctx, next) {
    const { id, user_name, confirmPassword } = ctx.request.body;
    if (!id) {
      return ctx.app.emit("err", {
        message: "用户id不能为空",
        ctx,
      });
    }

    const password = encrypt(confirmPassword);
    await updateUser({ id, user_name, password });

    return ctx.app.emit("ok", {
      message: "修改用户信息成功",
      ctx,
    });
  }
}

module.exports = new UserController();
