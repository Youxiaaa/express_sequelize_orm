module.exports = (sequelize, Sequelize) => {

  // 宣告 review table 的欄位
  const Review = sequelize.define('review', {
    rating: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT
    }
  })

  return Review

}