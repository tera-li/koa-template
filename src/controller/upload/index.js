class UploadController {
  // 登陆
  async upload(ctx, next) {
    return ctx.app.emit("ok", { message: "文件上传成功", ctx });
  }
}

module.exports = new UploadController();
