'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 通过uid查询数据库记录
  async info() {
    const uid = this.ctx.request.body.uid;
    const user = await this.ctx.service.user.find(uid);
    this.ctx.status = 200;
    const info = {};
    info.status = 200;
    info.message = '查询成功';
    info.data = user;
    this.ctx.body = info;
  }

  // 插入联系人信息
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
    // 插入成功
    if (user === 1) {
      const info = {};
      info.status = 200;
      info.message = '插入数据成功';
      info.data = '';
      this.ctx.body = info;
      this.ctx.status = 200;
    } else {
      const info = {};
      info.status = 400;
      info.message = '插入数据失败';
      info.data = '';
      this.ctx.body = info;
    }
  }
}

module.exports = UserController;
