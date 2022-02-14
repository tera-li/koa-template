class UserService {
  async createUser(name, password) {
    // todo 写入数据库
    return "写入成功" + name + password;
  }
}

module.exports = new UserService();
