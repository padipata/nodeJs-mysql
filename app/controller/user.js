const Controller = require('egg').Controller;

class UserController extends Controller {
    async info() {
        this.ctx.body = {
            name: 'this is UserName',
        };
    }
}

module.exports = UserController;