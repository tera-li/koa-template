const Router = require("koa-router");
const userController = require("../../controller/user/index");
const userRouter = new Router({ prefix: "/users" });

userRouter.get("/login", userController.login);
userRouter.get("/login/:id", userController.getUser);

userRouter.post("/", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "post访问成功";
});
module.exports = userRouter;
