import express, { Request, Response, NextFunction, Router } from "express"
// import { Router } from "express";
import path from "path"

const router = Router()

export const products: any = []

router.get('/add-product', (req: Request, res: Response, next: NextFunction) => {
    res.render('add-product', { title: 'Add Product', path: '/admin/add-product' })
})
router.post('/add-product', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    products.push({ title: req.body.title })

    res.redirect('/shop')
})

export default router
