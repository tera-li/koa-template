const Koa = require("koa");
const KoaBody = require("koa-body");
const jwt = require("koa-jwt");
const router = require("../route/index");
const { JWT_SECRET } = require("../config");
require("../db");

const app = new Koa(); // 创建koa应用
// users开头的路由不需要jwt,自动解析token是否正确
app.use(jwt({ secret: JWT_SECRET }).unless({ path: [] }));
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
