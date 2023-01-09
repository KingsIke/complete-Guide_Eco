import express, { Request, Response, NextFunction, Router } from "express"
// import { Router } from "express";
import path from "path"

const router = Router()

router.get('/add-product', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '../../', 'views', 'add-product.html'))
})
router.post('/add-product', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    res.redirect('/')
})

export default router
