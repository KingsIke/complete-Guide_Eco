import express from "express"
import path from "path"
import { products } from "./admin"
import { getProduct } from "../controllers/products"
import { errorPage } from "../controllers/error"

// import { createProduct, deleteProduct, getProduct, getSingleProduct, updateProduct } from "../controllers/shop"

const router = express.Router()

// router.get('*', errorPage)
router.get('/', getProduct)
// router.post('/create', createProduct)
// router.get('/getAll', getProduct)
// router.get('/getProduct/:id', getSingleProduct)
// router.put('/updateProduct/:id', updateProduct)
// router.delete('/deleteProduct/:id', deleteProduct)

export default router