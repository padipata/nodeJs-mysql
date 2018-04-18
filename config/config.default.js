'use strict';

module.exports = appInfo => {
    const config = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1516418387158_7965';

    // 部署环境
    config.domain = 'http://127.0.0.1:7001';

    // token凭证
    config.jwtSecret = 'pengjunhao';

    // 使用koa的中间件
    config.middleware = ['errorHandler', 'notfoundHandler'];

    config.auth = {
        test: 'tst',
    };

    config.errorHandler = {
        match: '/api',
    };

    // 关闭安全威胁csrf的防范
    config.security = {
        csrf: {
            enable: false,
        },
    };

    // 解决跨域
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    return config;
};
