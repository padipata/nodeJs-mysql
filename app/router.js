'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.get('/api/user/:id', controller.api.user.info);
    router.resources('topics', '/api/v2/topics', app.controller.api.topics);
};
