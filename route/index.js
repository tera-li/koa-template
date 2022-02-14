const Router = require("koa-router");
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "get访问成功";
});
router.post("/", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "post访问成功";
});
module.exports = router;
