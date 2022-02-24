const User = require("../../model/user.model");
class UserService {
  async createUser(user_name, password) {
    const res = await User.create({
      user_name,
      password,
    });
    return res;
  }
  async getUserInfo(user_name) {
    const res = await User.findOne({
      where: { user_name },
    });
    return res;
  }
  async updateUser({ id, user_name, password }) {
    const res = await User.update(
      { user_name, password },
      {
        where: { id },
      }
    );
    return res;
  }
}

module.exports = new UserService();
