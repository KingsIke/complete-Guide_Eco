import express from "express"
import path from "path"
// import { createProduct, deleteProduct, getProduct, getSingleProduct, updateProduct } from "../controllers/shop"

const router = express.Router()


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../', 'views', 'shop.html'))
    // res.render("/shop")
    // res.send("kings")
})
// router.post('/create', createProduct)
// router.get('/getAll', getProduct)
// router.get('/getProduct/:id', getSingleProduct)
// router.put('/updateProduct/:id', updateProduct)
// router.delete('/deleteProduct/:id', deleteProduct)

export default router