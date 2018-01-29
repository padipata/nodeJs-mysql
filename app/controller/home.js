'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      name: 'hello padipata',
      age: '21',
      sex: '男',
    };
  }
}

module.exports = HomeController;
