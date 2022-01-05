const express = require('express');
const {AllProducts,OneProduct,UpdateProduct,DeleteProduct,CreateProduct} = require('../controllers/products');
const {verifyTokenAndAdmin } = require('./vertifyToken');

const router = express.Router();

router.route('/').get(AllProducts);
router.route('/find/:id').get(OneProduct);
router.route('/' , verifyTokenAndAdmin).post(CreateProduct);
router.route('/:id' , verifyTokenAndAdmin).put(UpdateProduct);
router.route('/:id' , verifyTokenAndAdmin).delete(DeleteProduct);

module.exports = router;
