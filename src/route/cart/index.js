const Router = require("koa-router");
const CartController = require("../../controller/cart");

const cartRouter = new Router({ prefix: "/cart" });

// 查询购物车列表
cartRouter.post("/getList", CartController.getCart);

module.exports = cartRouter;
