import express, { Request, Response, NextFunction } from 'express'
import { ProductInstance, ProductAttribute } from "../model/product"


////**==========================Get Products %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
export const getProduct = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const products = await ProductInstance.findAll()
        return res.status(200).json({
            totalProducts: products.length,
            products
        })

    } catch (error) {
        console.log(error)
    }




}