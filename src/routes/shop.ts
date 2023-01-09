import express from "express"
import path from "path"
import { products } from "./admin"
// import { createProduct, deleteProduct, getProduct, getSingleProduct, updateProduct } from "../controllers/shop"

const router = express.Router()


router.get('/', async (req, res, next) => {
    const produces = await products
    return res.render("shop", { prods: produces, title: 'My Shop', path: '/shop' })
    // res.send("kings")
})
// router.post('/create', createProduct)
// router.get('/getAll', getProduct)
// router.get('/getProduct/:id', getSingleProduct)
// router.put('/updateProduct/:id', updateProduct)
// router.delete('/deleteProduct/:id', deleteProduct)

export default router