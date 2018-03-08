'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async info() {
        const ctx = this.ctx;
        const userId = ctx.params.id;
        const user = await ctx.service.user.find(userId);
        ctx.body = user;
    }

    //插入
    async insert() {
        const userName = this.ctx.request.body.userName;
        const userPhone = this.ctx.request.body.userPhone;
        const userMail = this.ctx.request.body.userMail;
        const userNeed = this.ctx.request.body.userNeed;
        if (!userName || !userPhone) {
            this.ctx.status = 400;
            this.ctx.body = '姓名或者电话不能为空';
            return;
        }
        const user = await this.ctx.service.user.insert(userName, userPhone, userMail, userNeed);
        this.ctx.body = user;
        this.ctx.status = 200;
    }
}

module.exports = UserController;