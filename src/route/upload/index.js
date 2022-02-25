const Router = require("koa-router");
const UploadController = require("../../controller/upload");

const uploadRouter = new Router({ prefix: "/upload" });

// 上传文件
uploadRouter.post("/file", UploadController.upload);

module.exports = uploadRouter;
