'use strict';

module.exports = mysql => {
    const UserSchema = new mysql.Schema({
        uid: { type: int },
        userName: { type: String },
        userPhone: { type: String },
        userMail: { type: String },
        userNeed: { type: String },
    });

    return mysql.model('infomation', UserSchema);
};
