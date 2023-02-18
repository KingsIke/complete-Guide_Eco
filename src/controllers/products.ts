import express, { Request, Response, NextFunction } from "express";
// import { ProductInstance, ProductAttribute } from "../model/product"
import { Product } from "../model/product"
import { products } from "../routes/admin";

export const getAddProduct = async (req: Request, res: Response, next: NextFunction) => {

    res.status(200).render('admin/add-product', { pageTitle: 'Add Product', path: '/admin/add-product' })
};

export const createAddProduct = async (req: Request, res: Response, next: NextFunction) => {
    const product = new Product(req.body.title)
    product.save()
    console.log(req.body)


    res.redirect('/shop/product-list')
}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    // const products = Product.fetchAll()

    // return res.render("shop", { prods: products, pageTitle: 'My Shop', path: '/shop', hasProducts: products.length > 0, activeShop: true, productCSS: true })
    Product.fetchAll(products => {
        res.render("shop/product-list", {
            prods: products, pageTitle: 'My Shop', path: '/shop', hasProducts: products.length > 0, activeShop: true, productCSS: true
        })
    })

}