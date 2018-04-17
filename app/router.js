'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    // 用户校验中间件
    const {router,controller} = app;
    router.post('/api/goods', controller.api.goods.good);//筛选商品
    router.post('/api/sreach', controller.api.goods.sreach);//搜索
};
