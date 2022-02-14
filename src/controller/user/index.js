const { createUser } = require("../../service/user/index");
class UserController {
  async login(ctx, next) {
    console.log(ctx.request.params);
    ctx.body = "登陆成功";
  }
  async getUser(ctx, next) {
    console.log(ctx.request.params);
    console.log(ctx.request.query);
    ctx.body = "查询成功";
  }
  async createUser(ctx, next) {
    const { name, password } = ctx.request.body;
    const result = await createUser(name, password);
    ctx.body = result;
  }
}

module.exports = new UserController();
