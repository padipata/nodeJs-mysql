'use strict';

const Service = require('egg').Service;

module.exports = app => {
    class UserService extends app.Service {
        /**
         * 筛选商品
         * @param plant_title
         * @return {Promise.<*>}
         */
        async good(plant_title) {
            const plant = await this.app.mysql.select('plant', { // 搜索 plant 表
                where: {plant_title: [plant_title]}, // WHERE 条件
                orders: [['pid', 'desc']], // 排序方式
            });
            return plant;
        }

        /**
         * 搜索
         * @param plant_name
         * @return {Promise.<*>}
         */
        async sreach(plant_name) {
            const sql = "SELECT * FROM plant WHERE plant_name LIKE '%"+plant_name+"%'";
            const plant = await this.app.mysql.query(sql);
            return plant;
        }
    }

    return UserService;
};