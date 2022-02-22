const { createUser, loginUser } = require("../../service/user/index");
class UserController {
  async login(ctx, next) {
    const { user_name } = ctx.request.body;
    // const res = await loginUser(user_name, password);
    ctx.body = `${user_name}登陆成功`;
  }
  async createUser(ctx, next) {
    const { user_name, password } = ctx.request.body;
    const result = await createUser(user_name, password);
    ctx.body = result;
  }
}

module.exports = new UserController();
