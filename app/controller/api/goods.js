'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    /* 获取商品列表信息 */
    async good() {
        const plant_name = this.ctx.request.body.plant_name;
        const plant_title = this.ctx.request.body.plant_title;
        const plant = await this.ctx.service.goods.good(plant_name, plant_title);
        this.ctx.status = 200;
        this.ctx.body = plant;
    }
}

module.exports = UserController;
