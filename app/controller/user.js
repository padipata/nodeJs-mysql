const Controller = require('egg').Controller;
class UserController extends Controller {
    async info() {
        const ctx = this.ctx;
        const userId = ctx.params.id;
        const user = await ctx.service.user.find(userId);
        ctx.body = user;
    }
}
module.exports = UserController;