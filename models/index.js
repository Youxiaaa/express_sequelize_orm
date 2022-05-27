const dbConfig = require('../config/dbConfig.js')

const { Sequelize } = require('sequelize')

// sequelize 串接 mysql 環境設定
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliased: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
)

sequelize.authenticate()
.then(() => {
  console.log('connected...')
})
.catch((err) => console.log(err))

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

// 連結 model
db.products = require('./productModel.js')(sequelize, Sequelize)
db.reviews = require('./reviewModel.js')(sequelize, Sequelize)

//! importent
db.sequelize.sync({ force: false })
.then(() => console.log('re-sync dont!'))

module.exports = db