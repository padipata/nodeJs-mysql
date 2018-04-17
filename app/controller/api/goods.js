'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    /* 筛选商品 */
    async good() {
        const plant_title = this.ctx.request.body.plant_title;
        const plant = await this.ctx.service.goods.good(plant_title);
        if(!plant.length){
            this.ctx.status = 404;
            this.ctx.body = '商品不存在';
            return;
        }
        this.ctx.status = 200;
        this.ctx.body = plant;
    }

    /* 搜索 */
    async sreach() {
        const plant_name = this.ctx.request.body.plant_name;
        const plant = await this.ctx.service.goods.sreach(plant_name);
        if(!plant.length){
            this.ctx.status = 404;
            this.ctx.body = '商品不存在';
            return;
        }
        this.ctx.status = 200;
        this.ctx.body = plant;
    }
}

module.exports = UserController;
