module.exports = {
  handleResult: ({ data = null, message = "", code = "0", ctx }) => {
    ctx.body = {
      data,
      message,
      code,
    };
  },
};
