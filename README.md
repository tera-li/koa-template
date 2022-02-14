## 文件目录

```
koa-template
├─ .env               # 环境配置
├─ .gitignore         # 忽略文件
├─ README.md
├─ src                # 源码
│  ├─ app             # 入口文件
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

## 启动命令

```
npm run start
```
