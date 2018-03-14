'use strict';

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

//信息校验
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

//安全校验
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

//API文档
exports.swagger = {
    enable: true,
    package: 'egg-swagger',
};
