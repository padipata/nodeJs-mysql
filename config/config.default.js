'use strict';

module.exports = appInfo => {
    const config = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1516418387158_7965';

    // add your config here
    config.middleware = [];

    //关闭安全威胁csrf的防范
    config.security = {
        csrf: {
            enable: false,
        },
    };

    //解决跨域
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    return config;
};