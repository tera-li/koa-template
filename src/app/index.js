const Koa = require("koa");
const KoaBody = require("koa-body");
const path = require("path");
const jwt = require("koa-jwt");
const router = require("../route/index");
const { JWT_SECRET } = require("../config");
const { handleResult } = require("./result");
require("../db");

const app = new Koa(); // 创建koa应用
// users开头的路由不需要jwt,使用和生成token一样的密钥,将自动解析token是否正确以及是否过期
app.use(jwt({ secret: JWT_SECRET }).unless({ path: [/^\/users\/login/] }));

app.use(
  KoaBody({
    multipart: true, // 支持文件上传
    formidable: {
      uploadDir: path.join(__dirname, "../uploads/"),
      maxFieldsSize: 2 * 1024 * 1024, // 最大文件为2兆
      keepExtensions: true,
      multipart: true, // 是否支持 multipart/form-data 的表单
      onFileBegin: (name, file) => {
        // console.log(file);
      },
    },
    onError: (err) => {
      console.log(err);
    },
  })
);
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

// 错误处理
app.on("err", (val) => {
  handleResult({ ...val, code: "1" });
});
app.on("ok", (val) => {
  handleResult({ ...val, code: "0" });
});
module.exports = app;
