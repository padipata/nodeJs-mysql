'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    // 默认不需要提供构造函数。
    constructor(ctx) {
        super(ctx); //如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
        // 就可以直接通过 this.ctx 获取 ctx 了
        // 还可以直接通过 this.app 获取 app 了
    }

    async find(uid) {
        // 通过用户 id 从数据库获取用户详细信息
        const user = await this.app.mysql.get('user', {uid: uid});

        return {
            name: user.user_name,
            age: user.age,
        };
    }

    async insert(userName, userPhone, userMail, userNeed) {
        // 插入数据库
        const result = await this.app.mysql.insert('infomation', {
            userName: userName,
            userPhone: userPhone,
            userMail: userMail,
            userNeed: userNeed
        });
        console.log(result);
        // 判断插入成功 insertSuccess === 1
        const insertSuccess = result.affectedRows;

        return insertSuccess
    }
}

module.exports = UserService;