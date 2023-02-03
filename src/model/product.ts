// import { DataTypes, Model } from 'sequelize'
// import { db } from '../config/config'

// export interface ProductAttribute {
//     [x: string]: any;
//     id: string;
//     title: string;
//     price: number;
//     image: string;
//     description: string;
//     userId: string
// }

// export class ProductInstance extends Model<ProductAttribute>{
//     declare id: string;
//     declare title: string;
//     declare price: number;
//     declare image: string;
//     declare description: string;
//     declare userId: string
// }



// ProductInstance.init({
//     id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: DataTypes.UUIDV4,
//         allowNull: false,
//     },
//     title: {
//         type: DataTypes.STRING,
//         unique: true

//     },
//     price: {
//         type: DataTypes.FLOAT,
//         allowNull: false,
//     },

//     image: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     // userId: {
//     //     type: DataTypes.UUID,
//     //     allowNull: false,
//     // }

// },

//     {
//         sequelize: db,
//         tableName: 'product'
//     })



// const products: any = []

// // export interface Product{

// // }

// module.exports = class Product {
//     private title: string
//     constructor(title: string) {
//         this.title = title
//     }
//     save() {
//         products.push(this)
//     }
//     static fetchAll(): Product[] {
//         return products
//     }
// }

import * as fs from "fs";
import path from "path"
import { products } from "../routes/admin";

class Product {
    private static products: Product[] = []
    private title: string;

    constructor(title: string) {
        this.title = title
    }

    save() {
        // Product.products.push(this)
        const fileSave: any = path.join(path.dirname(process.mainModule?.filename), "data", products.json)
    }

    static fetchAll(): Product[] {
        return Product.products
    }
}

export { Product }


// interface Product {
//     title: string;
//     save(): void;
// }

// let products: Product[] = []

// function createProduct(title: string): Product {
//     const product: Product = {
//         title,
//         save: function () {
//             products.push(this)
//         }
//     }
//     return product
// }

// function fetchAll(): Product[] {
//     return products
// }

// export { createProduct, fetchAll }


