const { DataTypes } = require('sequelize')
const db = require('../db')

const User = db.define('user',{
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名'
    },
    password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        comment: '密码'
    },
    auth: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '用户权限: 普通用户(0),admin(1)'
    }
}, {
    // 直接提供表名
    tableName: 'user',
    // 强制表名称等于模型名称
    // freezeTableName: true
})
// 同步，强制
User.sync({force: true})

module.exports = User