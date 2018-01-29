'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1516418387158_7965';

    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'egg',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '123456',
    };

  return config;
};
