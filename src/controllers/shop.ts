import express, { Request, Response, NextFunction } from 'express'
// import { title } from 'process';
// import { UUIDV4 } from 'sequelize';
import { ProductInstance, ProductAttribute } from "../model/product"



////**========================== Create Products %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { title, image, price, description } = req.body

    try {
        const Product = await ProductInstance.findOne({ where: { title: title } });
        if (Product) {
            return res.status(400).json({
                message: "Title already exist!",
            });
        }

        if (!Product) {

            // const product = await req.user.create({
            //     title,
            //     price,
            //     image,
            //     description,

            // })

            const product = await ProductInstance.create({
                title,
                price,
                image,
                description,
                UserInstanceId: req.user?.id
            })
            // const product = await req.user.ProductInstance({
            //     title,
            //     price,
            //     image,
            //     description,
            // })
            return res.status(200).json({
                message: "Added successful",
                product

            })
        }
    } catch (error) {
        console.log(error)
    }
}

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

////**==========================Get Single Products %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

export const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    try {
        const products = await ProductInstance.findByPk(id)
        if (!products) {
            return res.status(401).json({
                message: "No  such product"
            })
        }
        return res.status(200).json({

            products
        })

    } catch (error) {
        console.log(error)
    }


}

////**========================== Updating Products %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id

        const { title, price, image, description } = req.body

        const update = await ProductInstance.update(req.body, { where: { id: id } })

        return res.status(200).json({
            message: "You have successfully updated a course",
            Product: update,
        });
    } catch (error) {
        console.log(error)
    }

}



////**========================== Deleting Products %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params

        const deleted = await ProductInstance.destroy({ where: { id: id }, force: true })
        return res.status(201).json({
            Message: "Deleted "
        })
    } catch (error) {
        console.log(error)
    }
}
