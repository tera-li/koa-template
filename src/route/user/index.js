const Router = require("koa-router");
const userController = require("../../controller/user/index");
const {
  validatorUserAndPassword,
  encryptPassword,
  existUserInfo,
  verifyPassword,
} = require("../../middleware/user");
const { authEncrypt, authDecrypt } = require("../../middleware/auth");

const userRouter = new Router({ prefix: "/users" });

// 登陆
userRouter.post(
  "/login",
  validatorUserAndPassword,
  verifyPassword,
  authEncrypt,
  userController.login
);

// 创建用户
userRouter.post(
  "/create-user",
  validatorUserAndPassword,
  existUserInfo,
  encryptPassword,
  userController.createUser
);

// 修改密码
userRouter.post(
  "/edit-password",
  validatorUserAndPassword,
  verifyPassword,
  authDecrypt,
  userController.editPassword
);

module.exports = userRouter;
