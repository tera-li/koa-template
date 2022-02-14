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
}

module.exports = new UserController();
