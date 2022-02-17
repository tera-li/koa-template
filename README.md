# Koa-template

<p align="center">
  <a href="https://github.com/hljinjiang/koa-template"><img src="https://img.shields.io/badge/jinjiang-koa-green.svg" alt="Koa template">
  </a>
  <a href="https://github.com//koa-template"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="Koa template">
  </a>
</p>

> koa-template 是一个 nodeJs 后端接口模版，基于 koa 进行搭建。

## 启动命令

```
npm run start
```

## 目录结构

```
koa-template
├─ .env               # 环境配置
├─ .gitignore         # 忽略文件
├─ README.md
├─ src                # 源码
│  ├─ app             # 入口文件
│  ├─ db              # 操作数据库
│  ├─ config          # 全部配置
│  ├─ controller      # 控制层
│  ├─ service         # 业务层
│  ├─ route           # 路由
│  ├─ main.js         # 入口
└─ vue.config.js      # vue-cli 配置
```

## controller 层

```
controller层为控制层，主要处理外部请求。
调用service层，将service层返回的BO/DO转化为DTO/VO并封装成统一返回对象返回给调用方。

1.参数校验
2.调用service层接口实现业务逻辑
3.转换业务／数据对象
4.组装返回对象
5.异常处理
```

## service 层

```
controller层为业务层，主要负责业务模块的逻辑应用设计。

1.封装的具体业务实现方法，来提高业务复用性
2.负责将参与本次业务实现的Dao层中事务进行管理
```

## dao 层

```
dao 层，全称Data Access Object。

1.负责与数据库打交道，具体到对某个表、某个实体的增删改查
2.dao 层定义方法接口，然后在service层实现接口方法，从而达到操作数据库的目的。
```

## sequelize

```
ORM数据库工具：对象关系映射，通过操作对象的方式来操作数据库
1.数据库表映射（对应）一个类
2.数据表中的行对应一个对象
3.数据表中的字段对应对象的属性
4.数据表的操作对应对象的方法
```

## db

```
采用mysql数据库，通过sequelize进行连接
mysql：支持事务
    1.原子性：一个事务的所有操作，要么全部完成，要么全部不完成。在执行过程中发生错误会被回滚（Rollback）
    2.一致性：在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设规则，这包含资料的精确度、串联性以及后续数据库可以自发性地完成预定的工作。
    2.隔离性：数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。
    3.持久性：事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。
```
