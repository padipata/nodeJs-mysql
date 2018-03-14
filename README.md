# egg.js 使用模板

## 更新信息


更新时间| 更新内容|更新说明
---|---|---
2018-01-28 | 初始化项目 |
2018-01-30 | 添加egg-validate| 用户登录校验
2018-03-08 | 添加egg-mysql| v3.0.0
2018-03-08 | 新建数据库egg | 新建表 user & infomation
2018-03-08 | 配置csrf安全防范|
2018-03-08 | 添加egg-cors| 解决浏览器跨域
2018-03-08 | 添加POST请求| 请求接口：http://127.0.0.1:7001/api/user
2018-03-08 | 添加POST请求| 请求接口：http://127.0.0.1:7001/api/insert
2018-03-09 | 添加jsonwebtoken | 在 config.default.js 中配置 jwtSecret
2018-03-09 | 生成 token | jwt.sign({uid: user.uid}, app.config.jwtSecret, {expiresIn: '7d'});
2018-03-09 | 将token写入头信息 | this.ctx.set('authorization', 'Bearer ' + token);
2018-03-09 | 添加中间件 auth.js | 校验用户 token 信息
2018-03-09 | 添加crypto加密 | crypto.createHash('md5').update(user.user_name).digest('hex');
2018-03-09 | 路由添加用户校验 | app.post('/api/user', auth.isLogin, 'api.user.info');
2018-03-14 | 添加egg-swagger | api 管理文档 (缺少配置)
2018-03-14 | 添加后台管理系统 |

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```


### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod)

