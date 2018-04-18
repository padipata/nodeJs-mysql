'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    /* 筛选商品 */
    async good() {
        const {ctx} = this;
        const {plant_title} = ctx.request.body;

        const plant = await ctx.service.goods.good(plant_title);

        if (!plant.length) {
            ctx.status = 404;
            return;
        }
        ctx.status = 200;
        ctx.body = plant;
    }

    /* 搜索 */
    async sreach() {
        const {ctx} = this;
        const {plant_name} = ctx.request.body;

        /*
         校验参数规则，不通过或者为空时抛出 422
         格式：ctx.validate(rule, [body])
         如果不传第二个参数会自动校验 `ctx.request.body`
         allowEmpty 默认为false，不可以输入为空
         */
        ctx.validate({
            plant_name: {type: 'string', required: true, allowEmpty: true},
        });

        const plant = await ctx.service.goods.sreach(plant_name);

        if (!plant.length) {
            ctx.status = 404;
            return;
        }
        ctx.status = 200;
        ctx.body = plant;
    }
}

module.exports = UserController;
