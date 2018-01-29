'use strict';

const Controller = require('egg').Controller;

class UserSearch extends Controller {
  async info() {
    console.log(this.ctx, 'ctx');
    this.ctx.body = {
      name: 'this is search',
    };

  }
}

module.exports = UserSearch;
