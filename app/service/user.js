'use strict';

const Service = require('egg').Service;
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports = app => {
    class UserService extends app.Service {

        //通过uid查询数据库记录
        async find(uid) {
            // 通过用户 id 从数据库获取用户详细信息
            const user = await this.app.mysql.get('user', {uid: uid});
            //生成token
            const token = jwt.sign({uid: user.uid}, app.config.jwtSecret, {expiresIn: '7d'});
            //添加token到头信息
            this.ctx.set('authorization', 'Bearer ' + token);

            //MD5加密(会存在碰撞)
            const test = crypto.createHash('md5').update(user.user_name).digest('hex');
            //sha1加密
            const test2 = crypto.createHash('sha1').update(user.user_name).digest('hex');

            return {
                token: token,
                name: user.user_name,
                age: user.age,
                test: test,
                test2: test2
            };
        }

        //插入联系人信息
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

    return UserService;
}