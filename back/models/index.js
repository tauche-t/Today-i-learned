const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';  // 개발 모드
const config = require('../config/config')[env] // config 내에 있는 development객체
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./user')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
