const { getCartInfo } = require("../../service/cart");
class CartController {
  // 查询商品
  async getCart(ctx, next) {
    const { user_id } = ctx.request.body;
    const data = await getCartInfo(user_id);
    return ctx.app.emit("ok", { message: "购物车查询成功", data, ctx });
  }
}

module.exports = new CartController();
