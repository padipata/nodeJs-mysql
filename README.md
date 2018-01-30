# egg.js 使用模板

## 快速入门

<!-- 在此次添加使用文档 -->

### 由框架约定的目录：

`app/router.js` 用于配置 URL 路由规则，具体参见 Router。

`app/controller/**` 用于解析用户的输入，处理后返回相应的结果，具体参见 Controller

`app/service/**` 用于编写业务逻辑层，可选，建议使用，具体参见 Service

`app/middleware/**` 用于编写中间件，可选，具体参见 Middleware

`app/public/**` 用于放置静态资源，可选，具体参见内置插件 egg-static

`app/extend/**` 用于框架的扩展，可选，具体参见框架扩展。

`config/config.{env}.js` 用于编写配置文件，具体参见配置。

`config/plugin.js` 用于配置需要加载的插件，具体参见插件。

`test/**` 用于单元测试，具体参见单元测试。

`app.js` 和 `agent.js` 用于自定义启动时的初始化工作，可选，具体参见启动自定义。关于`agent.js`的作用参见`Agent`机制。

### 由内置插件约定的目录：

`app/public/**` 用于放置静态资源，可选，具体参见内置插件 egg-static

`app/schedule/**` 用于定时任务，可选，具体参见定时任务。
若需自定义自己的目录规范，参见 Loader API

`app/view/**` 用于放置模板文件，可选，由模板插件约定，具体参见模板渲染。

`app/model/**` 用于放置领域模型，可选，由领域类相关插件约定，如 egg-sequelize


***`如需进一步了解，参见 [egg 文档](https://eggjs.org)`***

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



## 补充


更新时间| 更新内容|更新说明
---|---|---
2018-01-28 | 添加egg-mysql| 需要创建一个名为egg的数据库，以及一个user表
2018-01-30 | 添加egg-validate| 请求接口：http://127.0.0.1:7001/api/v2/topics