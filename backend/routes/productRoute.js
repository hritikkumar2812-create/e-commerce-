import express from 'express'
import {listProducts, addProduct, removeProduct, singleProduct} from '../controllers/productController.js'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'

const productRoter = express.Router()

productRoter.post('/add',adminAuth,upload.fields([{name:'image1', maxCount:1},{name:'image2', maxCount:1},{name:'image3', maxCount:1},{name:'image4', maxCount:1}]), addProduct)
productRoter.post('/remove',adminAuth, removeProduct)
productRoter.post('/single', singleProduct)
productRoter.get('/list', listProducts)

export default productRoter