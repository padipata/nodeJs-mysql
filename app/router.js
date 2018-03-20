'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    // 用户校验中间件
    const auth = app.middlewares.auth();
    const {router, controller} = app;

    router.get('/', controller.home.index);
    // router.post('/api/user', 'api.user.info');
    router.post('/api/insert', 'api.user.insert');
    // 需要检验token
    router.post('/api/user', auth.isLogin, 'api.user.info');

    //swagger-ui
    router.get('/docs', function* () {
        this.body = app.static('./public/swagger');
    });

};
