const Cart = require("../../model/cart.model");
const Goods = require("../../model/goods.model");

class CartService {
  async getCartInfo(user_id) {
    const res = await Cart.findAndCountAll({
      attributes: ["id", "number", "selected", "user_id"],
      where: { user_id },
      include: {
        model: Goods,
        as: "goods_info",
        attributes: ["id", "goods_name", "goods_price", "goods_img"],
      },
    });
    return res;
  }
}

module.exports = new CartService();
