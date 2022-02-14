const Koa = require("koa");
const KoaBody = require("koa-body");
const router = require("../route/index");

const app = new Koa(); // 创建koa应用

app.use(KoaBody());
app.use(router.routes());
app.use(
  router.allowedMethods({
    throw: true, // 抛出错误，代替设置响应头状态
    notImplemented: (ctx) => {
      console.log(ctx);
    },
    methodNotAllowed: (ctx) => {
      console.log(ctx);
    },
  })
);
module.exports = app;
