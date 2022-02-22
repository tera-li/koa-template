const Router = require("koa-router");
const userController = require("../../controller/user/index");
const {
  validatorCreateUser,
  encryptPassword,
  verifyPassword,
} = require("../../middleware/user");

const userRouter = new Router({ prefix: "/users" });

userRouter.post(
  "/login",
  validatorCreateUser,
  verifyPassword,
  userController.login
);

userRouter.post(
  "/createUser",
  validatorCreateUser,
  encryptPassword,
  userController.createUser
);

module.exports = userRouter;
