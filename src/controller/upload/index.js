class UploadController {
  // 登陆
  async upload(ctx, next) {
    ctx.body = {
      code: "0",
      message: "文件上传成功",
      data: null,
    };
  }
}

module.exports = new UploadController();
