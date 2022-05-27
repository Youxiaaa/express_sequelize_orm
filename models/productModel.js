module.exports = (sequelize, Sequelize) => {
  // 宣告 product table 的欄位
  const Product = sequelize.define('product',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  },
  // 新增軟刪除
  {
    paranoid: true
  }
  )

  return Product

}