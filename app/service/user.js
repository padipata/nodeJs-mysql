'use strict';

const Service = require('egg').Service;
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports = app => {
    class UserService extends app.Service {

        // 通过uid查询数据库记录
        async find(uid) {
            // // 生成token
            const token = jwt.sign({uid: user.uid}, app.config.jwtSecret, {expiresIn: '7d'});

            // 添加token到头信息
            this.ctx.set('authorization', 'Bearer ' + token);

            // MD5加密(存在碰撞)
            const test = crypto.createHash('md5').update(user.user_name).digest('hex');

            if (uid) {
                // 通过用户 id 从数据库获取用户详细信息
                const user = await this.app.mysql.get('user', {uid});
                if (user) {
                    return user;
                }
                throw new Error('用户不存在'); //抛出异常

            } else {
                const user = await this.app.mysql.select('user', {
                    // where: { uid: uid }, //筛选条件
                    orders: [['uid', 'acs']], //asc 正序 | desc 倒序
                    limit: 10, //限制10条数据
                    offset: 0 //从第0个数据开始读取
                });
                if (user) {
                    return user;
                }

                throw new Error('用户不存在');
            }
        }

        // 插入联系人信息
        async insert(userName, userPhone, userMail, userNeed) {
            // 插入数据库
            const result = await this.app.mysql.insert('infomation', {
                userName,
                userPhone,
                userMail,
                userNeed,
            });
            console.log(result);
            // 判断插入成功 insertSuccess === 1
            const insertSuccess = result.affectedRows;
            return insertSuccess;
        }
    }

    return UserService;
};
