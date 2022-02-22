const Router = require("koa-router");
const userController = require("../../controller/user/index");
const { validatorCreateUser } = require('../../middleware/user')

const userRouter = new Router({ prefix: "/users" });

userRouter.get("/login", userController.login);
userRouter.get("/login/:id", userController.getUser);

userRouter.post("/createUser", validatorCreateUser, userController.createUser);

module.exports = userRouter;
