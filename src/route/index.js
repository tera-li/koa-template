const Router = require("koa-router");
const user = require("./user/index");
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "get访问成功";
});
router.post("/", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "post访问成功";
});
router.use(user.routes());
module.exports = router;
