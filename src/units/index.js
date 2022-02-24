const bcrypt = require("bcryptjs");

module.exports = {
  encrypt: (password) => {
    // 密码和盐生成hash密码进行存储
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  },
  decrypt: (password, hash) => {
    // 输入的密码，数据库密码进行比对
    const verify = bcrypt.compareSync(password, hash); // true
    return verify;
  },
};
