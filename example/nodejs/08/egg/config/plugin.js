'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  
  // 引入 egg-sequelize 插件
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  }
};
