const db = require('../models')

// 建立 Model
const Product = db.products

// 使用 create 建立資料
const createProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  }

  try {
    await Product.create(info)
    res.status(201).json({
      success: true,
      message: '建立商品成功'
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: '建立商品失敗'
    })
  }
}

// 使用 findAll 搜尋全部資料
const getAllProducts = async (req, res) => {
  try {
    // 使用 attributes 取得特定欄位，不使用則是取得全部
    const products = await Product.findAll({
      attributes: ['id', 'title', 'price', 'description', 'published']
    })
    res.status(200).json({
      success: true,
      products
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '取得商品失敗'
    })
  }
}

// 使用 findOne 搜尋特定資料
const getProductById = async (req, res) => {
  try {
    const id = req.params.id
    let product = await Product.findOne({
      attributes: ['title', 'price', 'description'], 
      where: { id, published: true }
    })
    if (!product) product = {}
    res.status(200).json({
      success: true,
      product
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '取得商品失敗'
    })
  }
}

// 使用 update 更新資料
const updateProductById = async (req, res) => {
  try {
    const id = req.params.id
    await Product.update(req.body, { where: { id } })
    res.status(201).json({
      success: true,
      message: '更新資料成功'
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: '更新資料失敗'
    })
  }
}

// 使用 destroy 刪除資料
const deleteProductById = async (req, res) => {
  const id = req.params.id
  try {
    await Product.destroy({ where: { id } })
    res.status(201).json({
      success: true,
      message: '刪除資料成功'
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: '刪除資料失敗'
    })
  }
}

// 使用 findAll 取得有上架的商品
const getProductsByPublished = async (req, res) => {
  try {
    const products = await Product.findAll({ attributes: ['title', 'price', 'description'], where: { published: true } })
    res.status(200).json({
      success: true,
      message: '取得資料成功',
      products
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '取得資料失敗'
    })
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getProductsByPublished
}