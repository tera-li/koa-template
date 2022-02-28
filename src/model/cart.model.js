const { DataTypes } = require("sequelize");
const db = require("../db");
const Goods = require("./goods.model");

// 2. 定义Cart模型
const Cart = db.define(
  "cart",
  {
    goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品的id",
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "用户的id",
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "商品的数量",
    },
    selected: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "是否选中",
    },
  },
  {
    tableName: "cart",
  }
);
// 同步，强制
// Cart.sync({ force: true });
Cart.belongsTo(Goods, {
  foreignKey: "goods_id",
  as: "goods_info",
});
module.exports = Cart;
