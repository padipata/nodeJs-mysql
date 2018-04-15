'use strict';

const Service = require('egg').Service;

module.exports = app => {
    class UserService extends app.Service {
        /**
         * 商品列表
         * @param plant_name
         * @param plant_title
         * @return {Promise.<*>}
         */
        async good(plant_name, plant_title) {
            let plant;

            if(!plant_name && !plant_title){
                plant = await this.app.mysql.select('plant');
                return plant;
            }

            plant = await this.app.mysql.select('plant', { // 搜索 plant 表
                where: {plant_name: [plant_name], plant_title: [plant_title]}, // WHERE 条件
                orders: [['pid', 'desc']], // 排序方式
            });

            if (plant) {
                return plant;
            }
            throw new Error('商品不存在'); //抛出异常
        }
    }

    return UserService;
};
