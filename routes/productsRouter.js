const productController = require('../controllers/productController.js')

const router = require('express').Router()

router.post('/', productController.createProduct)
router.get('/all', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.put('/:id', productController.updateProductById)
router.delete('/:id', productController.deleteProductById)
router.get('/', productController.getProductsByPublished)

module.exports = router